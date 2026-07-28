export type VideoSource = "youtube" | "external";

export interface Video {
  title: string;
  description: string;
  source?: VideoSource;
  id?: string; // YouTube video ID
  url?: string; // External page URL (podcasts, etc.)
  thumbnail?: string;
  linkLabel?: string;
}

export const videos: Video[] = [
  {
    source: "youtube",
    id: "f42KupwkoDI",
    title: "Intro to Rust",
    description:
      "Ever wondered how Rust achieves memory safety without a garbage collector? In this session from NYC Code & Coffee, Charles Inwald and Liam Rust break down what makes Rust one of the most talked-about systems programming languages today.",
  },
  {
    source: "youtube",
    id: "SsCKnd8jj0A",
    title: "SEO for AI-Powered Search",
    description:
      "As AI-powered search systems like ChatGPT, Perplexity, and Claude reshape how people discover information, traditional SEO strategies need a major upgrade. In this 45-minute workshop from NJ Code & Coffee, I break down how to optimize your content for both search engines AND AI systems.",
  },
  {
    source: "youtube",
    id: "Z5dnlUfcd0g",
    title: "Intro to Web Graphics: From Pixels to Interactive 3D",
    description:
      "Come learn how to build interactive 3D graphics on the web with Javascript and Three.js.  This talk was given at NY Code and Coffee at Datadog.",
  },
  {
    source: "external",
    url: "https://globaledgemarkets.com/globaledgetalk/from-code-coffee-to-ai-ethics-community-creativity-and-careers/",
    title:
      "From Code & Coffee to AI Ethics: Community, Creativity, and Careers",
    description:
      "A conversation about running a tech community and AI's impact on ethics.",
    thumbnail:
      "https://globaledgemarkets.com/wp-content/uploads/2025/10/Israel-Santana-and-Charles-Inwald-2.png",
    linkLabel: "Listen on GlobalEdgeTalk",
  },
  {
    source: "youtube",
    id: "dlJH0x4fFDA",
    title: "Command Line Essentials",
    description:
      "Unlock the power of the command line with my comprehensive talk on 'Command Line Essentials', presented at New York Code and Coffee. This video is a must-watch for developers, IT professionals, and computer science students who want to master the Linux command line, dive deep into a variety of essential Linux commands, and gain insights into the workings of Unix systems.",
  },
  {
    source: "youtube",
    id: "vN54MJKBwm8",
    title: "NGINX Essentials: 3 Core Use Cases",
    description:
      "Learn the three fundamental ways NGINX powers the modern web. Whether you're deploying your first app or scaling to millions of users, understanding NGINX is essential for any backend developer.",
  },
  // Add more videos here
];
