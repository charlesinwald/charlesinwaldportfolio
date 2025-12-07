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
    <div className="min-h-screen py-16 sm:py-20">
      <ThreeBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-neutral-900/70 dark:bg-neutral-900/0 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
            <span className="bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 dark:text-neutral-400 max-w-3xl mx-auto text-pretty leading-relaxed">
            Exploring web development, SEO strategies, and digital marketing insights to help your business thrive online
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-16 max-w-2xl mx-auto">
          <BlogSearch onSearch={setSearchQuery} />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post.metadata} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 dark:text-neutral-500 text-lg">
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
