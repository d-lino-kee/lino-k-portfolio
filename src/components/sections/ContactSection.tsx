"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Let’s Connect</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Want to collaborate, chat, or share an opportunity? Send a message.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl font-semibold">Send a Message</h3>

          <div className="mt-4 space-y-3">
            <Field label="Your Name" placeholder="John Doe" />
            <Field label="Email Address" placeholder="john@example.com" type="email" />
            <Field label="Subject" placeholder="Project / Internship / Collaboration" />
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-white/30"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>
          </div>

          <button
            className="mt-5 w-full rounded-xl border border-white/15 bg-white/10 py-3 font-semibold hover:bg-white/15"
            type="submit"
          >
            {status === "sent" ? "Sent ✅" : "Send"}
          </button>

          <p className="mt-3 text-xs text-white/50">
            (This is a front-end form right now. If you want, I can wire it to
            Resend / Formspree / EmailJS.)
          </p>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <div>
                <div className="font-semibold">Currently Available</div>
                <div className="text-white/70 text-sm">
                  Open to internships, co-ops, and collaborations
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">Contact</div>

            <div className="mt-4 space-y-3 text-white/75">
              <a className="flex items-center gap-2 hover:text-white" href="mailto:you@example.com">
                <Mail className="h-4 w-4" /> you@example.com
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://github.com/d-lino-kee"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> github.com/d-lino-kee
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
              Tip: Add your email + LinkedIn URL here and you’re done.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input
        className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-white/30"
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
