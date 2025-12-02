"use client"

import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { highlight } from "sugar-high"

interface CodeBlockWrapperProps {
  children: string
  className?: string
  filename?: string
  language?: string
}

export function CodeBlockWrapper({
  children,
  className = "",
  filename,
  language
}: CodeBlockWrapperProps) {
  const [copied, setCopied] = useState(false)

  // Extract language from className (format: language-xxx)
  const match = /language-(\w+)/.exec(className)
  const lang = language || match?.[1] || "text"

  const code = String(children).replace(/\n$/, "")
  const highlighted = highlight(code)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="not-prose my-8 rounded-lg border border-neutral-700 dark:border-neutral-700 bg-neutral-900 dark:bg-neutral-900 overflow-hidden shadow-lg">
      <div className="flex items-center justify-between border-b border-neutral-800 dark:border-neutral-800 py-3 px-4 bg-neutral-800/50 dark:bg-neutral-800/50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/10 text-blue-400 rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-wide">
            {lang}
          </div>
          {filename && (
            <span className="text-neutral-400 dark:text-neutral-400 text-sm font-mono">{filename}</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className="p-5 overflow-x-auto bg-neutral-900 dark:bg-neutral-900">
        <code
          className="text-sm font-mono leading-relaxed text-neutral-100"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  )
}
