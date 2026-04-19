"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, themes, type ThemeName } from "./ThemeProvider";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#tech" },
  { label: "experiences", href: "#experience" },
  { label: "projects", href: "#projects" },
];

const themeOrder: ThemeName[] = ["dark", "vscode", "winter", "summer", "claude"];

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
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          borderRadius: 9999,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(13,13,18,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "8px 12px",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* Nav links */}
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              padding: "8px 16px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            {label}
          </a>
        ))}

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 20,
            background: "rgba(255,255,255,0.12)",
            margin: "0 4px",
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
              width: 36,
              height: 36,
              borderRadius: 9999,
              border: "none",
              background: "transparent",
              color: themeOpen ? "var(--accent)" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = themeOpen ? "var(--accent)" : "rgba(255,255,255,0.5)";
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
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,26,0.95)",
                backdropFilter: "blur(20px)",
                padding: 4,
                boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
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
                    background: theme === t ? "rgba(255,255,255,0.08)" : "transparent",
                    color: theme === t ? "#fff" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== t) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== t) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
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
            height: 36,
            padding: "0 10px",
            borderRadius: 9999,
            border: "none",
            background: "transparent",
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "rgba(255,255,255,1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
          }}
        >
          <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>EN</span>
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
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "rgba(255,255,255,1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
          }}
        >
          <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7A4.002 4.002 0 003 15z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
