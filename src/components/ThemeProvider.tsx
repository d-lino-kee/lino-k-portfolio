"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeName = "dark" | "vscode" | "winter" | "summer" | "light";

type ThemeConfig = {
  label: string;
  icon: ReactNode;
  accent: string;
  accentRgb: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  bg: string;            // page background
  fg: string;            // primary text
  fgMuted: string;       // secondary text
  fgSubtle: string;      // tertiary text
  surface: string;       // card background
  surfaceBorder: string; // card border
  surfaceSoft: string;   // softer surface
  fontFamily: string;    // default UI font
  cardRadius: string;    // default card radius
  pillRadius: string;    // pill / button radius
  bgTint: string;
};

const systemFont =
  "var(--font-sans), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

const vscodeFont =
  '"Cascadia Code", "Fira Code", "JetBrains Mono", Consolas, "Courier New", monospace';

export const themes: Record<ThemeName, ThemeConfig> = {
  dark: {
    label: "Dark",
    icon: <MoonIcon />,
    accent: "#818cf8",
    accentRgb: "129,140,248",
    gradientFrom: "#818cf8",
    gradientVia: "#a855f7",
    gradientTo: "#6366f1",
    bg: "#000000",
    fg: "#ffffff",
    fgMuted: "rgba(255,255,255,0.6)",
    fgSubtle: "rgba(255,255,255,0.35)",
    surface: "#0d0d0d",
    surfaceBorder: "rgba(255,255,255,0.15)",
    surfaceSoft: "rgba(255,255,255,0.03)",
    fontFamily: systemFont,
    cardRadius: "16px",
    pillRadius: "9999px",
    bgTint: "rgba(99,102,241,0.03)",
  },
  vscode: {
    label: "VS Code",
    icon: <VSCodeIcon />,
    accent: "#007acc",
    accentRgb: "0,122,204",
    gradientFrom: "#007acc",
    gradientVia: "#2bc4e8",
    gradientTo: "#4fc1ff",
    bg: "#1e1e1e",
    fg: "#d4d4d4",
    fgMuted: "#9cdcfe",
    fgSubtle: "#808080",
    surface: "#252526",
    surfaceBorder: "#3c3c3c",
    surfaceSoft: "#2d2d30",
    fontFamily: vscodeFont,
    cardRadius: "2px",
    pillRadius: "2px",
    bgTint: "rgba(0,122,204,0.04)",
  },
  winter: {
    label: "Winter",
    icon: <SnowflakeIcon />,
    accent: "#2563eb",
    accentRgb: "37,99,235",
    gradientFrom: "#60a5fa",
    gradientVia: "#93c5fd",
    gradientTo: "#2563eb",
    bg: "#eef2f7",
    fg: "#0a0a0a",
    fgMuted: "rgba(10,10,10,0.78)",
    fgSubtle: "rgba(10,10,10,0.55)",
    surface: "#ffffff",
    surfaceBorder: "rgba(10,10,10,0.28)",
    surfaceSoft: "rgba(10,10,10,0.05)",
    fontFamily: systemFont,
    cardRadius: "16px",
    pillRadius: "9999px",
    bgTint: "rgba(37,99,235,0.03)",
  },
  summer: {
    label: "Summer",
    icon: <SunIcon />,
    accent: "#b45309",
    accentRgb: "180,83,9",
    gradientFrom: "#d97706",
    gradientVia: "#f59e0b",
    gradientTo: "#b45309",
    bg: "#f5ead3",
    fg: "#1c1917",
    fgMuted: "rgba(28,25,23,0.78)",
    fgSubtle: "rgba(28,25,23,0.5)",
    surface: "#fffbef",
    surfaceBorder: "rgba(28,25,23,0.28)",
    surfaceSoft: "rgba(28,25,23,0.06)",
    fontFamily: systemFont,
    cardRadius: "16px",
    pillRadius: "9999px",
    bgTint: "rgba(180,83,9,0.04)",
  },
  light: {
    label: "Light",
    icon: <SunSmallIcon />,
    accent: "#4f46e5",
    accentRgb: "79,70,229",
    gradientFrom: "#6366f1",
    gradientVia: "#8b5cf6",
    gradientTo: "#4f46e5",
    bg: "#f1f1f3",
    fg: "#0a0a0a",
    fgMuted: "rgba(10,10,10,0.78)",
    fgSubtle: "rgba(10,10,10,0.55)",
    surface: "#ffffff",
    surfaceBorder: "rgba(10,10,10,0.28)",
    surfaceSoft: "rgba(10,10,10,0.05)",
    fontFamily: systemFont,
    cardRadius: "16px",
    pillRadius: "9999px",
    bgTint: "rgba(79,70,229,0.03)",
  },
};

const ThemeContext = createContext<{
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}>({ theme: "dark", setTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeName | null;
    if (saved && themes[saved]) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    const t = themes[theme];
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-rgb", t.accentRgb);
    root.style.setProperty("--gradient-from", t.gradientFrom);
    root.style.setProperty("--gradient-via", t.gradientVia);
    root.style.setProperty("--gradient-to", t.gradientTo);
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--fg", t.fg);
    root.style.setProperty("--fg-muted", t.fgMuted);
    root.style.setProperty("--fg-subtle", t.fgSubtle);
    root.style.setProperty("--surface", t.surface);
    root.style.setProperty("--surface-border", t.surfaceBorder);
    root.style.setProperty("--surface-soft", t.surfaceSoft);
    root.style.setProperty("--font-family", t.fontFamily);
    root.style.setProperty("--card-radius", t.cardRadius);
    root.style.setProperty("--pill-radius", t.pillRadius);
    root.style.setProperty("--bg-tint", t.bgTint);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ── Icons ── */

function MoonIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function VSCodeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.583 2.213l-4.87 4.456L7.89 2.905 2 5.32v13.36l5.89 2.415 4.823-3.764 4.87 4.456L22 19.571V4.429l-4.417-2.216zM7.89 15.27V8.73L12.713 12 7.89 15.27zm9.693 1.946l-4.89-4.486V11.27l4.89-4.486v10.432z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0-20l4 4m-4-4l-4 4m4 16l4-4m-4 4l-4-4M2 12h20m-20 0l4-4m-4 4l4 4m16-4l-4-4m4 4l-4 4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function SunSmallIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.64 5.64l1.06 1.06M17.3 17.3l1.06 1.06M5.64 18.36l1.06-1.06M17.3 6.7l1.06-1.06" />
    </svg>
  );
}
