// src/types/technology.ts
import type { ReactNode } from 'react';

// Re-using or adapting from your existing data structure
export interface AiSolutionItem {
  id: string;
  title: string;
  category: string; // e.g., 'Machine Learning', 'NLP & Computer Vision'
  icon?: ReactNode; // Keep if you use JSX icons directly, or change to iconName: string for dynamic mapping
  iconName?: string; // For mapping to Lucide icons or custom SVGs
  description: string;
  technologies: string[]; // Array of tech names
  imageUrl: string;
  type: 'Product' | 'Project'; // Or Solution
  highlights: string[];
  slug?: string; // For linking to a detail page
}

export interface DxCaseItem {
  id: string | number; // Keep consistent
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  slug?: string; // For linking to a detail page
}

export interface TechStackCategory {
  name: string; // e.g., "Frontend", "Backend", "AI/ML Libraries", "DevOps & Cloud"
  iconName?: string; // Lucide icon for the category
  technologies: TechStackItem[];
}

export interface TechStackItem {
  name: string;
  logoUrl?: string; // URL to the tech logo (SVG preferred)
  description?: string; // Optional: brief description of how LLP uses it
}

export interface TechPillar {
  iconName: string; // Lucide icon name
  title: string;
  description: string;
}

export interface DigitalTransformationAchievement {
    id: string;
    title: string;
    description: string; // How LLP enabled this
    clientName?: string; // Optional
    industry?: string; // Optional
    metrics: string[]; // e.g., "30% increase in efficiency", "Reduced costs by 20%"
    imageUrl?: string; // Visual representation
    slug?: string; // Link to a case study or project
}

export interface TechnologyPageData {
  hero: {
    titlePrimary: string; // e.g., "AI-Driven Technology"
    titleSecondary: string; // e.g., "& Digital Experience"
    subtitle: string;
    cta: { text: string; link: string };
  };
  aiSolutions: {
    title: string;
    subtitle: string;
    items: AiSolutionItem[];
  };
  technicalTrust: {
    title: string;
    subtitle: string;
    pillars: TechPillar[];
  };
  techStack: {
    title: string;
    subtitle: string;
    introduction?: string; // Optional intro to tech stack approach
    categories: TechStackCategory[];
  };
  devOpsCulture: {
    title: string;
    subtitle: string;
    descriptionParagraphs: string[];
    keyAspects: { title: string; description: string; iconName: string }[];
  };
  dxShowcase: {
    title: string;
    subtitle: string;
    items: DxCaseItem[];
    cta?: { text: string; link: string };
  };
  digitalTransformationAchievements?: { // Optional section
    title: string;
    subtitle: string;
    items: DigitalTransformationAchievement[];
  };
  // Add SEO if needed
}