// src/assets/data/aboutUsData.ts
import type { AboutUsPageData } from '../../types/aboutUs'; // Adjust path as needed

export const aboutUsContent: AboutUsPageData = {
  hero: {
    title: 'About LLP',
    subtitle: 'Pioneering AI Innovation Across Africa and Beyond',
    iconName: 'Building',
  },
  introduction: "LLP stands at the forefront of Artificial Intelligence and Machine Learning development, serving as a dynamic consortium that unites leading researchers, innovative startups, and established enterprises. Our core mission is to accelerate AI adoption, foster ethical innovation, and build a robust ecosystem for AI talent across the African continent. We operate through collaborative research initiatives, strategic partnerships, and a commitment to developing impactful AI solutions that address real-world challenges.",
  philosophy: {
    title: 'Our Philosophy',
    subtitle: 'Guiding principles that shape our work and culture.',
    iconName: 'Lightbulb',
    points: [
      { title: 'Innovation', description: 'Constantly exploring new frontiers in AI to create transformative solutions.', iconName: 'Lightbulb' },
      { title: 'Collaboration', description: 'Fostering a powerful ecosystem of partners, members, and researchers.', iconName: 'Users' },
      { title: 'Ethical AI', description: 'Championing responsible AI development and deployment for the good of society.', iconName: 'ShieldCheck' }, // Lucide has ShieldCheck or BadgeCheck
      { title: 'Impact', description: 'Focusing on creating tangible, positive outcomes for businesses and communities.', iconName: 'BarChartHorizontalBig' }
    ]
  },
  history: {
    title: 'Our Journey',
    subtitle: 'Key milestones that have shaped LLP.',
    iconName: 'History',
    milestones: [
      { year: 2020, event: 'LLP Conceptualized & Founded', description: 'A consortium of AI visionaries and industry leaders unite to establish a central hub for AI excellence in Africa.' },
      { year: 2021, event: 'Launch of Core Research Labs', description: 'Dedicated labs for NLP, Computer Vision, and Ethical AI begin operations, fostering groundbreaking research.' },
      { year: 2022, event: 'First Pan-African AI Talent Program', description: 'Successfully trained and placed over 100 AI specialists across member companies and partner organizations.' },
      { year: 2023, event: 'Key Strategic Partnerships Formed', description: 'Collaborations established with leading global technology firms and academic institutions to amplify impact.' },
      { year: 2024, event: 'Expansion of Member Network', description: 'Welcomed 20 new innovative AI startups and SMEs into the LLP ecosystem, broadening our collective capabilities.' },
    ]
  },
  structure: {
    title: 'Our Structure',
    subtitle: 'A collaborative ecosystem designed for impact and innovation.',
    iconName: 'Users', // Or 'Network', 'GitFork' for structure
    introductoryText: "LLP operates as a unique consortium, bringing together diverse stakeholders under a unified vision. Our structure is designed for agility, collaboration, and the effective dissemination of AI knowledge and resources.",
    items: [
        { title: "Central Governing Body", text: "Oversees strategic direction, ethical guidelines, and resource allocation across the LLP network.", iconName: 'BarChartHorizontalBig' }, // Or 'Gavel'
        { title: "Member Companies & Startups", text: "A vibrant network of innovative AI companies and startups that contribute to and benefit from shared expertise and projects.", iconName: 'Building2' }, // Or 'Building'
        { title: "Research & Development Wings", text: "Dedicated labs focusing on core AI disciplines, driving cutting-edge research and development.", iconName: 'FlaskConical' }, // Or 'Lightbulb'
        { title: "AI Ethics & Governance Board", text: "An independent body ensuring all LLP initiatives adhere to the highest ethical standards and responsible AI principles.", iconName: 'Scale' }, // Or 'ShieldCheck'
        { title: "Talent Development Programs", text: "Initiatives focused on nurturing and upskilling AI talent across the continent.", iconName: 'GraduationCap' }, // Or 'Users'
    ]
  },
  externalLinksSection: {
    title: 'Official Links & Resources',
    subtitle: 'Connect with relevant governmental and industry bodies.',
    iconName: 'ExternalLink',
    introductoryText: "LLP collaborates with and adheres to guidelines from various national and international bodies to promote responsible technology development. For more information, please visit the official METI (Ministry of Economy, Trade and Industry) sites and related portals:",
    links: [
      { text: 'METI Main Portal', url: '#' }, // Replace # with actual URLs
      { text: 'National AI Strategy Document', url: '#' },
      { text: 'Tech Innovation Fund', url: '#' },
    ]
  },
  seo: {
    title: "About LLP | Pioneering AI in Africa",
    description: "Learn about LLP's mission, philosophy, history, and structure as a leading consortium for AI and ML development in Africa.",
  }
};