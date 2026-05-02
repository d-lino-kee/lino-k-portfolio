"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import BackgroundWave from "../../components/BackgroundWave";
import CursorSwirls from "../../components/CursorSwirls";
import Starfield from "../../components/Starfield";
import WinterSnow from "../../components/WinterSnow";
import CustomCursor from "../../components/CustomCursor";
import FadeIn from "../../components/FadeIn";
import SlideIn from "../../components/SlideIn";
import WorkbenchCard from "../../components/WorkbenchCard";
import ScrollPath from "../../components/ScrollPath";
import { useTheme } from "../../components/ThemeProvider";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDarkFamily = theme === "dark" || theme === "vscode";

  return (
    <>
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
        <section className="relative overflow-hidden" style={{ paddingTop: 140, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1700, margin: "0 auto", padding: "0 32px" }}>

            {/* Back link */}
            <FadeIn>
              <Link
                href="/"
                className="hero-cta hero-cta--primary"
                style={{ marginBottom: 28 }}
              >
                <ArrowLeft className="hero-cta__arrow" style={{ width: 16, height: 16 }} />
                Back to home
              </Link>
            </FadeIn>

            {/* Page title */}
            <FadeIn delay={60}>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  marginBottom: 16,
                }}
              >
                About <span className="gradient-text">me</span>
              </h1>
              <p style={{ color: "var(--fg)", fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}>
                A longer version of the story — who I am, what I care about, and what I&apos;m working on
                beyond the highlights on the home page.
              </p>
            </FadeIn>

            {/* Body */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @media (max-width: 767px) {
                    .trace-row { justify-content: center !important; }
                    .trace-row-card { width: 100% !important; }
                  }
                `,
              }}
            />
            <div style={{ marginTop: 56, position: "relative" }}>
              <ScrollPath />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 100,
                }}
              >

              {/* "How it started" + "Tech I work with" — tight pair, both
                  left-aligned so they line up under the "About me" title */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <Row align="left" widthPct={65}>
                <FadeIn delay={70}>
                <div
                  style={{
                    borderRadius: "var(--card-radius)",
                    border: "2px solid var(--surface-border)",
                    background: "var(--surface)",
                    padding: "32px 36px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--fg)",
                      margin: 0,
                      marginBottom: 20,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    How it started
                  </h2>
                  <div
                    style={{
                      color: "var(--fg)",
                      fontSize: 17,
                      lineHeight: 1.8,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Growing up, people called me &ldquo;GPS Boy.&rdquo; I&apos;d memorized the roads of
                      every city I&apos;d visited, and family friends would call me for directions before
                      long drives. But the maps were never really the point. The point was the
                      connections. How one road quietly explained another. How a city stitched itself
                      together into a system.
                    </p>
                    <p style={{ margin: 0 }}>
                      That lens followed me everywhere. I&apos;d take apart the logic of a car&apos;s
                      transmission in my head, trace how a jet engine turned fuel into speed, or redraw
                      a bus route to see if I could shave minutes off a commute. I built things too.
                      Bridges out of wooden planks, stories with tangled plots, anything where the
                      pieces had to fit just right.
                    </p>
                    <p style={{ margin: 0 }}>
                      Software engineering, in hindsight, was inevitable. It&apos;s the same instinct
                      I&apos;ve had since I was a kid. Modeling connections, finding the elegant path
                      through a messy system, just with a much bigger canvas. Backend systems and AI
                      are where that instinct runs hottest for me.
                    </p>
                    <p style={{ margin: 0 }}>
                      The other half of me is social. I&apos;ve always liked watching people grow, which
                      is why I&apos;ve leaned into technical leadership at Waterloo. As a TPM at WAT.ai,
                      I help mentor students developing their software engineering, data science, and
                      AI skills. As the founder of FORTif.ai, I lead a team building a platform that
                      helps seniors live safely and independently, combining hazard detection with
                      interactive AI chatbots in one unified system. Technical depth on its own was
                      never the goal. The goal is using it to lead people somewhere worth going.
                    </p>
                  </div>
                </div>
                </FadeIn>
              </Row>

              {/* Tech I work with — no box, aligned with How it started */}
              <Row align="left" widthPct={65}>
                <FadeIn delay={100}>
                  <TechIWorkWith />
                </FadeIn>
              </Row>
              </div>

              {/* "Always in Motion" + photo gallery — tight pair, both
                  right-aligned, both slide in from the right */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <Row align="right" widthPct={72}>
                  <SlideIn from="right" delay={80}>
                    <MotionSection />
                  </SlideIn>
                </Row>
                <Row align="right" widthPct={72}>
                  <SlideIn from="right" delay={120}>
                    <PhotoMarquee />
                  </SlideIn>
                </Row>
              </div>

              {/* Workbench — slides in from the left */}
              <Row align="left" widthPct={72}>
                <SlideIn from="left" delay={80}>
                  <WorkbenchCard />
                </SlideIn>
              </Row>

              {/* CTA */}
              <Row align="right" widthPct={40}>
                <FadeIn delay={340}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 12,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link href="/#projects" className="hero-cta hero-cta--primary">
                      See what I&apos;ve built
                    </Link>
                    <Link href="/#contact" className="hero-cta hero-cta--secondary">
                      Get in touch
                    </Link>
                  </div>
                </FadeIn>
              </Row>
              </div>
            </div>

            <div style={{ marginTop: 80 }}>
              <Footer />
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}

function Row({
  align,
  widthPct,
  naturalWidth = false,
  children,
}: {
  align: "left" | "center" | "right";
  widthPct?: number;
  naturalWidth?: boolean;
  children: React.ReactNode;
}) {
  const justify =
    align === "left" ? "flex-start" : align === "center" ? "center" : "flex-end";

  return (
    <div
      className="trace-row"
      style={{ display: "flex", width: "100%", justifyContent: justify }}
    >
      {naturalWidth ? (
        <div data-trace-row data-trace-align={align}>{children}</div>
      ) : (
        <div
          className="trace-row-card"
          style={{ width: widthPct ? `${widthPct}%` : "100%" }}
          data-trace-row
          data-trace-align={align}
        >
          {children}
        </div>
      )}
    </div>
  );
}

type TechItem = { name: string; icon: string };

// Ordered: Languages → Frontend → Backend → AI/ML → CI/CD + DevOps → Databases (30 total)
const techStack: TechItem[] = [
  // Languages
  { name: "Python",       icon: "python" },
  { name: "TypeScript",   icon: "typescript" },
  { name: "JavaScript",   icon: "javascript" },
  { name: "Java",         icon: "java" },
  { name: "C++",          icon: "cplusplus" },
  { name: "R",            icon: "r" },
  { name: "SQL",          icon: "sql" },
  // Frontend frameworks
  { name: "React",        icon: "react" },
  { name: "Next.js",      icon: "next" },
  { name: "Vue.js",       icon: "vue" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "HTML",         icon: "html5" },
  // Backend frameworks
  { name: "Node.js",      icon: "nodedotjs" },
  { name: "Express.js",   icon: "express" },
  { name: "FastAPI",      icon: "fastapi" },
  { name: "Flask",        icon: "flask" },
  { name: "Spring Boot",  icon: "springboot" },
  // AI / ML
  { name: "PyTorch",      icon: "pytorch" },
  { name: "TensorFlow",   icon: "tensorflow" },
  { name: "scikit-learn", icon: "scikitlearn" },
  { name: "Pandas",       icon: "pandas" },
  { name: "NumPy",        icon: "numpy" },
  { name: "OpenCV",       icon: "opencv" },
  // CI/CD + DevOps
  { name: "Git",          icon: "git" },
  { name: "Docker",       icon: "docker" },
  { name: "Linux",        icon: "linux" },
  { name: "GCP",          icon: "googlecloud" },
  // Databases
  { name: "PostgreSQL",   icon: "postgresql" },
  { name: "MongoDB",      icon: "mongodb" },
  { name: "Redis",        icon: "redis" },
];

function TechIWorkWith() {
  return (
    <div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "var(--fg)",
          margin: 0,
          marginBottom: 22,
          letterSpacing: "-0.01em",
        }}
      >
        Tech I work with!
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {techStack.map((t) => (
          <TechPill key={t.name} item={t} />
        ))}
      </div>
    </div>
  );
}

function TechPill({ item }: { item: TechItem }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 14px 5px 5px",
        borderRadius: 999,
        border: "2px solid var(--surface-border)",
        background: "var(--surface-soft)",
        fontSize: 15,
        fontWeight: 500,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 26,
          height: 26,
          borderRadius: 7,
          background: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/tech/${item.icon}.svg`}
          alt=""
          style={{ width: 16, height: 16, objectFit: "contain" }}
        />
      </span>
      {item.name}
    </span>
  );
}

function MotionSection() {
  return (
    <div
      style={{
        borderRadius: "var(--card-radius)",
        border: "2px solid var(--surface-border)",
        background: "var(--surface)",
        padding: "32px 36px",
      }}
    >
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "var(--fg)",
          margin: 0,
          marginBottom: 20,
          letterSpacing: "-0.01em",
        }}
      >
        Always in Motion, Rarely Just Coding
      </h2>
      <div
        style={{
          color: "var(--fg)",
          fontSize: 17,
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <p style={{ margin: 0 }}>
          When I&apos;m not building things, you&apos;ll usually find me in motion. The gym, a trail, a
          swim, or somewhere I&apos;ve never hiked before. I&apos;m drawn to big landscapes. The jagged
          coastlines of the west coast, the quiet rolling hills along the Great Lakes. I like
          wandering into new environments and seeing what they teach me.
        </p>
        <p style={{ margin: 0 }}>
          Music is a quieter pursuit, but just as important. I&apos;ve been playing guitar for years,
          lately working on my own arrangements of songs I love. Getting a piece to sit just right is
          its own kind of puzzle.
        </p>
        <p style={{ margin: 0 }}>
          I also spend a lot of time learning. Podcasts on long walks, books when I can carve out
          the time. Curiosity is something I like keeping fed.
        </p>
        <p style={{ margin: 0 }}>
          But the part I&apos;m most proud of is the people. I&apos;ve organized community runs,
          supported first-year students as a Residence Life Don, and taken on leadership roles in
          the Waterloo Engineering Society to create space for students to grow. I&apos;m not just
          someone who builds things. I&apos;m someone who builds people up too.
        </p>
      </div>
    </div>
  );
}

// Drop your 10 photos into /public/gallery/ with these filenames and they'll appear automatically.
const galleryPhotos = [
  "/gallery/photo-1.jpg",
  "/gallery/photo-2.jpg",
  "/gallery/photo-3.jpg",
  "/gallery/photo-4.jpg",
  "/gallery/photo-5.jpg",
  "/gallery/photo-6.jpg",
  "/gallery/photo-7.jpg",
  "/gallery/photo-8.jpg",
  "/gallery/photo-9.jpg",
  "/gallery/photo-10.jpg",
];

function PhotoMarquee() {
  return (
    <div className="photo-marquee" aria-label="Personal photo gallery">
      <div className="photo-marquee-track">
        {[...galleryPhotos, ...galleryPhotos].map((src, i) => (
          <PhotoTile key={i} src={src} index={i % galleryPhotos.length} />
        ))}
      </div>
    </div>
  );
}

function PhotoTile({ src, index }: { src: string; index: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="photo-marquee-item">
        <div className="photo-marquee-placeholder">photo {index + 1}</div>
      </div>
    );
  }
  return (
    <div className="photo-marquee-item">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" onError={() => setFailed(true)} />
    </div>
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
        background:
          "radial-gradient(ellipse 130% 100% at 50% 60%, rgba(129,140,248,0.12), transparent 100%)",
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
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
        }}
      >
        <filter id="noise-about">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-about)" />
      </svg>
    </div>
  );
}
