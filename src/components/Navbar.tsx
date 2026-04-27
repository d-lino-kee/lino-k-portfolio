"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, themes, type ThemeName } from "./ThemeProvider";

const navLinks = [
  { label: "about", href: "/about" },
  { label: "skills", href: "/#tech" },
  { label: "projects", href: "/#projects" },
  { label: "experiences", href: "/#experience" },
  { label: "contact me", href: "/#contact" },
];

const themeOrder: ThemeName[] = ["dark", "vscode", "winter", "summer", "light"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      <nav
        className="navbar-shell"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(2px, 0.6vw, 5px)",
          borderRadius: "var(--pill-radius)",
          background: "color-mix(in srgb, var(--surface) 80%, transparent)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
          padding: "clamp(6px, 1.2vw, 10px) clamp(8px, 1.8vw, 14px)",
          maxWidth: "100%",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.55), 0 0 40px rgba(var(--accent-rgb),0.18)"
            : "0 4px 20px rgba(0,0,0,0.35), 0 0 24px rgba(var(--accent-rgb),0.12)",
          transition: "box-shadow 0.3s, background 0.35s ease",
        }}
      >
        {/* Nav links */}
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="nav-pill">
            {label}
          </a>
        ))}

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 24,
            background: "var(--surface-border)",
            margin: "0 6px",
            flexShrink: 0,
          }}
        />

        {/* Theme switcher */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            onClick={() => setThemeOpen(!themeOpen)}
            aria-label="Switch theme"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(32px, 3.5vw, 44px)",
              height: "clamp(32px, 3.5vw, 44px)",
              flexShrink: 0,
              borderRadius: 9999,
              border: "none",
              background: "transparent",
              color: themeOpen ? "var(--accent)" : "var(--fg-muted)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(var(--accent-rgb),0.12)";
              e.currentTarget.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = themeOpen ? "var(--accent)" : "var(--fg-muted)";
            }}
          >
            {themes[theme].icon}
          </button>

          {themeOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 48,
                minWidth: 160,
                borderRadius: 12,
                border: "1px solid var(--surface-border)",
                background: "var(--surface)",
                backdropFilter: "blur(20px)",
                padding: 4,
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              {themeOrder.map((t) => (
                <button
                  key={t}
                  onClick={() => { setTheme(t); setThemeOpen(false); }}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    gap: 10,
                    borderRadius: 8,
                    border: "none",
                    padding: "10px 12px",
                    fontSize: 13,
                    fontWeight: 500,
                    background: theme === t ? "rgba(var(--accent-rgb),0.12)" : "transparent",
                    color: theme === t ? "var(--fg)" : "var(--fg-muted)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== t) {
                      e.currentTarget.style.background = "rgba(var(--accent-rgb),0.08)";
                      e.currentTarget.style.color = "var(--fg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== t) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--fg-muted)";
                    }
                  }}
                >
                  <span style={{ opacity: theme === t ? 1 : 0.6 }}>
                    {themes[t].icon}
                  </span>
                  {themes[t].label}
                  {theme === t && (
                    <svg style={{ marginLeft: "auto", color: "var(--accent)" }} className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Globe + EN */}
        <button
          aria-label="Language"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            height: "clamp(32px, 3.5vw, 44px)",
            padding: "0 clamp(8px, 1.2vw, 14px)",
            flexShrink: 0,
            borderRadius: 9999,
            border: "none",
            background: "transparent",
            color: "var(--fg-muted)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(var(--accent-rgb),0.12)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--fg-muted)";
          }}
        >
          <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.05em" }}>EN</span>
        </button>

        {/* Weather icon */}
        <button
          aria-label="Weather"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 9999,
            border: "none",
            background: "transparent",
            color: "var(--fg-muted)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(var(--accent-rgb),0.12)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--fg-muted)";
          }}
        >
          <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7A4.002 4.002 0 003 15z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
