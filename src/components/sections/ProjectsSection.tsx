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
  "ERP Automation":  { gradient: "linear-gradient(135deg,#451a03 0%,#78350f 45%,#92400e 100%)", accent: "#fb923c", pattern: "grid" },
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

/* Full-bleed SVG cover art per project — fills the entire thumbnail */
const projectIcons: Record<string, (accent: string) => React.ReactNode> = {
  "FORTif.ai": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="fi-glow" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.25" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="200" cy="100" r="120" fill="url(#fi-glow)" />
      {/* Large shield */}
      <path d="M200 22L130 58v50c0 40 28 76 70 86 42-10 70-46 70-86V58L200 22z" fill={`${accent}12`} stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M200 34L140 64v44c0 34 24 64 60 74 36-10 60-40 60-74V64L200 34z" fill={`${accent}08`} stroke={accent} strokeWidth="1" opacity="0.3" />
      {/* Eye in center */}
      <ellipse cx="200" cy="96" rx="38" ry="22" stroke={accent} strokeWidth="2.5" fill={`${accent}10`} />
      <circle cx="200" cy="96" r="14" fill={accent} opacity="0.3" />
      <circle cx="200" cy="96" r="8" fill={accent} opacity="0.6" />
      <circle cx="200" cy="96" r="4" fill="#fff" opacity="0.8" />
      <circle cx="206" cy="90" r="2" fill="#fff" opacity="0.5" />
      {/* Scan lines */}
      {[60, 76, 116, 132].map(y => <line key={y} x1="140" y1={y} x2="260" y2={y} stroke={accent} strokeWidth="0.8" opacity="0.12" strokeDasharray="4 6" />)}
      {/* Corner brackets */}
      <path d="M140 50h-16v16" stroke={accent} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M260 50h16v16" stroke={accent} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M140 150h-16v-16" stroke={accent} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M260 150h16v-16" stroke={accent} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      {/* Floating particles */}
      <circle cx="90" cy="40" r="2" fill={accent} opacity="0.3" />
      <circle cx="320" cy="50" r="1.5" fill={accent} opacity="0.25" />
      <circle cx="80" cy="150" r="1.5" fill={accent} opacity="0.2" />
      <circle cx="330" cy="140" r="2" fill={accent} opacity="0.15" />
      <circle cx="110" cy="90" r="1" fill={accent} opacity="0.35" />
      <circle cx="300" cy="80" r="1" fill={accent} opacity="0.3" />
    </svg>
  ),
  "OptiTime AI": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="ot-glow" cx="40%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="170" cy="100" r="130" fill="url(#ot-glow)" />
      {/* Large clock */}
      <circle cx="170" cy="100" r="72" stroke={accent} strokeWidth="3" fill={`${accent}08`} />
      <circle cx="170" cy="100" r="66" stroke={accent} strokeWidth="0.8" opacity="0.15" />
      <circle cx="170" cy="100" r="60" stroke={accent} strokeWidth="0.5" opacity="0.08" />
      {/* Tick marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
        <line key={a} x1="170" y1={a % 90 === 0 ? "32" : "36"} x2="170" y2={a % 90 === 0 ? "44" : "42"} stroke={accent} strokeWidth={a % 90 === 0 ? "3" : "1.5"} opacity={a % 90 === 0 ? "0.7" : "0.35"} transform={`rotate(${a} 170 100)`} strokeLinecap="round" />
      ))}
      {/* Hands */}
      <line x1="170" y1="100" x2="170" y2="52" stroke={accent} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
      <line x1="170" y1="100" x2="206" y2="78" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="170" cy="100" r="5" fill={accent} />
      <circle cx="170" cy="100" r="2.5" fill="#fff" opacity="0.5" />
      {/* AI brain / sparkles on the right */}
      <path d="M290 50l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12z" fill={accent} opacity="0.5" />
      <path d="M320 90l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8z" fill={accent} opacity="0.3" />
      <path d="M300 130l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill={accent} opacity="0.2" />
      {/* Circuit lines */}
      <path d="M242 100h30m8 0h20" stroke={accent} strokeWidth="1" opacity="0.2" />
      <circle cx="275" cy="100" r="3" fill={accent} opacity="0.15" />
      <path d="M270 70h40" stroke={accent} strokeWidth="0.8" opacity="0.12" strokeDasharray="4 4" />
      <path d="M270 130h40" stroke={accent} strokeWidth="0.8" opacity="0.12" strokeDasharray="4 4" />
    </svg>
  ),
  "Car Recommender ML": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="cr-glow" cx="50%" cy="60%"><stop offset="0%" stopColor={accent} stopOpacity="0.18" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="200" cy="130" rx="180" ry="60" fill="url(#cr-glow)" />
      {/* Road */}
      <line x1="30" y1="158" x2="370" y2="158" stroke={accent} strokeWidth="1.5" opacity="0.15" />
      <line x1="80" y1="162" x2="130" y2="162" stroke={accent} strokeWidth="2" opacity="0.1" />
      <line x1="170" y1="162" x2="230" y2="162" stroke={accent} strokeWidth="2" opacity="0.1" />
      <line x1="270" y1="162" x2="320" y2="162" stroke={accent} strokeWidth="2" opacity="0.1" />
      {/* Car body - sleek profile */}
      <path d="M110 132h180v14a6 6 0 01-6 6H116a6 6 0 01-6-6v-14z" fill={`${accent}18`} stroke={accent} strokeWidth="2" />
      <path d="M130 132l14-34h112l14 34" fill={`${accent}0c`} stroke={accent} strokeWidth="2" />
      <path d="M156 98l8-18h72l8 18" fill={`${accent}08`} stroke={accent} strokeWidth="1.5" opacity="0.5" />
      {/* Windows */}
      <path d="M162 98l6-14h24l2 14z" fill={accent} opacity="0.08" />
      <path d="M238 98l-6-14h-24l-2 14z" fill={accent} opacity="0.08" />
      {/* Wheels */}
      <circle cx="156" cy="152" r="14" stroke={accent} strokeWidth="2.5" fill={`${accent}15`} />
      <circle cx="156" cy="152" r="6" fill={accent} opacity="0.25" />
      <circle cx="156" cy="152" r="2.5" fill={accent} opacity="0.6" />
      <circle cx="254" cy="152" r="14" stroke={accent} strokeWidth="2.5" fill={`${accent}15`} />
      <circle cx="254" cy="152" r="6" fill={accent} opacity="0.25" />
      <circle cx="254" cy="152" r="2.5" fill={accent} opacity="0.6" />
      {/* Neural network above */}
      <circle cx="160" cy="36" r="5" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1" />
      <circle cx="200" cy="24" r="6" fill={accent} opacity="0.5" stroke={accent} strokeWidth="1" />
      <circle cx="240" cy="36" r="5" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1" />
      <circle cx="180" cy="56" r="4" fill={accent} opacity="0.3" stroke={accent} strokeWidth="0.8" />
      <circle cx="220" cy="56" r="4" fill={accent} opacity="0.3" stroke={accent} strokeWidth="0.8" />
      <line x1="160" y1="36" x2="200" y2="24" stroke={accent} strokeWidth="1" opacity="0.2" />
      <line x1="240" y1="36" x2="200" y2="24" stroke={accent} strokeWidth="1" opacity="0.2" />
      <line x1="160" y1="36" x2="180" y2="56" stroke={accent} strokeWidth="0.8" opacity="0.15" />
      <line x1="240" y1="36" x2="220" y2="56" stroke={accent} strokeWidth="0.8" opacity="0.15" />
      <line x1="200" y1="24" x2="180" y2="56" stroke={accent} strokeWidth="0.8" opacity="0.15" />
      <line x1="200" y1="24" x2="220" y2="56" stroke={accent} strokeWidth="0.8" opacity="0.15" />
    </svg>
  ),
  "Awaaz": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="aw-glow" cx="35%" cy="45%"><stop offset="0%" stopColor={accent} stopOpacity="0.22" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="150" cy="90" r="120" fill="url(#aw-glow)" />
      {/* Large microphone */}
      <rect x="132" y="40" width="36" height="60" rx="18" fill={`${accent}15`} stroke={accent} strokeWidth="2.5" />
      <line x1="140" y1="58" x2="160" y2="58" stroke={accent} strokeWidth="1" opacity="0.2" />
      <line x1="140" y1="66" x2="160" y2="66" stroke={accent} strokeWidth="1" opacity="0.15" />
      <line x1="140" y1="74" x2="160" y2="74" stroke={accent} strokeWidth="1" opacity="0.1" />
      <path d="M118 90c0 22 14 38 32 40" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M182 90c0 22-14 38-32 40" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <line x1="150" y1="130" x2="150" y2="155" stroke={accent} strokeWidth="2.5" />
      <line x1="132" y1="155" x2="168" y2="155" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      {/* Sound waves - right side */}
      <path d="M195 55a40 40 0 010 70" stroke={accent} strokeWidth="2.5" opacity="0.5" strokeLinecap="round" fill="none" />
      <path d="M212 40a58 58 0 010 100" stroke={accent} strokeWidth="2" opacity="0.3" strokeLinecap="round" fill="none" />
      <path d="M228 28a74 74 0 010 124" stroke={accent} strokeWidth="1.5" opacity="0.15" strokeLinecap="round" fill="none" />
      {/* Language text bubbles */}
      <rect x="270" y="30" width="80" height="32" rx="8" fill={`${accent}1f`} stroke={accent} strokeWidth="1" opacity="0.2" />
      <text x="310" y="51" textAnchor="middle" fill={accent} opacity="0.5" fontSize="14" fontWeight="700" fontFamily="sans-serif">Hello</text>
      <rect x="280" y="76" width="90" height="32" rx="8" fill={`${accent}14`} stroke={accent} strokeWidth="1" opacity="0.15" />
      <text x="325" y="97" textAnchor="middle" fill={accent} opacity="0.35" fontSize="14" fontWeight="700" fontFamily="sans-serif">Bonjour</text>
      <rect x="270" y="122" width="74" height="32" rx="8" fill={`${accent}0d`} stroke={accent} strokeWidth="1" opacity="0.1" />
      <text x="307" y="143" textAnchor="middle" fill={accent} opacity="0.25" fontSize="14" fontWeight="700" fontFamily="sans-serif">Hola</text>
    </svg>
  ),
  "Skill Swap Platform": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="ss-glow1" cx="30%" cy="40%"><stop offset="0%" stopColor={accent} stopOpacity="0.2" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
        <radialGradient id="ss-glow2" cx="70%" cy="40%"><stop offset="0%" stopColor={accent} stopOpacity="0.15" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="130" cy="80" r="100" fill="url(#ss-glow1)" />
      <circle cx="270" cy="80" r="100" fill="url(#ss-glow2)" />
      {/* Person 1 */}
      <circle cx="130" cy="58" r="22" fill={`${accent}15`} stroke={accent} strokeWidth="2.5" />
      <circle cx="130" cy="52" r="3" fill={accent} opacity="0.4" />
      <path d="M130 60a5 5 0 01-4-2" stroke={accent} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M130 60a5 5 0 004-2" stroke={accent} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M100 120c0-20 13-34 30-34s30 14 30 34" fill={`${accent}10`} stroke={accent} strokeWidth="2.5" />
      {/* Person 2 */}
      <circle cx="270" cy="58" r="22" fill={`${accent}12`} stroke={accent} strokeWidth="2.5" />
      <circle cx="270" cy="52" r="3" fill={accent} opacity="0.35" />
      <path d="M270 60a5 5 0 01-4-2" stroke={accent} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M270 60a5 5 0 004-2" stroke={accent} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M240 120c0-20 13-34 30-34s30 14 30 34" fill={`${accent}08`} stroke={accent} strokeWidth="2.5" />
      {/* Swap arrows in center */}
      <path d="M168 88h64" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M224 82l8 6-8 6" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M232 112h-64" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M176 106l-8 6 8 6" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Skill badges */}
      <circle cx="184" cy="78" r="4" fill={accent} opacity="0.3" />
      <circle cx="216" cy="78" r="4" fill={accent} opacity="0.3" />
      <circle cx="200" cy="122" r="4" fill={accent} opacity="0.2" />
      {/* Floating dots */}
      <circle cx="80" cy="30" r="2" fill={accent} opacity="0.15" />
      <circle cx="320" cy="35" r="2" fill={accent} opacity="0.12" />
      <circle cx="60" cy="160" r="1.5" fill={accent} opacity="0.1" />
      <circle cx="340" cy="155" r="1.5" fill={accent} opacity="0.1" />
    </svg>
  ),
  "Court & Gridiron Outcome Lab": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="cg-glow" cx="35%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="140" cy="100" r="120" fill="url(#cg-glow)" />
      {/* Basketball */}
      <circle cx="140" cy="100" r="52" stroke={accent} strokeWidth="3" fill={`${accent}0a`} />
      <path d="M88 100h104" stroke={accent} strokeWidth="2" opacity="0.3" />
      <path d="M140 48v104" stroke={accent} strokeWidth="2" opacity="0.3" />
      <path d="M100 58c22 22 22 62 0 84" stroke={accent} strokeWidth="1.5" opacity="0.2" fill="none" />
      <path d="M180 58c-22 22-22 62 0 84" stroke={accent} strokeWidth="1.5" opacity="0.2" fill="none" />
      {/* Seam details */}
      <circle cx="140" cy="100" r="38" stroke={accent} strokeWidth="0.8" opacity="0.1" />
      {/* Analytics chart on right */}
      <rect x="240" y="140" width="24" height="36" rx="3" fill={accent} opacity="0.15" />
      <rect x="272" y="110" width="24" height="66" rx="3" fill={accent} opacity="0.25" />
      <rect x="304" y="80" width="24" height="96" rx="3" fill={accent} opacity="0.35" />
      <rect x="336" y="55" width="24" height="121" rx="3" fill={accent} opacity="0.45" />
      {/* Trend line */}
      <path d="M252 130l28-34 32-28 28-30" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <circle cx="252" cy="130" r="4" fill={accent} opacity="0.5" />
      <circle cx="280" cy="96" r="4" fill={accent} opacity="0.5" />
      <circle cx="312" cy="68" r="4" fill={accent} opacity="0.5" />
      <circle cx="340" cy="38" r="5" fill={accent} opacity="0.6" />
      {/* Baseline */}
      <line x1="235" y1="176" x2="365" y2="176" stroke={accent} strokeWidth="1" opacity="0.15" />
    </svg>
  ),
  "Movie Review Application": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="mr-glow" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="200" cy="100" r="130" fill="url(#mr-glow)" />
      {/* Film clapperboard */}
      <rect x="120" y="62" width="160" height="100" rx="6" fill={`${accent}0a`} stroke={accent} strokeWidth="2.5" />
      {/* Clapper stripe section */}
      <rect x="120" y="62" width="160" height="28" rx="4" fill={`${accent}18`} stroke={accent} strokeWidth="2" />
      {/* Clapper arm */}
      <path d="M120 62l160 0" stroke={accent} strokeWidth="2.5" />
      <line x1="120" y1="42" x2="280" y2="42" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="42" x2="120" y2="62" stroke={accent} strokeWidth="2.5" />
      {/* Diagonal stripes on clapper */}
      {[148, 172, 196, 220, 244].map(x => (
        <g key={x}>
          <line x1={x} y1="62" x2={x + 10} y2="42" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </g>
      ))}
      {/* Stars row */}
      {[160, 185, 210, 235, 260].map((x, i) => (
        <path key={x} d={`M${x} 112l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z`} fill={accent} opacity={i < 4 ? 0.5 : 0.2} />
      ))}
      {/* Film strip perforations on sides */}
      {[75, 95, 115, 135].map(y => (
        <g key={y}>
          <rect x="95" y={y} width="8" height="6" rx="1" fill={accent} opacity="0.1" />
          <rect x="297" y={y} width="8" height="6" rx="1" fill={accent} opacity="0.1" />
        </g>
      ))}
      {/* Floating popcorn */}
      <circle cx="70" cy="50" r="4" fill={accent} opacity="0.15" />
      <circle cx="76" cy="44" r="3.5" fill={accent} opacity="0.12" />
      <circle cx="66" cy="44" r="3" fill={accent} opacity="0.1" />
      <circle cx="340" cy="140" r="4" fill={accent} opacity="0.12" />
      <circle cx="334" cy="134" r="3.5" fill={accent} opacity="0.1" />
    </svg>
  ),
  "ERP & HR Process Automation": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="erp-glow" cx="40%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="160" cy="100" r="120" fill="url(#erp-glow)" />
      {/* Large gear */}
      <circle cx="140" cy="100" r="42" stroke={accent} strokeWidth="2.5" fill={`${accent}08`} />
      <circle cx="140" cy="100" r="18" stroke={accent} strokeWidth="2" fill={`${accent}0a`} opacity="0.5" />
      <circle cx="140" cy="100" r="6" fill={accent} opacity="0.4" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
        <rect key={a} x="134" y="52" width="12" height="12" rx="2" fill={accent} opacity="0.25" transform={`rotate(${a} 140 100)`} />
      ))}
      {/* Small gear */}
      <circle cx="100" cy="150" r="22" stroke={accent} strokeWidth="1.5" fill={`${accent}06`} opacity="0.5" />
      <circle cx="100" cy="150" r="9" stroke={accent} strokeWidth="1" fill="none" opacity="0.3" />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <rect key={`s${a}`} x="96" y="125" width="8" height="8" rx="1.5" fill={accent} opacity="0.15" transform={`rotate(${a} 100 150)`} />
      ))}
      {/* Flow pipeline */}
      <path d="M200 60h60" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <rect x="264" y="48" width="56" height="24" rx="6" stroke={accent} strokeWidth="1.5" fill={`${accent}0a`} opacity="0.5" />
      <path d="M280 60l5 5 10-10" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M200 100h60" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <rect x="264" y="88" width="56" height="24" rx="6" stroke={accent} strokeWidth="1.5" fill={`${accent}08`} opacity="0.4" />
      <path d="M280 100l5 5 10-10" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M200 140h60" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      <rect x="264" y="128" width="56" height="24" rx="6" stroke={accent} strokeWidth="1.5" fill={`${accent}06`} opacity="0.3" />
      <path d="M280 140l5 5 10-10" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      {/* Connection dots */}
      <circle cx="330" cy="60" r="3" fill={accent} opacity="0.25" />
      <circle cx="330" cy="100" r="3" fill={accent} opacity="0.2" />
      <circle cx="330" cy="140" r="3" fill={accent} opacity="0.15" />
      <path d="M333 60v80" stroke={accent} strokeWidth="0.8" opacity="0.1" strokeDasharray="3 5" />
    </svg>
  ),
  "Optimal Distribution Networks": (accent) => (
    <svg viewBox="0 0 400 200" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="odn-glow" cx="50%" cy="35%"><stop offset="0%" stopColor={accent} stopOpacity="0.22" /><stop offset="100%" stopColor={accent} stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="200" cy="70" r="120" fill="url(#odn-glow)" />
      {/* Hub node */}
      <circle cx="200" cy="40" r="18" fill={`${accent}20`} stroke={accent} strokeWidth="2.5" />
      <rect x="191" y="31" width="18" height="14" rx="2" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="191" y1="38" x2="209" y2="38" stroke={accent} strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="31" x2="200" y2="45" stroke={accent} strokeWidth="1" opacity="0.3" />
      {/* Mid-tier nodes */}
      <circle cx="110" cy="100" r="14" fill={`${accent}15`} stroke={accent} strokeWidth="2" />
      <text x="110" y="105" textAnchor="middle" fill={accent} opacity="0.5" fontSize="12" fontWeight="700" fontFamily="sans-serif">DC</text>
      <circle cx="290" cy="100" r="14" fill={`${accent}15`} stroke={accent} strokeWidth="2" />
      <text x="290" y="105" textAnchor="middle" fill={accent} opacity="0.5" fontSize="12" fontWeight="700" fontFamily="sans-serif">DC</text>
      {/* Connections hub to DCs */}
      <line x1="200" y1="58" x2="110" y2="86" stroke={accent} strokeWidth="2" opacity="0.3" />
      <line x1="200" y1="58" x2="290" y2="86" stroke={accent} strokeWidth="2" opacity="0.3" />
      {/* Bottom tier - retail */}
      {[50, 110, 170, 230, 290, 350].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="165" r="10" fill={`${accent}0c`} stroke={accent} strokeWidth="1.5" opacity={0.5 - i * 0.02} />
          <rect x={x - 4} y={161} width="8" height="8" rx="1" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.3" />
        </g>
      ))}
      {/* DC to retail connections */}
      <line x1="110" y1="114" x2="50" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      <line x1="110" y1="114" x2="110" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      <line x1="110" y1="114" x2="170" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      <line x1="290" y1="114" x2="230" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      <line x1="290" y1="114" x2="290" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      <line x1="290" y1="114" x2="350" y2="155" stroke={accent} strokeWidth="1.2" opacity="0.15" />
      {/* Cost reduction arrow */}
      <path d="M355 40l-12 30" stroke={accent} strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <path d="M343 70l2-8-8 2" stroke={accent} strokeWidth="1.5" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="360" y="38" fill={accent} opacity="0.15" fontSize="11" fontWeight="700" fontFamily="sans-serif">-45%</text>
    </svg>
  ),
};

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured || p.categories.includes("AI & ML") || p.categories.includes("Web Development")).slice(0, 6);
  const others = projects.filter((p) => !featured.includes(p));

  return (
    <section id="projects" style={{ position: "relative", overflow: "hidden", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(129,140,248,0.7)" }}>
                Latest Projects
              </p>
              <h2 style={{ marginTop: 10, fontSize: "clamp(1.75rem,3.6vw,2.75rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--fg)" }}>
                A selection of my software work that I am proud of
              </h2>
            </div>
            <a
              href="https://github.com/d-lino-kee"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 999, border: "2px solid var(--surface-border)",
                padding: "8px 16px", fontSize: 15, fontWeight: 500,
                color: "var(--fg-muted)", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--surface-border)"; e.currentTarget.style.color = "var(--fg-muted)"; }}
            >
              <GitHubIcon />
              View GitHub
            </a>
          </div>
        </FadeIn>

        {/* Featured grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
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
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(251,191,36,0.7)" }}>
                  More Projects
                </p>
                <h3 style={{ marginTop: 8, fontSize: "clamp(1.2rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--fg)" }}>
                  Older experiments and personal builds
                </h3>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
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
        border: "2px solid var(--surface-border)",
        background: "var(--surface)",
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
      <div style={{ position: "relative", height: 240, background: theme.gradient, overflow: "hidden" }}>
        <PatternOverlay type={theme.pattern} />

        {/* Decorative glow orb */}
        <div style={{
          position: "absolute", width: 160, height: 160,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.accent}33 0%, transparent 70%)`,
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }} />

        {/* Project icon */}
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          {projectIcons[p.title] ? projectIcons[p.title](theme.accent) : (
            <span style={{
              fontSize: 80, fontWeight: 900, color: "rgba(255,255,255,0.08)",
              userSelect: "none", lineHeight: 1, letterSpacing: "-0.05em",
            }}>
              {p.title.charAt(0)}
            </span>
          )}
        </div>

        {/* Category tag — top left */}
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 999, padding: "3px 10px",
          fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)",
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
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", lineHeight: 1.3, margin: 0 }}>
          {p.title}
        </h3>
        <p style={{ marginTop: 3, fontSize: 13, color: "var(--fg-subtle)", fontWeight: 500 }}>
          {p.subtitle}
        </p>
        <p style={{
          marginTop: 10, fontSize: 14.5, lineHeight: 1.65,
          color: "var(--fg-muted)",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {p.description}
        </p>

        {/* Tech tags */}
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} style={{
              borderRadius: 999, border: "2px solid var(--surface-border)",
              padding: "2px 9px", fontSize: 12.5, color: "var(--fg-muted)",
            }}>
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span style={{
              borderRadius: 999, border: "2px solid var(--surface-border)",
              padding: "2px 9px", fontSize: 12.5, color: "var(--fg-subtle)",
            }}>
              +{p.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
