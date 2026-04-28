import { H1 } from "@/typography";
import api from "../../singletons/api";

export default async function MainPostsPage() {
  api.sayHello();
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
