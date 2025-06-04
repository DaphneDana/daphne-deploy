// src/types/aboutUs.ts

export interface HeroData {
  title: string;
  subtitle: string;
  iconName?: string; // Lucide icon name
}

export interface PhilosophyPoint {
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface HistoryMilestone { // Can be the same as previously defined Milestone
  year: string | number;
  event: string;
  description?: string;
}

export interface StructureItem {
  title: string;
  text: string;
  iconName: string; // Lucide icon name
}

export interface ExternalLinkItem {
  text: string;
  url: string;
}

export interface AboutUsPageData {
  hero: HeroData;
  introduction: string;
  philosophy: {
    title: string;
    subtitle: string;
    iconName?: string; // Lucide icon name for the section
    points: PhilosophyPoint[];
  };
  history: {
    title: string;
    subtitle: string;
    iconName?: string; // Lucide icon name for the section
    milestones: HistoryMilestone[];
  };
  structure: {
    title: string;
    subtitle: string;
    iconName?: string; // Lucide icon name for the section
    introductoryText: string;
    items: StructureItem[];
  };
  externalLinksSection: {
    title: string;
    subtitle: string;
    iconName?: string; // Lucide icon name for the section
    introductoryText: string;
    links: ExternalLinkItem[];
  };
  seo: {
    title: string;
    description?: string; // Optional for now, can add later
  };
}