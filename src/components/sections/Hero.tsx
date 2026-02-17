import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="pt-14 md:pt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I’m <span className="text-white">Lino Kee</span>.
          </h1>

          <p className="mt-4 text-2xl font-semibold text-white/80 md:text-3xl">
            I build{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-driven software
            </span>{" "}
            that ships.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 leading-relaxed">
              I’m a <span className="text-white">Management Engineering</span>{" "}
              student who builds AI systems end-to-end — from data pipelines and
              model prototypes to production backends and clean user experiences.
              I’ve worked across{" "}
              <span className="text-white">computer vision</span>,{" "}
              <span className="text-white">LLM/RAG</span>, and analytics, and I
              love turning messy real-world problems into reliable products.
              <br />
              <br />
              Recently, I’ve been leading <span className="text-white">FORTif.ai</span>{" "}
              at WAT.ai, combining real-time hazard detection with voice-enabled,
              human-friendly guidance for safer independent living.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <Pill>AI/ML</Pill>
              <Pill>Software Engineering</Pill>
              <Pill>Data Engineering</Pill>
              <Pill>Computer Vision</Pill>
              <Pill>RAG + LLMs</Pill>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15"
            >
              View Projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-3">
          {/* Put your image at /public/me.jpg (or change path) */}
          <div className="aspect-[4/5] w-full rounded-xl bg-[url('/me.jpg')] bg-cover bg-center" />
          <div className="mt-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70">
            Waterloo, ON • Management Engineering • AI/ML + SWE
          </div>
        </div>
      </div>
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
