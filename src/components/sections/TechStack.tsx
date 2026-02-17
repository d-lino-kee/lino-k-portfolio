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
                <div className="h-px flex-1 bg-white/10 ml-4" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {items.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                  >
                    <div className="text-lg font-semibold">{s.name}</div>
                    <div className="mt-1 text-xs text-white/60">
                      {s.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
