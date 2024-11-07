"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
import { MastersDegree, BachelorsDegree } from "./Education";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function Page() {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    document.body.appendChild(renderer.domElement);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      "/need_some_space/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.position.set(-50, -20, -30);
        model.scale.set(25, 25, 25);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the GLTF model:", error);
      }
    );

    camera.position.z = 5;

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onWindowResize);

    // Handle scroll event
    const onScroll = () => {
      const scrollY = window.scrollY;
      // camera.position.z = 5 + scrollY * 0.01;
      // rotate
      camera.rotation.x = scrollY * 0.0005;
      camera.rotation.y = scrollY * 0.0005;
    };
    window.addEventListener("scroll", onScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", onScroll);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto p-6 bg-gruvbox-background text-gruvbox-foreground relative rounded-3xl">
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
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
      <h2 className="mt-4 mb-6 text-2xl font-semibold text-center text-gruvbox-secondary">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          MastersDegree,
          BachelorsDegree          
        ].map((experience, index) => (
          <div className="mb-6" key={index}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gruvbox-card w-full h-full flex flex-col">
              <CardContent className="flex-grow">
                <div className="flex items-center mb-4" style={{ minHeight: '100px' }}>
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
    </section>
  );
}
