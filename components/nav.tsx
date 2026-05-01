"use client";

import NextLink from "next/link";
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

function Root({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <header className="border-rule sticky top-0 z-50 border-b saturate-150 backdrop-blur-[10px]">
      <div className="flex items-center justify-between px-8 py-[14px]">
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

function Links({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <nav aria-label="Main" className="flex gap-[18px]">
      {children}
    </nav>
  );
}

function Link({ href, active, onNav, children }: Readonly<NavLinkProps>) {
  return (
    <NextLink
      href={href}
      onClick={() => onNav?.(href)}
      aria-current={active ? "page" : undefined}
      className={`font-sans text-sm no-underline ${
        active ? "text-ochre" : "text-ink-2"
      }`}
    >
      {children}
    </NextLink>
  );
}

function Actions({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function ThemeToggle({ theme, onTheme }: Readonly<NavThemeToggleProps>) {
  return (
    <Button
      variant="secondary"
      size="compact"
      className="text-ink-2"
      onClick={onTheme}
      aria-pressed={theme === "ink"}
    >
      {theme === "paper" ? "dark" : "light"}
    </Button>
  );
}

export const Nav = { Root, Brand, Links, Link, Actions, ThemeToggle };
