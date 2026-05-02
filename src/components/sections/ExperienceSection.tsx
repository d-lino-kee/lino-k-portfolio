"use client";

import { useState } from "react";
import { experience, Experience } from "../../data/experience";
import { skills } from "../../data/skills";
import FadeIn from "../FadeIn";

type Category = "Frontend" | "Backend" | "Languages" | "Databases" | "AI & Data Science" | "Tools & DevOps";

const categoryClassName: Record<Category, string> = {
  "Frontend":          "skill-pill cat-frontend",
  "Backend":           "skill-pill cat-backend",
  "Languages":         "skill-pill cat-languages",
  "Databases":         "skill-pill cat-databases",
  "AI & Data Science": "skill-pill cat-ai",
  "Tools & DevOps":    "skill-pill cat-tools",
};

function getPillClass(skillName: string) {
  const match = skills.find(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  );
  if (!match) return "skill-pill cat-default";
  return categoryClassName[match.category as Category] ?? "skill-pill cat-default";
}

function CompanyLogo({ exp }: { exp: Experience }) {
  const [failed, setFailed] = useState(false);

  if (!exp.logo || failed) {
    return (
      <span style={{ fontSize: 26, fontWeight: 700, color: "var(--fg-muted)" }}>
        {exp.org.charAt(0)}
      </span>
    );
  }

  const scale = exp.logoScale ?? 1;
  const size = `${scale * 100}%`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={exp.logo}
      alt={exp.org}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 md:py-28">
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <FadeIn>
          <header className="mb-12 text-center">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Work Experience
            </h2>
          </header>
        </FadeIn>

        {/* Experience cards with timeline rail */}
        <div>
          {experience.map((exp, i) => {
            const dotColors = ["#22c55e", "#a855f7", "#f97316", "#ec4899", "#3b82f6"];
            const dotColor = dotColors[i % dotColors.length];
            const isLast = i === experience.length - 1;
            return (
            <div
              key={`${exp.org}-${exp.date}`}
              className="timeline-row"
              style={{
                position: "relative",
                display: "flex",
                gap: 24,
                marginBottom: isLast ? 0 : 40,
                ["--dot-color" as string]: dotColor,
              } as React.CSSProperties}
            >
              {/* Timeline rail (line + dot) */}
              <div style={{ width: 28, flexShrink: 0, position: "relative" }}>
                {!isLast && <div className="timeline-line" />}
                <div className="timeline-dot" />
              </div>

              {/* Card column */}
              <div style={{ flex: 1, minWidth: 0 }}>
            <FadeIn delay={i * 60}>
              <div
                className="timeline-card"
                style={{
                  borderRadius: "var(--card-radius)",
                  border: "2px solid var(--surface-border)",
                  background: "var(--surface)",
                  padding: "28px 32px",
                  transition: "border-color 0.35s ease, box-shadow 0.35s ease",
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
                          <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", lineHeight: 1.3, margin: 0 }}>
                            {mainTitle}
                          </h3>
                          {subtitle && (
                            <p style={{ fontSize: 16, fontWeight: 500, color: "var(--fg-muted)", marginTop: 2 }}>
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
                      fontSize: 15,
                      color: "var(--fg-subtle)",
                      letterSpacing: "0.04em",
                    }}>
                      {exp.date.replace("—", " - ")}
                    </p>

                    {/* Bullets */}
                    <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} style={{ display: "flex", gap: 8, fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)" }}>
                          <span style={{ marginTop: 2, flexShrink: 0, color: "var(--fg-subtle)" }}>•</span>
                          <span className="exp-bullet" dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>

                    {/* Skill pills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className={getPillClass(s)}
                            style={{
                              display: "inline-block",
                              padding: "7px 18px",
                              borderRadius: 999,
                              fontSize: 15,
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </FadeIn>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
