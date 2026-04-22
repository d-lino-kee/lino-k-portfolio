"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;       // depth layer (0..1) — smaller = farther, dimmer, slower
  r: number;       // radius
  tw: number;      // twinkle phase
  twSpeed: number; // twinkle speed
  hue: number;     // slight hue variation
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Density scales with viewport area — denser so stars are visible everywhere
    const density = prefersReduced ? 0.00018 : 0.00035;
    const count = Math.floor(width * height * density);
    const stars: Star[] = Array.from({ length: count }, () => {
      const z = Math.pow(Math.random(), 1.8); // bias toward far stars
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        r: 0.3 + z * 1.4,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 0.004 + Math.random() * 0.012,
        hue: Math.random() < 0.15
          ? 210 + Math.random() * 40 // cool blue
          : Math.random() < 0.1
          ? 270 + Math.random() * 30 // faint violet
          : 0,                        // neutral white
      };
    });

    // Parallax offset from mouse (very subtle)
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      parallax.tx = (e.clientX / width - 0.5) * 20;
      parallax.ty = (e.clientY / height - 0.5) * 20;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // ease parallax
      parallax.x += (parallax.tx - parallax.x) * 0.05;
      parallax.y += (parallax.ty - parallax.y) * 0.05;

      for (const s of stars) {
        s.tw += s.twSpeed;
        const twinkle = 0.6 + Math.sin(s.tw) * 0.4;
        const alpha = (0.4 + s.z * 0.6) * twinkle;

        const px = s.x + parallax.x * s.z;
        const py = s.y + parallax.y * s.z;

        if (s.hue === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `hsla(${s.hue}, 80%, 78%, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        // bright stars get a soft halo
        if (s.z > 0.85) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 6);
          g.addColorStop(0, `rgba(255,255,255,${alpha * 0.35})`);
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, s.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
}
