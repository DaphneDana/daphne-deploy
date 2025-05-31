// src/types/careers.ts

export interface JobRole {
  id: string;
  title: string;
  location: string;
  department: string; // e.g., "Engineering", "Data Science"
  category?: string; // Could be same as department or more specific
  summary: string; // 2-3 lines
  responsibilities?: string[]; // For a potential detail page or modal
  qualifications?: string[]; // For a potential detail page or modal
  jobDescriptionUrl?: string; // Link to PDF
  applicationUrl?: string; // Direct link or identifier for embedded form
  experienceLevel?: 'Internship' | 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Lead';
}

export interface LeadershipMessage {
  name: string;
  title: string; // e.g., "CEO", "CTO"
  profilePhotoUrl: string;
  quote: string;
  bodyParagraphs: string[];
}

export interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string; // Name of a Lucide icon
}