// src/types/company.ts

export interface Milestone {
  year: number | string; // Year or a specific date string
  event: string;
  description?: string;
}

export interface Achievement {
  icon?: string; // Lucide icon name or path to custom icon
  title: string;
  details: string;
  statistic?: string; // e.g., "50% Growth"
}

export interface Award {
  name: string;
  issuer: string;
  year: number | string;
  imageUrl?: string; // Optional image of the award/badge
}

export interface RelatedCompany {
  id: string;
  name: string;
  logoUrl: string;
  slug: string; // For linking
}

export interface MemberCompany {
  id: string;
  slug: string; // For URL generation
  name: string;
  logoUrl: string; // High-resolution logo
  tagline?: string; // Short tagline under the name
  description: string; // General overview
  mission: string;
  history: Milestone[];
  vision: {
    statement: string;
    objectives: string[]; // List of objectives for next 5-10 years
  };
  keyAchievements: Achievement[];
  awardsAndRecognition: Award[];
  contact: {
    email: string;
    phone?: string;
    website?: string; // Company's own website
  };
  relatedCompanies?: RelatedCompany[]; // Optional
  seoMetadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  // For Schema.org (optional, can be generated)
  schema?: object; 
}