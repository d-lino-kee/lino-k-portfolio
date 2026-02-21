import { skills } from "../../data/skills";

const categories = ["Languages", "Frontend", "Backend", "Tools", "Cloud"] as const;

export default function TechStack() {
  return (
    <section id="tech" className="pt-16 md:pt-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Tech Stack</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Languages, frameworks, libraries, and tools I use to build and ship.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {categories.map((cat) => {
          const items = skills.filter((s) => s.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{cat}</h3>
                <div className="ml-4 h-px flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {items.map((s) => (
                  <SkillCard key={s.name} name={s.name} category={s.category} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SkillCard({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  const slug = toSlug(name);

  return (
    <div
      className={[
        "group rounded-2xl border border-white/10 bg-white/5 p-5",
        "shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur",
        "transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/20",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        {/* Icon tile (safe fallback without onError) */}
        <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {/* If you add /public/tech/<slug>.svg it will show. If not, the letter still shows. */}
          <img
            src={`/tech/${slug}.svg`}
            alt=""
            className="h-full w-full object-contain p-2 opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white/80">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="min-w-0">
          <div className="truncate text-base font-semibold text-white">
            {name}
          </div>
          <div className="mt-1 text-xs text-white/60">{category}</div>
        </div>
      </div>

      {/* Subtle accent line on hover */}
      <div
        aria-hidden
        className="pointer-events-none mt-4 h-px w-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent opacity-0 transition group-hover:opacity-100"
      />
    </div>
  );
}

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
