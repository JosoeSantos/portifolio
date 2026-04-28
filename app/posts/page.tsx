import { H1 } from "@/typography";

export default async function MainPostsPage() {
  return (
    <>
      <H1>My main posts :)</H1>
      <div className="grid">
        <a href="posts/my-blog-updates">
            Blog updates
        </a>
      </div>
    </>
  );
}
