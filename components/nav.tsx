"use client";

import Link from "next/link";
import { useState } from "react";

interface NavRootProps {
  children: React.ReactNode;
}

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onNav?: () => void;
}

interface NavThemeToggleProps {
  theme: "paper" | "ink";
  onTheme: (theme: "paper" | "ink") => void;
}

const Root = ({ children }: NavRootProps) => (
  <nav className="flex items-center justify-between px-6 py-4">{children}</nav>
);

const Brand = () => (
  <Link href="/" className="font-sans text-base font-semibold tracking-[-0.02em]">
    Josoe.
  </Link>
);

const Links = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-6">{children}</div>
);

const LinkItem = ({ href, active, children, onNav }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onNav}
    className={`text-sm font-sans ${
      active ? "text-ochre font-bold" : "text-ink hover:text-ochre"
    }`}
  >
    {children}
  </Link>
);

const Actions = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">{children}</div>
);

const ThemeToggle = ({ theme, onTheme }: NavThemeToggleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => onTheme(theme === "paper" ? "ink" : "paper")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-sm font-sans text-ink hover:text-ochre"
    >
      {isHovered ? (theme === "paper" ? "dark" : "light") : theme}
    </button>
  );
};

export const Nav = {
  Root,
  Brand,
  Links,
  Link: LinkItem,
  Actions,
  ThemeToggle,
};
