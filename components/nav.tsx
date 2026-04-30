"use client";

import { Button } from "./button";

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
    <header className="sticky top-0 z-50 backdrop-blur-[10px] saturate-150 border-b border-rule">
      <div className="flex items-center justify-between px-8 h-14">
        {children}
      </div>
    </header>
  );
}

function Brand() {
  return (
    <span className="font-sans font-semibold tracking-tight text-ink">
      josoe<span className="text-ochre">.</span>
    </span>
  );
}

function Links({ children }: { children: React.ReactNode }) {
  return <nav aria-label="Main" className="flex gap-6">{children}</nav>;
}

function Link({ href, active, onNav, children }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={() => onNav?.(href)}
      aria-current={active ? "page" : undefined}
      className={`font-sans text-sm cursor-pointer no-underline ${active ? "text-ochre" : "text-ink-2"}`}
    >
      {children}
    </a>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function ThemeToggle({ theme, onTheme }: NavThemeToggleProps) {
  return (
    <Button variant="ghost" onClick={onTheme}>
      {theme === "paper" ? "dark" : "light"}
    </Button>
  );
}

export const Nav = { Root, Brand, Links, Link, Actions, ThemeToggle };
