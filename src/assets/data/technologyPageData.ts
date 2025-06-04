// src/assets/data/technologyPageData.ts
import type { TechnologyPageData, AiSolutionItem, DxCaseItem } from '../../types/technology'; // Adjust path

// Adapt your existing aiProjects and dxCases to the new structure if needed, or keep separate
const adaptedAiSolutions: AiSolutionItem[] = [
    {
        id: 'ai-proj-1',
        title: 'Customer Churn Prediction Engine',
        category: 'Machine Learning',
        iconName: 'Activity', // Map this to FiActivity or Lucide's Activity
        description: 'Developed a robust machine learning model analyzing customer behavior, demographics, and transaction history to proactively identify and mitigate churn risks. Integrated with CRM for actionable insights.',
        technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'SQL', 'AWS SageMaker'],
        imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca1309d487f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZWRpY3RpdmUlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        type: 'Product',
        highlights: [
            'Achieved 90%+ accuracy in churn prediction.',
            'Reduced customer churn by 18% in 6 months.',
            'Scalable cloud-based deployment & real-time scoring.',
        ],
        slug: '/projects/customer-churn-prediction' // Example slug
    },
    {
        id: 'ai-proj-2',
        title: 'Intelligent Document Analyzer (IDA)',
        category: 'NLP & Computer Vision',
        iconName: 'MessageSquare',
        description: 'An AI-powered platform that automates information extraction from various document types (PDFs, scans, images). Utilizes OCR, NLP for understanding context, and ML for classification and validation.',
        technologies: ['Python', 'SpaCy', 'Tesseract OCR', 'PyTorch', 'OpenCV', 'Docker', 'Kubernetes'],
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        type: 'Product',
        highlights: [
            'Supports 20+ document formats and languages.',
            'Reduces manual data entry by up to 85%.',
            'Customizable extraction templates & validation workflows.',
        ],
        slug: '/products/intelligent-document-analyzer'
    },
    {
        id: 'ai-proj-3',
        title: 'Real-time Anomaly Detection for Industrial IoT',
        category: 'Data Analysis & ML',
        iconName: 'BarChart2',
        description: 'A system for monitoring sensor data from industrial equipment to detect anomalies indicative of potential failures or inefficiencies. Employs unsupervised learning and statistical modeling for predictive maintenance.',
        technologies: ['Kafka', 'Spark Streaming', 'Prometheus', 'Python', 'Scikit-learn', 'Grafana'],
        imageUrl: 'https://images.unsplash.com/photo-1611606003696-91b5080039a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlvdCUyMHNlbnNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        type: 'Project',
        highlights: [
            'Processes millions of data points per second.',
            'Early fault detection reducing downtime by 25%.',
            'Interactive dashboards for operational visibility.',
        ],
        slug: '/projects/industrial-iot-anomaly-detection'
    },
];

const adaptedDxCases: DxCaseItem[] = [
    {
        id: 1,
        title: 'AI-Powered Predictive Analytics Platform UX',
        description: 'Revolutionized decision-making for a finance client with a sleek, intuitive dashboard showcasing complex AI-driven insights through interactive visualizations and smooth animations.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkJTIwdWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['UI/UX Design', 'Data Visualization', 'React', 'Animation', 'AI Insights'],
        slug: '/dx-showcase/predictive-analytics-ux'
    },
    {
        id: 2,
        title: 'Robotics Process Automation Control Panel',
        description: 'Designed a user-friendly control panel for an RPA system, enabling seamless AI-bot process monitoring and management with clear visual cues and real-time feedback.',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-285820f76869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90JTIwaW50ZXJmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        tags: ['UX Design', 'Interaction Design', 'Vue.js', 'Real-time UI', 'RPA'],
        slug: '/dx-showcase/rpa-control-panel'
    },
    {
        id: 3,
        title: 'E-commerce AI Recommendation Engine UI/UX',
        description: 'Enhanced an e-commerce platform with a dynamic AI recommendation system, presented through an engaging and non-intrusive UI that adapts to user behavior and boosts conversion.',
        imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlJTIwdWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['UI Design', 'Personalization', 'Angular', 'Micro-interactions', 'AI UX'],
        slug: '/dx-showcase/ecommerce-ai-ux'
    },
];


export const technologyPageContent: TechnologyPageData = {
  hero: {
    titlePrimary: 'AI-Driven Technology',
    titleSecondary: '& Digital Experience',
    subtitle: 'LLP pioneers advanced AI solutions and products, combined with exceptional Digital Experience (DX) design, to tackle complex challenges and create tangible value.',
    cta: { text: 'Explore Our AI Solutions', link: '#ai-solutions-section' }, // Link to section ID
  },
  aiSolutions: {
    title: 'Our AI Solutions: Products & Projects',
    subtitle: 'Discover how LLP leverages cutting-edge AI to build innovative products and deliver impactful project outcomes.',
    items: adaptedAiSolutions,
  },
  technicalTrust: {
    title: 'Building Technical Trust',
    subtitle: 'Our commitment to robust, secure, and ethical AI underpins every solution we deliver.',
    pillars: [
        { iconName: 'Cpu', title: 'Advanced AI Core', description: 'Leveraging state-of-the-art machine learning, NLP, and computer vision models.' },
        { iconName: 'ShieldCheck', title: 'Robust Security & Privacy', description: 'Implementing industry-best practices for data privacy, model security, and system integrity.' }, // Used ShieldCheck
        { iconName: 'TrendingUp', title: 'Scalable Architecture', description: 'Designing solutions that grow with your needs, ensuring long-term performance and adaptability.' },
        { iconName: 'Layers', title: 'Transparent Processes', description: 'Clear communication and explainable AI (XAI) principles to foster understanding and confidence.' },
        { iconName: 'Zap', title: 'High Performance', description: 'Optimized algorithms and infrastructure for speed, efficiency, and real-world impact.' },
        { iconName: 'Eye', title: 'Ethical AI Commitment', description: 'Focused on fairness, accountability, and societal benefit in all AI applications.' },
    ],
  },
  techStack: {
    title: 'Our Technology Stack',
    subtitle: 'We utilize a modern, flexible, and powerful stack to build robust and scalable AI solutions.',
    introduction: 'Our technology choices are driven by performance, reliability, community support, and the specific needs of each project. We are adept at integrating diverse technologies to create cohesive and powerful systems.',
    categories: [
      {
        name: 'Core AI/ML',
        iconName: 'BrainCircuit',
        technologies: [
          { name: 'Python', logoUrl: '/logos/python.svg' },
          { name: 'TensorFlow', logoUrl: '/logos/tensorflow.svg' },
          { name: 'PyTorch', logoUrl: '/logos/pytorch.svg' },
          { name: 'Scikit-learn', logoUrl: '/logos/scikitlearn.svg' },
          { name: 'Keras', logoUrl: '/logos/keras.svg' },
          { name: 'Pandas & NumPy', logoUrl: '/logos/pandas.svg' }, // Combine or separate
        ],
      },
      {
        name: 'Data Processing & Engineering',
        iconName: 'Database',
        technologies: [
          { name: 'Apache Spark', logoUrl: '/logos/spark.svg' },
          { name: 'Apache Kafka', logoUrl: '/logos/kafka.svg' },
          { name: 'SQL Databases (PostgreSQL, MySQL)', logoUrl: '/logos/postgresql.svg' },
          { name: 'NoSQL Databases (MongoDB, Cassandra)', logoUrl: '/logos/mongodb.svg' },
          { name: 'Airflow', logoUrl: '/logos/airflow.svg' },
        ],
      },
      {
        name: 'DevOps & Cloud Infrastructure',
        iconName: 'CloudCog',
        technologies: [
          { name: 'Docker', logoUrl: '/logos/docker.svg' },
          { name: 'Kubernetes', logoUrl: '/logos/kubernetes.svg' },
          { name: 'AWS', logoUrl: '/logos/aws.svg' },
          { name: 'Azure', logoUrl: '/logos/azure.svg' },
          { name: 'Google Cloud', logoUrl: '/logos/gcp.svg' },
          { name: 'Terraform', logoUrl: '/logos/terraform.svg' },
          { name: 'Jenkins / GitLab CI', logoUrl: '/logos/gitlab.svg' },
        ],
      },
      {
        name: 'Frontend & Visualization',
        iconName: 'MonitorSmartphone',
        technologies: [
          { name: 'React', logoUrl: '/logos/react.svg' },
          { name: 'Vue.js', logoUrl: '/logos/vue.svg' },
          { name: 'D3.js', logoUrl: '/logos/d3.svg' },
          { name: 'Tableau / PowerBI (Integration)', logoUrl: '/logos/tableau.svg' }, // Example
        ],
      },
    ],
  },
  devOpsCulture: {
    title: 'Our DevOps & MLOps Culture',
    subtitle: 'Streamlining development and operations for continuous delivery and robust AI systems.',
    descriptionParagraphs: [
        "At LLP, DevOps and MLOps are not just methodologies; they are integral to our culture of innovation and quality. We embrace practices that foster collaboration between development, operations, and data science teams, ensuring rapid iteration, reliable deployments, and scalable AI solutions.",
        "Our approach focuses on automation, continuous integration/continuous deployment (CI/CD), infrastructure as code (IaC), and comprehensive monitoring to maintain high availability and performance of our AI systems in production."
    ],
    keyAspects: [
        { title: 'Continuous Integration & Delivery (CI/CD)', description: 'Automated pipelines for building, testing, and deploying code and models frequently and reliably.', iconName: 'GitMerge' },
        { title: 'Infrastructure as Code (IaC)', description: 'Managing and provisioning infrastructure through code for consistency and repeatability.', iconName: 'FileCode' },
        { title: 'Monitoring & Observability', description: 'Real-time monitoring of models and systems to ensure performance, detect drift, and maintain stability.', iconName: 'Activity' },
        { title: 'Collaboration & Communication', description: 'Breaking down silos between teams to foster shared responsibility and agile development cycles.', iconName: 'Users2' },
        { title: 'Automated Testing', description: 'Comprehensive testing strategies for data, models, and application code to ensure quality and reliability.', iconName: 'ClipboardCheck' },
    ]
  },
  dxShowcase: {
    title: 'Excellence in Digital Experience (DX)',
    subtitle: 'We craft intuitive and visually stunning interfaces that make complex AI accessible and delightful to use.',
    items: adaptedDxCases,
    cta: { text: 'View More DX Projects', link: '/portfolio/dx' }, // Example link
  },
  digitalTransformationAchievements: {
      title: 'Driving Tangible Digital Transformation',
      subtitle: 'See how our AI solutions have empowered organizations to achieve remarkable results.',
      items: [
          { id: 'dta-001', title: 'Automated Customer Support for Telecom Giant', description: 'Implemented an AI-powered chatbot and NLP system that reduced customer service call volume by 40% and improved CSAT scores by 15%.', clientName: 'Afritelcom Group', industry: 'Telecommunications', metrics: ['40% Call Volume Reduction', '15% CSAT Improvement', '24/7 Availability'], imageUrl: 'https://images.unsplash.com/photo-1580983216298-8CF14595ed11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1c3RvbWVyJTIwc3VwcG9ydCUyMGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', slug: '/projects/afritelcom-support-ai' },
          { id: 'dta-002', title: 'Predictive Maintenance in Manufacturing', description: 'Deployed an IoT and ML solution for a leading manufacturer, predicting equipment failures with 95% accuracy, leading to a 20% reduction in unscheduled downtime.', clientName: 'Precision Manufacturing Ltd.', industry: 'Manufacturing', metrics: ['95% Failure Prediction Accuracy', '20% Downtime Reduction', '15% Maintenance Cost Savings'], imageUrl: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', slug: '/projects/predictive-maintenance-mfg' },
      ]
  }
};