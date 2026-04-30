"use client";

import NextLink from "next/link";

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
    <NextLink
      href={href}
      onClick={() => onNav?.(href)}
      aria-current={active ? "page" : undefined}
      className={`font-sans text-sm no-underline ${active ? "text-ochre" : "text-ink-2"}`}
    >
      {children}
    </NextLink>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function ThemeToggle({ theme, onTheme }: NavThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onTheme}
      aria-pressed={theme === "ink"}
      className="font-mono text-xs border border-rule rounded-sm px-2.5 py-1 hover:bg-bg-sunken transition-colors cursor-pointer bg-transparent"
    >
      {theme === "paper" ? "dark" : "light"}
    </button>
  );
}

export const Nav = { Root, Brand, Links, Link, Actions, ThemeToggle };
