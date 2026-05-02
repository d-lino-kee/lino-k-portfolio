"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function WinterSnow() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (theme !== "winter") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

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

    type Flake = {
      x: number;
      y: number;
      r: number;       // size
      vy: number;      // fall speed
      vx: number;      // drift speed
      sway: number;    // sway phase
      swaySpeed: number;
      spin: number;    // rotation
      spinSpeed: number;
      shape: 0 | 1;    // 0 = six-arm snowflake, 1 = soft dot
      alpha: number;
    };

    const count = prefersReduced ? 45 : 110;
    const flakes: Flake[] = Array.from({ length: count }, () => makeFlake(width, height, true));

    function makeFlake(w: number, h: number, randomY: boolean): Flake {
      const r = 2 + Math.random() * 5;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -10 - Math.random() * 40,
        r,
        vy: 0.4 + Math.random() * 1.1 + r * 0.08,
        vx: (Math.random() - 0.5) * 0.3,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.008 + Math.random() * 0.02,
        spin: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.02,
        shape: Math.random() < 0.35 ? 0 : 1,
        alpha: 0.45 + Math.random() * 0.5,
      };
    }

    const drawSnowflake = (f: Flake) => {
      // Soft round blob
      if (f.shape === 1) {
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 2.6);
        g.addColorStop(0, `rgba(147,197,253,${f.alpha})`);     // sky-300
        g.addColorStop(0.5, `rgba(59,130,246,${f.alpha * 0.4})`); // blue-500
        g.addColorStop(1, `rgba(59,130,246,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(191,219,254,${Math.min(1, f.alpha + 0.2)})`; // blue-200 core
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 0.75, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      // Six-arm snowflake
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.spin);
      ctx.strokeStyle = `rgba(37,99,235,${f.alpha})`; // blue-600
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      const arm = f.r * 1.6;
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -arm);
        ctx.stroke();
        // side branches
        ctx.beginPath();
        ctx.moveTo(0, -arm * 0.55);
        ctx.lineTo(arm * 0.22, -arm * 0.78);
        ctx.moveTo(0, -arm * 0.55);
        ctx.lineTo(-arm * 0.22, -arm * 0.78);
        ctx.stroke();
      }
      ctx.restore();
    };

    let raf = 0;

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const f of flakes) {
        f.sway += f.swaySpeed;
        f.spin += f.spinSpeed;
        f.y += f.vy;
        f.x += f.vx + Math.sin(f.sway) * 0.5;

        if (f.y - f.r > height) {
          Object.assign(f, makeFlake(width, height, false));
        }
        if (f.x < -20) f.x = width + 20;
        if (f.x > width + 20) f.x = -20;

        drawSnowflake(f);
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  if (theme !== "winter") return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -5,
        pointerEvents: "none",
      }}
    />
  );
}
