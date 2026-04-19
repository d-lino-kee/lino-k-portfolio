"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section id="contact" className="relative overflow-hidden pb-24 pt-20 md:pt-28">

      {/* Header */}
      <header className="relative mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30">
          Contact
        </p>
        <h2 className="mt-1.5 text-[1.75rem] font-semibold tracking-tight md:text-[2.25rem]">
          Let&apos;s build{" "}
          <span className="gradient-text">something great</span>.
        </h2>
      </header>

      {/* Contact cards */}
      <div className="relative grid gap-3 sm:grid-cols-3">
        <ContactCard
          href="mailto:you@example.com"
          platform="Email"
          handle="you@example.com"
          icon={<Mail className="h-4 w-4" />}
          available
          color="indigo"
        />
        <ContactCard
          href="https://github.com/d-lino-kee"
          platform="GitHub"
          handle="d-lino-kee"
          icon={<GitHubIcon />}
          external
          color="violet"
        />
        <ContactCard
          href="https://www.linkedin.com/"
          platform="LinkedIn"
          handle="Lino Kee"
          icon={<LinkedInIcon />}
          external
          color="sky"
        />
      </div>

      {/* Divider */}
      <div className="relative mt-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <span className="text-[11px] text-white/25">or send a message</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => { e.preventDefault(); setStatus("sent"); }}
        className="relative mt-8 space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" placeholder="John Doe" />
          <Field label="Email" placeholder="john@example.com" type="email" />
        </div>
        <Field label="Subject" placeholder="Internship · Collaboration · Project" />
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/30">
            Message
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell me what you're working on..."
            className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-indigo-400/35 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-400/15"
          />
        </div>
        <button
          type="submit"
          className={[
            "group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300",
            status === "sent"
              ? "border border-green-400/25 bg-green-400/[0.08] text-green-300"
              : "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-[0_0_32px_rgba(99,102,241,0.5)] hover:scale-105",
          ].join(" ")}
        >
          {status === "sent" ? "Sent!" : (
            <>
              Send message
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

const colorMap = {
  indigo: "hover:border-indigo-400/25 hover:shadow-[0_0_24px_rgba(99,102,241,0.1)] group-hover:text-indigo-400",
  violet: "hover:border-violet-400/25 hover:shadow-[0_0_24px_rgba(167,139,250,0.1)] group-hover:text-violet-400",
  sky: "hover:border-sky-400/25 hover:shadow-[0_0_24px_rgba(56,189,248,0.1)] group-hover:text-sky-400",
};

function ContactCard({
  href, platform, handle, icon, external = false, available = false, color = "indigo",
}: {
  href: string; platform: string; handle: string;
  icon: React.ReactNode; external?: boolean; available?: boolean; color?: keyof typeof colorMap;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:scale-[1.02] ${colorMap[color]}`}
    >
      <div className="flex items-start justify-between">
        <span className={`text-white/35 transition ${colorMap[color].split(" ").filter(c => c.startsWith("group-hover")).join(" ")}`}>
          {icon}
        </span>
        {available && (
          <span className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/[0.07] px-2 py-0.5 text-[10px] font-medium text-green-400/80">
            <span className="h-1 w-1 animate-pulse rounded-full bg-green-400" />
            Open
          </span>
        )}
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/28">
          {platform}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-white/68 transition group-hover:text-white">
          {handle}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-1 text-[11px] text-white/22 transition group-hover:translate-x-1">
        <span>Open</span>
        <ExternalLink className="h-2.5 w-2.5" />
      </div>
    </a>
  );
}

function Field({ label, placeholder, type = "text" }: {
  label: string; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/30">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-indigo-400/35 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-400/15"
      />
    </div>
  );
}
