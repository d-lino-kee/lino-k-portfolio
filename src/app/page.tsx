"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import StatsSection from "../components/sections/StatsSection";
import TechStack from "../components/sections/TechStack";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import BackgroundWave from "../components/BackgroundWave";
import CursorSwirls from "../components/CursorSwirls";
import Starfield from "../components/Starfield";
import WinterSnow from "../components/WinterSnow";
import CustomCursor from "../components/CustomCursor";
import { useTheme } from "../components/ThemeProvider";

export default function HomePage() {
  const { theme } = useTheme();
  const isDarkFamily = theme === "dark" || theme === "vscode";

  return (
    <>
      {/* Background FX live OUTSIDE <main> so no descendant stacking context
          (transform, filter, animation, etc.) can contain them. */}
      {isDarkFamily && (
        <>
          <SpaceBackdrop />
          <BackgroundFX />
          <Starfield />
          <CursorSwirls />
          <BackgroundWave />
        </>
      )}
      <WinterSnow />
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: "100vh", background: "transparent", color: "var(--fg)" }}>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <StatsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <TechStack />

      {/* Experience */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />

      <div className="mx-auto max-w-6xl px-6">
        <Footer />
      </div>
      <ScrollToTop />
      </main>
    </>
  );
}

function SpaceBackdrop() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -12,
        pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 55% 40% at 18% 22%, rgba(99,102,241,0.25), transparent 70%)",
          "radial-gradient(ellipse 45% 35% at 82% 58%, rgba(168,85,247,0.22), transparent 70%)",
          "radial-gradient(ellipse 50% 40% at 55% 92%, rgba(59,130,246,0.18), transparent 70%)",
          "radial-gradient(ellipse 35% 25% at 72% 12%, rgba(236,72,153,0.12), transparent 70%)",
          "linear-gradient(180deg, #050416 0%, #030312 100%)",
        ].join(","),
      }}
    />
  );
}

function BackgroundFX() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -11,
        pointerEvents: "none",
      }}
    >
      {/* Film grain on top of the nebula */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
        }}
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
