"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { EssayRow } from "@/components/essay-row";
import { Hero } from "@/components/hero";

type Post = {
  slug: string;
  date: string;
  title: string;
  tags: string[];
  readingTime: string;
};

const posts: Post[] = [
  {
    slug: "the-journey-towards-good-observability",
    date: "2026-01-01",
    title: "the journey towards good observability",
    tags: ["observability", "frontend"],
    readingTime: "5 min",
  },
  {
    slug: "my-blog-updates",
    date: "2021-01-01",
    title: "my blog updates",
    tags: ["meta"],
    readingTime: "2 min",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Hero
        name="Josoe Santos"
        blurb="I build complex, working software. writing about frontend, observability, and whatever else."
        onEssays={() => router.push("/posts")}
      />
      <section className="border-rule border-b px-8 py-12">
        <header className="mb-6 flex items-baseline justify-between">
          <h2 className="font-sans text-xl font-semibold tracking-[-0.01em]">
            recent writing
          </h2>
          <Link
            href="/posts"
            className="text-ink-3 hover:text-ink font-mono text-xs transition-colors"
          >
            all posts →
          </Link>
        </header>
        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block no-underline"
            >
              <EssayRow
                date={post.date}
                title={post.title}
                tags={post.tags}
                readingTime={post.readingTime}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
