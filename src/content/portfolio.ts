import { BriefcaseBusiness, Code2, GitBranch } from "lucide-react";
import type { NavItem, Project, SkillGroup, SocialLink } from "@/types";

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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
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
    galleryComment: "ChitMaster Dashboard"
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
    galleryComment: "Resume Analyzer"
  },
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
    galleryComment: "Expense Tracker Dashboard"
  },
  {
    title: "Advanced CGPA Calculator",
    subtitle: "Academic planning with precision",
    problem: "Students need a fast way to model semester performance and understand how each grade affects cumulative outcomes.",
    solution: "A polished calculator for CGPA planning, designed around accuracy, quick input and clean result presentation.",
    challenge: "The product depends on trust, so input behavior, edge cases and calculation clarity matter more than decorative complexity.",
    architecture: ["Course input system", "Grade mapping", "Weighted aggregation", "Result state", "Static deployment"],
    tech: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
    timeline: "Academic utility shipped live",
    github: "https://github.com/dipinsaireddy329/cgpa-calculator",
    live: "https://cgpa-calculator-seven-omega.vercel.app/",
    galleryComment: "CGPA Calculator"
  },
  {
    title: "Portfolio Website",
    subtitle: "This digital engineering experience",
    problem: "A normal portfolio lists work. This site needed to make recruiters feel the craft, systems thinking and product taste behind the work.",
    solution: "A Next.js 15 experience with motion, 3D ambience, structured content, keyboard navigation, RAG-ready assistant and deployment-grade SEO.",
    challenge: "The challenge is restraint: every animation has to support exploration instead of becoming a distraction.",
    architecture: ["Next.js App Router", "Static content layer", "Client interaction islands", "RAG-ready assistant module", "Metadata and schema layer"],
    tech: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"],
    timeline: "Built as a premium portfolio system",
    galleryComment: "Hero Photo"
  }
];

export const stats = [
  ["Projects", "12+"],
  ["Repositories", "20+"],
  ["Technologies", "30+"],
  ["Years Learning", "3+"]
];

export const certifications = [
  "Oracle Cloud Infrastructure AI Foundations",
  "AWS Certified AI Practitioner - Coming Soon",
  "AWS Certified Cloud Practitioner - Coming Soon",
  "GDG Student Member"
];
