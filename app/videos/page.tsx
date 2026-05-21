"use client";

import React from "react";
import Image from "next/image";
import { videos } from "./video-data";
import { Card, CardContent } from "@/components/ui/card";
import ThreeBackground from "app/components/ThreeBackground";
import { YouTubeComponent } from "app/components/youtube";

function isYouTubeVideo(video: (typeof videos)[number]) {
  return video.source !== "external" && video.id;
}

export default function Videos() {
  return (
    <>
      <ThreeBackground />
      <section className="py-12 bg-gruvbox-background/50 p-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gruvbox-primary">
            Videos & Talks
          </h1>
          <p className="text-center text-gruvbox-secondary mb-12 text-lg max-w-2xl mx-auto">
            Talks, podcast appearances, and videos on software development,
            community, and tech.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => {
              const youtube = isYouTubeVideo(video);
              const externalUrl = video.url;
              const linkHref = youtube
                ? `https://www.youtube.com/watch?v=${video.id}`
                : externalUrl;
              const linkLabel = youtube
                ? "Watch on YouTube →"
                : `${video.linkLabel ?? "Listen"} →`;

              return (
                <Card
                  key={youtube ? video.id : video.url ?? index}
                  className="bg-gruvbox-card border-gruvbox-border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      {youtube ? (
                        <YouTubeComponent videoId={video.id} />
                      ) : (
                        <a
                          href={externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block w-full overflow-hidden rounded-lg aspect-video bg-gruvbox-background"
                        >
                          {video.thumbnail ? (
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          ) : null}
                          <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gruvbox-primary text-gruvbox-background shadow-lg">
                              <svg
                                className="ml-1 h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold text-gruvbox-primary mb-3">
                      {video.title}
                    </h2>
                    <p className="text-gruvbox-secondary flex-grow">
                      {video.description}
                    </p>
                    {linkHref ? (
                      <a
                        href={linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-gruvbox-primary hover:text-gruvbox-secondary font-medium transition-colors duration-200"
                      >
                        {linkLabel}
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              );
            })}
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
