"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const usesSections = [
  {
    category: "Workstation",
    accent: "from-cyan-400 to-sky-500",
    icon: "🖥️",
    items: [
      {
        name: "Laptop",
        description:
          "I use a laptop for school assignments, coding practice, and project development. It is my main device for programming, research, and building portfolio work.",
      },
      {
        name: "Monitor",
        description:
          "A larger screen helps me stay focused when I am coding, reading documentation, or comparing multiple files and windows at the same time.",
      },
      {
        name: "Keyboard",
        description:
          "A comfortable keyboard makes long study sessions and programming work easier. I value something simple, reliable, and comfortable for daily use.",
      },
      {
        name: "Mouse",
        description:
          "I use a mouse that feels natural and responsive for both productivity work and general navigation during long computer sessions.",
      },
      {
        name: "Headphones",
        description:
          "Headphones help me stay focused while studying, watching lectures, listening to tutorials, or working in shared spaces.",
      },
    ],
  },
  {
    category: "Development tools",
    accent: "from-emerald-400 to-teal-500",
    icon: "🧠",
    items: [
      {
        name: "IntelliJ IDEA",
        description:
          "I use IntelliJ IDEA for Java development, class assignments, and object-oriented programming projects. It helps me stay organized when working with larger projects.",
      },
      {
        name: "VS Code",
        description:
          "VS Code is one of my go-to tools for web development, lighter coding tasks, and general editing. I like it for its speed and flexibility.",
      },
      {
        name: "GitHub",
        description:
          "I use GitHub to store projects, manage versions of my code, and keep track of my progress as I continue learning and building.",
      },
    ],
  },
  {
    category: "Design",
    accent: "from-pink-400 to-rose-500",
    icon: "🎨",
    items: [
      {
        name: "Figma",
        description:
          "I use Figma for wireframes, interface ideas, and collaborative design work. It is especially helpful when planning layouts before building them in code.",
      },
      {
        name: "Canva",
        description:
          "Canva is useful when I need to create presentation visuals, simple graphic content, or supporting design assets for school and portfolio work.",
      },
    ],
  },
  {
    category: "Productivity",
    accent: "from-violet-400 to-fuchsia-500",
    icon: "📂",
    items: [
      {
        name: "Notion",
        description:
          "I use Notion to organize tasks, notes, plans, and project ideas. It helps me keep both school work and personal development in one place.",
      },
      {
        name: "Google Drive",
        description:
          "Google Drive helps me store documents, access class materials, and keep important files available across different devices.",
      },
      {
        name: "Google Calendar",
        description:
          "I use Google Calendar to manage deadlines, study time, meetings, and personal schedules so I can stay consistent and prepared.",
      },
      {
        name: "Discord",
        description:
          "Discord is useful for communication, collaboration, and staying connected with classmates, friends, and project groups.",
      },
    ],
  },
];

function SectionPanel({ section }) {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-zinc-200/70 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)]">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${section.accent}`} />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
        <div className="space-y-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-lg shadow-black/10 ${section.accent}`}
          >
            {section.icon}
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Category
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {section.category}
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {item.name}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UsesClient() {
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
    <div className="min-h-screen relative overflow-hidden bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#081120] dark:text-zinc-100">
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
                      className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/uses"
                      className="text-cyan-600 dark:text-cyan-400 font-semibold"
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
                        className="px-6 py-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="px-6 py-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/projects"
                        className="px-6 py-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Projects
                      </Link>
                      <Link
                        href="/uses"
                        className="px-6 py-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Uses
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-4 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
              My setup
            </div>

            <h1 className="text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              Software I use, tools I rely on,
              <br />
              and systems that help me build.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Here is a look at the software, development tools, design platforms,
              and productivity apps I use most often. These are the things that help
              me study, build projects, stay organized, and keep improving.
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-8">
            {usesSections.map((section, index) => (
              <SectionPanel key={index} section={section} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-zinc-200/80 py-10 dark:border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-zinc-500 dark:text-zinc-400 sm:px-6 md:flex-row">
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/uses"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                Uses
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
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
