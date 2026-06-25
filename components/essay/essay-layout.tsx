import type React from "react";
import type { Post } from "@/posts/index";
import { EssayFoot } from "./essay-foot";
import { EssayHero } from "./essay-hero";
import { EssayPager } from "./essay-pager";
import { EssayStripe } from "./essay-stripe";

type EssayLayoutProps = {
  post: Post;
  previous: Post | null;
  next: Post | null;
  children: React.ReactNode;
};

export function EssayLayout({
  post,
  previous,
  next,
  children,
}: EssayLayoutProps) {
  const d = new Date(post.date);
  const year = String(d.getFullYear());
  const month = String(d.getMonth() + 1).padStart(2, "0");

  return (
    <div className="bg-paper text-ink min-h-screen">
      <EssayStripe year={year} month={month} number={post.number} />

      <EssayHero
        number={post.number}
        title={post.title}
        lead={post.lead}
        dateLong={post.dateLong}
        readingTime={post.readingTime}
        words={post.words}
        tags={post.tags}
        permalink={`/posts/${post.slug}`}
      />

      <main className="mx-auto max-w-[1280px] px-8 pt-14 pb-8">
        <article>{children}</article>
      </main>

      <EssayPager previous={previous} next={next} />
      <EssayFoot />
    </div>
  );
}
