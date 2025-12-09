export interface Video {
  id: string; // YouTube video ID
  title: string;
  description: string;
  thumbnail?: string; // Optional custom thumbnail, defaults to YouTube thumbnail
}

export const videos: Video[] = [
  {
    id: "SsCKnd8jj0A", // Replace with your actual video IDs
    title: "SEO for AI-Powered Search",
    description: "As AI-powered search systems like ChatGPT, Perplexity, and Claude reshape how people discover information, traditional SEO strategies need a major upgrade. In this 45-minute workshop from NJ Code & Coffee, I break down how to optimize your content for both search engines AND AI systems.",
  },
  {
    id: "dlJH0x4fFDA", // Replace with your actual video IDs
    title: "Command Line Essentials",
    description: "Unlock the power of the command line with our comprehensive talk on 'Command Line Essentials', presented at the renowned New York Code and Coffee meet-up. This video is a must-watch for developers, IT professionals, and computer science students who want to master the Linux command line, dive deep into a variety of essential Linux commands, and gain insights into the workings of Unix systems.",
  },
  {
    id: "vN54MJKBwm8", // Replace with your actual video IDs
    title: "NGINX Essentials: 3 Core Use Cases",
    description: "Learn the three fundamental ways NGINX powers the modern web. Whether you're deploying your first app or scaling to millions of users, understanding NGINX is essential for any backend developer.",
  },
  // Add more videos here
];
