import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { CodeBlockWrapper } from "./CodeBlockWrapper"
import { Callout } from "./Callout"
import { InfographicRenderer } from "./InfographicRenderer"
import { BentoGrid, BentoGridItem } from "./BentoGrid"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl lg:text-4xl font-bold mt-12 mb-6 text-balance leading-tight text-neutral-100 dark:text-neutral-100 scroll-mt-20" id={props.id} {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-5 text-balance leading-tight text-neutral-100 dark:text-neutral-100 scroll-mt-20" id={props.id} {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl lg:text-2xl font-semibold mt-8 mb-4 text-balance leading-snug text-neutral-100 dark:text-neutral-100 scroll-mt-20" id={props.id} {...props} />
  ),
  h4: (props: any) => <h4 className="text-lg lg:text-xl font-semibold mt-6 mb-3 leading-snug text-neutral-100 dark:text-neutral-100 scroll-mt-20" id={props.id} {...props} />,

  p: (props: any) => <p className="mb-5 text-[17px] leading-[1.8] text-pretty text-neutral-200 dark:text-neutral-200" {...props} />,

  ul: (props: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2.5 text-neutral-200 dark:text-neutral-200" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2.5 text-neutral-200 dark:text-neutral-200" {...props} />,
  li: (props: any) => <li className="leading-[1.75] pl-2 marker:text-neutral-400 dark:marker:text-neutral-400" {...props} />,

  a: (props: any) => {
    const isExternal = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'))
    return (
      <a
        className="text-blue-400 dark:text-blue-400 hover:text-blue-300 dark:hover:text-blue-300 font-medium underline decoration-blue-500/50 dark:decoration-blue-500/50 hover:decoration-blue-400 dark:hover:decoration-blue-400 underline-offset-2 transition-all duration-150"
        {...props}
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })}
      />
    )
  },

  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-neutral-500 dark:border-neutral-500 pl-6 py-3 my-8 text-neutral-300 dark:text-neutral-300 bg-neutral-800/50 dark:bg-neutral-800/50 rounded-r-lg italic"
      {...props}
    />
  ),

  code: (props: any) => {
    // Check if it's inside a pre tag (code block)
    if (props.className) {
      // This is a code block
      return <CodeBlockWrapper className={props.className}>{props.children}</CodeBlockWrapper>
    }
    // Inline code
    return (
      <code
        className="bg-neutral-800 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100 px-1.5 py-0.5 rounded text-[0.9em] font-mono border border-neutral-700 dark:border-neutral-700"
        {...props}
      />
    )
  },

  pre: (props: any) => {
    // Just pass through - the code element will handle the styling
    return <>{props.children}</>
  },

  img: (props: any) => {
    const { src, alt, ...rest } = props
    // Extract width and height if provided, otherwise use defaults
    const width = props.width ? parseInt(props.width) : 1200
    const height = props.height ? parseInt(props.height) : 600

    return (
      <div className="relative w-full my-10">
        <Image
          src={src}
          alt={alt || "Blog content image"}
          width={width}
          height={height}
          className="rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 w-full h-auto"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          quality={90}
        />
        {alt && (
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-500 mt-3 italic">
            {alt}
          </p>
        )}
      </div>
    )
  },

  strong: (props: any) => <strong className="font-bold text-neutral-100 dark:text-neutral-100" {...props} />,
  em: (props: any) => <em className="italic text-neutral-200 dark:text-neutral-200" {...props} />,

  hr: (props: any) => <hr className="my-12 border-neutral-700 dark:border-neutral-700" {...props} />,

  div: (props: any) => {
    // Preserve all props including className, id, style, etc.
    // This allows nested divs and custom styling
    // Handle both className (JSX) and class (HTML) attributes
    const { className, class: classAttr, ...rest } = props
    const finalClassName = className || classAttr
    return <div className={finalClassName} {...rest} />
  },

  table: (props: any) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-neutral-700 dark:border-neutral-700 shadow-sm">
      <table className="min-w-full divide-y divide-neutral-700 dark:divide-neutral-700" {...props} />
    </div>
  ),
  th: (props: any) => <th className="px-6 py-3 text-left text-sm font-semibold bg-neutral-800 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100" {...props} />,
  td: (props: any) => <td className="px-6 py-4 border-t border-neutral-700 dark:border-neutral-700 text-neutral-200 dark:text-neutral-200 text-sm" {...props} />,

  Callout,
  Infographic: InfographicRenderer,
  BentoGrid,
  BentoGridItem,
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Link,
}

interface MDXContentProps {
  source: string
}

export async function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
        },
      }}
    />
  )
}
