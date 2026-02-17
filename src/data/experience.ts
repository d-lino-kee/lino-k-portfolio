export type Experience = {
    role: string;
    org: string;
    date: string;
    location?: string;
    bullets: string[];
    skills?: string[];
};

export const experience: Experience[] = [
  {
    role: "Intern — AI Enablement & Governance",
    org: "OpenText (Co-op)",
    date: "Jan 2026 — Present",
    location: "Waterloo, ON (Hybrid)",
    bullets: [
      "Supporting AI enablement and governance initiatives across teams building production software and analytics tooling.",
      "Working across modern web stacks and data platforms to improve reliability, adoption, and responsible AI practices.",
    ],
    skills: [
      "Python",
      "JavaScript/TypeScript",
      "React/Vue/Angular",
      "Node.js",
      "SQL",
      "GCP/BigQuery",
      "GenAI/NLP",
    ],
  },
  {
    role: "Technical Project Manager (TPM) — FORTif.ai",
    org: "WAT.ai",
    date: "Jan 2025 — Present",
    location: "Waterloo, ON (Hybrid)",
    bullets: [
      "Leading delivery of a computer-vision + LLM platform to support safe, independent living for seniors.",
      "Coordinating cross-functional execution across data pipelines, metric definition, model training, and UX design.",
      "Running GitHub-based sprint planning and roadmap execution toward MVP milestones.",
    ],
    skills: ["Computer Vision", "OpenCV", "Python", "Node.js", "LLMs/RAG", "Docker", "Project Leadership"],
  },
  {
    role: "Software Engineer — Eve Perception",
    org: "WATonomous",
    date: "May 2025 — Oct 2025",
    bullets: [
      "Built perception-related software components within an autonomous vehicle stack.",
      "Worked with robotics tooling and sensor systems to support reliable runtime behavior.",
    ],
    skills: ["C++", "ROS2", "LiDAR", "Docker", "Embedded Systems"],
  },
  {
    role: "Data Engineering Intern — Technical Data Package (TDP)",
    org: "Seaspan ULC (Co-op)",
    date: "May 2025 — Aug 2025",
    location: "Vancouver, BC (On-site)",
    bullets: [
      "Developed data tooling and automation to support engineering/logistics workflows.",
      "Applied Python-based processing and test automation to improve data quality and reliability.",
    ],
    skills: ["Python", "Data Engineering", "NLP", "Automation", "NumPy", "openpyxl"],
  },
  {
    role: "QA Intern",
    org: "Kardium Inc. (Co-op)",
    date: "Sep 2024 — Dec 2024",
    location: "Vancouver, BC (On-site)",
    bullets: [
      "Supported QA analytics and reliability efforts through SQL-driven analysis and KPI tracking.",
      "Contributed to data-driven reporting and process improvements for product quality.",
    ],
    skills: ["SQL Server", "T-SQL", "QA Processes", "Dashboards", "Data Analysis"],
  },
  {
    role: "Automation Developer Intern — ERP Digital Transformation",
    org: "Paladin Technologies (Co-op)",
    date: "Jan 2024 — May 2024",
    location: "Vancouver, BC (On-site)",
    bullets: [
      "Automated ERP and HR workflows using Power Automate and Dynamics 365 integrations.",
      "Built workflow improvements that reduced manual effort and improved operational consistency.",
    ],
    skills: ["Power Automate", "Dynamics 365", "Dataverse", "Power Apps", "Power BI", "REST APIs"],
  },
  {
    role: "Project Assistant — Azure Cloud & AI Services (WEA)",
    org: "Microsoft (Co-op)",
    date: "May 2023 — Aug 2023",
    location: "Waterloo, ON (Remote)",
    bullets: [
      "Supported applied ML and NLP work using Azure cloud tooling and cognitive services.",
      "Helped deliver project work with clear milestones, documentation, and stakeholder communication.",
    ],
    skills: ["NLP", "Azure ML", "AKS", "Cloud", "Anomaly Detection", "Project Management"],
  },
];

