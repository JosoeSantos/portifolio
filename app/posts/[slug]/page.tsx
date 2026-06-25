import { notFound } from "next/navigation";
import { EssayLayout } from "@/components/essay";
import { getPostNeighbors, posts } from "@/posts/index";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { previous, next } = getPostNeighbors(slug);
  const { default: Post } = await import(`../../../posts/${slug}.mdx`);

  return (
    <EssayLayout post={post} previous={previous} next={next}>
      <Post />
    </EssayLayout>
  );
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} · josoe.`,
    description: post.description ?? post.lead,
  };
}
