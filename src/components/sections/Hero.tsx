import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Typewriter from "../Typewriter";

export default function Hero() {
  return (
    <section id="about" className="pt-12 md:pt-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-white">Lino Kee</span>.
          </h1>

          <p className="mt-4 text-lg text-white/70 md:text-xl">
            I build{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              AI-driven software
            </span>{" "}
            that ships.
          </p>

          {/* Accent line like Mohammed’s */}
          <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

          {/* About card */}
          <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-white/80 leading-relaxed">
              I&apos;m a{" "}
              <span className="text-white">Management Engineering</span>{" "}
              student who builds AI systems end-to-end — from data pipelines and
              model prototypes to production backends and clean user experiences.
              I&apos;ve worked across{" "}
              <span className="text-white">computer vision</span>,{" "}
              <span className="text-white">LLM/RAG</span>, and analytics, and I
              love turning messy real-world problems into reliable products.
              <br />
              <br />
              Recently, I&apos;ve been leading{" "}
              <span className="text-white">FORTif.ai</span> at WAT.ai, combining
              real-time hazard detection with voice-enabled, human-friendly
              guidance for safer independent living.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <Pill>AI/ML</Pill>
              <Pill>Software Engineering</Pill>
              <Pill>Data Engineering</Pill>
              <Pill>Computer Vision</Pill>
              <Pill>RAG + LLMs</Pill>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              View Projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            {/* IMPORTANT: this won’t look good until you add /public/me.jpg */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/me.jpg"
                alt="Lino Kee"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70">
              Waterloo, ON • Management Engineering • AI/ML + SWE
            </div>
          </div>

          {/* subtle glow behind card */}
          <div
            aria-hidden
            className="pointer-events-none -z-10 mx-auto mt-[-18rem] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
          />
        </div>
      </div>

      <p className="mt-4 text-xl text-white/70 md:text-2xl">
        I&apos;m a{" "} 
        <Typewriter
          words={[
            "tech enthusiast",
            "builder",
            "AI/ML engineer",
            "software engineer",
            "data nerd"
          ]}

        />
      </p>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-white/80">
      {children}
    </span>
  );
}

