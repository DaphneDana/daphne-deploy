// src/assets/data/memberCompaniesData.ts
import type { MemberCompany } from '../../types/company'; // Fixed path - should match your actual types file

// Placeholder logo URLs - replace with actual or more diverse placeholders
const LOGO_PLACEHOLDER_2 = 'https://via.placeholder.com/150x60.png?text=SynergyML';
const LOGO_PLACEHOLDER_3 = 'https://via.placeholder.com/150x60.png?text=DataCore';

export const mockMemberCompaniesData: MemberCompany[] = [
  {
    id: 'innovate-ai-solutions',
    slug: 'innovate-ai-solutions',
    name: 'InnovateAI Solutions',
    logoUrl: 'images/LLP.jpeg', // Placeholder logo URL, replace with actual image path
    tagline: 'Pioneering the Future of Intelligent Automation',
    description: 'InnovateAI Solutions is a leading provider of cutting-edge artificial intelligence and machine learning technologies, empowering businesses to optimize operations, enhance customer experiences, and drive unprecedented growth through intelligent automation.',
    mission: 'Our mission is to democratize AI by making advanced machine learning tools accessible and actionable for organizations of all sizes, fostering a future where intelligent technology solves real-world challenges and creates sustainable value.',
    history: [
      { year: '2018', event: 'Company Founded', description: 'Started by a team of AI researchers with a vision to transform industries.' },
      { year: '2019', event: 'First Major Client Acquired', description: 'Secured a landmark deal with a Fortune 500 company in the logistics sector.' },
      { year: '2020', event: 'Launched Flagship "CogniFlow" Platform', description: 'Introduced a revolutionary AI workflow automation tool.' },
      { year: '2022', event: 'Expanded to European Markets', description: 'Opened a new office in Berlin to serve a growing international clientele.' },
      { year: '2024', event: 'Joined LLP Consortium', description: 'Became a proud member of the LLP to collaborate on industry-wide AI advancements.' },
    ],
    vision: {
      statement: 'To be the globally recognized leader in applied AI, driving innovation that shapes a more intelligent and efficient world for generations to come.',
      objectives: [
        'Achieve 90% market penetration in our target enterprise segments within 5 years.',
        'Launch three new AI-powered product lines focused on sustainability and healthcare by 2028.',
        'Establish a global AI research and ethics think tank by 2030.',
        'Become carbon neutral across all operations by 2027.',
      ],
    },
    keyAchievements: [
      { title: 'Rapid Growth', details: 'Achieved 300% revenue growth over the past three years.', statistic: '300% Growth' },
      { title: 'Product Innovation', details: 'CogniFlow platform recognized as "Most Innovative AI Solution" by TechCrunch.', statistic: 'Award Winning' },
      { title: 'Client Success', details: 'Helped clients achieve an average of 40% operational efficiency improvement.', statistic: '40% Efficiency Up' },
      { title: 'IP Development', details: 'Secured 15+ patents in machine learning algorithms and AI model optimization.', statistic: '15+ Patents' },
    ],
    awardsAndRecognition: [
      { name: 'AI Excellence Award', issuer: 'Global Tech Awards', year: '2023', imageUrl: '/images/' },
      { name: 'Top 50 AI Companies to Watch', issuer: 'Forbes AI Report', year: '2022' },
      { name: 'ISO 27001 Certified', issuer: 'International Organization for Standardization', year: '2021' },
      { name: 'Best Place to Work in Tech (Regional)', issuer: 'Tech Workplace Index', year: '2023' },
    ],
    contact: {
      email: 'contact@innovateaisolutions.com',
      phone: '+1 (555) 010-INNOV',
      website: 'https://www.example-innovateai.com',
    },
    relatedCompanies: [
      { id: 'synergy-ml', name: 'SynergyML', logoUrl: LOGO_PLACEHOLDER_2, slug: 'synergy-ml' },
      { id: 'datacore-analytics', name: 'DataCore Analytics', logoUrl: LOGO_PLACEHOLDER_3, slug: 'datacore-analytics' },
    ],
    seoMetadata: {
      title: 'InnovateAI Solutions | Leading AI & Machine Learning Company',
      description: 'Explore InnovateAI Solutions, an LLP member company specializing in AI automation, machine learning platforms, and intelligent business solutions. Discover our mission, history, and achievements.',
      keywords: ['InnovateAI Solutions', 'AI company', 'machine learning', 'intelligent automation', 'LLP member', 'CogniFlow'],
    },
  },
  // Second company for testing
  {
    id: 'synergy-ml',
    slug: 'synergy-ml',
    name: 'SynergyML',
    logoUrl: '/images/news2.jpeg',
    tagline: 'Collaborative AI Development',
    description: 'SynergyML focuses on collaborative machine learning frameworks.',
    mission: 'To enable secure and private collaborative AI development.',
    history: [
      { year: '2019', event: 'Founded', description: 'Started with focus on federated learning' }
    ],
    vision: { 
      statement: 'Lead collaborative AI development worldwide.', 
      objectives: ['Build secure ML platforms', 'Expand global partnerships'] 
    },
    keyAchievements: [
      { title: 'Innovation Leader', details: 'Leading federated learning solutions', statistic: 'Top 10 ML Companies' }
    ],
    awardsAndRecognition: [
      { name: 'ML Innovation Award', issuer: 'AI Conference 2023', year: '2023' }
    ],
    contact: { 
      email: 'info@synergyml.io',
      website: 'https://synergyml.io' 
    },
    seoMetadata: { 
      title: 'SynergyML - Collaborative Machine Learning', 
      description: 'Leading collaborative ML development.', 
      keywords: ['SynergyML', 'federated learning', 'collaborative AI'] 
    },
  },
  // Third company for testing
  {
    id: 'datacore-analytics',
    slug: 'datacore-analytics',
    name: 'DataCore Analytics',
    logoUrl: '/images/profile3.jpeg',
    tagline: 'Data-Driven Intelligence',
    description: 'DataCore Analytics specializes in big data processing and analytics solutions.',
    mission: 'Transform raw data into actionable business intelligence.',
    history: [
      { year: '2020', event: 'Company Launch', description: 'Founded during the data boom era' }
    ],
    vision: { 
      statement: 'Be the premier data analytics platform globally.', 
      objectives: ['Scale data processing capabilities', 'Develop predictive analytics tools'] 
    },
    keyAchievements: [
      { title: 'Data Processing Leader', details: 'Process over 1PB of data daily', statistic: '1PB+ Daily' }
    ],
    awardsAndRecognition: [
      { name: 'Big Data Excellence', issuer: 'Data Science Awards', year: '2023' }
    ],
    contact: { 
      email: 'hello@datacore-analytics.com',
      website: 'https://datacore-analytics.com' 
    },
    seoMetadata: { 
      title: 'DataCore Analytics - Big Data Solutions', 
      description: 'Leading big data processing and analytics.', 
      keywords: ['DataCore', 'big data', 'analytics', 'data processing'] 
    },
  }
];