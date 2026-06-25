# Handoff: Long-Form Blog Post — "Documented" Layout (Variation C)

## Overview

A long-form blog post / essay reading view for **josoe**, a personal site about web/frontend craft. This is the "documented" layout — an architectural / spec-page treatment with an oversized monospace page number, a colophon-style spec table for metadata, and **marginalia footnotes** rendered in a right-hand margin column beside the prose (instead of pooled at the bottom of the article).

The design is built on the **Ochre design system**: warm paper/ink palette, ochre red accent (`#913832`), Newsreader serif for prose, Nunito Sans for display, JetBrains Mono for metadata, hairline rules over heavy borders, near-flat radii, almost no shadow.

## About the Design Files

The files in this bundle are **design references created in HTML** — a static prototype showing the intended look and structure, not production code to copy directly.

The task is to **recreate this HTML design in the target codebase's existing environment** (React/Next.js/Astro/Vue/etc.) using its established patterns, routing, and content pipeline. If no environment exists yet, pick a framework that fits a content-first personal site (Astro, Eleventy, and Next.js with MDX are all reasonable). The HTML is a single self-contained Babel-in-the-browser prototype — production should compile/bundle it properly and likely source content from MDX or a CMS rather than hardcoding it.

## Fidelity

**High-fidelity (hifi)** — pixel-perfect mock with final colors, typography, spacing, interactions. Recreate the visuals as closely as possible using the codebase's existing libraries; Ochre tokens (below) are the source of truth for values.

## Screens / Views

### Single screen — Essay reading view

**Purpose:** Reader lands here from an essay index or external link, reads a 1,500–2,500-word essay with code blocks and footnotes-as-marginalia, then either pages to prev/next or returns home.

**Page structure (top to bottom):**

1. **Sticky top stripe** — a single mono breadcrumb line at the very top of the viewport.
2. **Hero / colophon header** — page number + title + lead + spec table.
3. **Body** — sectioned prose with marginalia.
4. **Pager** — prev / next essay cards.
5. **Footer** — minimal mono colophon.

#### 1. Sticky top stripe (`.vC-stripe`)

- Full-bleed bar, sticky to top of viewport, `z-index: 50`.
- Background: `rgba(253, 252, 250, 0.85)` with `backdrop-filter: blur(10px) saturate(140%)`. In ink mode: `rgba(25, 21, 18, 0.85)`.
- Bottom border: `1px solid var(--rule)`.
- Inner content max-width `1280px`, centered, padding `12px 32px`.
- Single horizontal row, font-size `12px`, color `var(--fg-3)` (`#6F665E` paper / `#9A8F84` ink), `font-family: JetBrains Mono`.
- Layout: `display: flex; align-items: center; gap: 8px`.
- Contents in order:
  - `josoe.` — brand. Display font (Nunito Sans), 600 weight, 14px, color `var(--fg)`. The `.` is `var(--accent)` (ochre `#913832`).
  - `·` separator (color `var(--fg-4)`).
  - `essays / 2026 / 04 / 037` — breadcrumb. The "037" is colored `var(--accent)`.
  - Flex spacer (`flex: 1`).
  - Nav links: `home · essays · projects · now`. The active one (`essays`) is colored `var(--accent)`; others `var(--fg-2)` hovering to `var(--fg)`.
  - Theme toggle button: 12px mono, transparent bg, 1px `var(--rule)` border, `4px 10px` padding, `border-radius: var(--r-2)` (4px), label `"ink"` (or `"paper"` when in ink mode).

#### 2. Hero / colophon header (`.vC-header` + `.vC-header-inner`)

- Bottom border `1px solid var(--rule)`.
- Background: paper, with the **subtle 32px × 32px hairline grid** (`--rule-grid`) overlaid via two `linear-gradient` background-images. This is the kit's signature motif — keep the grid lines at `rgba(58, 51, 45, 0.05)` paper / `rgba(242, 238, 230, 0.05)` ink, never bolder.
- Inner: max-width `1280px`, centered, padding `64px 32px 56px`.
- **Two-column grid:** `220px minmax(0, 1fr)` with 64px gap.

**Left column — page number plate (`.vC-pageno`):**

- Right border `1px solid var(--rule)`, padding-right 32px, margin-top 12px.
- Two stacked elements:
  - Label: `"ESSAY"` — 11px mono, `letter-spacing: 0.08em`, color `var(--fg-3)`, margin-bottom 12px.
  - Number: `"Nº 037"` — **64px JetBrains Mono, weight 500, line-height 1, color `var(--accent)`** (the ochre red), `letter-spacing: -0.02em`, `font-feature-settings: "tnum","zero"`.
  - The `º` (ordinal indicator) inside the N is `0.6em` and `vertical-align: 0.4em`.

**Right column — title block (`.vC-titleblock`):**

- Title (`.vC-title`):
  - Family Nunito Sans, weight 600.
  - `font-size: clamp(36px, 5vw, 56px)`.
  - `letter-spacing: -0.025em`, `line-height: 1.04`.
  - Color `var(--fg)`.
  - `max-width: 22ch`, `text-wrap: balance`.
  - Margin `0 0 20px`.
  - Copy: `"the quiet power of css containment"` (lowercase — the voice rule for this site is all-lowercase prose).
- Lead paragraph (`.vC-lead`):
  - Family Newsreader, 19px, `line-height: 1.55`.
  - Color `var(--fg-2)`.
  - `max-width: 60ch`, margin `0 0 32px`.
  - Copy: `"i've been chasing a layout jank for two weeks. the fix was one css property and a sentence in the spec i'd read four times without understanding."`
- **Spec table (`.vC-spec`)** — a colophon strip:
  - `width: 100%`, `border-collapse: collapse`.
  - Top + bottom border `1px solid var(--rule)`. Each row beyond the first gets a top hairline.
  - 4 columns: `<th>` (label), `<td>` (value), `<th>`, `<td>`.
  - `<th>`: 10px mono, weight 500, color `var(--fg-3)`, uppercase, `letter-spacing: 0.04em`, width 100px, padding `10px 16px 10px 0`.
  - `<td>`: 12px, color `var(--fg)`, padding `10px 16px 10px 0`.
  - Row 1: `published / april 22, 2026 / reading / 9 min · 1,842 words`.
  - Row 2: `filed / #css · #performance · #web / permalink / /essays/css-containment`.
  - Tags are `<a class="vC-spec-tag">` colored `var(--fg)` hovering to `var(--accent)`. Separator dots are `var(--fg-4)`.
  - The permalink is colored `var(--accent)`.

#### 3. Body (`.vC-body-wrap` → `.vC-body`)

- `.vC-body-wrap`: max-width `1280px`, centered, padding `56px 32px 32px`.
- For each section: an `<h2>`, then a `.vC-row` (prose + marginalia).

**Section heading (`.vC-h2`):**

- `display: flex; align-items: baseline; gap: 16px`.
- Family Nunito Sans, weight 600, 24px, `letter-spacing: -0.01em`, color `var(--fg)`.
- Margin `56px 0 20px`, padding-top 16px, **top border `1px solid var(--rule)`**.
- The first heading in the body has no top border / no padding-top / no top margin.
- Inside: a small mono section number `.vC-h2-no` at 12px, color `var(--accent)`, `letter-spacing: 0.04em`, fixed 28px width — values `"01"`, `"02"`, `"03"`, `"04"`. Then the heading text.

**Body row (`.vC-row`)** — the structural primitive that gives this layout its character:

- `display: grid; grid-template-columns: minmax(0, 1fr) 220px; gap: 48px; align-items: start;`.
- Below `1100px`: collapses to single column (`grid-template-columns: minmax(0, 1fr)`, gap 12px).

**Prose column (`.vC-prose`):**

- 17px Newsreader, `line-height: 1.7`, color `var(--fg)`, `max-width: 60ch`.
- `<p>` margin `0 0 18px`.
- Inline `<code>`: JetBrains Mono, `0.88em`, background `var(--bg-sunken)`, 1px border `var(--rule)`, `border-radius: 2px`, padding `1px 5px`.
- Inline footnote markers `<sup class="vC-fn-ref mono">a</sup>`: color `var(--accent)`, `0.7em`, weight 500, `vertical-align: super`, `margin-left: 2px`. Marks are letters (a, b, c…), not numbers — to distinguish them from the section numbers and from ordered-list footnotes elsewhere on the site.

**Marginalia column (`.vC-margin` → `.vC-marginal`):**

- `.vC-margin`: padding-top 6px (so the marginalia top-aligns with the body baseline, not the H2).
- `.vC-marginal`: 12px, `line-height: 1.5`, color `var(--fg-3)`. Left border `1px solid var(--rule)`, padding `4px 0 4px 14px`. `display: flex; gap: 8px`.
- Inside: a mono mark (`a`, `b`) — color `var(--accent)`, weight 500, 11px, flex-shrink 0 — followed by a `<p>` of explanatory text. `<em>` inside is italicized and colored `var(--fg-2)`.

**Marginalia stat-block variant (`.vC-marginal-stat`):**

- For section 03, the marginalia is a small data callout instead of a footnote.
- `flex-direction: column`, `gap: 6px`, **left border colored `var(--accent)` instead of `var(--rule)`** (this is the only place a structural border picks up the accent color).
- Two stat rows. Each row:
  - Label: 10px mono, `letter-spacing: 0.06em`, uppercase, color `var(--fg-3)` (e.g., `"layout pass"`, `"inp"`).
  - Stat row: 14px mono, weight 500, flex baseline.
    - "from" value: color `var(--fg-3)`, `text-decoration: line-through; text-decoration-color: var(--fg-4)`.
    - Arrow `→`: color `var(--fg-4)`.
    - "to" value: color `var(--accent)`.
  - Values: `14.0ms → 0.4ms`, `220ms → 38ms`.

**Code block (`.vC-code`)** — appears between sections 02 and 03:

- `margin: 28px 0`. Max width spans across both columns: `calc(60ch + 48px + 220px)`.
- Caption row: `display: flex; align-items: center; gap: 8px`, 11px mono, color `var(--fg-3)`, padding `6px 0`, bottom border `1px solid var(--rule)`.
  - Filename `card.css` colored `var(--accent)`.
  - Meta ` · css · 6 lines` colored `var(--fg-3)`, `flex: 1`.
  - Copy button on the right: 11px mono, transparent bg, 1px `var(--rule)` border, `border-radius: var(--r-1)` (2px), padding `3px 8px`, with a 12px Lucide `copy` icon and the word `copy`.
- `<pre>`: JetBrains Mono 13px, `line-height: 1.7`, background `var(--bg-sunken)`, 1px `var(--rule)` border, `border-radius: var(--r-2)` (4px), padding `14px 16px`, `overflow-x: auto`.
- **Line numbers (`.vC-ln`):** inline-block, width 22px, color `var(--fg-4)`, 11px, `user-select: none`, right-aligned, `margin-right: 16px`. Numbered 1–6.
- Code body (literal):
  ```css
  .card {
    contain: layout paint;
    /* now hover state changes, focus rings, and
       internal animations stop the world inside
       this box — and never reach the document. */
  }
  ```

**End mark (`.vC-end`):**

- After the last section, a centered hairline-topped mono line: `"¶ end · 4 sections · 1,842 words"`.
- Margin-top 56px, padding-top 16px, top border `1px solid var(--rule)`.
- 11px, color `var(--fg-3)`, `letter-spacing: 0.04em`, centered.

#### 4. Pager (`.vC-pager`)

- max-width `1280px`, centered, padding `32px`, top border `1px solid var(--rule)`.
- `display: grid; grid-template-columns: 1fr 1fr; gap: 16px`.
- Two cards. Each (`.vC-pager-item`): 1px `var(--rule)` border, `border-radius: var(--r-3)` (8px), padding `16px 18px`, hover border → `var(--rule-strong)`.
- Right card has `text-align: right` (`.vC-pager-next`).
- Inside each: a small mono label (11px, `var(--fg-3)`) like `"← previous · 036"` or `"038 · next →"`, then a 16px Nunito Sans 500 title in `var(--fg)`.
- Copy: previous = `"small things, again"`; next = `"writing tools, and tools for writing"`.

#### 5. Footer (`.vC-foot`)

- `display: flex; gap: 8px; align-items: center; flex-wrap: wrap`. Top border `1px solid var(--rule)`. Padding `24px 32px`. 12px mono, color `var(--fg-3)`.
- Contents: `© 2026 · josoe · rss · github · built with care` — middle dots between, the rss/github are anchors colored `var(--fg-2)`.

## Interactions & Behavior

- **Theme toggle (paper / ink):** the toggle button in the top stripe flips `data-theme="ink"` on `<html>` (or per-component root). All token CSS variables resolve through that attribute, so colors swap atomically. Persist preference in `localStorage("theme")` and respect `prefers-color-scheme` on first load. Set `<html color-scheme: light | dark>` accordingly so form controls and scrollbars match.
- **Footnote links:** clicking a `<sup>` marker should smooth-scroll to or visually highlight the matching marginalia. On wide screens the marginalia is already in view; on narrow (<1100px), where it collapses below the prose, this matters more. Apply `scroll-margin-top: 100px` to marginalia targets so the sticky stripe doesn't cover them.
- **"Copy" code button:** writes the code block's text content to `navigator.clipboard.writeText(...)`; flash the button label to `"copied"` for 1.5s.
- **Permalink anchor:** clicking the permalink in the colophon copies `window.location.href` to clipboard with a toast confirmation.
- **Hover states:**
  - Anchors: opacity 0.7 (kit default).
  - Mono icon buttons: border color `var(--rule)` → `var(--rule-strong)`, text `var(--fg-3)` → `var(--fg)`.
  - Pager cards: border `var(--rule)` → `var(--rule-strong)`.
  - Spec-table tags: color `var(--fg)` → `var(--accent)`.
- **Transitions:** all `120ms cubic-bezier(0.4, 0, 0.2, 1)` (kit `--d-fast` / `--ease`). Honor `prefers-reduced-motion: reduce` (kit's tokens.css already does).

## Responsive Behavior

- ≥1100px: full layout as described — two-column header, prose + 220px marginalia.
- <1100px:
  - Header inner becomes single column. The `.vC-pageno` plate loses its right border and gets a bottom border + bottom padding instead.
  - `.vC-row` collapses: marginalia falls beneath the prose paragraph it relates to with `margin-top: 8px`. Keep the left-hairline + accent mark so it still reads as marginalia, just stacked.
- Mobile (<640px): drop horizontal padding to 20px; reduce title clamp lower bound; consider hiding the breadcrumb fragments after the brand in the top stripe.

## State Management

Minimal — this is a content page.

- `theme: "paper" | "ink"` — persisted to `localStorage`.
- Optional: `tocActive: string` if you decide to add a TOC variant later. (Not present in C.)
- Code-block `copied` flag, scoped per block.

For routing/content the production app should:
- Source post body from MDX/Markdown with frontmatter (`title`, `date`, `updated`, `tags`, `permalink`, `number`).
- Compute `minutes` and `words` at build time from body text.
- Render footnotes from MDX directives or a custom `<Footnote mark="a">…</Footnote>` component that emits both the `<sup>` marker and the marginalia entry, paired by `mark`.

## Design Tokens

All values are from the Ochre design system. The full token CSS is in `ds/colors_and_type.css` — port it (or its values) into the target codebase's token system.

**Brand**
- `--ochre: #913832` — accent (also `--err`, by design)
- `--ochre-tint: #b85b53`
- `--ochre-deep: #6a221d`

**Paper (light) palette**
- `--paper: #FDFCFA` — bg
- `--paper-sunken: #F6F4EF` — code blocks, hover wash
- `--paper-raised: #FFFFFF`
- `--ink: #191512` — primary text
- `--ink-2: #3A332D` — secondary
- `--ink-3: #6F665E` — tertiary / metadata
- `--ink-4: #9A8F84` — disabled / placeholder
- `--rule: #ECE7DD` — hairline borders
- `--rule-strong: #D4CCBC` — hover borders
- `--rule-grid: rgba(58, 51, 45, 0.05)` — subtle grid bg

**Ink (dark) palette** — applied via `[data-theme="ink"]`
- `--bg: #191512` / `--bg-sunken: #110E0C` / `--bg-raised: #221C18`
- `--fg: #F2EEE6` / `--fg-2: #C9BEAB` / `--fg-3: #9A8F84` / `--fg-4: #6F665E`
- `--rule: #2E2722` / `--rule-strong: #463C34`
- `--accent: #C75D54` (lifted ochre for contrast on dark)

**Type families**
- Display / UI: `"Nunito Sans"`, weights 400/500/600/700/800 (variable, opsz 6–12)
- Serif (prose): `"Newsreader"`, weights 400/500/600/700 (variable, opsz 6–72)
- Mono: `"JetBrains Mono"`, weights 400/500/600

Load via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=JetBrains+Mono:wght@400;500;600&display=swap
```

**Type scale** (1.25 major-third, base 16px)
- 12 / 13 / 14 / 15 (UI body) / 16 (reading body) / 18 / 20 / 24 / 30 / 36 / 48 / 64 / 80

**Line heights:** tight 1.05, snug 1.2, ui 1.4, body 1.5, prose 1.6 (post body uses 1.7 for breathing room).

**Tracking:** tight `-0.02em`, normal `0`, wide `0.04em` (mono caps labels).

**Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

**Radii (almost flat):** 0, 2, 4, 8.

**Shadows (two only):**
- `--shadow-1: 0 1px 2px rgba(25, 21, 18, 0.08)`
- `--shadow-2: 0 4px 16px rgba(25, 21, 18, 0.12)`

**Motion:**
- `--ease: cubic-bezier(0.4, 0, 0.2, 1)`
- `--ease-out: cubic-bezier(0.2, 0.6, 0.2, 1)`
- Durations: 120ms / 200ms / 320ms.

**Layout measures:**
- `--measure-prose: 760px`
- `--measure-promo: 1120px`
- `--measure-index: 1280px` ← used for this page's header / body wrap / pager.
- `--gutter: 24px`

## Assets

- **Icons:** Lucide-style inline SVG, 1.5px stroke, `currentColor`. The page uses `arrow-left` (in nav-back contexts), `link`, `rss`, `copy`, `hash`. The `Icon` component is in `post-content.jsx`. Replace with whatever icon library the codebase already uses (Lucide React, Heroicons, etc.) — keep the 1.5px stroke and currentColor approach.
- **Logo / wordmark:** the brand renders as a typographic `josoe.` with the period in `var(--accent)`. No image asset required for this page; the design system does ship `assets/logo-monogram.svg` and `assets/logo-wordmark.svg` if you want to use them in nav/favicon.
- **No images / no illustrations** in the post body itself — the only decorative element is the hairline grid behind the header. Do not add hero images; the kit's voice is text-first.

## Files

Bundled in this folder for reference:

- `Blog Post.html` — the single self-contained prototype that renders all three variations on a design canvas. Variation C is the relevant one.
- `variation-c.jsx` — the React JSX for the "documented" layout (the only variation that matters for this handoff).
- `post-content.jsx` — shared post data + the `Icon` component.
- `variations.css` — surface styles. The `.vC-*` rules at the bottom are the ones for this layout.
- `ds/colors_and_type.css` — Ochre design tokens (the canonical source).
- `ds/grid.css` — the hairline grid background utility used behind the header.
- `ds/tokens.css` — convenience re-export.
- `ds/styles.css` — kit-level component styles for reference (not directly used by variation C, but useful for cross-referencing nav / footer / button conventions).

## Implementation notes

- The structural primitive worth preserving is **`.vC-row`** — the `1fr / 220px` grid that gives every paragraph its marginalia gutter. Build a `<ProseRow>` component (or a Markdown processor that wraps each paragraph in one) so authors can drop `<aside>` content next to any paragraph just by writing it inline.
- Pair footnotes with their marks at the **content layer** (e.g., `<Footnote mark="a">`), not by hand in the JSX. The current prototype hardcodes both halves — production should not.
- The page-number plate is content-driven (`Nº 037` is the post's sequential number). Surface this from frontmatter.
- The grid background is decorative — render it at `var(--rule-grid)` opacity only. If your background looks crisp, it's wrong.
