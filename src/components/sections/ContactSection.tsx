"use client";

import { useState } from "react";
import { Mail, Send, Globe } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 26, height: 26 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 26, height: 26 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const fieldLabelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 16,
  fontWeight: 500,
  textTransform: "lowercase",
  letterSpacing: "0.01em",
  color: "var(--fg-muted)",
};

const fieldInputStyle: React.CSSProperties = {
  marginTop: 12,
  width: "100%",
  borderRadius: 16,
  border: "2px solid var(--surface-border)",
  background: "#ffffff",
  padding: "14px 20px",
  fontSize: 16,
  color: "#111827",
  outline: "none",
  transition: "all 0.3s",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden", paddingTop: 160, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>

        {/* Header — outside the bubble */}
        <header style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(129,140,248,0.7)" }}>
            Contact
          </p>
          <h2 style={{ marginTop: 10, fontSize: "clamp(1.75rem,3.6vw,2.75rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            Let&apos;s build{" "}
            <span className="gradient-text">something great</span>.
          </h2>
        </header>

       <div style={{
         borderRadius: 20,
         border: "2px solid var(--surface-border)",
         background: "var(--surface)",
         padding: "28px 32px 44px",
       }}>

        {/* Social icons — circular filled buttons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
          <IconLink href="https://github.com/d-lino-kee" label="GitHub" external>
            <GitHubIcon />
          </IconLink>
          <IconLink href="https://www.linkedin.com/" label="LinkedIn" external>
            <LinkedInIcon />
          </IconLink>
          <IconLink href="mailto:guitarkinglino@gmail.com" label="Email">
            <Mail style={{ width: 26, height: 26 }} strokeWidth={1.75} />
          </IconLink>
          <IconLink href="/" label="Website">
            <Globe style={{ width: 26, height: 26 }} strokeWidth={1.75} />
          </IconLink>
        </div>

        {/* Form */}
        <style>{`
          .contact-input::placeholder,
          .contact-textarea::placeholder { color: #9ca3af; }
          .contact-input:focus,
          .contact-textarea:focus {
            border-color: #6366f1 !important;
            box-shadow: 0 0 0 3px rgba(99,102,241,0.3);
          }
        `}</style>
        <form
          onSubmit={(e) => { e.preventDefault(); setStatus("sent"); }}
          style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <Field label="name" placeholder="your name" />
            <Field label="email" placeholder="you@example.com" type="email" />
          </div>
          <Field label="subject" placeholder="what's this about?" />
          <div>
            <label style={fieldLabelStyle}>message</label>
            <textarea
              required
              rows={6}
              placeholder="tell me about your project..."
              className="contact-textarea"
              style={{ ...fieldInputStyle, resize: "none", lineHeight: 1.5 }}
            />
          </div>
          <div style={{ paddingTop: 8 }}>
            <button
              type="submit"
              disabled={status === "sent"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 9999,
                border: "none",
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 600,
                backgroundColor: "#6366f1",
                color: "#ffffff",
                cursor: status === "sent" ? "default" : "pointer",
                opacity: status === "sent" ? 0.8 : 1,
                transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                if (status === "sent") return;
                e.currentTarget.style.backgroundColor = "#818cf8";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(99,102,241,0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#6366f1";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {status === "sent" ? "Sent!" : "Send Message"}
              <Send style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </form>
       </div>
      </div>
    </section>
  );
}

function IconLink({
  href, label, external = false, children,
}: {
  href: string; label: string; external?: boolean; children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      style={{
        display: "flex",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999,
        background: "rgba(var(--accent-rgb),0.1)",
        color: "var(--fg)",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(var(--accent-rgb),0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(var(--accent-rgb),0.1)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </a>
  );
}

function Field({ label, placeholder, type = "text" }: {
  label: string; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label style={fieldLabelStyle}>{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="contact-input"
        style={fieldInputStyle}
      />
    </div>
  );
}
