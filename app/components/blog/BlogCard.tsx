import Link from "next/link"
import type { BlogPostMetadata } from "app/lib/blog"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"

interface BlogCardProps {
  post: BlogPostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 ease-out">
        {post.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}
        <div className="flex-1 flex flex-col p-6 lg:p-8">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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
            <span className="text-border">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{post.readingTime}</span>
            </div>
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-balance leading-tight group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed text-pretty flex-1">{post.excerpt}</p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </article>
    </Link>
  )
}
