import { getSortedBlogPosts } from "app/lib/blog";
import { BlogPageClient } from "app/components/blog/BlogPageClient";

export const metadata = {
  title: "Blog | Charles Inwald",
  description: "Articles and insights on web development, SEO, and digital strategy by Charles Inwald",
};

export default function BlogPage() {
  const allPosts = getSortedBlogPosts();

  return <BlogPageClient posts={allPosts} />;
}
