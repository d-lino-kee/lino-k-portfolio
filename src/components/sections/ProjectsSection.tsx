"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

const filters = [
  "All Projects",
  "AI & ML",
  "Web Development",
  "Data",
  "Optimization",
  "Automation",
  "Product",
] as const;

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="pt-16 md:pt-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          A selection of projects across AI/ML, full-stack development, data, and
          automation.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              f === active
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/60">{p.subtitle}</div>
                <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                <div className="mt-1 text-xs text-white/50">{p.date}</div>
              </div>
            </div>

            <p className="mt-4 text-white/75 leading-relaxed">{p.description}</p>

            {p.highlights?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {p.links
                .filter((l) => l.href && l.href !== "#")
                .map((l) => (
                  <a
                    key={l.href + l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    {l.label} <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
