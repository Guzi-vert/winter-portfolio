"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Lawn Care Cost Calculator",
    description:
      "A Java application that calculates fertilizer needs, project cost, labor, and environmental impact based on lawn dimensions.",
    link: "https://github.com/Guzi-vert",
  },
  {
    title: "Fertilizer Catalog API",
    description:
      "A Python Flask API connected to SQLite that lets users search fertilizer data by type, brand, and price.",
    link: "https://github.com/Guzi-vert",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js to showcase my background, projects, and technical growth.",
    link: "https://github.com/Guzi-vert",
  },
  {
    title: "Recipe App Wireframe",
    description:
      "A Figma-based UI/UX project for a recipe sharing platform with profiles, pantry features, and recipe uploads.",
    link: "https://github.com/Guzi-vert",
  },
  {
    title: "BlackJack Project",
    description:
      "A Java-based BlackJack assignment focused on object-oriented design, interfaces, and gameplay logic.",
    link: "https://github.com/Guzi-vert",
  },
  {
    title: "Summary Tool",
    description:
      "A Python project that fetches chapter summaries from an API and handles errors with cleaner debugging support.",
    link: "https://github.com/Guzi-vert",
  },
];

function ProjectIcon() {
  return (
    <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
      <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-sm">
        G
      </div>
    </div>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.8 5" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L12.2 19" />
    </svg>
  );
}

export default function ProjectsClient() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Navigation */}
      <div className="sticky top-6 z-50 px-5 sm:px-6">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <div className="flex-1">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center">
              <div className="w-full rounded-3xl border border-zinc-200 bg-white/90 px-8 py-3.5 shadow-md backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/90 dark:shadow-xl">
                <div className="flex items-center justify-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  <Link
                    href="/"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="font-semibold text-emerald-500 dark:text-emerald-400"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/uses"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Uses
                  </Link>
                  <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex cursor-pointer items-center justify-between rounded-3xl border border-zinc-200 bg-white/90 px-6 py-4 shadow-md dark:border-zinc-700 dark:bg-zinc-900/90 dark:shadow-xl"
              >
                <span className="font-medium text-zinc-900 dark:text-white">Menu</span>
                <span
                  className={`text-lg transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {isMenuOpen && (
                <div className="mt-2 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
                  <div className="flex flex-col py-2 text-base font-medium text-zinc-700 dark:text-zinc-200">
                    <Link
                      href="/"
                      className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/projects"
                      className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/uses"
                      className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Uses
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex-shrink-0 rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-6 md:pt-16">
        {/* Header */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
            Things I’ve made while learning to build with purpose.
          </h1>

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Here are some of the projects I’ve worked on through school, coding
            assignments, design practice, and personal development. Each one has
            helped me improve my technical skills and understand how to build
            things more thoughtfully.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 gap-x-14 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="space-y-5">
              <ProjectIcon />

              <div className="space-y-3">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                <LinkIcon />
                <span>{project.link.replace("https://", "")}</span>
              </a>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-zinc-500 dark:text-zinc-400 sm:px-6 md:flex-row">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/uses"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Uses
            </Link>
          </div>

          <div className="text-center md:text-right">
            © 2026 Gyojun Gu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
