import Link from "next/link";
import type { Post } from "@/posts/index";

type EssayPagerProps = {
  previous: Post | null;
  next: Post | null;
};

export function EssayPager({ previous, next }: EssayPagerProps) {
  return (
    <nav className="border-rule mx-auto grid max-w-[1280px] grid-cols-1 gap-4 border-t p-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/posts/${previous.slug}`}
          className="border-rule hover:border-rule-strong block rounded-md border px-4.5 py-4 transition-colors"
        >
          <div className="text-ink-3 mb-1 font-mono text-[11px]">
            ← previous · {previous.number}
          </div>
          <div className="text-ink font-sans text-base font-medium">
            {previous.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/posts/${next.slug}`}
          className="border-rule hover:border-rule-strong block rounded-md border px-4.5 py-4 text-right transition-colors"
        >
          <div className="text-ink-3 mb-1 font-mono text-[11px]">
            {next.number} · next →
          </div>
          <div className="text-ink font-sans text-base font-medium">
            {next.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
