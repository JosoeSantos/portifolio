# Hero Compound Component Design

## Context

The current `Hero` component (`components/hero.tsx`) is a 51-line monolith with a hardcoded grid background, eyebrow label, large title, blurb, action buttons, and footer strip — all in one flat component. This makes it impossible to reorder, replace, or omit individual pieces without editing internals.

The goal is to refactor it into a compound component using the namespace pattern — matching the existing `Nav` pattern — so callers have full compositional control while the implementation stays in one file.

## Approach

**Namespace pattern**, identical to `Nav`. All sub-components are defined as named functions in `components/hero.tsx` and assembled into a single exported object:

```ts
export const Hero = { Root, Background, Title, Subtitle, Content }
```

No React context. No inter-component state. Each piece is stateless and independently usable in Storybook.

## Sub-components

| Sub-component    | Element    | Props      | Responsibility                                                    |
| ---------------- | ---------- | ---------- | ----------------------------------------------------------------- |
| `Hero.Root`      | `<section>`| `children` | Shell — `relative`, `border-b border-rule`, `px-8 py-24`         |
| `Hero.Background`| `<div>`    | —          | Absolute grid pattern, `inset-0 pointer-events-none z-0`          |
| `Hero.Title`     | `<h1>`     | `children` | Large display heading + ochre dot; owns font, size clamp, spacing |
| `Hero.Subtitle`  | `<p>`      | `children` | Serif blurb; owns color, size, leading, max-width, margins        |
| `Hero.Content`   | `<div>`    | `children` | Passthrough slot, `relative z-10` to clear background layer       |

### Typography

**`Hero.Title`**
```
font-sans text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-semibold tracking-[-0.025em]
```
Renders the ochre dot internally: `{children}<span className="text-ochre">.</span>`. Callers pass only the name string.

**`Hero.Subtitle`**
```
text-ink-2 mt-4 mb-10 max-w-[52ch] font-serif text-lg leading-[1.55]
```

**`Hero.Content`**
```
relative z-10
```
No padding or margin — callers own internal spacing.

**`Hero.Root`**
```
relative border-b border-rule px-8 py-24
```

**`Hero.Background`** — `absolute inset-0 pointer-events-none z-0`, uses the same inline `backgroundImage` style as today:
```ts
backgroundImage:
  "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
backgroundSize: "40px 40px",
```

## Canonical usage

```tsx
<Hero.Root>
  <Hero.Background />
  <Hero.Content>
    <p className="text-ink-3 mb-6 font-mono text-xs tracking-[0.04em] uppercase">
      engineer &amp; writer
    </p>
    <Hero.Title>josoe</Hero.Title>
    <Hero.Subtitle>
      i build things for the web and write about what i learn along the way.
      currently focused on design systems and slow software.
    </Hero.Subtitle>
    <div className="mb-16 flex gap-3">
      <button onClick={onEssays} className="bg-ochre text-paper hover:bg-ochre-deep cursor-pointer rounded-sm border-none px-4 py-2 font-sans text-sm font-medium transition-colors">
        read essays
      </button>
      <button onClick={onProjects} className="border-rule hover:border-rule-strong hover:bg-bg-sunken cursor-pointer rounded-sm border bg-transparent px-4 py-2 font-sans text-sm font-medium transition-colors">
        see projects
      </button>
    </div>
    <div className="text-ink-3 border-rule flex gap-6 border-t pt-6 font-mono text-xs">
      <span>based in lisbon</span>
      <span>open to work</span>
      <span>2025</span>
    </div>
  </Hero.Content>
</Hero.Root>
```

## Storybook stories (`hero.stories.tsx`)

| Story       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `Default`   | Full composed hero with all pieces                       |
| `TitleOnly` | `Hero.Root` + `Hero.Background` + `Hero.Title` alone    |
| `NoContent` | Root + Background + Title + Subtitle, no content slot    |

## Files changed

| File                          | Change                                                    |
| ----------------------------- | --------------------------------------------------------- |
| `components/hero.tsx`         | Rewrite — compound sub-components, same Tailwind classes  |
| `components/hero.stories.tsx` | Rewrite — per-sub-component and composed stories          |
