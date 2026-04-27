"use client";

import { useEffect, useRef } from "react";

export default function BackgroundWave() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      ctx.clearRect(0, 0, w, h);

      const gap = 20;
      const amp = 16;
      const mouseRadius = 180;

      const originX = w * 0.6;
      const originY = h * 0.5;

      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          const dx = x - originX;
          const dy = y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // wave field
          const offset =
            Math.sin(dist * 0.016 - t) * amp * Math.exp(-dist * 0.001);

          let px = x + (dx / (dist + 1)) * offset;
          let py = y + (dy / (dist + 1)) * offset;

          // mouse repulsion — particles push away from cursor
          const mdx = px - mx;
          const mdy = py - my;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < mouseRadius && mDist > 0) {
            const force = (1 - mDist / mouseRadius) * 25;
            px += (mdx / mDist) * force;
            py += (mdy / mDist) * force;
          }

          // fade out on the left side
          const fadeX = Math.max(0, Math.min(1, (x - w * 0.25) / (w * 0.15)));
          if (fadeX <= 0) continue;

          // color: teal near origin → violet at edges
          const hue = 174 + Math.min(dist / 500, 1) * 96;
          const lightness = 70 + Math.sin(dist * 0.01 - t * 0.5) * 8;

          // brighter near mouse
          const mouseGlow = mDist < mouseRadius ? (1 - mDist / mouseRadius) * 0.15 : 0;
          const baseAlpha = 0.08 + mouseGlow;

          ctx.fillStyle = `hsla(${hue}, 80%, ${lightness}%, ${baseAlpha * fadeX})`;

          // slightly larger dots near mouse
          const radius = mDist < mouseRadius ? 1.2 + (1 - mDist / mouseRadius) * 0.8 : 1.0;

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // soft vignette — gentle edge falloff so the nebula stays visible
      const g = ctx.createRadialGradient(
        w * 0.5, h * 0.5, 0,
        w * 0.5, h * 0.5, Math.max(w, h) * 0.7
      );
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(0.75, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.25)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      t += 0.018;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
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
