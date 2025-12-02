"use client"

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
}

export function TagFilter({ tags = [], selectedTag, onTagSelect }: TagFilterProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      <button
        onClick={() => onTagSelect(null)}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedTag === null
            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
            : "bg-card text-foreground border border-border/50 hover:border-primary/50 hover:bg-secondary/50"
        }`}
      >
        All Posts
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTag === tag
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
              : "bg-card text-foreground border border-border/50 hover:border-primary/50 hover:bg-secondary/50 hover:scale-105"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
