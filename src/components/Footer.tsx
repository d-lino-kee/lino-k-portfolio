"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.07] py-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white/60">Lino Kee</span>
        </p>
        <p className="text-xs text-white/25">
          Built with{" "}
          <span className="text-white/40 transition hover:text-teal-300">Next.js</span>
          {" + "}
          <span className="text-white/40 transition hover:text-teal-300">Tailwind</span>
          {" · "}
          Designed with care
        </p>
      </div>
    </footer>
  );
}
