# Home page rewrite

**Date:** 2026-05-01  
**Branch:** feature/2025-q2-update  
**Status:** approved

---

## Goal

Replace the current placeholder `app/home-page.tsx` with a real home page that matches the UI kit's `HomeScreen` layout, using the existing design system components. Scope: Hero + recent writing section only. Projects section is explicitly excluded.

---

## Architecture

`app/home-page.tsx` is converted from a `"use client"` placeholder to a server component. It holds a static `posts` array and renders two regions:

1. **Hero** — uses the existing `components/hero.tsx` compound-style component.
2. **Recent writing section** — a `<section>` with a section header and a list of `EssayRow` components.

`app/page.tsx` stays unchanged — it already delegates to `<HomePage />`.

---

## Components used

| Component | Source | Notes |
|---|---|---|
| `Hero` | `components/hero.tsx` | Existing, no changes needed |
| `EssayRow` | `components/essay-row.tsx` | Existing, no changes needed |
| `Link` | `next/link` | Wraps each `EssayRow` for navigation |

No new components are created. No existing components are modified.

---

## Hero props

```ts
<Hero
  name="Josoe Santos"
  blurb="I build complex, working software. writing about frontend, observability, and whatever else."
  onEssays={/* router.push('/posts') via Link wrapper or inline handler */}
/>
```

`onProjects` is omitted — the `Hero` component already makes it optional. The "read essays" button navigates to `/posts`. The "see projects" button is not rendered (prop absent).

Since `Hero` uses `onClick` handlers rather than `href`, the essays button will use a client-side `useRouter().push('/posts')`. This means `home-page.tsx` must remain `"use client"` — or the Hero CTA can be handled by a thin wrapper. See **Implementation note** below.

---

## Recent writing section

### Layout

```
<section> px-8 py-12 border-b border-rule
  <header> flex justify-between items-baseline mb-6
    <h2> font-sans text-xl font-semibold tracking-[-0.01em]  →  "recent writing"
    <Link href="/posts"> font-mono text-xs text-ink-3 hover:text-ink  →  "all posts →"
  <div> ds-rows pattern: divide-y divide-rule
    <Link href="/posts/[slug]"> block (no underline)
      <EssayRow date title tags readingTime />
    ...
```

### Static posts array

Defined at the top of `home-page.tsx`. Types are inline (no separate file needed at this scale).

```ts
type Post = {
  slug: string;
  date: string;
  title: string;
  tags: string[];
  readingTime: string;
};

const posts: Post[] = [
  {
    slug: "the-journey-towards-good-observability",
    date: "2026-01-01",
    title: "the journey towards good observability",
    tags: ["observability", "frontend"],
    readingTime: "5 min",
  },
  {
    slug: "my-blog-updates",
    date: "2021-01-01",
    title: "my blog updates",
    tags: ["meta"],
    readingTime: "2 min",
  },
];
```

Dates are approximate — correct them when frontmatter is added to the MDX files.

### EssayRow wiring

Each row is wrapped in a `<Link>` with `href={/posts/${post.slug}}` and `className="block"`. `EssayRow` receives `date`, `title`, `tags`, `readingTime`. The `onClick` prop is not used (navigation is handled by the `Link` wrapper).

---

## Implementation note: client vs server

`Hero` takes `onEssays` as an `() => void` callback. This forces a client boundary. Two options:

- **Keep `"use client"`** on `home-page.tsx` and use `useRouter` for the essays button. Simple, no structural change.
- **Extract a thin `HeroCta` client wrapper** that owns the router calls, keeping `home-page.tsx` as a server component.

For this scope, keep `"use client"` on `home-page.tsx`. The page has no data fetching that benefits from server rendering, and the complexity of a client/server split isn't warranted.

---

## Styling conventions

- Section padding: `px-8 py-12` (matches existing section rhythm in the codebase).
- Section header: `flex items-baseline justify-between mb-6`.
- `<h2>`: `font-sans text-xl font-semibold tracking-[-0.01em]` — lowercase, no title case.
- "all posts →" link: `font-mono text-xs text-ink-3 hover:text-ink transition-colors`.
- Row list wrapper: `divide-y divide-rule` on a `<div>` (mirrors `ds-rows` pattern).
- `<Link>` wrapping `EssayRow`: `block` display, no underline (`no-underline` or default anchor reset already in globals).

---

## Out of scope

- Projects section.
- Dynamic MDX frontmatter parsing.
- Pagination or filtering on the home page.
- Changes to `EssayRow`, `Hero`, or any other component.
- Changes to `app/page.tsx`.
