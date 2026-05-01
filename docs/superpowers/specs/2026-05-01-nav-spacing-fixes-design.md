# Nav Spacing Fixes Design

## Context

The `Nav` compound component diverges from the Ochre UI kit in spacing, sizing, and the theme toggle's visual weight. The UI kit (`ui_kits/personal-site/styles.css`, `.ds-nav` / `.ds-theme`) is the source of truth. Six properties are wrong; all fixes are class-level changes across two files plus a new `size` prop on `Button`.

---

## What's wrong

| Property | UI Kit (spec) | Component (actual) | Delta |
|---|---|---|---|
| Nav height | `padding: 14px 32px` → ~44px natural | `h-14` = 56px fixed | 12px too tall |
| Links gap | `gap: 18px` | `gap-6` = 24px | 6px too wide |
| Theme toggle font | 12px Fira Code (mono) | 14px Nunito Sans (sans) | wrong family + size |
| Theme toggle padding | `4px 10px` | `8px 16px` (`py-2 px-4`) | 2× too large |
| Theme toggle color | `ink-2` resting | inherits `ink` | too dark |
| Layout structure | flat 3-section row: brand · links · util | brand / `{links+toggle}` grouped right | structural |

Root cause of toggle issues: `ThemeToggle` delegates to `Button`, which has one fixed size (`px-4 py-2 text-sm font-sans`) suited for primary actions — not compact nav controls.

---

## Approach

**Add a `size` prop to `Button`** with two values: `"default"` (existing behaviour, unchanged) and `"compact"` (12px mono, `4px 10px` padding). `ThemeToggle` passes `size="compact"`. No other callers change.

All other fixes are Tailwind class edits on `Nav.Root` and `Nav.Links`.

The layout structure fix (flat vs grouped) is **not included** — the compound component API already lets callers compose however they want, and the spec (`2026-04-30-nav-compound-component-design.md`) intentionally uses the grouped pattern. Only visual metrics are fixed here.

---

## Files changed

| File | Change |
|---|---|
| `components/button.tsx` | Add optional `size` prop; apply compact classes when `size="compact"` |
| `components/nav.tsx` | `Nav.Root`: replace `h-14` with `py-[14px]`; `Nav.Links`: `gap-[18px]`; `Nav.ThemeToggle`: add `size="compact"` and `text-ink-2` |
| `components/button.stories.tsx` | Add `Compact` story |
| `components/nav.stories.tsx` | No story changes needed; visual fix is in the component |

---

## Component specs

### Button — `size` prop

```ts
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "ghost";
  size?: "default" | "compact";       // default: "default"
  children: React.ReactNode;
};
```

Size classes (replace the padding/font portion of `base`):

| size | classes |
|---|---|
| `"default"` | `px-4 py-2 text-sm font-sans font-medium` (existing) |
| `"compact"` | `px-[10px] py-1 text-xs font-mono font-normal` |

Shared base (unchanged): `rounded-sm transition-all duration-[120ms] cursor-pointer active:translate-y-px`

### Nav.Root

```tsx
// before
<div className="flex h-14 items-center justify-between px-8">

// after
<div className="flex items-center justify-between px-8 py-[14px]">
```

### Nav.Links

```tsx
// before
<nav aria-label="Main" className="flex gap-6">

// after
<nav aria-label="Main" className="flex gap-[18px]">
```

### Nav.ThemeToggle

```tsx
// before
<Button variant="secondary" onClick={onTheme} aria-pressed={theme === "ink"}>

// after
<Button variant="secondary" size="compact" className="text-ink-2" onClick={onTheme} aria-pressed={theme === "ink"}>
```

---

## Verification

1. `npm run storybook` — inspect `Components/Nav` Default story: nav should be ~44px tall, links closer together, toggle visibly smaller and in mono
2. `npm run storybook` — inspect `Components/Button` Compact story: button renders at 12px mono with tight padding
3. `npm run build` — no TypeScript errors
4. `npm run dev` — check the live nav in the browser at `localhost:3000`
