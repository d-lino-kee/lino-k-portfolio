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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BackgroundFX />
      <BackgroundWave />
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <StatsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6">
        <TechStack />
      </div>

      {/* Experience */}
      <ExperienceSection />

      {/* Contact */}
      <div className="mx-auto max-w-6xl px-6">
        <ContactSection />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Film grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* Gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_25%,rgba(99,102,241,0.15),transparent),radial-gradient(ellipse_55%_45%_at_80%_55%,rgba(168,85,247,0.12),transparent),radial-gradient(ellipse_40%_35%_at_50%_90%,rgba(99,102,241,0.1),transparent)]" />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:28px_28px]" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.95)_100%)]" />
    </div>
  );
}
