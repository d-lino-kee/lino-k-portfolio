"use client";

import { ExternalLink } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import FadeIn from "../FadeIn";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
  </svg>
);

// Vibrant gradient + accent colour per project
const cardThemes: Record<string, { gradient: string; accent: string; pattern: string }> = {
  "FORTif.ai":                    { gradient: "linear-gradient(135deg,#064e3b 0%,#065f46 40%,#047857 100%)", accent: "#34d399", pattern: "radial" },
  "OptiTime AI":                  { gradient: "linear-gradient(135deg,#2e1065 0%,#4c1d95 45%,#6d28d9 100%)", accent: "#a78bfa", pattern: "grid" },
  "Car Recommender ML":           { gradient: "linear-gradient(135deg,#0c4a6e 0%,#075985 45%,#0284c7 100%)", accent: "#38bdf8", pattern: "dots" },
  "Awaaz":                        { gradient: "linear-gradient(135deg,#78350f 0%,#92400e 45%,#b45309 100%)", accent: "#fcd34d", pattern: "radial" },
  "Skill Swap Platform":          { gradient: "linear-gradient(135deg,#1e1b4b 0%,#312e81 45%,#3730a3 100%)", accent: "#818cf8", pattern: "grid" },
  "Court & Gridiron Outcome Lab": { gradient: "linear-gradient(135deg,#4c0519 0%,#881337 45%,#be123c 100%)", accent: "#fb7185", pattern: "dots" },
  "Movie Review Application":     { gradient: "linear-gradient(135deg,#0c4a6e 0%,#164e63 45%,#0e7490 100%)", accent: "#22d3ee", pattern: "radial" },
  "ERP & HR Process Automation":  { gradient: "linear-gradient(135deg,#451a03 0%,#78350f 45%,#92400e 100%)", accent: "#fb923c", pattern: "grid" },
  "Optimal Distribution Networks":{ gradient: "linear-gradient(135deg,#022c22 0%,#064e3b 45%,#065f46 100%)", accent: "#6ee7b7", pattern: "dots" },
};

function getTheme(title: string) {
  return cardThemes[title] ?? { gradient: "linear-gradient(135deg,#1e293b 0%,#0f172a 100%)", accent: "#94a3b8", pattern: "dots" };
}

function PatternOverlay({ type }: { type: string }) {
  if (type === "grid") return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.07,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
      backgroundSize: "28px 28px",
    }} />
  );
  if (type === "radial") return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.12,
      backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.7) 1px,transparent 1px)",
      backgroundSize: "22px 22px",
    }} />
  );
  // dots
  return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.09,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1.5px,transparent 1.5px)",
      backgroundSize: "18px 18px",
    }} />
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured || p.categories.includes("AI & ML") || p.categories.includes("Web Development")).slice(0, 6);
  const others = projects.filter((p) => !featured.includes(p));

  return (
    <section id="projects" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(129,140,248,0.7)" }}>
                Latest Projects
              </p>
              <h2 style={{ marginTop: 8, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, lineHeight: 1.2 }}>
                A selection of my software<br />work that I am proud of
              </h2>
            </div>
            <a
              href="https://github.com/d-lino-kee"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)",
                padding: "8px 16px", fontSize: 13, fontWeight: 500,
                color: "rgba(255,255,255,0.55)", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
            >
              <GitHubIcon />
              View GitHub
            </a>
          </div>
        </FadeIn>

        {/* Featured grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {featured.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 80} direction="scale">
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>

        {/* More projects */}
        {others.length > 0 && (
          <>
            <FadeIn>
              <div style={{ marginTop: 72, marginBottom: 32 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(251,191,36,0.7)" }}>
                  More Projects
                </p>
                <h3 style={{ marginTop: 8, fontSize: "clamp(1.2rem,2.5vw,1.75rem)", fontWeight: 700 }}>
                  Older experiments and personal builds
                </h3>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {others.map((p, idx) => (
                <FadeIn key={p.title} delay={idx * 80} direction="scale">
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const link = p.links?.find((l) => l.href && l.href !== "#");
  const theme = getTheme(p.title);

  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#0d0d0d",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Thumbnail area */}
      <div style={{ position: "relative", height: 200, background: theme.gradient, overflow: "hidden" }}>
        <PatternOverlay type={theme.pattern} />

        {/* Decorative glow orb */}
        <div style={{
          position: "absolute", width: 160, height: 160,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.accent}33 0%, transparent 70%)`,
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }} />

        {/* Big initial letter */}
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontSize: 80, fontWeight: 900, color: "rgba(255,255,255,0.08)",
            userSelect: "none", lineHeight: 1, letterSpacing: "-0.05em",
          }}>
            {p.title.charAt(0)}
          </span>
        </div>

        {/* Category tag — top left */}
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 999, padding: "3px 10px",
          fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.04em",
        }}>
          {p.categories[0]}
        </span>

        {/* External link — top right */}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{
              position: "absolute", top: 10, right: 10,
              width: 30, height: 30, borderRadius: 8,
              background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(255,255,255,0.6)", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(0,0,0,0.7)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "rgba(0,0,0,0.45)"; }}
          >
            <ExternalLink style={{ width: 13, height: 13 }} />
          </a>
        )}

        {/* Accent bar at bottom of thumbnail */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${theme.accent}88, transparent)`,
        }} />
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>
          {p.title}
        </h3>
        <p style={{ marginTop: 3, fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
          {p.subtitle}
        </p>
        <p style={{
          marginTop: 10, fontSize: 12.5, lineHeight: 1.65,
          color: "rgba(255,255,255,0.45)",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {p.description}
        </p>

        {/* Tech tags */}
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} style={{
              borderRadius: 999, border: "1px solid rgba(255,255,255,0.08)",
              padding: "2px 9px", fontSize: 10.5, color: "rgba(255,255,255,0.35)",
            }}>
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span style={{
              borderRadius: 999, border: "1px solid rgba(255,255,255,0.08)",
              padding: "2px 9px", fontSize: 10.5, color: "rgba(255,255,255,0.25)",
            }}>
              +{p.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
