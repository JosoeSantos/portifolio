# Nav Compound Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `components/nav.tsx` from a monolithic component into a namespace-style compound component (`Nav.Root`, `Nav.Brand`, `Nav.Links`, `Nav.Link`, `Nav.Actions`, `Nav.ThemeToggle`) with updated Storybook stories.

**Architecture:** All six sub-components are plain stateless function components defined in `components/nav.tsx` and assembled into a single exported `Nav` object. No React context — active state and theme are passed as explicit props by the caller. The existing Tailwind classes and design tokens are preserved verbatim.

**Tech Stack:** React 19, TypeScript strict, Tailwind CSS v4, Storybook 10 (CSF3, `@storybook/nextjs-vite`)

---

## File Map

| File                         | Action  | Responsibility                                             |
| ---------------------------- | ------- | ---------------------------------------------------------- |
| `components/nav.tsx`         | Rewrite | Six sub-components + `Nav` namespace export                |
| `components/nav.stories.tsx` | Rewrite | Six stories covering each sub-component and composed usage |

---

### Task 1: Rewrite `components/nav.tsx` as a compound component

**Files:**

- Modify: `components/nav.tsx`

- [ ] **Step 1: Open the current file and note the Tailwind classes to preserve**

Current implementation for reference:

```tsx
"use client";

interface NavProps {
  active?: string;
  onNav?: (page: string) => void;
  theme?: "paper" | "ink";
  onTheme?: () => void;
}

const LINKS = ["essays", "projects", "now"];

export function Nav({ active, onNav, theme = "paper", onTheme }: NavProps) {
  return (
    <header className="border-rule sticky top-0 z-50 border-b saturate-150 backdrop-blur-[10px]">
      <div className="flex h-14 items-center justify-between px-8">
        <span className="text-ink font-sans font-semibold tracking-tight">
          josoe<span className="text-ochre">.</span>
        </span>
        <div className="flex items-center gap-4">
          <nav className="flex gap-6">
            {LINKS.map((link) => (
              <button
                key={link}
                onClick={() => onNav?.(link)}
                className={`cursor-pointer border-none bg-transparent p-0 font-sans text-sm ${
                  active === link ? "text-ochre" : "text-ink-2"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
          <button
            onClick={() => onTheme?.()}
            className="border-rule hover:bg-bg-sunken cursor-pointer rounded-sm border bg-transparent px-2.5 py-1 font-mono text-xs transition-colors"
          >
            {theme === "paper" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Replace the entire file with the compound component implementation**

Write the following to `components/nav.tsx`:

```tsx
"use client";

type NavLinkProps = {
  href: string;
  active?: boolean;
  onNav?: (href: string) => void;
  children: React.ReactNode;
};

type NavThemeToggleProps = {
  theme: "paper" | "ink";
  onTheme: () => void;
};

function Root({ children }: { children: React.ReactNode }) {
  return (
    <header className="border-rule sticky top-0 z-50 border-b saturate-150 backdrop-blur-[10px]">
      <div className="flex h-14 items-center justify-between px-8">
        {children}
      </div>
    </header>
  );
}

function Brand() {
  return (
    <span className="text-ink font-sans font-semibold tracking-tight">
      josoe<span className="text-ochre">.</span>
    </span>
  );
}

function Links({ children }: { children: React.ReactNode }) {
  return <nav className="flex gap-6">{children}</nav>;
}

function Link({ href, active, onNav, children }: NavLinkProps) {
  return (
    <button
      onClick={() => onNav?.(href)}
      className={`cursor-pointer border-none bg-transparent p-0 font-sans text-sm ${
        active ? "text-ochre" : "text-ink-2"
      }`}
    >
      {children}
    </button>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function ThemeToggle({ theme, onTheme }: NavThemeToggleProps) {
  return (
    <button
      onClick={onTheme}
      className="border-rule hover:bg-bg-sunken cursor-pointer rounded-sm border bg-transparent px-2.5 py-1 font-mono text-xs transition-colors"
    >
      {theme === "paper" ? "dark" : "light"}
    </button>
  );
}

export const Nav = { Root, Brand, Links, Link, Actions, ThemeToggle };
```

- [ ] **Step 3: Verify TypeScript compiles with no errors**

Run:

```bash
cd /Users/josoesantos/Projects/portifolio && npx tsc --noEmit
```

Expected: no output (zero errors).

- [ ] **Step 4: Commit**

```bash
git add components/nav.tsx
git commit -m "refactor(nav): convert to namespace compound component"
```

---

### Task 2: Rewrite `components/nav.stories.tsx` with per-sub-component stories

**Files:**

- Modify: `components/nav.stories.tsx`

- [ ] **Step 1: Replace the entire stories file**

Write the following to `components/nav.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./nav";

const meta: Meta = {
  title: "Components/Nav",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="essays" onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
  ),
};

export const WithActiveLink: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="essays" active onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
  ),
};

export const DarkTheme: StoryObj = {
  render: () => (
    <div data-theme="ink" className="bg-ink min-h-screen">
      <Nav.Root>
        <Nav.Brand />
        <Nav.Actions>
          <Nav.Links>
            <Nav.Link href="essays" active onNav={() => {}}>
              essays
            </Nav.Link>
            <Nav.Link href="projects" onNav={() => {}}>
              projects
            </Nav.Link>
            <Nav.Link href="now" onNav={() => {}}>
              now
            </Nav.Link>
          </Nav.Links>
          <Nav.ThemeToggle theme="ink" onTheme={() => {}} />
        </Nav.Actions>
      </Nav.Root>
    </div>
  ),
};

export const BrandOnly: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
    </Nav.Root>
  ),
};

export const LinkActive: StoryObj = {
  render: () => (
    <Nav.Link href="essays" active onNav={() => {}}>
      essays
    </Nav.Link>
  ),
};

export const LinkInactive: StoryObj = {
  render: () => (
    <Nav.Link href="essays" onNav={() => {}}>
      essays
    </Nav.Link>
  ),
};
```

- [ ] **Step 2: Start Storybook and verify stories render correctly**

Run:

```bash
cd /Users/josoesantos/Projects/portifolio && npm run storybook
```

Open `http://localhost:6006` and confirm:

- `Components/Nav/Default` renders full nav with no active link
- `Components/Nav/WithActiveLink` shows "essays" in ochre
- `Components/Nav/DarkTheme` renders on dark background with ink theme
- `Components/Nav/BrandOnly` shows only the header shell and logo
- `Components/Nav/LinkActive` shows a single ochre "essays" button
- `Components/Nav/LinkInactive` shows a single ink-2 "essays" button

- [ ] **Step 3: Commit**

```bash
git add components/nav.stories.tsx
git commit -m "feat(nav): add compound component stories"
```
