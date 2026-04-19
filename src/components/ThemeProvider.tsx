"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeName = "dark" | "vscode" | "winter" | "summer" | "claude";

type ThemeConfig = {
  label: string;
  icon: ReactNode;
  accent: string;       // primary accent color (hex)
  accentRgb: string;    // RGB values for rgba()
  gradientFrom: string; // gradient-text start
  gradientVia: string;
  gradientTo: string;
  bgTint: string;       // subtle background tint
};

export const themes: Record<ThemeName, ThemeConfig> = {
  dark: {
    label: "Dark",
    icon: <MoonIcon />,
    accent: "#818cf8",
    accentRgb: "129,140,248",
    gradientFrom: "#818cf8",
    gradientVia: "#a855f7",
    gradientTo: "#6366f1",
    bgTint: "rgba(99,102,241,0.03)",
  },
  vscode: {
    label: "VS Code",
    icon: <VSCodeIcon />,
    accent: "#007acc",
    accentRgb: "0,122,204",
    gradientFrom: "#007acc",
    gradientVia: "#2bc4e8",
    gradientTo: "#0098ff",
    bgTint: "rgba(0,122,204,0.03)",
  },
  winter: {
    label: "Winter",
    icon: <SnowflakeIcon />,
    accent: "#93c5fd",
    accentRgb: "147,197,253",
    gradientFrom: "#93c5fd",
    gradientVia: "#c4b5fd",
    gradientTo: "#e0e7ff",
    bgTint: "rgba(147,197,253,0.03)",
  },
  summer: {
    label: "Summer",
    icon: <SunIcon />,
    accent: "#fbbf24",
    accentRgb: "251,191,36",
    gradientFrom: "#fbbf24",
    gradientVia: "#f97316",
    gradientTo: "#ef4444",
    bgTint: "rgba(251,191,36,0.03)",
  },
  claude: {
    label: "Claude",
    icon: <ClaudeIcon />,
    accent: "#d97706",
    accentRgb: "217,119,6",
    gradientFrom: "#d97706",
    gradientVia: "#dc6b35",
    gradientTo: "#c2410c",
    bgTint: "rgba(217,119,6,0.03)",
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
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-rgb", t.accentRgb);
    root.style.setProperty("--gradient-from", t.gradientFrom);
    root.style.setProperty("--gradient-via", t.gradientVia);
    root.style.setProperty("--gradient-to", t.gradientTo);
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
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function VSCodeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.583 2.213l-4.87 4.456L7.89 2.905 2 5.32v13.36l5.89 2.415 4.823-3.764 4.87 4.456L22 19.571V4.429l-4.417-2.216zM7.89 15.27V8.73L12.713 12 7.89 15.27zm9.693 1.946l-4.89-4.486V11.27l4.89-4.486v10.432z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0-20l4 4m-4-4l-4 4m4 16l4-4m-4 4l-4-4M2 12h20m-20 0l4-4m-4 4l4 4m16-4l-4-4m4 4l-4 4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-3H8.5L13 7.5v3H15.5L11 17.5z" />
    </svg>
  );
}
