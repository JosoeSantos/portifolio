# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev             # Start dev server with Turbopack
npm run build           # Production build
npm run lint            # ESLint via Next.js
npm run format          # Prettier with Tailwind plugin
npm run storybook       # Start Storybook dev server on port 6006
npm run build-storybook # Build static Storybook to storybook-static/
```

Node >= 24 and npm >= 10 are required (see `.nvmrc`).

## Architecture

**Next.js 16 App Router** with React 19, TypeScript strict mode, and Tailwind CSS v4.

### Page pattern

Each route has two files: a server component (`page.tsx`) that exports `metadata` and delegates rendering, and either an `.mdx` file or a `"use client"` component that holds the actual UI. Example: `app/posts/page.tsx` → `posts/my-blog-updates.mdx`.

### MDX content

Blog posts live in `/posts/*.mdx` and are served as Next.js pages via `pageExtensions` in `next.config.mjs`. All MDX elements are mapped to styled components in `mdx-components.tsx`, which pulls from `typography.tsx`.

### Typography system

`typography.tsx` exports semantic React components (`H1`–`H6`, `P`, `Ul`, `Li`, `Blockquote`) with Tailwind classes baked in. Use these instead of raw HTML elements or ad-hoc className strings. `mdx-components.tsx` wires them into the MDX renderer.

### Styling conventions

- **Tailwind CSS v4** — config is CSS-first via `@theme` in `globals.css` (no `tailwind.config.js`).
- Fonts (`Newsreader` serif, `Nunito Sans` sans) are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-serif` / `--font-sans`.
- Scroll-driven animations use `scroll-timeline` / `animation-timeline` (native CSS). The `timeline-scroll-y-nearest` utility and `--pageScroll` named timeline are defined in `globals.css` and `timeline.module.css`.
- Prettier runs the `prettier-plugin-tailwindcss` plugin to auto-sort class names.

### Path alias

`@/` maps to the project root (`./*`), so `import { H1 } from "@/typography"` works from anywhere.

### Observability

`instrumentation.ts` (currently empty) is the Next.js hook for OpenTelemetry setup. The `otel/` and `loki-data/` directories hold local observability infra (not imported by the app).

### Storybook

Storybook 10 is configured with `@storybook/nextjs-vite` (Vite-based, handles `next/font` mocking and `@/*` path alias automatically). Config lives in `.storybook/`:

- `main.ts` — framework: `@storybook/nextjs-vite`, story glob: `**/*.stories.@(ts|tsx)`
- `preview.ts` — imports `app/globals.css` to activate Tailwind v4 theme in every story

Stories are co-located with their source files (e.g. `typography.stories.tsx` next to `typography.tsx`). Use CSF3 format with a single `default export` (the `Meta`) and named story exports per component. In Storybook 10, addon functionality (Controls, Actions, Viewport, Backgrounds) is bundled in the core `storybook` package — no separate `@storybook/addon-essentials` needed.

### Incomplete / in-progress areas

- `modules/feature-flags/context/` — directory exists but is empty; feature-flag module is not yet implemented.
- `app/spen-events/` — a browser pointer-event logging lab page, not linked from the main nav.
