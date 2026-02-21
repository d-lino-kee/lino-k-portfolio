'use client';

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur",
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "",
      ].join(" ")}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Lino Kee<span className="text-white/50">.Portfolio</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/d-lino-kee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="/resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Resume <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}