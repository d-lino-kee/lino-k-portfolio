"use client";

import { ArrowRight } from "lucide-react";
import Typewriter from "../Typewriter";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pb-16" style={{ paddingTop: 100 }}>
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">

        {/* Avatar with floating badges */}
        <div className="animate-scale-in relative" style={{ animationDelay: "100ms", marginBottom: 64 }}>

          {/* Circular avatar */}
          <div style={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 80px rgba(99,102,241,0.2), 0 0 160px rgba(99,102,241,0.07)",
            margin: "0 auto",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.jpg"
              alt="Lino Kee"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating badge — upper right: </> */}
          <div style={{
            position: "absolute",
            top: 18,
            right: -20,
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 10,
            padding: "7px 12px",
            fontSize: 13,
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "monospace",
            boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
            userSelect: "none",
          }}>
            &lt;/&gt;
          </div>

          {/* Floating badge — lower left: circuit icon */}
          <div style={{
            position: "absolute",
            bottom: 28,
            left: -20,
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 10,
            padding: "8px 10px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="7" width="10" height="10" rx="1" />
              <path d="M3 9h4M3 15h4M17 9h4M17 15h4M9 3v4M15 3v4M9 17v4M15 17v4" />
            </svg>
          </div>

          {/* Status pills — centered below avatar */}
          <div style={{
            position: "absolute",
            bottom: -44,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            whiteSpace: "nowrap",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: 999,
              padding: "4px 10px",
              fontSize: 10.5,
              fontWeight: 500,
              color: "rgba(16,185,129,0.9)",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", display: "inline-block", flexShrink: 0 }} />
              Seeking Fall 2026 Internships
            </div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: 999,
              padding: "4px 10px",
              fontSize: 10.5,
              fontWeight: 500,
              color: "rgba(147,197,253,0.9)",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1", display: "inline-block", flexShrink: 0 }} />
              Available for 2027 New Grad Opportunities
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center">

          {/* Main headline */}
          <h1
            style={{ fontFamily: "var(--font-cormorant)", animationDelay: "250ms" }}
            className="animate-blur-in text-[clamp(3rem,7vw,5.5rem)] font-semibold italic leading-[1.05] tracking-tight text-center"
          >
            I build{" "}
            <span className="gradient-text">
              <Typewriter
                words={["AI-powered", "intelligent", "data-driven", "full-stack"]}
                typingMs={60}
                deletingMs={35}
                pauseMs={1200}
              />
            </span>
            <br />
            software that ships.
          </h1>

          {/* Subtitle */}
          <p
            className="animate-slide-up mt-6 max-w-[48ch] text-[15px] leading-[1.7] text-center"
            style={{ animationDelay: "450ms", color: "var(--fg-muted)" }}
          >
            Management Engineering at Waterloo. End-to-end: ML pipelines, computer
            vision, production backends, clean frontends. Currently leading{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>FORTif.ai</span> at WAT.ai.
          </p>

          {/* CTAs */}
          <div
            className="animate-slide-up hero-ctas"
            style={{ animationDelay: "600ms", marginTop: 32, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}
          >
            <a href="#projects" className="hero-cta hero-cta--primary">
              <span>View Projects</span>
              <ArrowRight className="hero-cta__arrow" style={{ width: 16, height: 16 }} />
            </a>
            <a href="#contact" className="hero-cta hero-cta--secondary">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
