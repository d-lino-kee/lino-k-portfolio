"use client";

import { useState } from "react";
import { experience, Experience } from "../../data/experience";
import { skills } from "../../data/skills";
import FadeIn from "../FadeIn";

type Category = "Frontend" | "Backend" | "Languages" | "Databases" | "AI & Data Science" | "Tools & DevOps";

const categoryStyle: Record<Category, { border: string; background: string; color: string }> = {
  "Frontend":          { border: "rgba(96,165,250,0.35)",  background: "rgba(96,165,250,0.10)",  color: "rgba(147,197,253,0.9)"  },
  "Backend":           { border: "rgba(52,211,153,0.35)",  background: "rgba(52,211,153,0.10)",  color: "rgba(110,231,183,0.9)"  },
  "Languages":         { border: "rgba(167,139,250,0.35)", background: "rgba(167,139,250,0.10)", color: "rgba(196,181,253,0.9)"  },
  "Databases":         { border: "rgba(251,146,60,0.35)",  background: "rgba(251,146,60,0.10)",  color: "rgba(253,186,116,0.9)"  },
  "AI & Data Science": { border: "rgba(244,114,182,0.35)", background: "rgba(244,114,182,0.10)", color: "rgba(249,168,212,0.9)"  },
  "Tools & DevOps":    { border: "rgba(148,163,184,0.35)", background: "rgba(148,163,184,0.10)", color: "rgba(203,213,225,0.9)"  },
};

const defaultStyle = { border: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)" };

function getPillStyle(skillName: string) {
  const match = skills.find(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  );
  if (!match) return defaultStyle;
  return categoryStyle[match.category as Category] ?? defaultStyle;
}

function CompanyLogo({ exp }: { exp: Experience }) {
  const [failed, setFailed] = useState(false);

  if (!exp.logo || failed) {
    return (
      <span style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
        {exp.org.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={exp.logo}
      alt={exp.org}
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[950px] px-6">

        {/* Header */}
        <FadeIn>
          <header className="mb-12 text-center">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Work Experience
            </h2>
          </header>
        </FadeIn>

        {/* Experience cards */}
        <div>
          {experience.map((exp, i) => (
            <div key={`${exp.org}-${exp.date}`} style={{ marginBottom: i < experience.length - 1 ? "40px" : 0 }}>
            <FadeIn delay={i * 60}>
              <div
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "#0d0d0d",
                  padding: "28px 32px",
                }}
              >
                <div className="flex items-start">

                  {/* Company logo column */}
                  <div style={{ width: 160, flexShrink: 0, display: "flex", justifyContent: "flex-start", paddingTop: 16 }}>
                    <div
                      style={{
                        width: 134,
                        height: 134,
                        borderRadius: "28px",
                        overflow: "hidden",
                        background: "#1a1a2e",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CompanyLogo exp={exp} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>

                    {/* Title — split at " — " for two-line display */}
                    {(() => {
                      const parts = exp.role.split(" — ");
                      const mainTitle = parts[0];
                      const subtitle = parts[1];
                      return (
                        <div style={{ margin: 0 }}>
                          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", lineHeight: 1.3, margin: 0 }}>
                            {mainTitle}
                          </h3>
                          {subtitle && (
                            <p style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                              {exp.roleIcon && <span style={{ marginRight: 6 }}>{exp.roleIcon}</span>}
                              {subtitle}
                            </p>
                          )}
                        </div>
                      );
                    })()}

                    {/* Date */}
                    <p style={{
                      marginTop: 6,
                      fontFamily: "monospace",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.04em",
                    }}>
                      {exp.date.replace("—", " - ")}
                    </p>

                    {/* Bullets */}
                    <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} style={{ display: "flex", gap: 8, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>
                          <span style={{ marginTop: 2, flexShrink: 0, color: "rgba(255,255,255,0.25)" }}>•</span>
                          <span className="exp-bullet" dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>

                    {/* Skill pills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {exp.skills.map((s) => {
                          const pill = getPillStyle(s);
                          return (
                            <span
                              key={s}
                              style={{
                                display: "inline-block",
                                padding: "7px 18px",
                                borderRadius: 999,
                                border: `1px solid ${pill.border}`,
                                background: pill.background,
                                fontSize: 13,
                                fontWeight: 500,
                                color: pill.color,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {s}
                            </span>
                          );
                        })}
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
