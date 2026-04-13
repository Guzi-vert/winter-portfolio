"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Panel({ children }) {
  return (
    <div className="rounded-[30px] border border-zinc-200/70 bg-white/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)]">
      {children}
    </div>
  );
}

export default function ContactClient() {
  const [theme, setTheme] = useState("dark");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzvngjk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-[#081120] dark:text-zinc-100 transition-colors duration-300">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20 [background-image:linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">

        {/* NAV */}
        <div className="sticky top-6 z-50 px-6 pt-6">
          <div className="max-w-lg mx-auto flex items-center gap-3">
            <div className="flex-1 hidden md:flex justify-center">
              <div className="w-full rounded-full border border-zinc-200/80 bg-white/75 px-8 py-3.5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex justify-center gap-8 text-sm">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/projects">Projects</Link>
                  <Link href="/uses">Uses</Link>
                  <Link href="/contact" className="text-cyan-500 font-semibold">Contact</Link>
                </div>
              </div>
            </div>

            <button onClick={toggleTheme} className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.05]">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* MAIN */}
        <main className="max-w-3xl mx-auto px-6 pt-20 pb-24">

          {/* HEADER */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs tracking-wide text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Get in touch
            </div>

            <h1 className="text-5xl font-bold">
              Let’s build something together.
            </h1>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg">
              Have a question, project idea, or just want to connect?
              I’d love to hear from you.
            </p>
          </div>

          {/* FORM */}
          <Panel>
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full bg-white/80 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 rounded-xl px-5 py-4"
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full bg-white/80 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 rounded-xl px-5 py-4"
              />

              <input
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white/80 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 rounded-xl px-5 py-4"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your message..."
                required
                className="w-full bg-white/80 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 rounded-xl px-5 py-4"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

            {/* Status */}
            {submitStatus === "success" && (
              <p className="mt-6 text-green-500 text-center">
                Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="mt-6 text-red-500 text-center">
                Something went wrong. Try again.
              </p>
            )}
          </Panel>

        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
          © 2026 Gyojun Gu
        </footer>

      </div>
    </div>
  );
}
