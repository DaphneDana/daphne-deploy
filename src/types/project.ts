// src/types/project.ts
export type ProjectStatus = 'old' | 'ongoing' | 'upcoming';

export interface ProjectTag {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: ProjectStatus;
  tags: string[];
  duration: string;
  completedDate?: string;
  expectedDate?: string;
  startDate: string;
  
  // Detailed content
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  
  proposal: {
    title: string;
    description: string;
    approach: string[];
    technologies: string[];
  };
  
  result: {
    title: string;
    description: string;
    achievements: string[];
    metrics?: ProjectMetric[];
    impact: string;
  };
  
  // Visual content
  featuredImage?: string;
  gallery?: string[];
  
  // Team and client
  team: TeamMember[];
  client?: string;
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface ProjectFilterProps {
  activeStatus: ProjectStatus | 'all';
  onStatusChange: (status: ProjectStatus | 'all') => void;
  activeTags: string[];
  onTagsChange: (tags: string[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export interface ProjectDetailProps {
  project: Project;
}