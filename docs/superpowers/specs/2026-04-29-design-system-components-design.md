# Design System Components — Full Implementation

**Date:** 2026-04-29
**Status:** Approved

## Goal

Port the Ochre design system into the codebase as production TypeScript components with Tailwind v4 utility classes, rewrite `typography.tsx` to match Ochre's type scale, and add Storybook stories for every component.

## Scope

Option B — full parallel implementation in one pass:

1. Ochre tokens added to `globals.css` inside `@theme`
2. `typography.tsx` rewritten against Ochre tokens
3. Eight UI kit components created in `components/`
4. Storybook stories for all components

## Token Layer (`globals.css` — `@theme` block)

`Fira Code` added via `next/font/google` in `layout.tsx`, exposed as `--font-mono` CSS variable, registered in `@theme` alongside existing `--font-sans` / `--font-serif`.

All Ochre tokens land inside `@theme` so Tailwind generates utilities:

**Colors**
- `--color-ochre: #913832` → `text-ochre`, `bg-ochre`, `border-ochre`
- `--color-ochre-tint: #b85b53`
- `--color-ochre-deep: #6a221d`
- `--color-paper: #FDFCFA`
- `--color-ink: #191512`
- `--color-ink-2: #3A332D`
- `--color-ink-3: #6F665E`
- `--color-ink-4: #9A8F84`
- `--color-rule: #ECE7DD` → `border-rule`
- `--color-rule-strong: #D4CCBC`
- `--color-bg-sunken: #F6F4EF` → `bg-sunken`
- `--color-bg-raised: #FFFFFF`
- `--color-status-live: #4F6B3E`
- `--color-status-draft: #913832`
- `--color-status-archive: #8A6A1F`

**Fonts**
- `--font-mono: "Fira Code", ...` (Fira Code loaded via `next/font/google`, weight 400/500)

**Type scale (1.25 major-third)**
- `--text-12` through `--text-80` matching Ochre's `--t-*` ramp

**Spacing (4px base)**
- `--spacing-1` (4px) through `--spacing-10` (128px)

**Radii**
- `--radius-flat: 0`, `--radius-xs: 2px`, `--radius-sm: 4px`, `--radius-md: 8px`

**Shadows**
- `--shadow-1: 0 1px 2px rgba(25,21,18,0.08)`
- `--shadow-2: 0 4px 16px rgba(25,21,18,0.12)`

**Motion**
- `--ease: cubic-bezier(0.4,0,0.2,1)`
- `--ease-out: cubic-bezier(0.2,0.6,0.2,1)`
- `--duration-fast: 120ms`, `--duration-base: 200ms`, `--duration-slow: 320ms`

**Dark mode** handled via `[data-theme="ink"]` CSS block outside `@theme` (same pattern as current `dark:` usage but explicit attribute).

## Typography Rewrite (`typography.tsx`)

Same 9 exports, same `{ children: React.ReactNode }` prop signature. `mdx-components.tsx` unchanged.

| Component | Key classes |
|---|---|
| `H1` | `font-sans font-semibold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight` |
| `H2` | `font-sans font-semibold text-[1.875rem] leading-[1.2] tracking-tight mb-6` |
| `H3` | `font-sans font-semibold text-[1.25rem] leading-[1.2] mb-4` |
| `H4` | `font-sans font-medium text-base leading-[1.4] mb-3` |
| `H5` | `font-sans font-medium text-[0.9375rem] leading-[1.4] mb-2` |
| `H6` | `font-mono text-[0.75rem] leading-[1.4] tracking-[0.04em] uppercase text-ink-3 mb-2` |
| `P` | `font-serif text-base leading-[1.6] mb-4` |
| `Ul` | `font-serif text-base leading-[1.6] list-disc list-inside mb-4` |
| `Li` | `font-serif` |
| `Blockquote` | `border-l-2 border-ochre pl-4 lg:pl-6 mb-6 animate-rainbow-color timeline-scroll-y-nearest` |

## UI Kit Components (`components/`)

All components are `"use client"` only when they require interactivity (e.g. `Nav` theme toggle). Otherwise server components.

### `components/nav.tsx` — `Nav`
Props: `active?: string`, `onNav?: (page: string) => void`, `theme?: "paper" | "ink"`, `onTheme?: () => void`

Sticky top bar. Backdrop blur via `backdrop-blur-[10px] saturate-150`. Border bottom `border-b border-rule`. Brand mark in `font-sans font-semibold tracking-tight` with ochre dot. Nav links in `font-sans text-sm text-ink-2`. Active link `text-ochre`. Theme toggle button `font-mono text-xs border border-rule rounded-sm px-2.5 py-1`.

### `components/hero.tsx` — `Hero`
Props: `name: string`, `blurb: string`, `onEssays?: () => void`, `onProjects?: () => void`

Grid background section. Eyebrow in `font-mono text-xs tracking-[0.04em] uppercase text-ink-3`. Hero title `font-sans font-semibold text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-[-0.025em] max-w-[14ch]` with ochre period. Sub in `font-serif text-lg leading-[1.55] text-ink-2`. Two buttons (primary + secondary). Meta row in `font-mono text-xs text-ink-3 border-t border-rule`.

### `components/button.tsx` — `Button`
Props: `variant: "primary" | "secondary" | "ghost"`, `children`, `onClick?`

Extracted from Hero/Nav since it's reused. `rounded-sm px-4 py-2 text-sm font-medium font-sans transition-all duration-fast`. Primary: `bg-ochre text-paper hover:bg-ochre-deep`. Secondary: `bg-transparent border border-rule hover:border-rule-strong hover:bg-sunken`. Ghost: `bg-transparent hover:bg-sunken`. Active: `translate-y-px`.

### `components/project-card.tsx` — `ProjectCard`
Props: `name: string`, `status: "live" | "draft" | "archive"`, `version: string`, `blurb: string`, `tags: string[]`, `onClick?: () => void`

Bordered card `border border-rule rounded-md p-5 bg-bg-raised hover:border-rule-strong transition-colors`. Badge `font-mono text-[0.625rem] tracking-[0.04em] uppercase px-1.5 py-0.5 border rounded-xs`. Status colors: live=`text-status-live border-status-live`, draft=`text-status-draft border-status-draft`, archive=`text-status-archive border-status-archive`. Title `font-sans font-semibold text-[1.375rem] tracking-[-0.01em]`. Body `font-serif text-[0.9375rem] leading-[1.55] text-ink-2`. Tags are `Tag` components.

### `components/tag.tsx` — `Tag`
Props: `label: string`, `active?: boolean`, `solid?: boolean`

`font-mono text-[0.6875rem] font-medium border rounded-xs px-2 py-0.5 transition-all`. Default: `border-rule text-ink-2`. Active: `text-ochre border-ochre`. Solid: `bg-ochre border-ochre text-paper`.

### `components/essay-row.tsx` — `EssayRow`
Props: `date: string`, `title: string`, `tags?: string[]`, `readingTime?: string`, `onClick?: () => void`

Three-column grid `grid grid-cols-[110px_1fr_auto]`. Date `font-mono text-xs text-ink-3`. Title `font-sans text-base font-medium`. Arrow `text-ochre opacity-0 group-hover:opacity-100 transition-opacity`. Row hover `hover:bg-sunken`. Border bottom `border-b border-rule`.

### `components/now-list.tsx` — `NowList`
Props: `items: Array<{ label: string; value: string; note?: string }>`

Definition list. Each row `grid grid-cols-[160px_1fr] border-b border-rule py-3`. Label `font-mono text-[0.6875rem] tracking-[0.04em] uppercase text-ink-3`. Value `font-serif text-base`. Note `text-ink-3 italic ml-1.5`.

### `components/code-block.tsx` — `CodeBlock`
Props: `file?: string`, `lang?: string`, `lines?: string`, `children: React.ReactNode`

Figure with figcaption. Caption `font-mono text-[0.6875rem] text-ink-3 tracking-[0.02em] mb-1`. File name `text-ochre`. Pre `font-mono text-[0.8125rem] leading-[1.65] bg-sunken border border-rule rounded-sm px-4 py-3.5 overflow-x-auto`.

### `components/footnote.tsx` — `Footnote`
Props: `n: number`, `children: React.ReactNode`

Inline span. Superscript `font-mono text-[0.75rem]` in ochre. Body shown on hover via `group` pattern or just inline.

### `components/footer.tsx` — `Footer`
Props: `name: string`, `year?: number`

`border-t border-rule px-8 py-6 font-mono text-xs text-ink-3 flex gap-2 flex-wrap`. Links `text-ink-2`.

## Storybook Stories

One `*.stories.tsx` per source file, co-located:

| Source | Story file | Stories |
|---|---|---|
| `typography.tsx` | `typography.stories.tsx` (update existing) | One per export + `TypographyScale` overview |
| `components/nav.tsx` | `components/nav.stories.tsx` | `Default`, `ActiveEssays` |
| `components/hero.tsx` | `components/hero.stories.tsx` | `Default` |
| `components/button.tsx` | `components/button.stories.tsx` | `Primary`, `Secondary`, `Ghost` |
| `components/project-card.tsx` | `components/project-card.stories.tsx` | `Live`, `Draft`, `Archive` |
| `components/tag.tsx` | `components/tag.stories.tsx` | `Default`, `Active`, `Solid` |
| `components/essay-row.tsx` | `components/essay-row.stories.tsx` | `Default`, `WithTags` |
| `components/now-list.tsx` | `components/now-list.stories.tsx` | `Default` |
| `components/code-block.tsx` | `components/code-block.stories.tsx` | `WithCaption`, `Minimal` |
| `components/footnote.tsx` | `components/footnote.stories.tsx` | `Default` |
| `components/footer.tsx` | `components/footer.stories.tsx` | `Default` |

All stories use realistic Ochre-voice content (lowercase, dry, specific). CSF3 format with named story exports.

## File Tree (new files)

```
components/
  nav.tsx
  nav.stories.tsx
  hero.tsx
  hero.stories.tsx
  button.tsx
  button.stories.tsx
  project-card.tsx
  project-card.stories.tsx
  tag.tsx
  tag.stories.tsx
  essay-row.tsx
  essay-row.stories.tsx
  now-list.tsx
  now-list.stories.tsx
  code-block.tsx
  code-block.stories.tsx
  footnote.tsx
  footnote.stories.tsx
  footer.tsx
  footer.stories.tsx
```

## What Does Not Change

- `mdx-components.tsx` — no changes
- `.storybook/main.ts` and `.storybook/preview.ts` — no changes
- `next.config.mjs` — no changes
- Existing page files — no changes
- `app/timeline.module.css` — no changes
- `app/spen-events/` — out of scope

## Success Criteria

- `npm run storybook` shows all components rendering with correct Ochre tokens
- `npm run build` passes with no TypeScript errors
- `npm run lint` passes
- `typography.tsx` exports are backward-compatible (same names, same prop shapes)
