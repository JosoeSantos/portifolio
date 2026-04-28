export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("rendering", slug);
  const { default: Post } = await import(`../../../posts/${slug}.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "my-blog-updates" }];
}

export const dynamicParams = false;
