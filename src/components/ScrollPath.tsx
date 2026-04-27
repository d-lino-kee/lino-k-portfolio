"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   ScrollPath
   Manhattan-grid SVG trace that connects card centers with horizontal +
   vertical segments only (no curves). A 10px white dot with a purple glow
   travels along the path tied to global scroll progress.
   - Measures cards via [data-trace-row] descendants of its parent
   - Hidden below 768px (revert layout to centered stack)
   ─────────────────────────────────────────────────────────────────────── */

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Align = "left" | "center" | "right";
type Card = {
  x: number;
  y: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  align: Align;
};

export default function ScrollPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [cards, setCards] = useState<Card[]>([]);
  const [enabled, setEnabled] = useState(false);

  // Measure parent + each [data-trace-row] descendant
  useIsoLayoutEffect(() => {
    const el = containerRef.current;
    const wrapper = el?.parentElement;
    if (!wrapper) return;

    const measure = () => {
      const list = wrapper.querySelectorAll<HTMLElement>("[data-trace-row]");
      const next: Card[] = [];
      list.forEach((c) => {
        const top = c.offsetTop;
        const h = c.offsetHeight;
        const left = c.offsetLeft;
        const w = c.offsetWidth;
        const align = (c.dataset.traceAlign || "center") as Align;
        next.push({
          x: left + w / 2,
          y: top + h / 2,
          top,
          bottom: top + h,
          left,
          right: left + w,
          align,
        });
      });
      setSize({ w: wrapper.clientWidth, h: wrapper.clientHeight });
      setCards(next);
      setEnabled(window.innerWidth >= 768);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    wrapper.querySelectorAll("[data-trace-row]").forEach((c) => ro.observe(c));

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const d = buildPath(cards, size.w, size.h);

  // Scroll-driven draw + dot
  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot || !enabled || cards.length === 0 || size.w === 0) return;

    const len = path.getTotalLength();
    if (len === 0) return;

    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      path.style.strokeDashoffset = "0";
      dot.style.display = "none";
      return;
    }

    let raf = 0;
    const tick = () => {
      raf = 0;
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
      path.style.strokeDashoffset = `${len * (1 - p)}`;
      const pt = path.getPointAtLength(len * p);
      dot.style.transform = `translate(${pt.x - 7}px, ${pt.y - 7}px)`;
      dot.style.opacity = "1";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [d, enabled, size.w, cards.length]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        display: enabled ? "block" : "none",
      }}
    >
      <svg
        width={size.w || 0}
        height={size.h || 0}
        viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
        style={{ display: "block" }}
      >
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="#a855f7"
          strokeOpacity={0.75}
          strokeWidth={3.5}
          strokeLinecap="square"
          strokeLinejoin="miter"
          style={{ filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))" }}
        />
      </svg>
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow:
            "0 0 6px 2px rgba(255,255,255,0.95), 0 0 16px 4px rgba(192,132,252,1), 0 0 32px 10px rgba(168,85,247,0.7), 0 0 56px 18px rgba(168,85,247,0.35)",
          opacity: 0,
          willChange: "transform",
        }}
      />
    </div>
  );
}

/* Right-angles-only path that runs alongside each card in its empty-side
   "lane", stair-stepping through the gaps between cards.
   - LEFT card  -> lane to the right of the card
   - RIGHT card -> lane to the left of the card
   - CENTER card -> stay on the previous lane's side
   For each card: drop vertically (this is the segment that runs alongside
   the previous card), then jog horizontally at the mid-gap to the new lane. */
function buildPath(cards: Card[], w: number, h: number): string {
  if (!w || !h || cards.length === 0) return "M 0 0";
  const centerX = w / 2;
  const off = 28;     // distance from card edge to lane
  const edgePad = 12; // min distance from container edge

  type Side = "left" | "right";
  const lanes: number[] = [];
  let prevSide: Side = "right";
  for (const c of cards) {
    let lane: number;
    let side: Side;
    if (c.align === "left") {
      side = "right";
      lane = Math.min(w - edgePad, c.right + off);
    } else if (c.align === "right") {
      side = "left";
      lane = Math.max(edgePad, c.left - off);
    } else {
      // center: continue on the previous side, routing around the card
      side = prevSide;
      lane =
        side === "right"
          ? Math.min(w - edgePad, c.right + off)
          : Math.max(edgePad, c.left - off);
    }
    lanes.push(lane);
    prevSide = side;
  }

  let d = `M ${centerX} 0`;
  let curX = centerX;
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    const lane = lanes[i];
    const crossY =
      i === 0
        ? Math.max(40, c.top - 32)
        : (cards[i - 1].bottom + c.top) / 2;

    // vertical drop along the previous lane (this is the segment that ran
    // alongside the previous card), or the initial drop from top center
    d += ` L ${curX} ${crossY}`;
    // horizontal jog into this card's lane
    if (curX !== lane) {
      d += ` L ${lane} ${crossY}`;
      curX = lane;
    }
  }
  // final drop alongside the last card to the bottom of the container
  d += ` L ${curX} ${h}`;
  return d;
}
