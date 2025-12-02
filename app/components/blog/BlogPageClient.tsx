"use client"

import { BlogCard } from "./BlogCard";
import { BlogSearch } from "./BlogSearch";
import { useState, useMemo } from "react";
import type { BlogPost } from "app/lib/blog";
import ThreeBackground from "app/components/ThreeBackground";

interface BlogPageClientProps {
  posts: BlogPost[];
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => {
      const searchableContent = [
        post.metadata.title,
        post.metadata.description,
        post.metadata.excerpt,
        post.metadata.summary,
        ...post.metadata.tags,
        post.metadata.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(query);
    });
  }, [posts, searchQuery]);

  return (
    <div className="min-h-screen py-12">
      <ThreeBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-8 bg-gruvbox-background text-gruvbox-foreground relative rounded-3xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Blog & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Exploring web development, SEO strategies, and digital marketing insights to help your business thrive online
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <BlogSearch onSearch={setSearchQuery} />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post.metadata} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchQuery
                ? `No blog posts found matching "${searchQuery}"`
                : "No blog posts found. Check back soon for new content!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
