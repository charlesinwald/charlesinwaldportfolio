"use client";

import React from "react";
import { videos } from "./video-data";
import { Card, CardContent } from "@/components/ui/card";
import ThreeBackground from "app/components/ThreeBackground";
import { YouTubeComponent } from "app/components/youtube";

export default function Videos() {
  return (
    <>
      <ThreeBackground />
      <section className="py-12 bg-gruvbox-background/50 p-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gruvbox-primary">
            My YouTube Videos
          </h1>
          <p className="text-center text-gruvbox-secondary mb-12 text-lg max-w-2xl mx-auto">
            Check out my latest videos on software development, tutorials, and
            tech insights.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="bg-gruvbox-card border-gruvbox-border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <YouTubeComponent videoId={video.id} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gruvbox-primary mb-3">
                    {video.title}
                  </h2>
                  <p className="text-gruvbox-secondary flex-grow">
                    {video.description}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-gruvbox-primary hover:text-gruvbox-secondary font-medium transition-colors duration-200"
                  >
                    Watch on YouTube →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@charlesinwald"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gruvbox-primary text-gruvbox-background font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Subscribe on YouTube
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
