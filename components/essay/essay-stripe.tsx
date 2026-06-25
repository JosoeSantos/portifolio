"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

type EssayStripeProps = {
  year: string;
  month: string;
  number: string;
};

const NAV = [
  { href: "/", label: "home", segment: null as string | null },
  { href: "/posts", label: "essays", segment: "essays" },
  { href: "/projects", label: "projects", segment: "projects" },
  { href: "/now", label: "now", segment: "now" },
];

export function EssayStripe({ year, month, number }: EssayStripeProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="border-rule sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150 bg-paper/85">
      <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-8 py-3 font-mono text-xs text-ink-3">
        <Link href="/" className="font-sans text-sm font-semibold tracking-[-0.02em] text-ink">
          josoe<span className="text-ochre">.</span>
        </Link>
        <span className="text-ink-4">·</span>
        <span>essays</span>
        <span className="text-ink-4">/</span>
        <span>{year}</span>
        <span className="text-ink-4">/</span>
        <span>{month}</span>
        <span className="text-ink-4">/</span>
        <span className="text-ochre">{number}</span>

        <span className="flex-1" />

        {NAV.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink-4">·</span>}
            <Link
              href={item.href}
              className={
                item.segment === "essays"
                  ? "text-ochre"
                  : "text-ink-2 hover:text-ink"
              }
            >
              {item.label}
            </Link>
          </span>
        ))}
        <span className="text-ink-4">·</span>
        <button
          type="button"
          onClick={toggleTheme}
          className="border-rule rounded-sm border bg-transparent px-2.5 py-1 font-mono text-xs text-ink-2 hover:border-rule-strong hover:text-ink"
        >
          {theme === "paper" ? "ink" : "paper"}
        </button>
      </div>
    </div>
  );
}
