export type ProjectCategory =
| "AI & ML"
| "Web Development"
| "Data"
| "Optimization"
| "Automation"
| "Product";

export type Project = {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    highlights: string[];
    categories: ProjectCategory[];
    tags: string[];
    tech: string[];
    links: { label: string; href: string }[];
    featured?: boolean;
    gradient?: string; // tailwind gradient for card background
};

export const projects: Project[] = [
  {
    title: "FORTif.ai",
    featured: true,
    subtitle: "Platform for Safe & Independent Senior Living",
    date: "2025",
    description:
      "A centralized AI platform helping seniors age safely in place using real-time computer vision hazard detection and voice-enabled, adaptive nudges for seniors and caregivers.",
    highlights: [
      "Built an OpenCV-based hazard detection pipeline (obstacles, spills, furniture) and assigned risk scores for proactive fall prevention.",
      "Integrated a RAG-augmented chatbot that converts risk insights into clear, empathetic prompts for Smart TV + mobile notifications.",
      "Led a 10+ person cross-disciplinary team and drove roadmap execution with GitHub sprints and Notion workflows.",
    ],
    categories: ["AI & ML", "Web Development", "Product"],
    tags: ["Computer Vision", "RAG + LLM", "Team Lead", "MVP Aug 2025"],
    tech: ["Python", "OpenCV", "YOLOv8", "Whisper", "Flask", "Node.js", "Docker"],
    links: [
      {
        label: "GitHub (Phase 1)",
        href: "https://github.com/FORTif-ai/Phase1---AI-Chatbot-and-Hazard-Detection-Model",
      },
      { label: "Demo", href: "#" },
    ],
    gradient: "from-emerald-900/40 to-teal-900/20",
  },

  {
    title: "OptiTime AI",
    subtitle: "AI Time Management System",
    date: "2025",
    description:
      "Full-stack AI-powered time management recommendation system with intelligent scheduling and priority optimization.",
    highlights: [
      "Built with NestJS, React, Next.js, Redis, MongoDB, and BullMQ for scalable task processing.",
      "Implements smart scheduling algorithms to optimize time allocation based on user patterns.",
      "Features real-time recommendations and adaptive learning from user feedback.",
    ],
    categories: ["AI & ML", "Web Development"],
    tags: ["Full-stack", "AI Recommendations", "Real-time"],
    tech: ["NestJS", "React", "Next.js", "Redis", "MongoDB", "BullMQ", "TypeScript"],
    links: [
      { label: "GitHub", href: "#" },
    ],
    gradient: "from-violet-900/40 to-purple-900/20",
  },

  {
    title: "Car Recommender ML",
    subtitle: "Hybrid Recommendation System",
    date: "2025",
    description:
      "A lifestyle-based car recommendation app combining content-based similarity scoring with a supervised learning model and a feedback loop that improves recommendations over time.",
    highlights: [
      "Built hybrid recommender (content-based + Logistic Regression) based on user priorities, lifestyle, and feedback.",
      "Created preprocessing pipelines for scaling/encoding and model training using Pandas/NumPy.",
      "Developed FastAPI + SQLite backend (SQLAlchemy) with endpoints for recs, logging feedback, and dataset queries.",
    ],
    categories: ["AI & ML", "Data", "Web Development"],
    tags: ["Hybrid ML", "Feedback Loop", "FastAPI"],
    tech: ["Python", "FastAPI", "scikit-learn", "SQLite", "SQLAlchemy", "Jinja2"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/d-lino-kee/Car-Recommendation-System",
      },
    ],
    gradient: "from-blue-900/40 to-cyan-900/20",
  },

  {
    title: "Awaaz",
    subtitle: "AI Voice-First Language Learning",
    date: "2025",
    description:
      "AI-powered voice-first language learning tool built at the AI & Data Science for Good Hackathon, leveraging Google Speech APIs and translation for immersive learning.",
    highlights: [
      "Integrated Google Speech-to-Text, Text-to-Speech, and Translation APIs for real-time voice interaction.",
      "Built responsive UI with React and Tailwind CSS for accessible mobile-first experience.",
      "Designed for underserved language learners with voice-first interaction patterns.",
    ],
    categories: ["AI & ML", "Web Development"],
    tags: ["Hackathon", "Voice AI", "Language Learning"],
    tech: ["React", "Tailwind CSS", "Google Cloud APIs", "MySQL", "FastAPI"],
    links: [
      { label: "GitHub", href: "#" },
    ],
    gradient: "from-orange-900/40 to-amber-900/20",
  },

  {
    title: "Skill Swap Platform",
    subtitle: "Peer-to-Peer Learning Marketplace",
    date: "2025",
    description:
      "A full-stack platform for peer skill exchange with AI-assisted matching to help users learn without financial barriers.",
    highlights: [
      "Built full-stack app with React, Node/Express, and MySQL for user profiles, skills, and learning history.",
      "Implemented a matching algorithm to optimize pairings by experience level, availability, and preferences.",
      "Added rating + review system with REST APIs to improve trust and refine matches over time.",
    ],
    categories: ["Web Development", "Product"],
    tags: ["Full-stack", "Matching Algorithm", "MySQL"],
    tech: ["React", "Node.js", "Express.js", "MySQL", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/d-lino-kee/Skill-Swap-Platform" },
    ],
    gradient: "from-indigo-900/40 to-blue-900/20",
  },

  {
    title: "Court & Gridiron Outcome Lab",
    subtitle: "Sports Analytics Prediction Models",
    date: "2025",
    description:
      "ML pipelines to predict NBA and NFL game outcomes using player/team context features, EDA, and model selection.",
    highlights: [
      "Trained models including Logistic Regression, Random Forest, and XGBoost and compared tradeoffs using cross-validation.",
      "Built feature pipelines for normalization, encoding, feature selection, and missing-value handling.",
      "Ran EDA to identify correlations between player metrics, team stats, and outcomes.",
    ],
    categories: ["AI & ML", "Data"],
    tags: ["Model Training", "EDA", "Evaluation"],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "XGBoost"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/d-lino-kee/Court-Gridiron-Outcome-Lab",
      },
    ],
    gradient: "from-rose-900/40 to-pink-900/20",
  },

  {
    title: "Movie Review Application",
    subtitle: "Full-stack Reviews + Search",
    date: "2024",
    description:
      "A movie review app with search and review workflows, backed by a relational database and API-driven updates.",
    highlights: [
      "Built React UI with interactive components (search, fields, dropdowns) for smooth user flows.",
      "Implemented Node/Express backend connected to MySQL for real-time data retrieval and submissions.",
      "Focused on responsive UI/UX for a polished and consistent experience across pages.",
    ],
    categories: ["Web Development"],
    tags: ["Full-stack", "UI/UX"],
    tech: ["React", "Node.js", "Express.js", "MySQL", "JSX"],
    links: [{ label: "GitHub", href: "#" }],
    gradient: "from-sky-900/40 to-blue-900/20",
  },

  {
    title: "ERP & HR Process Automation",
    subtitle: "Power Automate + Dynamics 365",
    date: "2024",
    description:
      "Automation work to streamline ERP/HR workflows and reduce manual administrative effort across business systems.",
    highlights: [
      "Unified data transfer workflows across F&O, CE, Power Platform Admin Center, and Project Operations.",
      "Redesigned new-hire onboarding entry flow, achieving up to 98% efficiency improvement.",
      "Automated timesheet reminder workflows for 1500+ employees, cutting manual effort by ~95%.",
    ],
    categories: ["Automation", "Product"],
    tags: ["Power Platform", "Workflow Automation"],
    tech: ["Power Automate", "Dynamics 365", "Power BI"],
    links: [{ label: "Summary", href: "#" }],
    gradient: "from-amber-900/40 to-yellow-900/20",
  },

  {
    title: "Optimal Distribution Networks",
    subtitle: "Integer Programming Model",
    date: "2024",
    description:
      "An integer programming model to minimize shipping costs across plants, distribution centers, and retail demand under capacity and operational constraints.",
    highlights: [
      "Modeled rail/truck shipping costs and DC operating expenses with constraint-based formulation.",
      "Selected optimal DC locations from candidate cities using Excel Solver optimization.",
      "Achieved up to a 45% cost reduction and validated results via sensitivity analysis.",
    ],
    categories: ["Optimization", "Data"],
    tags: ["Cost Reduction", "Sensitivity Analysis"],
    tech: ["Excel Solver", "Integer Programming"],
    links: [{ label: "Write-up", href: "#" }],
    gradient: "from-teal-900/40 to-emerald-900/20",
  },
];
