---
name: create-component
description: Use when creating, adding, or building a new UI component, card, button, section, or any reusable piece of UI in this Next.js project.
---

# Create Component

## Overview

A strict checklist for generating well-structured components in this Next.js 16 / React 19 / Tailwind v4 codebase. Every new component must have a co-located Storybook story.

## Compound Component Pattern (Required)

**Every component MUST be structured as a namespace compound component.** This is not optional.

The pattern: a root namespace object whose properties are the sub-components. Consumers compose them explicitly — no hidden children, no magic prop drilling.

```tsx
// MyCard.tsx

function Root({ children }: { children: React.ReactNode }) {
  return <div className="...">{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className="...">{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="...">{children}</div>;
}

export const Card = { Root, Header, Body };
```

Usage:

```tsx
<Card.Root>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card.Root>
```

**Rules:**

- Always export a namespace object (`export const Foo = { Root, Header, Body, ... }`), never a single monolithic component.
- **State ownership:** state that belongs to the caller (e.g. active item, selected theme) lives in the caller and is passed as explicit props. Only use React context when sub-components genuinely need to share internal state that the caller should not manage.
- **Semantic HTML:** use the element that matches the role. Nav links are `<Link>` (Next.js) or `<a>`, not `<button>`. Actions that don't navigate are `<button>`. Headings are `<h*>`. Never use a `<div>` where a semantic element fits.
- **Spread rest props** on shared primitives so callers can pass ARIA attributes, `data-*`, and event handlers without needing a wrapper. Pattern: `type FooProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant: "..." }`.
- **Accessibility is required:** add `aria-current="page"` on active nav links, `aria-pressed` on toggle buttons, `aria-label` on `<nav>` landmarks, `type="button"` on all non-submit buttons.
- Skip `forwardRef` unless the consumer absolutely needs a DOM ref (e.g. for focus management).
- Omit context entirely for purely presentational sub-components — explicit props are simpler and easier to test.

## Checklist

1. **Consult the design system first** — invoke the `design-system` skill to get colors, spacing, and type scale before writing any code.

2. **Determine placement** — components live co-located with the route or feature that owns them; shared primitives go in `components/`.

3. **Use `@/` path alias** — always import via `@/`, never relative paths.

4. **Structure as a compound component** — follow the Radix-style pattern above. Every component, no exceptions.

5. **Write the component** — TypeScript, `"use client"` only if interactivity requires it. Use Tailwind v4 utility classes; no ad-hoc inline styles.

6. **Write the story** — create `ComponentName.stories.tsx` next to the component file. Use CSF3 format with a single `default export` (Meta) and named story exports per variant. Show the compound API in use. Import global styles via the existing `.storybook/preview.ts` (already wired).

7. **Format** — run `npm run format` to auto-sort Tailwind classes.

8. **Lint** — run `npm run lint` and fix any errors before marking done.

## Story Template

For controlled compound components (state owned by the caller), use `render` functions — not `args`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./MyComponent";

const meta: Meta = {
  title: "Components/MyComponent",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <MyComponent.Root>
      <MyComponent.Header>Title</MyComponent.Header>
      <MyComponent.Body>Content</MyComponent.Body>
    </MyComponent.Root>
  ),
};
```

Use `args`-based stories only when the component has a single entry point with straightforward props (e.g. `<Button variant="primary">`). For compound components, `render` is always clearer.

Route `href` values must use leading slashes: `/essays`, not `essays`.

## Common Mistakes

| Mistake                                               | Fix                                                                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Exporting a single monolithic component               | Always use the compound pattern: `export const Foo = { Root, Header, Body }`                                                               |
| Prop-drilling children config via a big props object  | Break it into sub-components instead                                                                                                       |
| Using context for state the caller should own         | Caller-owned state (active item, selected theme) goes in explicit props, not context                                                       |
| Using context everywhere by default                   | Only add context when sub-components genuinely share internal state                                                                        |
| `<button>` for nav links                              | Nav links navigate — use `<Link href="...">` from `next/link`                                                                              |
| `<a>` or `<Link>` for actions that don't navigate     | Actions are `<button type="button">`, not anchors                                                                                          |
| Shared primitives with no rest props spread           | Extend `React.ButtonHTMLAttributes<HTMLButtonElement>` (or equivalent) and spread `...rest` so ARIA attrs pass through                     |
| Missing accessibility attributes                      | `aria-current="page"` on active links, `aria-pressed` on toggles, `aria-label` on `<nav>` landmarks, `type="button"` on non-submit buttons |
| Skipping the story                                    | Every component needs a `.stories.tsx` — no exceptions                                                                                     |
| Story uses `args` for a controlled compound component | Use `render` functions for compound components; `args` only for simple single-entry-point components                                       |
| Story hrefs without leading slash                     | Next.js routes need `/essays`, not `essays`                                                                                                |
| Relative imports (`../../`)                           | Use `@/` alias                                                                                                                             |
| Adding `"use client"` by default                      | Only add it when the component uses hooks or browser APIs                                                                                  |
| Raw `<h1>`, `<p>` with ad-hoc classes                 | Check with design-system skill first for correct type scale                                                                                |
| Forgetting `npm run format`                           | Tailwind class order matters for readability and diffs                                                                                     |
