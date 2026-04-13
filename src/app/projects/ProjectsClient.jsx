"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Lawn Care Cost Calculator",
    description:
      "A Java application that calculates fertilizer needs, project cost, labor, and environmental impact based on lawn dimensions.",
    link: "https://github.com/Guzi-vert",
    badge: "Java",
    accent: "from-emerald-400 to-teal-500",
    icon: "🌱",
  },
  {
    title: "Fertilizer Catalog API",
    description:
      "A Python Flask API connected to SQLite that lets users search fertilizer data by type, brand, and price.",
    link: "https://github.com/Guzi-vert",
    badge: "Python",
    accent: "from-sky-400 to-blue-500",
    icon: "🧪",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js to showcase my background, projects, and technical growth.",
    link: "https://github.com/Guzi-vert",
    badge: "Next.js",
    accent: "from-cyan-400 to-violet-500",
    icon: "✨",
  },
  {
    title: "Recipe App Wireframe",
    description:
      "A Figma-based UI/UX project for a recipe sharing platform with profiles, pantry features, and recipe uploads.",
    link: "https://github.com/Guzi-vert",
    badge: "Design",
    accent: "from-pink-400 to-rose-500",
    icon: "🎨",
  },
  {
    title: "BlackJack Project",
    description:
      "A Java-based BlackJack assignment focused on object-oriented design, interfaces, and gameplay logic.",
    link: "https://github.com/Guzi-vert",
    badge: "OOP",
    accent: "from-amber-400 to-orange-500",
    icon: "♠️",
  },
  {
    title: "Summary Tool",
    description:
      "A Python project that fetches chapter summaries from an API and handles errors with cleaner debugging support.",
    link: "https://github.com/Guzi-vert",
    badge: "API",
    accent: "from-violet-400 to-fuchsia-500",
    icon: "📚",
  },
];

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

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-zinc-200/70 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/20 dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-lg shadow-black/10 ${project.accent}`}
        >
          {project.icon}
        </div>

        <span className="rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
          {project.badge}
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h2>

        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-6">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 transition-colors hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          <LinkIcon />
          <span>{project.link.replace("https://", "")}</span>
        </a>
      </div>
    </article>
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
    <div className="min-h-screen relative overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-[#081120] dark:text-zinc-100 transition-colors duration-300">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20 [background-image:linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        {/* Navigation */}
        <div className="sticky top-6 z-50 px-6 pt-6">
          <div className="max-w-lg mx-auto flex items-center gap-3">
            <div className="flex-1">
              {/* Desktop Menu */}
              <div className="hidden md:flex justify-center">
                <div className="w-full rounded-full border border-zinc-200/80 bg-white/75 px-8 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
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
                      className="text-cyan-600 dark:text-cyan-400 font-semibold"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/uses"
                      className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      Uses
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <div
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex cursor-pointer items-center justify-between rounded-full border border-zinc-200/80 bg-white/80 px-6 py-4 shadow-md backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]"
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
                  <div className="mt-2 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/95 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/95">
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
                      <Link
                        href="/contact"
                        className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 p-3.5 rounded-2xl border border-zinc-200/80 bg-white/80 shadow-md backdrop-blur-2xl transition-all hover:scale-105 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-20">
          {/* Header */}
          <section className="mb-16 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium tracking-wide text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Selected work
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.04] tracking-tight">
              Things I’ve made while
              <br />
              learning to build with purpose.
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Here are some of the projects I’ve worked on through school, coding
              assignments, design practice, and personal development. Each one has
              helped me improve my technical skills and understand how to build
              things more thoughtfully.
            </p>
          </section>

          {/* Grid */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-zinc-200/80 py-10 dark:border-white/10">
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
              <Link
                href="/contact"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="text-center md:text-right">
              © 2026 Gyojun Gu. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
