import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "app/lib/blog";
import { MDXContent } from "app/components/blog/MDXContent";
import { ShareButtons } from "app/components/blog/ShareButtons";
import { AuthorProfile } from "app/components/blog/AuthorProfile";
import { metaData } from "app/config";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    date,
    description,
    image,
    keywords,
    author,
  } = post.metadata;

  const ogImage = image || `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;
  const url = `${metaData.baseUrl}/blog/${post.slug}`;

  return {
    title: `${title} | ${metaData.name}`,
    description: description,
    keywords: keywords,
    authors: [{ name: author || metaData.name }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url,
      images: [{ url: ogImage }],
      authors: [author || metaData.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@charlesinwald",
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, date, author, readingTime, tags, description, category } = post.metadata;
  const url = `${metaData.baseUrl}/blog/${post.slug}`;

  return (
    <article className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: post.metadata.image,
            datePublished: date,
            dateModified: date,
            author: {
              "@type": "Person",
              name: author || metaData.name,
            },
            publisher: {
              "@type": "Organization",
              name: metaData.name,
              logo: {
                "@type": "ImageObject",
                url: `${metaData.baseUrl}/logo.png`,
              },
            },
            url,
            keywords: post.metadata.keywords,
            articleSection: category,
          }),
        }}
      />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-500 hover:text-neutral-200 dark:hover:text-neutral-200 transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm font-medium">Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        {/* Category Badge */}
        {category && (
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900/80 dark:bg-neutral-900/80 text-neutral-300 dark:text-neutral-300 border border-neutral-800/60 dark:border-neutral-800/60 backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 text-balance leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-50 dark:via-neutral-100 dark:to-neutral-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 dark:text-neutral-400 mb-10 pb-10 border-b border-neutral-800/60 dark:border-neutral-800/60">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neutral-500 dark:text-neutral-500" />
            <time dateTime={date} className="font-medium">{formatDate(date)}</time>
          </div>
          <span className="text-neutral-700 dark:text-neutral-700">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-neutral-500 dark:text-neutral-500" />
            <span className="font-medium">{readingTime}</span>
          </div>
          {author && (
            <>
              <span className="text-neutral-700 dark:text-neutral-700">•</span>
              <span className="font-medium">By {author}</span>
            </>
          )}
        </div>

        {/* Tags */}
        {/* {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900/60 dark:bg-neutral-900/60 text-neutral-300 dark:text-neutral-300 border border-neutral-800/60 dark:border-neutral-800/60 hover:bg-neutral-900/80 dark:hover:bg-neutral-900/80 hover:border-neutral-700/80 dark:hover:border-neutral-700/80 transition-all duration-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:text-neutral-100 dark:prose-headings:text-neutral-100 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-300 dark:prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-neutral-200 dark:prose-a:text-neutral-200 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-200 dark:prose-strong:text-neutral-200 prose-code:text-neutral-300 dark:prose-code:text-neutral-300 prose-pre:bg-neutral-900/80 dark:prose-pre:bg-neutral-900/80 prose-pre:border prose-pre:border-neutral-800/60 dark:prose-pre:border-neutral-800/60">
          <Image src={post.metadata.image || ""} alt="Small business website UI transformation showing improved design" width={1000} height={1000} />
          <MDXContent source={post.content} />
        </div>
      </div>

      {/* Author Profile */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="bg-neutral-900/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/60 dark:border-neutral-800/60 rounded-2xl p-8">
          <AuthorProfile
            author={author || metaData.name}
            date={date}
            readingTime={readingTime}
          />
        </div>
      </div>

      {/* Share Buttons Bottom */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="border-t border-neutral-800/60 dark:border-neutral-800/60 pt-10">
          <p className="text-sm text-neutral-400 dark:text-neutral-400 mb-6 font-medium">
            Share this article:
          </p>
          <ShareButtons title={title} url={url} />
        </div>
      </div>
    </article>
  );
}
