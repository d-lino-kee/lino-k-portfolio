# Lino Kee — Portfolio

Personal portfolio site built with Next.js, showcasing my software projects, experience, and writing.

## Live site

> _Coming soon — replace this line with the deployed URL once the site is live (e.g. `https://lino-k.vercel.app`)._

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + CSS variables (theme system)
- **Icons:** lucide-react
- **Deployment:** Vercel (planned)

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```text
src/
  app/              # Next.js app router pages & global styles
  components/       # UI components
    sections/       # Page sections (Hero, Projects, Experience, Contact, …)
  data/             # Static content (projects, experience)
public/
  projects/         # Project preview screenshots
  companies/        # Company logos
  tech/             # Tech-stack icons
```

## Adding a project

1. Add an entry to `src/data/projects.ts`.
2. Drop a preview JPG into `public/projects/` and reference it via the `image` field.
3. Optionally register a card theme in `src/components/sections/ProjectsSection.tsx` (the `cardThemes` map).

## Contact

- GitHub: [d-lino-kee](https://github.com/d-lino-kee)
- Email: [guitarkinglino@gmail.com](mailto:guitarkinglino@gmail.com)
