"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    date: "Recent Project",
    title: "Portfolio Website",
    description:
      "Built with Next.js to present my background, projects, and development journey in a clean and responsive way.",
    link: "/projects",
    linkText: "View projects →",
  },
  {
    date: "Java Project",
    title: "BlackJack and Object-Oriented Programming",
    description:
      "Worked on Java assignments focused on object-oriented design, interfaces, class structure, and application logic.",
    link: "/projects",
    linkText: "See project work →",
  },
  {
    date: "Python & API Work",
    title: "Flask and Database Projects",
    description:
      "Built Python projects using Flask, SQLite, and APIs to practice backend logic, debugging, and data handling.",
    link: "/projects",
    linkText: "Explore more →",
  },
];

const workItems = [
  {
    color: "from-emerald-400 to-teal-500",
    icon: "💻",
    company: "Student Developer",
    role: "COMPUTER SCIENCE STUDENT",
    period: "2024 - Present",
  },
  {
    color: "from-sky-400 to-blue-500",
    icon: "📘",
    company: "Academic Projects",
    role: "JAVA / PYTHON DEVELOPMENT",
    period: "2024 - Present",
  },
  {
    color: "from-violet-400 to-purple-500",
    icon: "🚀",
    company: "Personal Projects",
    role: "WEB & API DEVELOPMENT",
    period: "2025 - Present",
  },
  {
    color: "from-amber-400 to-orange-500",
    icon: "🌐",
    company: "Portfolio Development",
    role: "NEXT.JS & FRONTEND",
    period: "2025 - Present",
  },
];

const skills = [
  { skill: "Java", percent: "85%" },
  { skill: "Python", percent: "80%" },
  { skill: "JavaScript", percent: "75%" },
  { skill: "Next.js", percent: "70%" },
  { skill: "SQL", percent: "70%" },
];

function Panel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-zinc-200/70 bg-white/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomeClient() {
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
      {/* Background effects */}
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
                    <Link href="/" className="text-cyan-600 dark:text-cyan-400 font-semibold">
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

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 p-3.5 rounded-2xl border border-zinc-200/80 bg-white/80 shadow-md backdrop-blur-2xl transition-all hover:scale-105 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-16">
            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Profile Photo"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium tracking-wide text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  Building toward AI development
                </div>

                <h1 className="text-5xl md:text-5xl font-bold leading-[1.02] tracking-tight">
                  Computer science student,
                  <br />
                  aspiring AI developer,
                  <br />
                  and problem solver
                </h1>
              </div>
            </div>

            <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed space-y-5">
              <p>
                I am a Computer Science student at Ensign College with a strong
                interest in software engineering and artificial intelligence. I enjoy
                learning how technology works and using code to turn ideas into real
                projects.
              </p>
              <p>
                I have experience working with Java, Python, JavaScript, SQL, and web
                technologies through coursework and personal projects. My goal is to
                keep building practical applications, strengthen my technical
                foundation, and prepare for a future career in AI development.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/gyojun-gu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>

              <a
                href="https://github.com/Guzi-vert"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40 dark:hover:text-violet-300"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            {/* Highlights */}
            <div className="space-y-10 pt-6">
              {highlights.map((item, index) => (
                <article
                  key={index}
                  className="relative rounded-[28px] border border-zinc-200/70 bg-white/55 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                    {item.date}
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 leading-snug">{item.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-300 font-medium hover:underline"
                  >
                    {item.linkText}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-5 space-y-10">
            {/* Work Experience */}
            <Panel>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                    Experience
                  </p>
                  <h3 className="font-semibold text-lg">Work</h3>
                </div>
              </div>

              <div className="relative space-y-7 before:absolute before:left-5 before:top-3 before:bottom-3 before:w-px before:bg-zinc-200 dark:before:bg-white/10">
                {workItems.map((job, i) => (
                  <div key={i} className="relative flex gap-4">
                    <div
                      className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg text-white bg-gradient-to-br ${job.color} shadow-lg shadow-black/10`}
                    >
                      <span>{job.icon}</span>
                    </div>

                    <div>
                      <div className="font-medium text-base">{job.company}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.role}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">{job.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Skills */}
            <Panel>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                    Capabilities
                  </p>
                  <h3 className="font-semibold text-lg">Skills</h3>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{s.skill}</span>
                      <span className="text-zinc-400">{s.percent}</span>
                    </div>
                    <div className="h-2.5 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 transition-all"
                        style={{ width: s.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-zinc-200/80 py-10 dark:border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-zinc-500 dark:text-zinc-400 sm:px-6 md:flex-row">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/uses" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Uses
              </Link>
              <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
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
