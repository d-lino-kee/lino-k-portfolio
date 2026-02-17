export type Skill = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Tools" | "Cloud";
};

export const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript / TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MySQL", category: "Backend" },

  { name: "Git / GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Power Automate", category: "Tools" },
  { name: "Power BI", category: "Tools" },
  { name: "OpenCV", category: "Tools" },
  { name: "scikit-learn", category: "Tools" },

  { name: "GCP (BigQuery)", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
];
