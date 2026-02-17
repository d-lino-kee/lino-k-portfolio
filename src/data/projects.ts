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
};

export const projects: Project[] = [
  {
    title: "FORTif.ai",
    subtitle: "Platform for Safe & Independent Senior Living",
    date: "Jan 2025 — Present",
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
  },

  {
    title: "Car Recommender ML",
    subtitle: "Hybrid Recommendation System",
    date: "Jun 2025 — Sep 2025",
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
      { label: "Demo", href: "#" },
    ],
  },

  {
    title: "Skill Swap Platform",
    subtitle: "Peer-to-Peer Learning Marketplace",
    date: "Jan 2025 — Apr 2025",
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
      { label: "Demo", href: "#" },
    ],
  },

  {
    title: "Court & Gridiron Outcome Lab",
    subtitle: "Sports Analytics Prediction Models",
    date: "Jan 2025 — Apr 2025",
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
  },

  {
    title: "Optimal Distribution Networks (IP)",
    subtitle: "Integer Programming Model",
    date: "May 2024 — Aug 2024",
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
  },

  {
    title: "Movie Review Application",
    subtitle: "Full-stack Reviews + Search",
    date: "Jun 2024 — Aug 2024",
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
  },

  {
    title: "ERP & HR Process Automation",
    subtitle: "Power Automate + Dynamics 365",
    date: "Jan 2024 — Apr 2024",
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
  },

  {
    title: "ProdFrost Launch Strategy",
    subtitle: "Product Strategy (ProdCon 2023)",
    date: "Nov 2023",
    description:
      "A product launch strategy and pitch for modernizing kitchen appliances with emerging technologies, grounded in customer research and KPI design.",
    highlights: [
      "Defined customer segments and KPIs targeting +20% adoption and +30% brand recognition in year one.",
      "Recommended partnerships and advertising initiatives backed by market research.",
      "Delivered a 10-minute judged pitch covering constraints and ethical considerations.",
    ],
    categories: ["Product"],
    tags: ["Strategy", "Pitch"],
    tech: ["Market Research", "Product Analytics"],
    links: [{ label: "Slides", href: "#" }],
  },

  {
    title: "Work Systems Optimization (CRAFT)",
    subtitle: "Layout + Flow Analysis",
    date: "Feb 2023 — Apr 2023",
    description:
      "Operations analysis of high-traffic environments (food court + airport checkpoint) with layout optimization using CRAFT to reduce congestion and improve throughput.",
    highlights: [
      "Performed root-cause and traffic flow analysis to identify bottlenecks in high-traffic systems.",
      "Applied CRAFT to propose improved facility layouts for better flow and efficiency.",
      "Projected up to ~30% efficiency improvements through redesigned layouts and process changes.",
    ],
    categories: ["Optimization", "Data"],
    tags: ["Operations", "Root Cause"],
    tech: ["Excel", "CRAFT"],
    links: [{ label: "Write-up", href: "#" }],
  },

  {
    title: "Student Financial Planning Tool",
    subtitle: "VBA + Macros",
    date: "Sep 2022 — Dec 2022",
    description:
      "A financial planning application for students with calculators, tracking, and chart-based insights to support better financial decisions.",
    highlights: [
      "Built calculators for cash flow, debt, and goals, plus a financial aid recorder with visual charts.",
      "Translated inputs into color-coded dashboards to improve clarity and financial literacy.",
      "Reported ~10% expense reduction from cohort feedback tied to improved awareness.",
    ],
    categories: ["Automation", "Product"],
    tags: ["Dashboards", "Personal Finance"],
    tech: ["VBA", "Excel", "Macros"],
    links: [{ label: "Demo", href: "#" }],
  },

  {
    title: "Time-Management Decision Support System",
    subtitle: "VBA Scheduling Optimizer",
    date: "Sep 2022 — Dec 2022",
    description:
      "A time allocation system that helps students prioritize tasks by type, difficulty, and urgency, then calculates optimized time distribution with dynamic charts.",
    highlights: [
      "Created a form-based UI and a scoring formula to compute optimal time allocation across activities.",
      "Designed dynamic graphs/charts to visualize time distribution and priorities.",
      "Supported execution with documentation, test specs, and analysis artifacts.",
    ],
    categories: ["Automation", "Product"],
    tags: ["Decision Support", "Visualization"],
    tech: ["VBA", "Excel"],
    links: [{ label: "Demo", href: "#" }],
  },

  {
    title: "Nudge Theory Research Paper",
    subtitle: "Behavioral Economics Research",
    date: "Oct 2020 — Feb 2022",
    description:
      "A research project analyzing how nudge interventions can encourage healthier grocery-store choices, including social/economic implications and behavioral outcome analysis.",
    highlights: [
      "Evaluated behavioral outcomes using data visualization and analysis techniques.",
      "Produced annotated bibliographies, status reports, and process documentation.",
      "Presented findings clearly with emphasis on real-world impacts and tradeoffs.",
    ],
    categories: ["Data", "Product"],
    tags: ["Research", "Behavior"],
    tech: ["Technical Writing", "Data Visualization"],
    links: [{ label: "Paper", href: "#" }],
  },
];