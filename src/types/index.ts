import type { LucideIcon } from "lucide-react";

export type SkillGroup = {
  title: string;
  accent: string;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  challenge: string;
  architecture: string[];
  tech: string[];
  timeline: string;
  github?: string;
  live?: string;
  galleryComment: string;
  image?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Certification = {
  name: string;
  status: "completed" | "coming_soon";
};
