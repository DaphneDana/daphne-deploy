// src/types/companyProfile.ts

export interface Metric {
  value: string; // e.g., "50+", "1M+"
  label: string; // e.g., "Projects Completed", "Users Impacted"
  description?: string; // Optional short description for the metric
  slug?: string; // For linking to a page detailing this achievement/metric
}

export interface Milestone {
  year: number | string;
  event: string;
  description?: string;
  slug?: string; // For linking
}

export interface Award {
  name: string;
  issuer: string;
  year: number | string;
  imageUrl?: string;
  link?: string; // Link to award page or verification
}

export interface SubService {
  name: string;
  description?: string;
  slug?: string; // For linking to a detailed service page
}

export interface ServiceCapability {
  categoryTitle: string;
  categoryDescription: string;
  subServices: SubService[];
  audience?: string; // Who it's for
  useCases?: string[];
  brochureUrl?: string;
  caseStudyLink?: string; // Link to a relevant case study list or main case study page
  slug?: string; // For linking to a page detailing this service category
}

export interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientLogoUrl?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  logoUrl?: string;
  link?: string;
}

export interface PressMention {
  outlet: string;
  headline: string;
  date: string;
  link: string;
}

export interface CaseStudyTeaser {
  id: string;
  slug: string; // For linking to full case study page
  title: string;
  imageUrl: string;
  resultHighlight: string;
}

export interface KeyExecutive {
  name: string;
  title: string;
  blurb: string;
  imageUrl?: string; // Optional
}

export interface CompanyProfileData {
  id: string;
  slug: string; // For the URL of this company profile page
  companyName: string;
  tagline: string;
  snapshot: string; // Brief 2-line summary
  primaryCTAs: { text: string; link: string; type: 'primary' | 'secondary' }[];
  
  overview: {
    missionStatement: string;
    history: string; // Paragraph or short timeline
    coreDifferentiators: string[];
  };
  
  achievements: {
    keyMetrics: Metric[];
    milestones: Milestone[]; // Could reuse Milestone type from before
    awardsAndRecognition: Award[]; // Could reuse Award type
  };

  serviceCapabilities: ServiceCapability[];
  
  trustAndCredibility: {
    clientLogos?: { name: string; logoUrl: string; link?: string }[];
    testimonials: Testimonial[];
    certifications?: Certification[];
    pressMentions?: PressMention[];
  };

  detailedInsights?: {
    caseStudyTeasers: CaseStudyTeaser[];
  };
  
  leadershipSnapshot?: {
    keyExecutives: KeyExecutive[];
    fullTeamPageLink?: string;
  };

  // SEO and Contact info can be added similar to MemberCompany
  contactEmail?: string;
  contactPhone?: string;
  seo: {
    title: string;
    description: string;
  };
}