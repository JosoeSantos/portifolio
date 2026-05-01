# Storybook Setup Design

**Date:** 2026-04-28  
**Status:** Approved

## Goal

Add Storybook 10 to the portfolio as a living component library — starting with the existing typography components and growing as new UI components are added.

## Stack

| Concern           | Choice                                            | Reason                                                                                                                                                               |
| ----------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storybook version | 10.x (latest stable, ≥10.3.3)                     | Current major, ESM-only, active development                                                                                                                          |
| Framework adapter | `@storybook/nextjs-vite`                          | Official recommended path for Next.js 16; handles `next/font`, path aliases, React 19 without the React version pinning bug present in `@storybook/nextjs` (webpack) |
| Bundler           | Vite (via adapter)                                | Faster cold starts and HMR than webpack                                                                                                                              |
| CSS               | Import `app/globals.css` in Storybook preview     | Gives all stories access to `@theme` variables, `@keyframes`, base styles, and `@utility` definitions from Tailwind v4                                               |
| Fonts             | Handled automatically by `@storybook/nextjs-vite` | Mocks `next/font/google` so CSS variables (`--font-serif`, `--font-sans`) resolve correctly without hitting Google's servers                                         |

## Configuration Files

All Storybook config lives in `.storybook/`:

**`.storybook/main.ts`**
- Framework: `@storybook/nextjs-vite`
- Story glob: `**/*.stories.@(ts|tsx)` (covers co-located stories anywhere in the project)
- Addons: `@storybook/addon-essentials` (controls, actions, docs, viewport, backgrounds)

**`.storybook/preview.ts`**
- Imports `../app/globals.css` to load Tailwind v4 base styles and theme variables into every story

## Story Conventions

Stories are co-located with their source files:

```
typography.tsx
typography.stories.tsx
app/
  some-component.tsx
  some-component.stories.tsx
```

Each story file follows CSF3 format. The initial `typography.stories.tsx` includes one story per export: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Ul`, `Li`, `Blockquote`. Each story renders the component with representative text content — no new abstractions.

## package.json Scripts

Two scripts added:

```json
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"
```

## What Is Not In Scope

- Custom Storybook theme / branding
- Testing integration (Storybook Test, Vitest)
- Deployment of the static Storybook build
- Feature flags module (not yet implemented in the codebase)
- `app/spen-events/` page (not linked from main nav, not a component)
