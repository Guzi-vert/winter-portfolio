"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Panel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-zinc-200/70 bg-white/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  );
}

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
                      className="text-cyan-600 dark:text-cyan-400 font-semibold"
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
        <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
          {/* Header */}
          <div className="mb-20 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium tracking-wide text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              About me
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              I’m Gyojun Gu.
              <br />
              I build my future through code.
            </h1>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              A computer science student focused on software development,
              artificial intelligence, and continuous growth.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Text */}
            <div className="space-y-10 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science student at Ensign College with a strong
                interest in software engineering and artificial intelligence. I
                enjoy understanding how systems work and using code to turn
                ideas into real projects.
              </p>

              <p>
                My experience includes Java, Python, JavaScript, and web
                development through academic assignments and personal work. I
                focus on building clean, practical solutions while steadily
                improving my problem-solving skills.
              </p>

              <p>
                My goal is to continue growing as a developer, build meaningful
                applications, and prepare for a future career in AI development.
              </p>
            </div>

            {/* Right Side */}
            <div className="space-y-10 lg:-mt-8">
              {/* Photo */}
              <Panel className="relative lg:-mt-4 overflow-visible">
                <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 opacity-20 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src="/about-profile.jpg"
                    alt="Gyojun Gu profile photo"
                    width={600}
                    height={700}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </Panel>

              {/* Social */}
              <Panel>
                <div className="mb-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                    Connect
                  </p>
                </div>

                <div className="space-y-5 text-base">
                  <a
                    href="https://github.com/Guzi-vert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-cyan-300"
                  >
                    <span className="text-lg">💻</span>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gyojun-gu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-cyan-300"
                  >
                    <span className="text-lg">🔗</span>
                    <span>LinkedIn</span>
                  </a>

                  <div className="border-t border-zinc-200 dark:border-white/10 pt-5">
                    <a
                      href="mailto:guzivert99@gmail.com"
                      className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-cyan-300"
                    >
                      <span className="text-lg">✉️</span>
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
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
