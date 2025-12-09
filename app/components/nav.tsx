"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData, socialLinks } from "../config";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const navItems = {
  // "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
  "/videos": { name: "Videos" },
  "/contact": { name: "Contact" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-4xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-6 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all text-xl hover:text-gruvbox-secondary dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-4 text-xl ml-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gruvbox-secondary dark:hover:text-neutral-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gruvbox-secondary dark:hover:text-neutral-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gruvbox-secondary dark:hover:text-neutral-200"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href={socialLinks.email}
              className="transition-all hover:text-gruvbox-secondary dark:hover:text-neutral-200"
              aria-label="Email"
            >
              <TbMailFilled />
            </a>
          </div>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </nav>
  );
}
