// src/assets/data/companyProfileData.ts
import type{ CompanyProfileData } from '../../types/companyProfile'; // Adjust path

export const llpCompanyProfile: CompanyProfileData = {
  id: 'llp-main',
  slug: 'llp-innovations', // URL slug for this page
  companyName: 'LLP Innovations',
  tagline: 'Driving AI Excellence Across Africa and Beyond.',
  snapshot: 'An industry leader in AI-driven solutions, pioneering ethical and impactful technology since 2020.',
  primaryCTAs: [
    { text: 'Download Company Profile', link: '/downloads/llp-profile.pdf', type: 'primary' },
    { text: 'Contact Us', link: '/contact', type: 'secondary' },
  ],
  overview: {
    missionStatement: 'Our mission is to empower organizations and communities through transformative AI and Machine Learning technologies, fostering sustainable growth, ethical innovation, and digital inclusivity across the African continent and globally.',
    history: 'Founded in 2020 by a consortium of AI visionaries, LLP Innovations quickly established itself as a hub for advanced AI research and development. Key milestones include the launch of our pan-African AI talent development program in 2021 and the establishment of our AI Ethics Board in 2022. Our leadership team brings decades of combined experience in technology, research, and business strategy.',
    coreDifferentiators: [
      'Pan-African AI Talent Ecosystem',
      'Commitment to Ethical & Responsible AI',
      'Proprietary AI Development Frameworks',
      'Collaborative Innovation Model with Member Companies',
      '24/7 Global Support Infrastructure',
    ],
  },
  achievements: {
    keyMetrics: [
      { value: '50+', label: 'AI Projects Delivered', slug: 'achievements/projects-delivered', description: 'Successfully implemented diverse AI solutions across various industries.' },
      { value: '10+', label: 'Years of Combined Expertise', slug: 'achievements/team-expertise', description: 'Our core team brings over a decade of specialized AI/ML experience.' },
      { value: '200+', label: 'Trained AI Professionals', slug: 'achievements/talent-development', description: 'Through our specialized training programs.' },
      { value: '5M+', label: 'Users Impacted by Solutions', slug: 'achievements/user-impact', description: 'Solutions developed by LLP and its members reach millions.' },
    ],
    milestones: [
      { year: 2020, event: 'LLP Consortium Founded', description: 'Established with a vision to centralize AI excellence in Africa.' , slug: 'milestones/founding'},
      { year: 2021, event: 'Launched AI Talent Accelerator Program', description: 'First cohort of 50 AI engineers graduated.', slug: 'milestones/talent-program' },
      { year: 2022, event: 'Established AI Ethics & Governance Board', description: 'Ensuring responsible development and deployment of AI.', slug: 'milestones/ethics-board' },
      { year: 2023, event: 'First International LLP Summit Hosted', description: 'Bringing together global AI leaders and innovators.', slug: 'milestones/llp-summit' },
      { year: 2024, event: 'Strategic Partnership with Global Tech Leaders', description: 'Expanding reach and capabilities through key alliances.', slug: 'milestones/global-partnerships' },
    ],
    awardsAndRecognition: [
      { name: 'African AI Innovator of the Year', issuer: 'TechAfrica Awards', year: 2023, imageUrl: 'images/profile1', link: '#' },
      { name: 'Top Employer for Tech Talent', issuer: 'CareersInAfrica Magazine', year: 2024, link: '#' },
      { name: 'Excellence in Ethical AI Development', issuer: 'Global AI Ethics Forum', year: 2023, imageUrl: 'images/profile2', link: '#' },
    ],
  },
  serviceCapabilities: [
    {
      categoryTitle: 'AI Strategy & Consulting',
      categoryDescription: 'We help organizations define their AI vision, identify high-impact use cases, and develop a roadmap for successful AI adoption and transformation.',
      slug: 'services/ai-strategy-consulting',
      subServices: [
        { name: 'AI Readiness Assessment', slug: 'services/ai-readiness' },
        { name: 'Use Case Identification & Prioritization', slug: 'services/use-case-id' },
        { name: 'AI Ethics & Governance Frameworks', slug: 'services/ai-ethics-frameworks' },
        { name: 'Data Strategy & Management', slug: 'services/data-strategy' },
      ],
      audience: 'For C-suite executives, innovation leaders, and strategy teams.',
      brochureUrl: '/downloads/ai-strategy-brochure.pdf',
    },
    {
      categoryTitle: 'Custom AI/ML Solution Development',
      categoryDescription: 'Our expert teams design, build, and deploy bespoke AI and Machine Learning solutions tailored to your specific business challenges and objectives.',
      slug: 'services/custom-ai-ml-development',
      subServices: [
        { name: 'Predictive Analytics & Forecasting', slug: 'services/predictive-analytics' },
        { name: 'Natural Language Processing (NLP) Solutions', slug: 'services/nlp-solutions' },
        { name: 'Computer Vision & Image Analysis', slug: 'services/computer-vision' },
        { name: 'AI-Powered Automation Systems', slug: 'services/ai-automation' },
      ],
      audience: 'Ideal for businesses seeking unique AI capabilities to gain a competitive edge.',
      caseStudyLink: '/case-studies/custom-development',
    },
    {
      categoryTitle: 'AI Platform & MLOps Implementation',
      categoryDescription: 'We provide end-to-end services for setting up robust AI platforms and streamlining Machine Learning operations for scalability and efficiency.',
      slug: 'services/ai-platform-mlops',
      subServices: [
        { name: 'Cloud AI Platform Setup (AWS, Azure, GCP)', slug: 'services/cloud-ai-platforms' },
        { name: 'MLOps Pipeline Development & Automation', slug: 'services/mlops-pipelines' },
        { name: 'Model Deployment & Monitoring', slug: 'services/model-deployment' },
        { name: 'AI Infrastructure Optimization', slug: 'services/ai-infrastructure' },
      ],
      audience: 'For organizations looking to productionize and manage AI models effectively.',
    },
     {
      categoryTitle: 'AI Talent Development & Training',
      categoryDescription: 'Upskill your teams or source top AI talent through our specialized training programs and talent placement services.',
      slug: 'services/ai-talent-development',
      subServices: [
        { name: 'Corporate AI Training Workshops', slug: 'services/corporate-training' },
        { name: 'AI Engineer Certification Programs', slug: 'services/ai-certification' },
        { name: 'Specialized ML Bootcamps', slug: 'services/ml-bootcamps' },
        { name: 'AI Talent Sourcing & Placement', slug: 'services/talent-sourcing' },
      ],
      audience: 'For HR departments, learning & development teams, and companies needing skilled AI professionals.',
    },
  ],
  trustAndCredibility: {
    clientLogos: [
      { name: 'Global Bank Inc.', logoUrl: 'https://via.placeholder.com/150x60.png?text=GlobalBank', link: '#' },
      { name: 'Africa Telecom Co.', logoUrl: 'https://via.placeholder.com/150x60.png?text=AfriTel', link: '#' },
      { name: 'HealthForward NGO', logoUrl: 'https://via.placeholder.com/150x60.png?text=HealthNGO', link: '#' },
      { name: 'AgriTech Innovators', logoUrl: 'https://via.placeholder.com/150x60.png?text=AgriTech', link: '#' },
    ],
    testimonials: [
      {
        quote: "LLP's strategic insights and technical expertise were pivotal in our AI transformation journey. Their team delivered beyond our expectations.",
        clientName: 'Fatima Al-Jamil',
        clientTitle: 'Chief Innovation Officer',
        clientCompany: 'Global Bank Inc.',
        clientLogoUrl: 'https://via.placeholder.com/80x80.png?text=GB',
      },
      {
        quote: "The custom NLP solution developed by LLP has revolutionized our customer service, improving efficiency by over 40%.",
        clientName: 'David Okello',
        clientTitle: 'Head of Operations',
        clientCompany: 'Africa Telecom Co.',
        clientLogoUrl: 'https://via.placeholder.com/80x80.png?text=AT',
      },
    ],
    certifications: [
      { name: 'ISO 27001 Certified', logoUrl: 'https://via.placeholder.com/60x60.png?text=ISO', link: '#' },
      { name: 'GDPR Compliant Practices', logoUrl: 'https://via.placeholder.com/60x60.png?text=GDPR', link: '#' },
      { name: 'Certified AWS AI Partner', logoUrl: 'https://via.placeholder.com/60x60.png?text=AWS', link: '#' },
    ],
    pressMentions: [
      { outlet: 'TechCabal', headline: "LLP Innovations: The AI Powerhouse Redefining Africa's Tech Landscape", date: 'June 2024', link: '#' },
      { outlet: 'CIO East Africa', headline: "How LLP is Driving Ethical AI Adoption in Enterprise", date: 'May 2024', link: '#' },
    ],
  },
  detailedInsights: {
    caseStudyTeasers: [
      { id: 'cs001', slug: 'case-studies/optimizing-supply-chain-with-ai', title: 'Optimizing Pan-African Supply Chains with Predictive AI', imageUrl: 'https://images.unsplash.com/photo-1605902714470-83549738a4a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', resultHighlight: '30% Reduction in Logistics Costs' },
      { id: 'cs002', slug: 'case-studies/ai-for-financial-inclusion', title: 'Enhancing Financial Inclusion via AI-Powered Credit Scoring', imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', resultHighlight: '200% Increase in Loan Access for Underserved' },
      { id: 'cs003', slug: 'case-studies/precision-agriculture-ml', title: 'Precision Agriculture with ML: Boosting Crop Yields in East Africa', imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', resultHighlight: '25% Increase in Crop Yield' },
    ],
  },
  leadershipSnapshot: {
    keyExecutives: [
      { name: 'Dr. Aisha Kante', title: 'Chief Executive Officer', blurb: '20+ years in global tech leadership and AI strategy.', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100&q=80' },
      { name: 'Ben Okoro', title: 'Chief Technology Officer', blurb: 'Pioneer in ML research and large-scale AI systems.', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80' },
      { name: 'Chidinma Eze', title: 'Head of Ethical AI', blurb: 'Leading initiatives for responsible and transparent AI.', imageUrl: 'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBidXNpbmVzcyUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80' },
    ],
    fullTeamPageLink: '/about/leadership',
  },
  contactEmail: 'info@llpinnovations.com',
  contactPhone: '+256 700 000 000',
  seo: {
    title: 'LLP Innovations | AI & Machine Learning Solutions in Africa',
    description: 'LLP Innovations leads in ethical AI development, offering strategy, custom solutions, and talent development. Discover our impact and capabilities.',
  },
};