"use client";

import { skills } from "../../data/skills";
import FadeIn from "../FadeIn";

const categories = ["Frontend", "Backend", "Languages", "Databases", "AI & Data Science", "Tools & DevOps"] as const;
type Category = (typeof categories)[number];

const categoryAccent: Record<Category, string> = {
  Frontend:            "#8b5cf6",
  Backend:             "#8b5cf6",
  Languages:           "#8b5cf6",
  Databases:           "#8b5cf6",
  "AI & Data Science": "#8b5cf6",
  "Tools & DevOps":    "#8b5cf6",
};

export default function TechStack() {
  return (
    <section id="tech" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>

      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Skills
        </h2>
      </header>

      {/* Category cards — 3-column on desktop like the reference */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {categories.map((cat, catIdx) => {
          const items = skills.filter((s) => s.category === cat);
          if (!items.length) return null;

          return (
            <FadeIn key={cat} delay={catIdx * 100}>
              <div
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  padding: 24,
                }}
              >
                {/* Category label with accent bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 28,
                      height: 3,
                      borderRadius: 4,
                      background: categoryAccent[cat],
                    }}
                  />
                  <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>
                    {cat}
                  </h3>
                </div>

                {/* Icon grid — 3 columns */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 12,
                  }}
                >
                  {items.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "12px 4px",
      }}
    >
      {/* Icon container — dark rounded square like the reference */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/tech/${skill.icon}.svg`}
          alt={skill.name}
          style={{
            width: 28,
            height: 28,
            objectFit: "contain",
          }}
        />
      </div>
      {/* Name */}
      <span
        style={{
          textAlign: "center",
          fontSize: 11,
          fontWeight: 500,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.2,
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}
