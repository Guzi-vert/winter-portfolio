"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      {/* Navigation */}
            {/* Navigation + Theme Toggle */}
      <div className="sticky top-6 z-50 px-6">
        <div className="max-w-md mx-auto flex items-center gap-3">

          {/* Navigation Bar */}
          <div className="flex-1">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center">
              <div className="bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 shadow-md dark:shadow-xl rounded-3xl px-8 py-3.5 backdrop-blur-xl w-full">
                <div className="flex items-center justify-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  <Link href="/" className="text-emerald-500 dark:text-emerald-400 font-semibold">Home</Link>
                  <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
                  <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</Link>
                  <Link href="/uses" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Uses</Link>
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

              {/* Mobile Dropdown */}
              {isMenuOpen && (
                <div className="mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-3xl shadow-xl overflow-hidden">
                  <div className="flex flex-col py-2 text-base font-medium text-zinc-700 dark:text-zinc-200">
                    <Link href="/" className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/projects" className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    <Link href="/uses" className="px-6 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Uses</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex-shrink-0 p-3.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column - Main Content */}
        <div className="lg:col-span-7 space-y-16">
          {/* Profile + Title */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Software engineer,<br />
                father, and<br />
                believer
              </h1>
            </div>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Ut et massa mi.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/gyojun-gu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-all hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/Guzi-vert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Articles */}
          <div className="space-y-14 pt-8">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-12 last:border-0 last:pb-0"
              >
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">December 26, 2023</div>
                <h2 className="text-2xl font-semibold mb-4 leading-snug">Lorem ipsum dolor sit amet consectetur</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                  maximus ante fermentum sit amet.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-5 space-y-10">
          {/* Stay up to date */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">✉️</span>
              <h3 className="font-semibold">Stay up to date</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-2xl px-5 py-3 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">💼</span>
              <h3 className="font-semibold">Work</h3>
            </div>
            <div className="space-y-7">
              {[
                { logoColor: "#4A154B", company: "Slack", role: "SOFTWARE ENGINEER", period: "2016 - Present" },
                { logoColor: "#1DB954", company: "Spotify", role: "SOFTWARE ENGINEER", period: "2014 - 2015" },
                { logoColor: "#FF9900", company: "Audible", role: "SOFTWARE ENGINEER", period: "2012 - 2013" },
                { logoColor: "#00A4EF", company: "Microsoft", role: "SOFTWARE ENGINEER", period: "2010 - 2011" },
              ].map((job, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex-shrink-0" style={{ backgroundColor: job.logoColor }} />
                  <div>
                    <div className="font-medium text-base">{job.company}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.role}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{job.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⚡</span>
              <h3 className="font-semibold">Skills</h3>
            </div>
            <div className="space-y-6">
              {[
                { skill: "HTML", percent: "85%" },
                { skill: "CSS", percent: "82%" },
                { skill: "JavaScript", percent: "90%" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{s.skill}</span>
                    <span className="text-zinc-400">{s.percent}</span>
                  </div>
                  <div className="h-2.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all"
                      style={{ width: s.percent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
