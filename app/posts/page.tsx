"use client";

import { useRouter } from "next/navigation";
import { EssayRow } from "@/components/essay-row";
import { posts } from "@/posts/index";

export default function PostsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-[760px] px-4 py-12">
      <header className="mb-8">
        <h1 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight">
          writing
        </h1>
        <p className="text-ink-3 mt-1 font-mono text-xs">
          {posts.length} posts
        </p>
      </header>

      <div className="border-rule border-t">
        {posts.map((post) => (
          <EssayRow
            key={post.slug}
            date={post.date}
            title={post.title}
            tags={post.tags}
            readingTime={post.readingTime}
            onClick={() => router.push(`/posts/${post.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
