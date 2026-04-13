"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const usesSections = [
  {
    category: "Workstation",
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

function UsesSection({ category, items }) {
  return (
    <section className="grid grid-cols-1 gap-8 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
      <div>
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {category}
        </h2>
      </div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {item.name}
            </h3>
            <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
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
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Navigation */}
      <div className="sticky top-6 z-50 px-5 sm:px-6">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="flex-1">
            {/* Desktop Menu */}
            <div className="hidden justify-center md:flex">
              <div className="w-full rounded-3xl border border-zinc-200 bg-white/90 px-8 py-3.5 shadow-md backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/90 dark:shadow-xl">
                <div className="flex items-center justify-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
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
                    className="font-semibold text-emerald-500 dark:text-emerald-400"
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
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Software I use, tools I rely on, and other things that help me build.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Here is a look at the software, development tools, design platforms,
            and productivity apps I use most often. These are the things that help
            me study, build projects, stay organized, and keep improving.
          </p>
        </section>

        {/* Uses sections */}
        <div className="space-y-14">
          {usesSections.map((section, index) => (
            <UsesSection
              key={index}
              category={section.category}
              items={section.items}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-200 py-10 dark:border-zinc-800">
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
          </div>

          <div className="text-center md:text-right">
            © 2026 Gyojun Gu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
