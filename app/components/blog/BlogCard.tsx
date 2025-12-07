import Link from "next/link"
import type { BlogPostMetadata } from "app/lib/blog"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"

interface BlogCardProps {
  post: BlogPostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-neutral-900/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800/60 dark:border-neutral-800/60 hover:border-neutral-700/80 dark:hover:border-neutral-700/80 shadow-lg hover:shadow-2xl hover:shadow-neutral-900/20 transition-all duration-500 ease-out hover:-translate-y-1">
        {post.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800/50 dark:bg-neutral-800/50">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
        )}
        <div className="flex-1 flex flex-col p-6 lg:p-7">
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.date} className="font-medium">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            <span className="text-neutral-700 dark:text-neutral-700">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{post.readingTime}</span>
            </div>
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-balance leading-tight text-neutral-100 dark:text-neutral-100 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-neutral-400 dark:text-neutral-400 mb-6 line-clamp-2 leading-relaxed text-pretty flex-1">{post.excerpt}</p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800/80 dark:bg-neutral-800/80 text-neutral-300 dark:text-neutral-300 border border-neutral-700/50 dark:border-neutral-700/50 hover:bg-neutral-800 dark:hover:bg-neutral-800 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800/60 dark:bg-neutral-800/60 text-neutral-400 dark:text-neutral-400">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-200 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </article>
    </Link>
  )
}
