"use client";

import FadeIn from "../FadeIn";

const stats = [
  {
    value: "10+",
    label: "Projects",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    value: "5+",
    label: "Certificates",
    color: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: "3+",
    label: "Years Experience",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section style={{ padding: "80px 0 16px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  borderRadius: "var(--card-radius)",
                  border: "2px solid var(--surface-border)",
                  background: "var(--surface)",
                  padding: "24px 28px",
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    flexShrink: 0,
                    borderRadius: 14,
                    background: stat.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>

                {/* Text */}
                <div>
                  <div style={{ fontSize: 38, fontWeight: 800, color: "var(--fg)", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 16, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: stat.color, flexShrink: 0, display: "inline-block" }} />
                    {stat.label}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
