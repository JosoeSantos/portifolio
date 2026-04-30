# Biome Migration Design

**Date:** 2026-04-30  
**Status:** Approved

## Goal

Replace ESLint + Prettier with Biome as the single tool for linting and formatting. The current `npm run lint` is broken (Next.js CLI path resolution issue), and Prettier provides only Tailwind class sorting on top of defaults. Biome gives a faster, simpler, unified toolchain.

## What Changes

### Dependencies removed

- `eslint`
- `eslint-config-next`
- `prettier`
- `prettier-plugin-tailwindcss`

### Dependencies added

- `@biomejs/biome` (devDependency)

### Files removed

- `eslint.config.mjs`
- `prettier.config.js`

### Files added

- `biome.json` (project root)

## `biome.json` Configuration

```json
{
  "$schema": "https://biomejs.dev/schemas/1.x/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "trailingCommas": "all"
    }
  }
}
```

Biome automatically respects `.gitignore`, so no additional ignore configuration is needed.

## `package.json` Scripts

Replace:

```json
"lint": "next lint",
"format": "prettier --write ."
```

With:

```json
"lint": "biome lint .",
"format": "biome format --write .",
"check": "biome check --write ."
```

`check` is the primary day-to-day command — it runs lint + format in one pass.

## Known Tradeoff

`prettier-plugin-tailwindcss` (automatic Tailwind class-order sorting) has no Biome equivalent. Class order will no longer be enforced automatically. Classes continue to work correctly regardless of order.

## Out of Scope

- Adding a lint step to the CI workflow (`tests.yml`) — the workflow only runs E2E tests and is not affected by this change.
- Configuring a Git pre-commit hook for `biome check`.
