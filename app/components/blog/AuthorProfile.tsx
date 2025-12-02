import { User } from "lucide-react"

interface AuthorProfileProps {
  author: string
  date: string
  readingTime: string
}

export function AuthorProfile({ author, date, readingTime }: AuthorProfileProps) {
  return (
    <div className="flex items-center gap-4 py-8 border-y border-border/50">
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-border/50">
        {author === "Charles Inwald" ? (
          <img src="/blog/charles-inwald-profile.jpg" alt="Charles Inwald" className="w-14 h-14 rounded-full" />
        ) : (
          <User className="w-7 h-7 text-primary" />
        )}
      </div>

      <div className="flex-1">
        <div className="font-semibold text-foreground text-lg mb-1">{author}</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-border">•</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </div>
  )
}
