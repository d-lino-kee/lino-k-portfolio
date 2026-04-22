"use client";

export default function Footer() {
  return (
    <footer
      className="mt-16 py-10"
      style={{ borderTop: "1px solid var(--surface-border)" }}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm" style={{ color: "var(--fg-subtle)" }}>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium" style={{ color: "var(--fg-muted)" }}>Lino Kee</span>
        </p>
        <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
          Built with{" "}
          <span style={{ color: "var(--fg-muted)" }}>Next.js</span>
          {" + "}
          <span style={{ color: "var(--fg-muted)" }}>Tailwind</span>
          {" · "}
          Designed with care
        </p>
      </div>
    </footer>
  );
}
