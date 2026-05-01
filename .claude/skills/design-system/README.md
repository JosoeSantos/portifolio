# Ochre Design System

A personal design system for a software engineer's website, portfolio, and writing. Built around a single signature color — **red ochre `#913832`** — and a meticulous, technical, document-feeling visual language inspired by Zed's landing surfaces (subtle grid backgrounds, generous monospace, restrained color).

The system is opinionated about **detail and organization**: tight typographic rhythm, a single accent color used sparingly, generous whitespace, and a refusal to decorate for decoration's sake. Marketing/promotional surfaces lean into a faint architectural grid; reading surfaces drop the grid entirely and behave like a well-set technical document.

---

## Brand context

This is a personal site for a software engineer who is **detalist and organized**. The design system has to support three kinds of surface:

1. **Promotional** — landing/home, project showcase, "now" page. Subtle grid background; large monospace headings; the ochre used as a single anchor.
2. **Reading** — essays, notes, technical writeups. No grid. Long-form serif body type, narrow measure, footnotes, code blocks.
3. **Index/utility** — archives, tag pages, projects list, RSS, 404. Dense, table-like, monospace metadata.

There is no separate "app" — the whole property is content + light interaction (filter, search, copy-link, theme toggle).

## Sources

No codebase, Figma, or asset pack was attached to this project. The system was authored from scratch against the user's brief:

- **Primary color**: red ochre `#913832`
- **Promotional pattern**: subtle grid, in the spirit of [zed.dev](https://zed.dev/)
- **Personality**: detail-oriented, organized software engineer

If/when reference material becomes available — codebase, Figma, existing site — re-run with those attached and the kit will be regenerated against the source of truth instead of inferred.

---

## Index

Root files:

- `README.md` — this file. Brand context, content fundamentals, visual foundations, iconography.
- `SKILL.md` — agent skill manifest (Claude Code compatible).
- `colors_and_type.css` — CSS custom properties for color, type, spacing, radius, shadow.
- `tokens.css` — re-export + light/dark scoping.
- `grid.css` — the signature subtle-grid background utility.
- `fonts/` — webfont files (see "Fonts" below for substitutions).
- `assets/` — logos, marks, illustrations.
- `preview/` — Design System tab cards (registered assets).
- `ui_kits/personal-site/` — the personal site UI kit (components + index.html).

---

## Content fundamentals

The voice is **first-person, lowercase by default, dry, precise**. A working engineer writing for other working engineers. No marketing gloss, no exclamation marks, no emoji.

### Voice rules

- **First person, singular.** "I'm building…", "I work on…", "I wrote about…". Never "we" — there is no "we".
- **Lowercase headlines and section labels** by default. Sentence case in body. Title Case is reserved for proper nouns and project names.
- **Short sentences.** Often fragments. Periods earn their place.
- **Specific over generic.** Numbers, dates, versions, file names. "Shipped v0.4 on march 12" not "recently launched a major update".
- **No hedging.** "I think this is broken" not "this might potentially be a small concern".
- **Code voice in prose.** Inline `monospace` for filenames, commands, identifiers, version strings, error messages.
- **Footnotes for asides.** Numbered, at the end. Don't break flow with parentheticals.

### Words to avoid

unleash, leverage, robust, seamless, empower, journey, solution, ecosystem, delightful, magical, AI-powered (unless literal), revolutionary, game-changer, cutting-edge.

### Words that fit

build, ship, write, read, fix, break, run, measure, notes, log, archive, index, current, draft, since, on, in, by.

### Examples

> **hi, i'm \[name\].** i build small, careful software. currently working on a typesetting tool and a notes app for myself. previously at \[company\], where i worked on \[thing\]. i write occasionally — mostly about programming, sometimes about whatever else.

> **now** — april 2026.
> reading: _the c programming language_ (again). working on: a parser for a tiny lisp. listening to: arvo pärt. last updated 12 days ago.

> **404 — not found.** the page `/blog/2019/foo` is not here. it may have moved, or i may have deleted it. try the [archive](/archive) or [search](/search).

### Casing

- Page titles: lowercase. (`now`, `archive`, `projects`, `about`)
- Nav labels: lowercase.
- Buttons: Sentence case OR lowercase, consistent within a surface. Default lowercase on promo, Sentence case in app-like contexts (forms, dialogs).
- Proper nouns and project names: as their owners style them.

### Emoji & unicode

- **No emoji.** Anywhere. Including section markers.
- **Unicode glyphs** are fair game when they're typographically correct: `→` (arrow), `·` (middle dot for separators), `—` (em dash), `…` (ellipsis), `§` (section), `¶` (pilcrow), `†` `‡` (footnote markers), `№` (numero).

---

## Visual foundations

### Colors

A near-monochrome system anchored by one warm accent.

- **Ochre `#913832`** is the only chromatic color. It appears once or twice per surface — link underlines, the accent rule under a hero headline, the active state of a nav item, a single mark in a logo. Never as a button background unless the button is the single most important action on the page.
- **Neutrals are warm-leaning grays** (slight red bias, `oklch` based) so the ochre doesn't feel like it was airdropped onto a cold page.
- **Two modes**: paper (light, warm off-white background `#FDFCFA`) and ink (dark, deep brown-black `#191512`). Light is canonical; dark is supported.

### Type

Three families, each with one job:

- **Display + UI**: **Nunito Sans** — humanist sans with rounded terminals, used for headings, nav, buttons, labels. 600/700 for display, 500 for UI body.
- **Reading**: **Newsreader** — a contemporary serif designed for screen reading; optical sizing on, italic for emphasis.
- **Mono**: **Fira Code** — for code, metadata, dates, version strings, filenames. Tabular numerals on for tables.

All three are loaded from Google Fonts.

Type ramp uses a **1.25 (major third)** scale. Body is `16px` reading, `15px` UI. Line heights are tight at display sizes (1.05–1.15) and relaxed in body (1.6 for serif, 1.5 for sans).

### Spacing

A **4px base** with a perfect-fourth-ish ramp: `4 8 12 16 24 32 48 64 96 128`. No half-steps. Component padding rounds to multiples of 4. Section padding rounds to multiples of 16.

### Radii

Almost flat. The system uses `0`, `2`, `4`, `8` only. Nothing is pill-shaped. Buttons are `4px`. Cards are `8px`. Code blocks are `4px`. Inputs are `4px`.

### Borders

Hairlines. `1px solid var(--rule)` everywhere. The rule color is a low-contrast warm gray, not pure neutral. Borders do most of the structural work — shadows are reserved.

### Shadows

Two only:

- `--shadow-1` — a tiny ambient shadow used for floating elements (menus, toasts). 1px blur, 2px offset, 8% black.
- `--shadow-2` — a slightly larger lift for the rare floating dialog. Still very subtle.

No shadows on cards, buttons, or hero elements. Borders carry the structure.

### Backgrounds

- **Promo pages**: paper background `#FDFCFA` with the **subtle grid** (see `grid.css`) — a 32px × 32px fine-line grid in a low-opacity warm gray. Optionally a soft horizon mask (vignette to fade the grid at viewport edges) on hero sections only.
- **Reading pages**: paper background, no grid. Pure focus on type.
- **Dark mode**: ink background, grid switches to a darker low-contrast variant.

No gradients except the grid's edge fade. No texture. No noise. No images-as-backgrounds.

### Imagery

If used at all, photography is **warm-toned, slightly desaturated**, and presented in `4:3` or `3:2` frames with a 1px hairline border. No drop shadows. No rounded corners over `8px`. Black-and-white is acceptable; cool tones are not.

For abstract/decorative imagery: the only motif is **the grid**. If a page needs more visual interest, lean on typography (large numerals, ASCII rules, monospace tables) instead of decoration.

### Animation

Restrained.

- **Easing**: a single `--ease-out` (`cubic-bezier(0.2, 0.6, 0.2, 1)`) for entrance and hover; `--ease` (`cubic-bezier(0.4, 0, 0.2, 1)`) for everything else. No bouncy springs.
- **Durations**: `120ms` for hover/press, `200ms` for state changes, `320ms` for entrance. Nothing longer.
- **Page transitions**: none. Hard cuts.
- **Hover**: opacity shift to `0.7` for links, or a 1px underline that thickens. No color change.
- **Press**: `transform: translateY(1px)` — physical, not bouncy. No scale.
- **Reduced motion**: all transitions become `0ms`.

### Layout

- **Max content width**: `760px` for prose, `1120px` for promo, `1280px` for index/table surfaces.
- **Grid**: a 12-column grid at `1120px` with `24px` gutters. Most pages use `1` or `2` columns.
- **Fixed elements**: the top nav is sticky on promo, static on reading. No fixed footers, no chat bubbles, no scroll-to-top fab.

### Transparency & blur

- **Sticky nav** uses `backdrop-filter: blur(10px) saturate(140%)` over a `rgba(paper, 0.7)` fill. This is the only place blur is allowed.
- **No glass cards**, no frosted overlays.

### Cards

Cards are bordered, **not shadowed**. `1px solid var(--rule)`, `8px` radius, `24px` padding. On hover: border color shifts from `--rule` to `--rule-strong`. That's the entire interaction.

### Capsules vs gradients

- Buttons are rectangles with `4px` radius. **No capsules**, no pills. Tags use `2px` radius.
- **No gradients** anywhere except the grid's edge fade and the optional sticky-nav blur.

### Code blocks

The single most decorated element on a reading page. `1px solid var(--rule)`, `4px` radius, `--surface-sunken` background, `12px 16px` padding, Fira Code `13px / 1.6`. A small monospace caption above (filename + language) when a block is part of a numbered listing.

### Tables

Index pages live and die by tables. Tabular numerals on, hairline horizontal rules between rows, no vertical rules, no zebra striping. Column heads in mono uppercase, tracking `0.04em`.

---

## Iconography

**Stance: minimal. The brand prefers typography to icons.** Where an icon is unavoidable, the system uses **Lucide** at `1.5px` stroke, sized to the type baseline (`16` next to body, `20` next to headings). Lucide is loaded from CDN — not bundled — to keep the asset folder clean and consistent across surfaces.

### Rules

- **Outline only.** No filled icons. No two-tone.
- **`1.5px` stroke.** Match the design's hairline aesthetic.
- **`currentColor`** — icons inherit text color so they sit naturally next to type.
- **Sized to type.** A `16px` icon next to `15px` UI text; `20px` next to `20px` headings; never larger than the line height of its neighbor.
- **No emoji. No colored SVG illustrations.** Generic illustrations are explicitly out of scope for this system.
- **Unicode arrows** (`→ ← ↑ ↓ ↗`) are preferred over icon-arrows when the arrow appears inline in text (e.g. "read more →").

### Logo / mark

The wordmark is the engineer's name set in **Nunito Sans** 600 at `-0.02em` tracking, lowercase. The optional monogram is the initials in a `24×24` square with `1px` ochre rule. Logos live in `assets/`:

- `assets/logo-wordmark.svg` — the lowercase wordmark, currentColor.
- `assets/logo-monogram.svg` — the bracketed-initials monogram.
- `assets/favicon.svg` — 32×32 monogram for favicon use.

(**Substitution flag**: the wordmark uses the actual person's name as a placeholder — `\[name\]`. Replace with the user's actual name before shipping.)

### Fonts

All three families are open-licensed and loaded from Google Fonts at the top of `colors_and_type.css`. No local font files are required.

---

## How to use this system

1. **Link tokens.** Include `colors_and_type.css` in every surface.
2. **Promo surfaces** — add the `.grid-bg` class to the page body or the hero section. Use `--font-display` for headings.
3. **Reading surfaces** — set `body { font-family: var(--font-serif); max-width: var(--measure-prose); }`. No grid class.
4. **Index/utility surfaces** — use `var(--font-mono)` for metadata, `--font-ui` for headings.
5. Pull components from `ui_kits/personal-site/` — they are JSX, viewable via `ui_kits/personal-site/index.html`.
