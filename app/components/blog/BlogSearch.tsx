"use client"

import type React from "react"

import { Search, X } from "lucide-react"
import { useState } from "react"

interface BlogSearchProps {
  onSearch: (query: string) => void
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 dark:text-neutral-500 group-focus-within:text-neutral-300 dark:group-focus-within:text-neutral-300 transition-colors duration-300" />

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          onSearch(e.target.value)
        }}
        placeholder="Search articles..."
        className="w-full pl-14 pr-14 py-4 border border-neutral-800/60 dark:border-neutral-800/60 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 backdrop-blur-sm text-neutral-100 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700/50 dark:focus:ring-neutral-700/50 focus:border-neutral-700/80 dark:focus:border-neutral-700/80 transition-all duration-300 shadow-lg"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-black dark:text-white transition-colors duration-200"
          aria-label="Clear search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </form>
  )
}
