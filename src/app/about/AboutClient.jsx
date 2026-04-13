"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutClient() {
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
                    className="font-semibold text-emerald-500 dark:text-emerald-400"
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
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div className="order-2 space-y-8 lg:order-1">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-5xl">
              I’m Gyojun Gu. I study computer science and build my future through
              code.
            </h1>

            <div className="max-w-xl space-y-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              <p>
                I am a Computer Science student at Ensign College with a strong
                interest in software engineering and artificial intelligence. I
                enjoy learning how technology works and using code to turn ideas
                into real projects.
              </p>

              <p>
                My experience includes programming assignments, web development,
                and problem solving through Java, Python, JavaScript, and modern
                development tools. I care about writing code that is clean,
                practical, and useful.
              </p>

              <p>
                I want to continue growing as a developer, build meaningful
                products, and prepare for a future career in AI development. For
                me, programming is not only a technical skill, but also a way to
                create, improve, and contribute.
              </p>

              <p>
                Beyond school and projects, I value steady growth, discipline,
                and purpose. I want my work to reflect both strong technical
                ability and the values that guide my life.
              </p>
            </div>

            {/* Mobile only: Social + Email */}
            <div className="space-y-8 pt-4 lg:hidden">
              <div className="space-y-5 text-base">
                <a
                  href="https://github.com/Guzi-vert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Follow me on GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gyojun-gu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  <span>Follow me on LinkedIn</span>
                </a>
              </div>

              <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <a
                  href="mailto:guzivert99@gmail.com"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                  <span>guzivert99@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: image + desktop social */}
          <div className="order-1 space-y-8 lg:order-2">
            <div className="overflow-hidden rounded-none border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl">
              <Image
                src="/about-profile.jpg"
                alt="Gyojun Gu profile photo"
                width={700}
                height={820}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Desktop only: Social + Email */}
            <div className="hidden space-y-8 lg:block">
              <div className="space-y-5 text-base">
                <a
                  href="https://github.com/Guzi-vert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Follow me on GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gyojun-gu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  <span>Follow me on LinkedIn</span>
                </a>
              </div>

              <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <a
                  href="mailto:guzivert99@gmail.com"
                  className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                  <span>guzivert99@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
