"use client";

import { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;      // radius
  life: number;   // 0..1 — fades as it decreases
  maxLife: number;
  hue: number;
};

export default function CursorSwirls() {
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

    const particles: P[] = [];
    const MAX_PARTICLES = prefersReduced ? 80 : 220;

    let lastX = -9999;
    let lastY = -9999;
    let mouseVx = 0;
    let mouseVy = 0;
    let mouseInside = false;

    const spawn = (x: number, y: number, speed: number) => {
      // spawn count scales with mouse speed — faster = more particles
      const n = Math.min(6, 1 + Math.floor(speed / 8));
      for (let i = 0; i < n; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        const angle = Math.random() * Math.PI * 2;
        const jitter = 4 + Math.random() * 18;
        const vMag = 0.4 + Math.random() * 1.2;
        // colors cycle through purple / indigo / cyan
        const roll = Math.random();
        const hue =
          roll < 0.5 ? 265 + Math.random() * 25   // violet
          : roll < 0.85 ? 240 + Math.random() * 20 // indigo
          : 190 + Math.random() * 25;              // cyan
        const maxLife = 90 + Math.random() * 80;
        particles.push({
          x: x + Math.cos(angle) * jitter,
          y: y + Math.sin(angle) * jitter,
          vx: Math.cos(angle) * vMag + mouseVx * 0.15,
          vy: Math.sin(angle) * vMag + mouseVy * 0.15,
          r: 60 + Math.random() * 90,
          life: 1,
          maxLife,
          hue,
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      if (lastX === -9999) {
        lastX = e.clientX;
        lastY = e.clientY;
      }
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      mouseVx = dx;
      mouseVy = dy;
      const speed = Math.sqrt(dx * dx + dy * dy);
      mouseInside = true;

      if (speed > 1) spawn(e.clientX, e.clientY, speed);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onLeave = () => {
      mouseInside = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);

    // cheap pseudo-noise for swirly drift
    const noise = (x: number, y: number, t: number) =>
      Math.sin(x * 0.004 + t) * Math.cos(y * 0.004 + t * 1.3) +
      Math.sin((x + y) * 0.0025 + t * 0.7) * 0.5;

    let t = 0;
    let raf = 0;

    const draw = () => {
      t += prefersReduced ? 0.003 : 0.008;

      // soft trail — fade previous frame (destination-out so background shows through)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over"; // standard alpha — no additive bloom

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        const angle = noise(p.x, p.y, t) * Math.PI * 2;
        p.vx += Math.cos(angle) * 0.15;
        p.vy += Math.sin(angle) * 0.15;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx;
        p.y += p.vy;

        p.life -= 1 / p.maxLife;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const eased = p.life * p.life; // quadratic fade-out
        const alpha = 0.08 * eased; // subtle — no blinding bloom
        const r = p.r * (0.4 + 0.6 * eased);

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `hsla(${p.hue}, 70%, 55%, ${alpha})`);
        g.addColorStop(0.5, `hsla(${p.hue}, 65%, 40%, ${alpha * 0.4})`);
        g.addColorStop(1, `hsla(${p.hue}, 60%, 35%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      // subtle idle shimmer near last cursor position so there's always a faint glow
      if (mouseInside && particles.length < 4) {
        const g = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 120);
        g.addColorStop(0, "rgba(129, 140, 248, 0.025)");
        g.addColorStop(1, "rgba(129, 140, 248, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
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
        zIndex: -8,
        pointerEvents: "none",
      }}
    />
  );
}
