import React from "react";
import Image from "next/image";
import { socialLinks } from "./config";
import {
  AppleExperience,
  NucleusExperience,
  SvadhiExperience,
  CiamtisExperience,
  TaExperience,
  EyExperience,
  OlympusExperience,
  TrudeExperience,
} from "./WorkExperience";
import { MastersDegree, BachelorsDegree } from "./Education";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThreeBackground from "./components/ThreeBackground";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <ThreeBackground />
      <section className="max-w-5xl mx-auto p-6 bg-gruvbox-background text-gruvbox-foreground relative rounded-3xl">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            className="rounded-full bg-gruvbox-card block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>

        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center text-gruvbox-primary">
          Hey! I'm Charles
        </h1>

        <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto text-center leading-relaxed">
          <p className="text-xl text-gruvbox-foreground">
            I'm a full stack software developer with demonstrated expertise in
            both front-end and back-end development. Passionate about building
            efficient and scalable applications.
          </p>
        </div>

        <h2 className="mt-4 mb-6 text-2xl font-semibold text-center text-gruvbox-secondary">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            TrudeExperience,
            AppleExperience,
            NucleusExperience,
            SvadhiExperience,
            CiamtisExperience,
            TaExperience,
            EyExperience,
            OlympusExperience,
          ].map((experience, index) => (
            <div className="mb-6" key={index}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gruvbox-card w-full h-full flex flex-col">
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-4">
                    <Image
                      src={experience.imagePath}
                      alt={`${experience.title} logo`}
                      className="w-16 h-16 mr-4 rounded-xl"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="font-bold text-2xl text-gruvbox-primary">
                        {experience.title}
                      </h3>
                      <h4 className="text-md font-xl text-gruvbox-muted">
                        {experience.jobTitle}
                      </h4>
                    </div>
                  </div>
                  <CardDescription>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.descriptions.map((desc, descIndex) => (
                        <li className="text-lg" key={descIndex}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <Link href="/projects">
            <Button
              size="lg"
              className="group relative cursor-pointer bg-gradient-to-r from-gruvbox-primary via-gruvbox-primary/95 to-gruvbox-primary/90 hover:from-gruvbox-primary/90 hover:via-gruvbox-primary hover:to-gruvbox-primary/95 text-gruvbox-background font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-gruvbox-primary/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                See Projects
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gruvbox-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </Link>
        </div>
        <h2 className="mt-4 mb-6 text-2xl font-semibold text-center text-gruvbox-secondary">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[MastersDegree, BachelorsDegree].map((experience, index) => (
            <div className="mb-6" key={index}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gruvbox-card w-full h-full flex flex-col">
                <CardContent className="flex-grow">
                  <div
                    className="flex items-center mb-4"
                    style={{ minHeight: "100px" }}
                  >
                    <Image
                      src={experience.imagePath}
                      alt={`${experience.title} logo`}
                      className="w-16 h-16 mr-4 rounded-xl"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="font-bold text-2xl text-gruvbox-primary">
                        {experience.degree}
                      </h3>
                      <h4 className="text-md font-xl text-gruvbox-muted">
                        {experience.title}
                      </h4>
                    </div>
                  </div>
                  <CardDescription className="flex flex-col flex-grow items-start">
                    <ul className="list-disc list-inside space-y-2">
                      {experience.descriptions.map((desc, descIndex) => (
                        <li className="text-lg" key={descIndex}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <h2 className="mt-4 mb-6 text-2xl font-semibold text-center text-gruvbox-secondary">
          Volunteering
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gruvbox-card w-full h-full flex flex-col">
          <CardContent className="flex-grow">
            <div className="flex items-center mb-4">
              <Image
                src="/codeandcoffee.webp"
                alt="Code and Coffee"
                className="w-16 h-16 mr-4 rounded-xl"
                width={64}
                height={64}
              />
              <div>
                <h3 className="font-bold text-2xl text-gruvbox-primary">
                  Code and Coffee
                </h3>
                <h4 className="text-md font-xl text-gruvbox-muted">
                  Organizer, Instructor
                </h4>
              </div>
            </div>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-lg">
                  Code and Coffee is a community of developers who meet up to
                  code and drink coffee. Over 9000 members
                </li>
                <li className="text-lg">
                  Founded Speaking/Workshop Program, Organized hackathon, Given
                  20+ talks
                </li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
