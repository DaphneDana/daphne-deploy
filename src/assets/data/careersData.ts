// src/assets/data/careersData.ts
import type { JobRole, LeadershipMessage, ApplicationStep } from '../../types/careers';

export const mockJobRoles: JobRole[] = [
  {
    id: 'swe-senior-001',
    title: 'Senior AI/ML Engineer',
    location: 'Kampala, Uganda',
    department: 'Engineering',
    category: 'Artificial Intelligence',
    summary: 'Lead the design and development of cutting-edge AI models and ML pipelines. Mentor junior engineers and drive innovation in our core products.',
    jobDescriptionUrl: '/jds/senior-ai-ml-engineer.pdf', // Placeholder
    experienceLevel: 'Senior',
  },
  {
    id: 'ds-mid-002',
    title: 'Data Scientist',
    location: 'Remote - Africa',
    department: 'Data Science',
    category: 'Analytics & Insights',
    summary: 'Analyze complex datasets, develop predictive models, and translate data insights into actionable strategies for various LLP projects.',
    jobDescriptionUrl: '/jds/data-scientist.pdf',
    experienceLevel: 'Mid-Level',
  },
  {
    id: 'pm-product-003',
    title: 'AI Product Manager',
    location: 'Nairobi, Kenya',
    department: 'Product',
    category: 'Product Management',
    summary: 'Define product vision, strategy, and roadmap for our AI-powered solutions. Work closely with engineering, design, and marketing teams.',
    jobDescriptionUrl: '/jds/ai-product-manager.pdf',
    experienceLevel: 'Mid-Level',
  },
  {
    id: 're-research-004',
    title: 'AI Research Scientist (NLP)',
    location: 'Lagos, Nigeria',
    department: 'Research & Development',
    category: 'Natural Language Processing',
    summary: 'Conduct state-of-the-art research in NLP, publish findings, and contribute to the development of novel language understanding technologies.',
    jobDescriptionUrl: '/jds/ai-research-scientist-nlp.pdf',
    experienceLevel: 'Senior',
  },
  {
    id: 'ux-designer-005',
    title: 'UX/UI Designer - AI Products',
    location: 'Remote - Global',
    department: 'Design',
    category: 'User Experience',
    summary: 'Design intuitive and engaging user experiences for our complex AI applications, ensuring accessibility and user-centricity.',
    jobDescriptionUrl: '/jds/ux-designer-ai.pdf',
    experienceLevel: 'Mid-Level',
  },
  {
    id: 'devops-006',
    title: 'DevOps Engineer (MLOps Focus)',
    location: 'Kampala, Uganda',
    department: 'Engineering',
    category: 'Infrastructure & Operations',
    summary: 'Build and maintain robust infrastructure for deploying, monitoring, and scaling machine learning models in production environments.',
    jobDescriptionUrl: '/jds/devops-mlops.pdf',
    experienceLevel: 'Mid-Level',
  },
];

export const mockLeadershipMessage: LeadershipMessage = {
  name: 'Dr. Yuichi Ninshinaga',
  title: 'CEO, LLP',
  profilePhotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=80', // Placeholder image
  quote: "At LLP, we believe talent is the cornerstone of innovation. We're building a future where AI empowers humanity, and that starts with empowering our team.",
  bodyParagraphs: [
    "Welcome to LLP. We are more than just an AI and ML development company; we are a collective of passionate innovators, thinkers, and builders committed to solving some of the world's most complex challenges through technology. Our culture is rooted in collaboration, continuous learning, and a relentless pursuit of excellence.",
    "We are looking for individuals who are not afraid to dream big, challenge the status quo, and contribute to a mission that extends beyond a job description. Here, your work will have a tangible impact, shaping industries and improving lives across Africa and beyond. We foster an inclusive environment where diverse perspectives are celebrated, and every voice is heard.",
    "If you are driven by a desire to make a difference and are excited by the prospect of working on groundbreaking AI/ML projects, I invite you to explore the opportunities at LLP. Join us as we build the future, together.",
  ],
};

export const mockApplicationSteps: ApplicationStep[] = [
  {
    stepNumber: 1,
    title: 'Explore Open Roles',
    description: 'Review our current openings and find a position that aligns with your skills and aspirations.',
    iconName: 'Search',
  },
  {
    stepNumber: 2,
    title: 'Submit Application',
    description: 'Complete our online application form and attach your resume and cover letter.',
    iconName: 'FileText',
  },
  {
    stepNumber: 3,
    title: 'Interview & Assessment',
    description: 'Selected candidates will participate in interviews and potentially a technical assessment to evaluate skills and fit.',
    iconName: 'MessageSquare',
  },
  {
    stepNumber: 4,
    title: 'Receive Offer',
    description: 'Successful candidates will receive a formal offer of employment from our talent acquisition team.',
    iconName: 'Award',
  },
  {
    stepNumber: 5,
    title: 'Welcome & Onboarding',
    description: 'Join the LLP family! Our comprehensive onboarding program will set you up for success.',
    iconName: 'Users',
  },
];