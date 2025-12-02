import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "app/lib/blog";
import { MDXContent } from "app/components/blog/MDXContent";
import { ShareButtons } from "app/components/blog/ShareButtons";
import { AuthorProfile } from "app/components/blog/AuthorProfile";
import { metaData } from "app/config";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-400 dark:text-neutral-400 hover:text-neutral-200 dark:hover:text-neutral-200 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        {/* Category Badge */}
        {category && (
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-neutral-800 dark:bg-neutral-800 text-neutral-200 dark:text-neutral-200 border border-neutral-700 dark:border-neutral-700">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-[1.1] tracking-tight text-neutral-100 dark:text-neutral-100">
          {title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400 dark:text-neutral-400 mb-8 pb-8 border-b border-neutral-700 dark:border-neutral-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <span className="text-neutral-600 dark:text-neutral-600">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
          {author && (
            <>
              <span className="text-neutral-600 dark:text-neutral-600">•</span>
              <span>By {author}</span>
            </>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-800 dark:bg-neutral-800 text-neutral-200 dark:text-neutral-200 border border-neutral-700 dark:border-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-[17px] prose-p:leading-[1.8] prose-p:mb-6
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:font-semibold prose-strong:text-foreground
          prose-code:text-sm prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800
          prose-ul:my-6 prose-ol:my-6 prose-li:my-2
          prose-blockquote:border-l-4 prose-blockquote:border-neutral-300 dark:prose-blockquote:border-neutral-700
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300
          prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8">
          <MDXContent source={post.content} />
        </div>
      </div>

      {/* Author Profile */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <AuthorProfile
          author={author || metaData.name}
          date={date}
          readingTime={readingTime}
        />
      </div>

      {/* Share Buttons Bottom */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="border-t border-neutral-700 dark:border-neutral-700 pt-8">
          <p className="text-sm text-neutral-400 dark:text-neutral-400 mb-4">
            Share this article:
          </p>
          <ShareButtons title={title} url={url} />
        </div>
      </div>
    </article>
  );
}
