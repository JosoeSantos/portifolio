# Home Page Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder `app/home-page.tsx` with a real home page — Hero + recent writing section — using existing design system components and a static posts array.

**Architecture:** `home-page.tsx` stays `"use client"` and uses `useRouter` for the Hero's essays CTA. It renders the `Hero` component followed by a "recent writing" section built from a static `posts` array, with each `EssayRow` wrapped in a `next/link` `Link` for navigation. No components are created or modified.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, `next/navigation` (`useRouter`), `next/link` (`Link`).

---

### Task 1: Rewrite `app/home-page.tsx`

**Files:**
- Modify: `app/home-page.tsx`

- [ ] **Step 1: Open and read the current file**

Read `app/home-page.tsx` to confirm current contents before overwriting.

- [ ] **Step 2: Replace the file with the new implementation**

```tsx
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
        <div className="divide-rule divide-y">
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
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -40`

Expected: no TypeScript errors referencing `home-page.tsx`. Build warnings about other files are acceptable; errors are not.

- [ ] **Step 4: Verify the page renders in the browser**

Run the dev server: `npm run dev`

Open `http://localhost:3000` and confirm:
- Hero renders with name "Josoe Santos" and correct blurb
- "read essays" button is present and clicking it navigates to `/posts`
- "recent writing" section appears below the Hero with two rows
- Each row shows date, title, tags, and reading time
- Clicking a row navigates to the correct `/posts/[slug]` URL

- [ ] **Step 5: Commit**

```bash
git add app/home-page.tsx
git commit -m "feat(home): rewrite home page with Hero and recent writing section"
```
