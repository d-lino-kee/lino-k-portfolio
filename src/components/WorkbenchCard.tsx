"use client";

import type { CSSProperties, ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   WorkbenchCard
   Self-contained editorial card with three stacked subsections:
     1. What Drives What I Build  — SVG node graph
     2. Currently Thinking About  — two hover-expand cards with ambient FX
     3. What's Next               — redacted paragraph + stuck progress bar
   Uses Tailwind only for layout/spacing. All FX are pure CSS + SVG.
   ═══════════════════════════════════════════════════════════════════════════ */

export default function WorkbenchCard() {
  return (
    <div
      className="workbench-card relative overflow-hidden"
      style={{
        borderRadius: "var(--card-radius)",
        border: "1px solid var(--surface-border)",
        background: "var(--surface)",
        padding: "32px 36px",
        color: "var(--fg)",
      }}
    >
      <DrivesSection />
      <Divider />
      <ThinkingSection />
      <Divider />
      <WhatsNextSection />

      <style dangerouslySetInnerHTML={{ __html: WORKBENCH_CSS }} />
    </div>
  );
}

/* ── Subsection 1 ─────────────────────────────────────────────────────────── */

function DrivesSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div>
        <h3
          className="wb-serif mb-4 text-2xl md:text-[1.9rem] leading-[1.15]"
          style={{ color: "#ffffff" }}
        >
          What Drives What I Build
        </h3>
        <p
          className="text-[15px] leading-[1.8]"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          Impact is the first question I ask when I build anything. Before the architecture,
          before the stack — I want to know whose life gets better and how. That instinct shows
          up in FORTif.ai, which helps seniors stay safe and independent, and Awaaz, which
          gives refugees a voice-first way to learn English when traditional tools leave them
          behind. Technology should serve people and their communities, not the other way
          around.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <NodeGraph />
      </div>
    </section>
  );
}

function NodeGraph() {
  const people = [
    { id: "seniors",  x: 80,  y: 70,  label: "Seniors",  drift: 1 },
    { id: "refugees", x: 80,  y: 160, label: "Refugees", drift: 2 },
    { id: "students", x: 80,  y: 250, label: "Students", drift: 3 },
  ];
  const projects = [
    { id: "fortif",    x: 360, y: 70,  label: "FORTif.ai",  drift: 4 },
    { id: "awaaz",     x: 360, y: 160, label: "Awaaz",      drift: 5 },
    { id: "skillswap", x: 360, y: 250, label: "Skill Swap", drift: 6 },
  ];
  const edges = [
    { from: people[0], to: projects[0], dur: 3.4, delay: 0 },
    { from: people[1], to: projects[1], dur: 3.9, delay: 0.6 },
    { from: people[2], to: projects[2], dur: 3.6, delay: 0.3 },
    { from: people[2], to: projects[0], dur: 4.8, delay: 1.1 },
  ];

  return (
    <svg
      viewBox="0 0 440 320"
      className="w-full h-auto max-w-[440px]"
      role="img"
      aria-label="Graph connecting communities to projects"
    >
      <defs>
        <filter id="wb-glow-white" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="wb-glow-purple" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges */}
      {edges.map((e, i) => (
        <g key={i}>
          <line
            x1={e.from.x}
            y1={e.from.y}
            x2={e.to.x}
            y2={e.to.y}
            stroke="rgba(168,85,247,0.22)"
            strokeWidth={1}
            strokeDasharray="3 4"
          />
          <circle r={3} fill="#a855f7" filter="url(#wb-glow-purple)">
            <animate
              attributeName="cx"
              from={e.from.x}
              to={e.to.x}
              dur={`${e.dur}s`}
              begin={`${e.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from={e.from.y}
              to={e.to.y}
              dur={`${e.dur}s`}
              begin={`${e.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${e.dur}s`}
              begin={`${e.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* People nodes (warm white) */}
      {people.map((p) => (
        <g key={p.id} className={`wb-node wb-node-${p.drift}`}>
          <circle cx={p.x} cy={p.y} r={7} fill="rgba(250,245,235,0.95)" filter="url(#wb-glow-white)" />
          <text
            x={p.x - 14}
            y={p.y + 4}
            fontSize={12}
            fill="rgba(245,243,255,0.85)"
            textAnchor="end"
          >
            {p.label}
          </text>
        </g>
      ))}

      {/* Project nodes (soft purple) */}
      {projects.map((p) => (
        <g key={p.id} className={`wb-node wb-node-${p.drift}`}>
          <circle cx={p.x} cy={p.y} r={9} fill="#a855f7" filter="url(#wb-glow-purple)" />
          <text
            x={p.x + 16}
            y={p.y + 4}
            fontSize={12}
            fill="rgba(216,180,254,0.95)"
            textAnchor="start"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Subsection 2 ─────────────────────────────────────────────────────────── */

function ThinkingSection() {
  return (
    <section>
      <h3
        className="wb-serif mb-6 text-2xl md:text-[1.9rem] leading-[1.15]"
        style={{ color: "#ffffff" }}
      >
        Currently Thinking About
      </h3>
      <div
        className="wb-thinking-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}
      >
        <ThinkingCard
          title="Can AI Talk Like a Human?"
          teaser="I'm thinking about whether RAG systems can simulate the real texture of human conversation — not just retrieve and respond, but mirror how people exchange understanding and adapt in real time."
          expanded="Humans don't just exchange information. They exchange their understanding of things, their framing, their uncertainty. I want to know if a well-designed RAG system can get close to that."
          background={<WaveformBg />}
          paddingBottom={64}
        />
        <ThinkingCard
          title="AI and Human Mobility"
          teaser="I'm exploring how AI can fundamentally transform mobility — opening up movement and access for people currently left behind by the systems designed to move them."
          expanded="Mobility is infrastructure. And infrastructure has always determined who gets access to opportunity. AI might be the first tool powerful enough to actually redesign that."
          background={<TransitMapBg />}
          paddingBottom={32}
        />
      </div>
    </section>
  );
}

function ThinkingCard({
  title,
  teaser,
  expanded,
  background,
  paddingBottom,
}: {
  title: string;
  teaser: string;
  expanded: string;
  background: ReactNode;
  paddingBottom: number;
}) {
  return (
    <div
      className="wb-think-card"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        background: "#17171c",
        border: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 32,
        paddingLeft: 36,
        paddingRight: 36,
        paddingBottom,
      }}
    >
      <span className="wb-hover-badge" aria-hidden>
        Hover to expand
      </span>
      {background}
      <div style={{ position: "relative", zIndex: 10 }}>
        <h4
          className="wb-serif"
          style={{
            color: "#ffffff",
            fontSize: "1.35rem",
            lineHeight: 1.2,
            marginBottom: 14,
          }}
        >
          {title}
        </h4>
        <p
          style={{
            color: "rgba(255,255,255,0.95)",
            fontSize: 14,
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {teaser}
        </p>
        <div className="wb-think-expand">
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: 14,
              lineHeight: 1.75,
              marginTop: 24,
              paddingTop: 24,
              borderTop: "1px solid rgba(168,85,247,0.28)",
            }}
          >
            {expanded}
          </p>
        </div>
      </div>
    </div>
  );
}

function WaveformBg() {
  const BARS = 44;
  return (
    <svg
      viewBox="0 0 440 44"
      preserveAspectRatio="none"
      aria-hidden
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 16,
        width: "100%",
        height: 40,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: BARS }).map((_, i) => {
        const step = 440 / BARS;
        const w = step - 2;
        const x = i * step + 1;
        const delay = (i * 0.07) % 1.4;
        const duration = 1.3 + ((i * 17) % 9) * 0.08;
        return (
          <rect
            key={i}
            x={x}
            y={6}
            width={w}
            height={34}
            rx={1.5}
            fill="rgba(168,85,247,0.32)"
            className="wb-wave-bar"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </svg>
  );
}

function TransitMapBg() {
  return (
    <svg
      viewBox="0 0 440 220"
      preserveAspectRatio="none"
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.55,
      }}
    >
      <path
        id="wb-route-1"
        d="M -20 70 Q 120 20 220 70 T 460 100"
        fill="none"
        stroke="rgba(168,85,247,0.28)"
        strokeWidth={1}
        strokeDasharray="2 5"
      />
      <path
        id="wb-route-2"
        d="M 460 30 Q 320 80 200 55 T -20 150"
        fill="none"
        stroke="rgba(148,163,184,0.22)"
        strokeWidth={1}
        strokeDasharray="3 4"
      />
      <path
        id="wb-route-3"
        d="M 40 210 Q 160 160 240 190 T 440 150"
        fill="none"
        stroke="rgba(168,85,247,0.2)"
        strokeWidth={1}
        strokeDasharray="2 6"
      />

      {/* Traveling dots */}
      <circle r={2.5} fill="#a855f7">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href="#wb-route-1" />
        </animateMotion>
      </circle>
      <circle r={2} fill="rgba(203,213,225,0.75)">
        <animateMotion dur="12s" repeatCount="indefinite">
          <mpath href="#wb-route-2" />
        </animateMotion>
      </circle>
      <circle r={2} fill="#c084fc">
        <animateMotion dur="13s" repeatCount="indefinite">
          <mpath href="#wb-route-3" />
        </animateMotion>
      </circle>

      {/* Stations */}
      <circle cx="110" cy="50" r="2" fill="rgba(168,85,247,0.45)" />
      <circle cx="220" cy="70"  r="2" fill="rgba(168,85,247,0.45)" />
      <circle cx="330" cy="85"  r="2" fill="rgba(203,213,225,0.35)" />
      <circle cx="160" cy="180" r="2" fill="rgba(203,213,225,0.35)" />
      <circle cx="300" cy="165" r="2" fill="rgba(168,85,247,0.45)" />
    </svg>
  );
}

/* ── Subsection 3 ─────────────────────────────────────────────────────────── */

function WhatsNextSection() {
  return (
    <section>
      <h3
        className="wb-serif mb-6 text-2xl md:text-[1.9rem] leading-[1.15] text-center"
        style={{ color: "#ffffff" }}
      >
        What&apos;s Next
      </h3>
      <div
        className="wb-dash-pulse mx-auto max-w-xl rounded-2xl text-center"
        style={{
          background: "#0b0b0e",
          border: "1.5px dashed rgba(168,85,247,0.4)",
          padding: "32px 36px",
        }}
      >
        <h4
          className="wb-serif mb-6 text-3xl md:text-[2.2rem] leading-[1.1]"
          style={{ color: "#ffffff" }}
        >
          Something&apos;s Coming
        </h4>

        <p
          className="text-[15px] leading-[1.95] mb-8 text-left md:text-center"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          A centralized hub that{" "}
          <RedactedSpan width="8ch" />{" "}
          learns who you are and{" "}
          <RedactedSpan width="6ch" />{" "}
          gets ahead of what you need — improving someone&apos;s life before they even realize{" "}
          <RedactedSpan width="5ch" />{" "}
          needed improving.
        </p>

        <div className="text-left mx-auto" style={{ maxWidth: 380 }}>
          <div
            className="flex items-center justify-between mb-2"
            style={{
              color: "rgba(255,255,255,0.78)",
              fontFamily: "inherit",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>
              Building<span className="wb-blink" aria-hidden>|</span>
            </span>
            <span>73%</span>
          </div>
          <div
            className="h-[6px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="wb-progress-fill h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #a855f7, #c084fc)",
                boxShadow: "0 0 12px rgba(168,85,247,0.6)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RedactedSpan({ width }: { width: string }) {
  const style: CSSProperties = {
    display: "inline-block",
    minWidth: width,
    height: "1em",
    verticalAlign: "-0.15em",
    background: "#000",
    color: "transparent",
    borderRadius: 3,
    padding: "0 6px",
    userSelect: "none",
    position: "relative",
    overflow: "hidden",
  };
  return <span className="wb-redacted" style={style} aria-label="redacted" />;
}

/* ── Divider ──────────────────────────────────────────────────────────────── */

function Divider() {
  return (
    <div
      className="my-10 md:my-12"
      style={{
        height: 1,
        background:
          "linear-gradient(90deg, transparent, rgba(168,85,247,0.22), transparent)",
      }}
      aria-hidden
    />
  );
}

/* ── Styles ───────────────────────────────────────────────────────────────── */

const WORKBENCH_CSS = `
.workbench-card .wb-serif {
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* Node drift — six subtle variants so each node moves independently */
@keyframes wb-drift-1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(1.5px,-2px); } }
@keyframes wb-drift-2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-1px,2px); } }
@keyframes wb-drift-3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(2px,1.5px); } }
@keyframes wb-drift-4 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-1.5px,-1px); } }
@keyframes wb-drift-5 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(1px,2px); } }
@keyframes wb-drift-6 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-2px,1px); } }

.workbench-card .wb-node-1 { animation: wb-drift-1 5.2s ease-in-out infinite; }
.workbench-card .wb-node-2 { animation: wb-drift-2 6.4s ease-in-out infinite; }
.workbench-card .wb-node-3 { animation: wb-drift-3 7.1s ease-in-out infinite; }
.workbench-card .wb-node-4 { animation: wb-drift-4 5.8s ease-in-out infinite; }
.workbench-card .wb-node-5 { animation: wb-drift-5 6.7s ease-in-out infinite; }
.workbench-card .wb-node-6 { animation: wb-drift-6 7.4s ease-in-out infinite; }

/* Waveform bars */
@keyframes wb-wave-bar {
  0%, 100% { transform: scaleY(0.18); }
  50%      { transform: scaleY(1); }
}
.workbench-card .wb-wave-bar {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation-name: wb-wave-bar;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Two-column grid for the Thinking cards on desktop, single column on mobile */
@media (min-width: 768px) {
  .workbench-card .wb-thinking-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

/* Hover-to-expand badge in the corner of each Thinking card */
.workbench-card .wb-hover-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(216, 180, 254, 0.95);
  background: rgba(168, 85, 247, 0.16);
  border: 1px solid rgba(168, 85, 247, 0.45);
  border-radius: 999px;
  padding: 4px 10px;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.workbench-card .wb-think-card:hover .wb-hover-badge {
  opacity: 0;
  transform: translateY(-4px);
}

/* Thinking-card hover expand */
.workbench-card .wb-think-card {
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
}
.workbench-card .wb-think-card:hover {
  border-color: rgba(168,85,247,0.38);
  box-shadow:
    0 0 40px rgba(168, 85, 247, 0.22),
    inset 0 0 0 1px rgba(168, 85, 247, 0.25);
  transform: translateY(-2px);
}
.workbench-card .wb-think-expand {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.35s ease;
}
.workbench-card .wb-think-card:hover .wb-think-expand {
  max-height: 320px;
  opacity: 1;
}

/* Redacted sheen */
@keyframes wb-redacted-sheen {
  0%   { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
}
.workbench-card .wb-redacted::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  transform: translateX(-120%);
  animation: wb-redacted-sheen 4.2s ease-in-out infinite;
  pointer-events: none;
}

/* Progress bar — stops at 73%, never completes */
@keyframes wb-fill-73 {
  0%   { width: 0%; }
  100% { width: 73%; }
}
.workbench-card .wb-progress-fill {
  width: 0%;
  animation: wb-fill-73 2.4s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
}

/* Blinking cursor */
@keyframes wb-blink {
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.workbench-card .wb-blink {
  animation: wb-blink 1s steps(1, end) infinite;
  margin-left: 1px;
}

/* Dashed-border pulse */
@keyframes wb-dash-pulse {
  0%, 100% {
    border-color: rgba(168,85,247,0.28);
    box-shadow:
      0 0 20px rgba(168,85,247,0.08),
      inset 0 0 24px rgba(168,85,247,0.02);
  }
  50% {
    border-color: rgba(168,85,247,0.6);
    box-shadow:
      0 0 36px rgba(168,85,247,0.22),
      inset 0 0 36px rgba(168,85,247,0.05);
  }
}
.workbench-card .wb-dash-pulse {
  animation: wb-dash-pulse 3.2s ease-in-out infinite;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .workbench-card *,
  .workbench-card *::before,
  .workbench-card *::after {
    animation: none !important;
    transition: none !important;
  }
  .workbench-card .wb-progress-fill { width: 73%; }
}
`;
