export type Experience = {
    role: string;
    roleIcon?: string;
    org: string;
    date: string;
    location?: string;
    bullets: string[];
    skills?: string[];
    logo?: string;
    logoScale?: number;
};

export const experience: Experience[] = [
  {
    role: "Solutions Engineer — Enterprise AI Intelligence Platform",
    roleIcon: "🤖",
    org: "OpenText (Co-op)",
    date: "Jan 2026 — May 2026",
    location: "Waterloo, ON (Hybrid)",
    logo: "/companies/opentext.png",
    bullets: [
      "Architected the <strong>AI Visibility Hub</strong> serving <strong>22,000 employees</strong> across <strong>25 business functions</strong> and <strong>6+ global regions</strong>, with a React/Vue/Angular frontend, Python FastAPI & Flask REST APIs, and a PostgreSQL schema with RBAC access control.",
      "Delivered <strong>MyOT</strong> product improvements including PDF analytics exports, UX enhancements, a Neo4j recommendation engine, and KPI rollup dashboards using TypeScript, Next.js, Redis, and GitLab CI/CD pipelines.",
      "Supported OpenText's <strong>AI 360</strong> initiative by identifying and categorizing AI use cases across <strong>25 business functions</strong>, assessing risk levels, developing governance frameworks, and improving enterprise AI visibility by <strong>45%+</strong>.",
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "React",
      "Vue.js",
      "Next.js",
      "Angular",
      "Node.js",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "AdonisJS",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Neo4j",
      "Docker",
      "GCP",
      "Git",
    ],
  },
  {
    role: "AI Engineering Lead — FORTif.ai Senior Safety Platform",
    roleIcon: "🧠",
    org: "WAT.ai",
    date: "Dec 2024 — May 2026",
    location: "Waterloo, ON (Hybrid)",
    logo: "/companies/watai.jpg",
    bullets: [
      "Built an integrated senior safety platform with LLM-based hazard detection and a RAG chatbot using Google Gemini, hybrid search, and thresholded retrieval over patient-scoped memories in a Weaviate vector database.",
      "Implemented structured JSON hazard outputs (type, location, severity, confidence) with OpenCV & SAM2-based prompt enhancements targeting floor-level clutter and common tripping hazards.",
      "Delivered a full-stack system (React, Node.js, FastAPI) for voice/text workflows, memory dashboard management, and contextual hazard alerts, leading a <strong>10+</strong> person cross-discipline team.",
      "Presented at <strong>DevCon (UTMIST)</strong>, <strong>CUCAI</strong>, and the <strong>Socratica Symposium</strong>; published a research paper on CV baselines and LLM-based hazard detection performance.",
    ],
    skills: [
      "Python",
      "React",
      "Node.js",
      "FastAPI",
      "Weaviate",
      "OpenCV",
      "Docker",
      "GCP",
      "Git",
    ],
  },
  {
    role: "Product Engineering Lead",
    roleIcon: "🚀",
    org: "UW CUBE",
    date: "Dec 2025 — Present",
    location: "Waterloo, ON",
    logo: "/companies/uwcube.png",
    logoScale: 1.4,
    bullets: [
      "Lead the end-to-end implementation of UW CUBE's first website, mentoring a team of <strong>7 software developers</strong> across front-end (React, Next.js), back-end (Node.js/Python), and database (MySQL) architecture while maintaining code quality and cohesive product direction.",
      "Architect an AI-powered student-role matching system using ranking algorithms, NLP, and LLMs to interpret student goals, parse resume experience, and surface the most relevant opportunities.",
      "Build an AI Q&A chatbot to guide first-time users through the platform, reducing onboarding friction and making the incubator accessible to students with no prior experience navigating such tools.",
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "MySQL",
      "NLP",
      "LLMs",
      "UI/UX",
      "Git",
    ],
  },
  {
    role: "Software Engineer — Eve Perception",
    org: "WATonomous",
    date: "May 2025 — Oct 2025",
    logo: "/companies/watonomous.jpg",
    bullets: [
      "Built perception-related software components within an autonomous vehicle stack. Worked with robotics tooling and sensor systems to support reliable runtime behavior.",
    ],
    skills: ["C++", "ROS2", "LiDAR", "Docker", "Embedded Systems"],
  },
  {
    role: "Software Engineer — ILS Data Engineering & NLP",
    org: "Seaspan ULC (Co-op)",
    date: "May 2025 — Aug 2025",
    location: "Vancouver, BC (On-site)",
    logo: "/companies/seaspan.png",
    bullets: [
      "Built Python data quality pipelines using Pandas, NumPy, and NLTK to validate 9,000+ VFI documents, automating error reporting and ML-based obsolescence forecasting to improve review accuracy by 95% and save ~1,000 hours.",
      "Engineered a 10,000-line Python backend to classify metadata, validate OEM part numbers, and detect missing database entries, with regression tests reducing first-pass review from 5 hours to 5 minutes per file.",
      "Built an NLP-based entity resolution system using PyTorch and spaCy to normalize and map 200,000+ part records across 9,000 documents through intelligent identifier extraction and PLM hierarchy linking.",
    ],
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "PyTorch",
      "spaCy",
      "NLTK",
      "BeautifulSoup",
      "Git",
    ],
  },
  {
    role: "Data Engineer",
    org: "Kardium Inc. (Co-op)",
    date: "Sep 2024 — Dec 2024",
    location: "Vancouver, BC (On-site)",
    logo: "/companies/kardium.png",
    bullets: [
      "Supported QA analytics and reliability efforts through SQL-driven analysis and KPI tracking. Contributed to data-driven reporting and process improvements for product quality.",
    ],
    skills: ["SQL Server", "T-SQL", "Data Analysis", "Dashboards", "KPI Tracking"],
  },
  {
    role: "Software Engineer — ERP Integration & Automation Development",
    org: "Paladin Technologies (Co-op)",
    date: "Jan 2024 — May 2024",
    location: "Vancouver, BC (On-site)",
    logo: "/companies/paladin.jpg",
    bullets: [
      "Automated ERP and HR workflows using Power Automate and Dynamics 365 integrations. Built workflow improvements that reduced manual effort and improved operational consistency.",
    ],
    skills: ["Power Automate", "Dynamics 365", "Dataverse", "Power Apps", "Power BI", "REST APIs"],
  },
  {
    role: "Project Assistant — Azure Cloud & AI Services (WEA)",
    org: "Microsoft (Co-op)",
    date: "May 2023 — Aug 2023",
    location: "Waterloo, ON (Remote)",
    logo: "/companies/Microsoft_logo.svg.webp",
    bullets: [
      "Supported applied ML and NLP work using Azure cloud tooling and cognitive services. Helped deliver project work with clear milestones, documentation, and stakeholder communication.",
    ],
    skills: ["NLP", "Azure ML", "AKS", "Cloud", "Anomaly Detection", "Project Management"],
  },
];
