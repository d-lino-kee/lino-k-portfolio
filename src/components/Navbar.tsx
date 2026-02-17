import { Download, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
    { label: "about", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#about" className="text-lg font-semibold tracking-tight">
          Lino Kee
          <span className="ml-2 text-sm font-normal text-white/60">
            • Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
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
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 sm:inline-flex"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="/resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          >
            Resume <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}