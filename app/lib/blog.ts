import fs from "fs";
import path from "path";

export interface BlogPostMetadata {
  title: string;
  date: string;
  description?: string;
  excerpt?: string;
  summary?: string;
  author?: string;
  category?: string;
  tags: string[];
  image?: string;
  slug: string;
  readingTime: string;
  keywords?: string;
  publishedAt?: string;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  content: string;
  slug: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("No frontmatter found in file");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Record<string, any> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value: any = valueArr.join(": ").trim();

    // Remove quotes
    value = value.replace(/^['"](.*)['"]$/, "$1");

    // Handle arrays (tags)
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item: string) => item.trim().replace(/^['"](.*)['"]$/, "$1"));
    }

    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

function normalizeTags(tags: any): string[] {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === "string") {
    // Handle comma-separated tags
    return tags.split(",").map((tag) => tag.trim());
  }
  return [];
}

function normalizeMetadata(metadata: Record<string, any>, slug: string, content: string): BlogPostMetadata {
  // Support both old and new metadata formats
  const date = metadata.date || metadata.publishedAt || new Date().toISOString();
  const description = metadata.description || metadata.summary || metadata.excerpt || "";
  const tags = normalizeTags(metadata.tags);

  return {
    title: metadata.title || "Untitled",
    date,
    publishedAt: date,
    description,
    excerpt: description,
    summary: description,
    author: metadata.author || "Charles Inwald",
    category: metadata.category || "General",
    tags,
    image: metadata.image,
    slug,
    readingTime: calculateReadingTime(content),
    keywords: metadata.keywords,
  };
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): { metadata: Record<string, any>; content: string } {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getAllBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(contentDir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(contentDir, file));
    const slug = path.basename(file, path.extname(file));
    const normalizedMetadata = normalizeMetadata(metadata, slug, content);

    return {
      metadata: normalizedMetadata,
      content,
      slug,
    };
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function formatDate(date: string): string {
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getSortedBlogPosts(): BlogPost[] {
  const posts = getAllBlogPosts();

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter((post) =>
    post.metadata.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.metadata.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
