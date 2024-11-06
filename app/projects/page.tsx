import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gruvbox-foreground mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              <Card
                key={index}
                className="bg-gruvbox-card rounded-lg shadow-md hover:shadow-xl transition-shadow  flex flex-col duration-300"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  className="rounded-t-lg"
                  width={400}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
                <CardContent className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold text-gruvbox-primary">
                    {project.title}
                  </h2>
                  <p className="text-gruvbox-secondary mt-2 flex-grow">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
