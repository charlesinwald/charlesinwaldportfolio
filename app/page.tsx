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
} from "./WorkExperience";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-gruvbox-background text-gruvbox-foreground">
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
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
          I'm a full stack software developer with demonstrated expertise in both front-end and back-end development. Passionate about building efficient and scalable applications.
        </p>
      </div>

      <h2 className="mt-4 mb-6 text-2xl font-semibold text-center text-gruvbox-secondary">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[AppleExperience, NucleusExperience, SvadhiExperience, CiamtisExperience, TaExperience, EyExperience, OlympusExperience].map((experience, index) => (
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
                    <h3 className="font-bold text-lg text-gruvbox-primary">{experience.title}</h3>
                    <h4 className="text-md font-medium text-gruvbox-muted">{experience.jobTitle}</h4>
                  </div>
                </div>
                <CardDescription>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.descriptions.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
