"use client";

import { useEffect, useRef, useState } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   SlideIn
   IntersectionObserver-driven entrance: starts offset horizontally + faded
   out, slides to its final spot when it scrolls into view. Uses inline
   styles so it doesn't depend on Tailwind utilities being generated.
   ─────────────────────────────────────────────────────────────────────── */
export default function SlideIn({
  children,
  from = "left",
  distance = 140,
  delay = 0,
  duration = 1400,
  threshold = 0.18,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    // Stay observing — flip visible on every enter/exit so the element
    // slides in when it appears and slides back out when it leaves the
    // viewport (in either scroll direction).
    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const initial = from === "left" ? -distance : distance;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${initial}px)`,
        transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
