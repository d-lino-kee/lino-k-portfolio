import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Tailwind test — should appear at the very top */}
      <div className="p-10 text-6xl font-bold text-pink-500 bg-white">
        Tailwind is working
      </div>

      <BackgroundFX />
      <Navbar />

      <div className="relative mx-auto max-w-6xl px-4">
        <Hero />

        <div className="mt-16 md:mt-24">
          <TechStack />
        </div>

        <div className="mt-16 md:mt-24">
          <ProjectsSection />
        </div>

        <div className="mt-16 md:mt-24">
          <ContactSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_70%_55%,rgba(59,130,246,0.14),transparent_48%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.92)_100%)]" />
    </div>
  );
}

