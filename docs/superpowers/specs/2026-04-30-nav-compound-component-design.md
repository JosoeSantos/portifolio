# Nav Compound Component Design

## Context

The current `Nav` component (`components/nav.tsx`) is a 41-line monolith that bundles four distinct concerns into a single component: the sticky header shell, the brand/logo, the navigation links, and the theme toggle action. This makes it impossible to reorder, replace, or omit individual pieces without modifying the component internals.

The goal is to refactor it into a compound component using the namespace pattern — a set of composable sub-components assembled under a single `Nav` object — so callers have full compositional control while the implementation stays in one file.

## Approach

**Namespace pattern.** All sub-components are defined as named functions in `components/nav.tsx` and assembled into a single exported object:

```ts
export const Nav = { Root, Brand, Links, Link, Actions, ThemeToggle };
```

No React context. State (active link, theme) lives entirely in the caller and is passed as explicit props to the relevant sub-component. This keeps each piece stateless and independently testable in Storybook.

## Sub-components

| Sub-component     | Element    | Props                                   | Responsibility                                         |
| ----------------- | ---------- | --------------------------------------- | ------------------------------------------------------ |
| `Nav.Root`        | `<header>` | `children`                              | Sticky shell, backdrop-blur, border-b                  |
| `Nav.Brand`       | `<span>`   | —                                       | "josoe." logo with ochre dot                           |
| `Nav.Links`       | `<nav>`    | `children`                              | Flex row wrapper for link items                        |
| `Nav.Link`        | `<button>` | `href`, `active?`, `onNav?`, `children` | Single nav item; `active` drives ochre vs ink-2 colour |
| `Nav.Actions`     | `<div>`    | `children`                              | Right-side slot, accepts any children                  |
| `Nav.ThemeToggle` | `<button>` | `theme`, `onTheme`                      | dark/light toggle button                               |

### Nav.Link props

```ts
type NavLinkProps = {
  href: string;
  active?: boolean;
  onNav?: (href: string) => void;
  children: React.ReactNode;
};
```

### Nav.ThemeToggle props

```ts
type NavThemeToggleProps = {
  theme: "paper" | "ink";
  onTheme: () => void;
};
```

## Canonical usage

```tsx
<Nav.Root>
  <Nav.Brand />
  <div className="flex items-center gap-4">
    <Nav.Links>
      <Nav.Link href="essays" active={active === "essays"} onNav={onNav}>
        essays
      </Nav.Link>
      <Nav.Link href="projects" active={active === "projects"} onNav={onNav}>
        projects
      </Nav.Link>
      <Nav.Link href="now" active={active === "now"} onNav={onNav}>
        now
      </Nav.Link>
    </Nav.Links>
    <Nav.Actions>
      <Nav.ThemeToggle theme={theme} onTheme={onTheme} />
    </Nav.Actions>
  </div>
</Nav.Root>
```

## Storybook stories (`nav.stories.tsx`)

Replace the two current stories with:

| Story            | Description                                    |
| ---------------- | ---------------------------------------------- |
| `Default`        | Full composed nav, no active link, paper theme |
| `WithActiveLink` | essays active                                  |
| `DarkTheme`      | theme="ink", essays active                     |
| `BrandOnly`      | `Nav.Root` + `Nav.Brand` alone                 |
| `LinkActive`     | Single `Nav.Link` with `active={true}`         |
| `LinkInactive`   | Single `Nav.Link` with `active={false}`        |

## Files changed

| File                         | Change                                                   |
| ---------------------------- | -------------------------------------------------------- |
| `components/nav.tsx`         | Rewrite — compound sub-components, same Tailwind classes |
| `components/nav.stories.tsx` | Rewrite — per-sub-component and composed stories         |
