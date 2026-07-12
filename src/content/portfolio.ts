import { BriefcaseBusiness, Code2, GitBranch } from "lucide-react";
import type { NavItem, Project, SkillGroup, SocialLink, Certification } from "@/types";

export const profile = {
  name: "Dipin Sai Reddy Bojjireddy",
  shortName: "Dipin Sai Reddy",
  initials: "DSR",
  role: "Full Stack Developer | Flutter Developer | AI Engineer",
  current: "Generative AI Intern",
  location: "Tirupati, Andhra Pradesh, India",
  email: "dipinsaireddy@gmail.com",
  phone: "+91 8121312937",
  education: "B.Tech Computer Science",
  cgpa: "8.8",
  goal: "Software Development Engineer | AI Engineer",
  tagline:
    "Building scalable web, mobile and AI applications with beautiful user experiences and production-ready architecture."
};

export const navItems: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/dipinsaireddy329", icon: GitBranch },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dipin-sai-reddy-bojjireddy-3358a92b7/",
    icon: BriefcaseBusiness
  },
  { label: "LeetCode", href: "https://leetcode.com/u/dipin329/", icon: Code2 }
];

export const skillGroups: SkillGroup[] = [
  { title: "Languages", accent: "cyan", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Dart"] },
  { title: "Frontend", accent: "violet", items: ["HTML", "CSS", "React", "Next.js", "Tailwind"] },
  { title: "Backend", accent: "emerald", items: ["Node", "Express", "Flask", "FastAPI", "REST APIs", "Authentication", "JWT"] },
  { title: "Mobile", accent: "sky", items: ["Flutter", "Riverpod", "Hive", "GoRouter"] },
  { title: "AI", accent: "fuchsia", items: ["Gemini", "LangChain", "LLMs", "Prompt Engineering", "RAG", "Semantic Search", "ChromaDB", "Vector Databases"] },
  { title: "DevOps", accent: "amber", items: ["Docker", "GitHub Actions", "Git", "Postman", "Vercel"] }
];

export const projects: Project[] = [
  {
    title: "Smart Expense Tracker",
    subtitle: "Personal finance with clean decision loops",
    problem: "Expense tools often collect data but fail to make the next financial decision obvious.",
    solution: "A focused tracker that organizes spending, highlights patterns and keeps the interface calm enough for frequent use.",
    challenge: "The interface needs to balance density and clarity so users can scan numbers quickly without feeling buried in charts.",
    architecture: ["Transaction model", "Category engine", "Dashboard metrics", "Responsive web UI", "Deployment pipeline"],
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    timeline: "Shipped web application",
    github: "https://github.com/dipinsaireddy329/smart-expense-tracker",
    live: "https://smart-expense-tracker-dipin.vercel.app",
    galleryComment: "Expense Tracker Dashboard",
    image: "/images/smart-expense-tracker.png"
  },
  {
    title: "AI Resume Analyzer",
    subtitle: "AI-assisted resume intelligence",
    problem: "Students and early-career developers often struggle to understand whether a resume is role-ready or just visually complete.",
    solution: "An AI workflow that can analyze resume content, surface fit gaps and frame improvements around skills, clarity and role alignment.",
    challenge: "The product has to keep feedback useful without becoming generic, so the architecture separates parsing, scoring and recommendation layers.",
    architecture: ["Resume ingestion", "LLM feedback layer", "Role-fit rubric", "Structured recommendation output", "Future vector retrieval"],
    tech: ["Python", "LLMs", "Prompt Engineering", "React", "FastAPI"],
    timeline: "AI product prototype",
    github: "https://github.com/dipinsaireddy329/ai-resume-analyzer",
    galleryComment: "Resume Analyzer",
    image: "/images/ai-resume-analyzer.png"
  },
  {
    title: "ChitMaster Pro",
    subtitle: "Offline Flutter FinTech Platform",
    problem: "Chit fund operators need a dependable way to manage groups, members and payment records even when connectivity is unreliable.",
    solution: "A Flutter platform designed around offline-first flows, local persistence and clear financial operations that keep daily work fast and auditable.",
    challenge: "The hard part is making financial state feel simple while preserving consistency, validation and recovery paths for real-world usage.",
    architecture: ["Flutter presentation layer", "Hive local storage", "Riverpod state graph", "GoRouter navigation", "Export-ready domain models"],
    tech: ["Flutter", "Dart", "Riverpod", "Hive", "GoRouter", "Vercel"],
    timeline: "Built as a product-style FinTech case study",
    github: "https://github.com/dipinsaireddy329/chit-master",
    live: "https://chit-master-sigma.vercel.app",
    galleryComment: "ChitMaster Dashboard",
    image: "/images/chit-master-pro.png"
  },
  {
    title: "Stock Trading App",
    subtitle: "Real-time market simulator",
    problem: "Beginning traders need a risk-free environment to practice strategies with live market data without risking real capital.",
    solution: "A full-featured virtual trading platform featuring real-time price tracking, interactive charts, and instant buy/sell execution.",
    challenge: "Managing real-time WebSockets connections reliably while ensuring user balance updates remain strictly transaction-safe across Mongo transactions.",
    architecture: ["Real-time stock dashboard", "Interactive price charts", "Portfolio management", "Buy & Sell simulation", "Market watchlist", "Responsive UI"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    timeline: "Production-grade MERN application",
    github: "https://github.com/dipinsaireddy329/STOCK-TRADING-APP",
    live: "https://stock-trading-app-djk.vercel.app/",
    galleryComment: "Stock Trading Dashboard",
    image: "/images/stock-trading-app.png"
  },
  {
    title: "Advanced CGPA Calculator",
    subtitle: "Academic planning with precision",
    problem: "Students need a fast way to model semester performance and understand how each grade affects cumulative outcomes.",
    solution: "A polished calculator for CGPA planning, designed around accuracy, quick input and clean result presentation.",
    challenge: "The product depends on trust, so input behavior, edge cases and calculation clarity matter more than decorative complexity.",
    architecture: ["Semester-wise GPA", "Overall CGPA", "Clean responsive UI", "Fast calculations", "Student friendly"],
    tech: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
    timeline: "Academic utility shipped live",
    github: "https://github.com/dipinsaireddy329/cgpa-calculator",
    live: "https://cgpa-calculator-seven-omega.vercel.app/",
    galleryComment: "CGPA Calculator",
    image: "/images/cgpa-calculator.png"
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Scalable digital commerce engine",
    problem: "Modern shoppers expect sub-second catalog loads, secure checkout, and immediate order feedback in a highly responsive UI.",
    solution: "A complete MERN shopping application featuring secure JWT authentication, dynamic cart operations, and administrative controls.",
    challenge: "Implementing high-performance product sorting and query indexing to maintain low-latency catalog fetches under high volume.",
    architecture: ["Authentication", "Product Listing", "Shopping Cart", "Checkout UI", "Order Tracking", "Admin Dashboard", "Responsive Design"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    timeline: "Full-scale commerce application",
    github: "https://github.com/dipinsaireddy329/E-Commerce-Platform",
    live: "https://e-commerce-platform-dipin.vercel.app/",
    galleryComment: "E-Commerce Home",
    image: "/images/e-commerce-platform.png"
  }
];

export const stats = [
  ["Projects", "12+"],
  ["Repositories", "20+"],
  ["Technologies", "30+"],
  ["Years Learning", "3+"]
];

export const certifications: Certification[] = [
  { name: "Oracle Cloud Infrastructure (OCI) 2025 Certified AI Foundations Associate", status: "completed" },
  { name: "AWS Certified AI Practitioner", status: "coming_soon" },
  { name: "AWS Certified Cloud Practitioner", status: "coming_soon" }
];
