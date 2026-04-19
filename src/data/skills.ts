export type Skill = {
  name: string;
  icon: string; // filename in /tech/ without extension
  category: "Frontend" | "Backend" | "Languages" | "Databases" | "AI & Data Science" | "Tools & DevOps";
};

export const skills: Skill[] = [
  // Frontend
  { name: "React",        icon: "react",        category: "Frontend" },
  { name: "Next.js",      icon: "next",         category: "Frontend" },
  { name: "Vue.js",       icon: "vue",          category: "Frontend" },
  { name: "Nuxt.js",      icon: "nuxt",         category: "Frontend" },
  { name: "Angular",      icon: "angular",      category: "Frontend" },
  { name: "Redux",        icon: "redux",        category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss",  category: "Frontend" },
  { name: "HTML",         icon: "html5",        category: "Frontend" },
  { name: "JSX",          icon: "jsx",          category: "Frontend" },

  // Backend
  { name: "Node.js",      icon: "nodedotjs",    category: "Backend" },
  { name: "Express.js",   icon: "express",      category: "Backend" },
  { name: "NestJS",       icon: "nestjs",       category: "Backend" },
  { name: "FastAPI",      icon: "fastapi",      category: "Backend" },
  { name: "Flask",        icon: "flask",        category: "Backend" },
  { name: "Spring Boot",  icon: "springboot",   category: "Backend" },
  { name: "Streamlit",    icon: "streamlit",    category: "Backend" },
  { name: "BullMQ",       icon: "bullmq",       category: "Backend" },
  { name: "AdonisJS",    icon: "adonisjs",     category: "Backend" },

  // Languages
  { name: "Python",       icon: "python",       category: "Languages" },
  { name: "JavaScript",   icon: "javascript",   category: "Languages" },
  { name: "TypeScript",   icon: "typescript",   category: "Languages" },
  { name: "Java",         icon: "java",         category: "Languages" },
  { name: "C++",          icon: "cplusplus",    category: "Languages" },
  { name: "R",            icon: "r",            category: "Languages" },
  { name: "SQL",          icon: "sql",          category: "Languages" },

  // Databases
  { name: "PostgreSQL",   icon: "postgresql",   category: "Databases" },
  { name: "MySQL",        icon: "mysql",        category: "Databases" },
  { name: "MongoDB",      icon: "mongodb",      category: "Databases" },
  { name: "Redis",        icon: "redis",        category: "Databases" },
  { name: "Neo4j",        icon: "neo4j",        category: "Databases" },
  { name: "SQLite",       icon: "sqlite",       category: "Databases" },
  { name: "Firebase",     icon: "firebase",     category: "Databases" },
  { name: "Weaviate",     icon: "weaviate",     category: "Databases" },
  { name: "Qdrant",       icon: "qdrant",       category: "Databases" },

  // AI & Data Science
  { name: "scikit-learn",       icon: "scikitlearn",     category: "AI & Data Science" },
  { name: "OpenCV",             icon: "opencv",          category: "AI & Data Science" },
  { name: "NumPy",              icon: "numpy",           category: "AI & Data Science" },
  { name: "Pandas",             icon: "pandas",          category: "AI & Data Science" },
  { name: "Matplotlib",         icon: "matplotlib",      category: "AI & Data Science" },
  { name: "Seaborn",            icon: "seaborn",         category: "AI & Data Science" },
  { name: "PyTorch",            icon: "pytorch",         category: "AI & Data Science" },
  { name: "TensorFlow",         icon: "tensorflow",      category: "AI & Data Science" },
  { name: "spaCy",                icon: "spacy",        category: "AI & Data Science" },
  { name: "Google Speech-to-Text", icon: "googlespeech", category: "AI & Data Science" },
  { name: "Google Text-to-Speech", icon: "googletts",    category: "AI & Data Science" },
  { name: "Google Translation",    icon: "googletranslate", category: "AI & Data Science" },

  // Tools & DevOps
  { name: "Git",          icon: "git",          category: "Tools & DevOps" },
  { name: "Docker",       icon: "docker",       category: "Tools & DevOps" },
  { name: "GCP",          icon: "googlecloud",  category: "Tools & DevOps" },
  { name: "Azure",        icon: "azure",        category: "Tools & DevOps" },
  { name: "Linux",        icon: "linux",        category: "Tools & DevOps" },
];
