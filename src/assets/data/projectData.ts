// src/assets/data/projectData.ts
import type { Project, ProjectTag } from '../../types/project';

export const projectTags: ProjectTag[] = [
  { id: 'ai', name: 'Artificial Intelligence', color: 'bg-blue-500/20 text-blue-300', icon: '🤖' },
  { id: 'ml', name: 'Machine Learning', color: 'bg-green-500/20 text-green-300', icon: '🧠' },
  { id: 'web', name: 'Web Development', color: 'bg-purple-500/20 text-purple-300', icon: '🌐' },
  { id: 'mobile', name: 'Mobile App', color: 'bg-orange-500/20 text-orange-300', icon: '📱' },
  { id: 'automotive', name: 'Automotive', color: 'bg-red-500/20 text-red-300', icon: '🚗' },
  { id: 'healthcare', name: 'Healthcare', color: 'bg-pink-500/20 text-pink-300', icon: '🏥' },
  { id: 'fintech', name: 'FinTech', color: 'bg-yellow-500/20 text-yellow-300', icon: '💰' },
  { id: 'nlp', name: 'Natural Language Processing', color: 'bg-indigo-500/20 text-indigo-300', icon: '💬' },
  { id: 'computer-vision', name: 'Computer Vision', color: 'bg-cyan-500/20 text-cyan-300', icon: '👁️' },
  { id: 'iot', name: 'Internet of Things', color: 'bg-teal-500/20 text-teal-300', icon: '🌐' }
];

export const projectData: Project[] = [
  {
    id: 'smart-traffic-ai',
    title: 'Smart Traffic Management AI',
    shortDescription: 'AI-powered traffic optimization system that reduced congestion by 35% in urban areas.',
    fullDescription: 'A comprehensive AI solution that analyzes real-time traffic patterns and optimizes signal timing to improve urban traffic flow.',
    status: 'old',
    tags: ['ai', 'computer-vision', 'automotive'],
    duration: '8 months',
    completedDate: '2024-12-15',
    startDate: '2024-04-15',
    
    problem: {
      title: 'Urban Traffic Congestion Crisis',
      description: 'Major metropolitan areas were experiencing severe traffic congestion, leading to increased pollution, economic losses, and reduced quality of life for residents.',
      challenges: [
        'Real-time traffic pattern analysis across multiple intersections',
        'Integration with existing traffic infrastructure',
        'Balancing traffic flow optimization with pedestrian safety',
        'Handling unpredictable traffic events and emergencies'
      ]
    },
    
    proposal: {
      title: 'AI-Driven Traffic Optimization',
      description: 'We developed an intelligent traffic management system using computer vision and machine learning to analyze traffic patterns and optimize signal timing in real-time.',
      approach: [
        'Deploy computer vision cameras at key intersections',
        'Implement machine learning models for traffic pattern recognition',
        'Create predictive algorithms for traffic flow optimization',
        'Develop a centralized control system for signal management'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'AWS IoT', 'Real-time Analytics', 'Edge Computing']
    },
    
    result: {
      title: 'Transformative Traffic Improvements',
      description: 'The implementation resulted in significant improvements in traffic flow, reduced emissions, and enhanced urban mobility.',
      achievements: [
        '35% reduction in average commute times',
        '28% decrease in traffic-related CO2 emissions',
        '92% accuracy in traffic pattern prediction',
        'Integration with 150+ traffic signals across the city'
      ],
      metrics: [
        { label: 'Congestion Reduction', value: '35%', icon: '📉' },
        { label: 'Emission Decrease', value: '28%', icon: '🌱' },
        { label: 'Prediction Accuracy', value: '92%', icon: '🎯' },
        { label: 'Signals Integrated', value: '150+', icon: '🚦' }
      ],
      impact: 'Improved quality of life for over 2 million daily commuters while contributing to environmental sustainability goals.'
    },
    
    featuredImage: '/images/project1.jpg',
    gallery: ['/images/project2.jpg', '/images/project3.jpg'],
    
    team: [
      { name: 'Dr. Sarah Chen', role: 'AI Research Lead' },
      { name: 'Marcus Rodriguez', role: 'Computer Vision Engineer' },
      { name: 'Emily Watson', role: 'Systems Integration Specialist' }
    ],
    
    client: 'Metro City Transportation Department',
    liveUrl: 'https://metrocity-traffic.gov',
    githubUrl: 'https://github.com/llp/smart-traffic-ai'
  },
  
  {
    id: 'medical-diagnosis-ai',
    title: 'Medical Image Diagnosis AI',
    shortDescription: 'Deep learning system for automated medical image analysis with 96% diagnostic accuracy.',
    fullDescription: 'Advanced AI system that assists radiologists in detecting anomalies in medical images, improving diagnosis speed and accuracy.',
    status: 'ongoing',
    tags: ['ai', 'ml', 'healthcare', 'computer-vision'],
    duration: '12 months',
    expectedDate: '2025-08-30',
    startDate: '2024-08-30',
    
    problem: {
      title: 'Healthcare Diagnostic Challenges',
      description: 'Healthcare facilities faced challenges with radiologist shortages and the need for faster, more accurate medical image analysis for early disease detection.',
      challenges: [
        'Limited availability of specialized radiologists',
        'Time-consuming manual image analysis processes',
        'Risk of human error in critical diagnoses',
        'Need for consistent diagnostic accuracy across facilities'
      ]
    },
    
    proposal: {
      title: 'AI-Assisted Diagnostic Platform',
      description: 'Developing a sophisticated AI system that can analyze medical images including X-rays, MRIs, and CT scans to assist healthcare professionals in diagnosis.',
      approach: [
        'Train deep learning models on large medical image datasets',
        'Implement explainable AI for diagnostic transparency',
        'Create user-friendly interface for medical professionals',
        'Ensure HIPAA compliance and data security'
      ],
      technologies: ['PyTorch', 'DICOM Processing', 'React', 'Node.js', 'Docker', 'AWS Healthcare']
    },
    
    result: {
      title: 'Enhanced Diagnostic Capabilities',
      description: 'Current progress shows promising results in improving diagnostic accuracy and reducing analysis time.',
      achievements: [
        '96% diagnostic accuracy in current testing phase',
        '75% reduction in image analysis time',
        'Successfully processing 10,000+ medical images',
        'Integration with 5 partner healthcare facilities'
      ],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '96%', icon: '🎯' },
        { label: 'Time Reduction', value: '75%', icon: '⏱️' },
        { label: 'Images Processed', value: '10K+', icon: '📊' },
        { label: 'Partner Facilities', value: '5', icon: '🏥' }
      ],
      impact: 'Helping healthcare professionals provide faster, more accurate diagnoses while reducing workload pressure.'
    },
    
    featuredImage: '/images/project2.jpg',
    
    team: [
      { name: 'Dr. Aisha Patel', role: 'Medical AI Specialist' },
      { name: 'James Liu', role: 'Deep Learning Engineer' },
      { name: 'Maria Gonzalez', role: 'Healthcare Integration Lead' }
    ],
    
    client: 'Regional Healthcare Network'
  },
  
  {
    id: 'autonomous-delivery-drone',
    title: 'Autonomous Delivery Drone Network',
    shortDescription: 'Next-generation drone delivery system with AI-powered navigation and logistics optimization.',
    fullDescription: 'Comprehensive autonomous drone delivery platform featuring advanced AI navigation, route optimization, and real-time logistics management.',
    status: 'upcoming',
    tags: ['ai', 'iot', 'automotive', 'computer-vision'],
    duration: '18 months',
    expectedDate: '2026-03-15',
    startDate: '2025-09-15',
    
    problem: {
      title: 'Last-Mile Delivery Challenges',
      description: 'Traditional delivery methods face increasing costs, environmental concerns, and efficiency limitations in urban and remote areas.',
      challenges: [
        'High costs of last-mile delivery operations',
        'Environmental impact of traditional delivery vehicles',
        'Limited access to remote or hard-to-reach areas',
        'Need for faster delivery times in competitive markets'
      ]
    },
    
    proposal: {
      title: 'AI-Powered Autonomous Drone Fleet',
      description: 'Creating an intelligent drone delivery network that can autonomously navigate, optimize routes, and handle complex logistics scenarios.',
      approach: [
        'Develop advanced AI navigation systems for urban environments',
        'Implement real-time weather and obstacle avoidance',
        'Create centralized fleet management and logistics platform',
        'Ensure regulatory compliance and safety protocols'
      ],
      technologies: ['Computer Vision', 'Path Planning AI', 'IoT Sensors', 'Edge Computing', 'React Native', '5G Connectivity']
    },
    
    result: {
      title: 'Revolutionary Delivery Solutions',
      description: 'Expected to transform delivery logistics with unprecedented efficiency and environmental benefits.',
      achievements: [
        'Projected 60% reduction in delivery costs',
        'Estimated 80% decrease in delivery-related emissions',
        'Target 15-minute delivery times for urban areas',
        'Planned coverage for 500+ mile radius'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '60%', icon: '💰' },
        { label: 'Emission Decrease', value: '80%', icon: '🌱' },
        { label: 'Delivery Time', value: '15min', icon: '⚡' },
        { label: 'Coverage Area', value: '500mi', icon: '📍' }
      ],
      impact: 'Revolutionizing delivery logistics while contributing to environmental sustainability and improving customer experience.'
    },
    
    featuredImage: '/images/project3.jpg',
    
    team: [
      { name: 'Dr. Robert Kim', role: 'Autonomous Systems Lead' },
      { name: 'Alex Thompson', role: 'Drone Engineering Specialist' },
      { name: 'Sarah Chen', role: 'AI Navigation Engineer' }
    ],
    
    client: 'Global Logistics Corporation'
  },
  
  {
    id: 'financial-fraud-detection',
    title: 'Real-time Financial Fraud Detection',
    shortDescription: 'Machine learning system that detects fraudulent transactions with 99.7% accuracy in milliseconds.',
    fullDescription: 'Advanced fraud detection system using ensemble machine learning models to identify suspicious financial activities in real-time.',
    status: 'old',
    tags: ['ml', 'fintech', 'ai'],
    duration: '6 months',
    completedDate: '2024-10-30',
    startDate: '2024-04-30',
    
    problem: {
      title: 'Rising Financial Fraud Threats',
      description: 'Financial institutions were experiencing increasing fraud losses due to sophisticated attack methods and delayed detection systems.',
      challenges: [
        'Real-time processing of millions of transactions',
        'Reducing false positives while maintaining security',
        'Adapting to evolving fraud patterns',
        'Integration with existing banking infrastructure'
      ]
    },
    
    proposal: {
      title: 'Intelligent Fraud Prevention System',
      description: 'Developed a sophisticated machine learning platform that analyzes transaction patterns and user behavior to detect fraud in real-time.',
      approach: [
        'Implement ensemble machine learning models',
        'Create real-time transaction scoring system',
        'Develop adaptive learning for new fraud patterns',
        'Build secure API integration for banking systems'
      ],
      technologies: ['Scikit-learn', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    
    result: {
      title: 'Exceptional Fraud Prevention',
      description: 'Achieved industry-leading fraud detection rates while significantly reducing false positives.',
      achievements: [
        '99.7% fraud detection accuracy',
        '85% reduction in false positive rates',
        'Sub-100ms transaction processing time',
        '$50M+ in prevented fraud losses'
      ],
      metrics: [
        { label: 'Detection Accuracy', value: '99.7%', icon: '🎯' },
        { label: 'False Positive Reduction', value: '85%', icon: '✅' },
        { label: 'Processing Time', value: '<100ms', icon: '⚡' },
        { label: 'Fraud Prevention', value: '$50M+', icon: '🛡️' }
      ],
      impact: 'Saved millions in fraud losses while improving customer experience through reduced false alerts.'
    },
    
    featuredImage: '/images/project1.jpg',
    
    team: [
      { name: 'Dr. Marcus Rodriguez', role: 'ML Engineering Lead' },
      { name: 'Emily Watson', role: 'Data Scientist' },
      { name: 'James Liu', role: 'Backend Engineer' }
    ],
    
    client: 'Premier Financial Services',
    githubUrl: 'https://github.com/llp/fraud-detection-ml'
  },
  
  {
    id: 'nlp-customer-service',
    title: 'AI Customer Service Platform',
    shortDescription: 'Natural language processing system providing 24/7 intelligent customer support.',
    fullDescription: 'Comprehensive AI-powered customer service platform with advanced NLP capabilities for understanding and responding to customer inquiries.',
    status: 'ongoing',
    tags: ['nlp', 'ai', 'web'],
    duration: '10 months',
    expectedDate: '2025-07-15',
    startDate: '2024-09-15',
    
    problem: {
      title: 'Customer Service Scalability',
      description: 'Growing businesses struggled to provide consistent, high-quality customer support across multiple channels and time zones.',
      challenges: [
        '24/7 customer support coverage requirements',
        'Handling multiple languages and communication channels',
        'Maintaining consistent service quality across agents',
        'Reducing response times while increasing resolution rates'
      ]
    },
    
    proposal: {
      title: 'Intelligent Customer Support AI',
      description: 'Building an advanced NLP system that can understand, process, and respond to customer inquiries with human-like comprehension and empathy.',
      approach: [
        'Develop advanced natural language understanding models',
        'Create multi-channel integration (chat, email, voice)',
        'Implement sentiment analysis and emotion detection',
        'Build knowledge base with continuous learning capabilities'
      ],
      technologies: ['Transformers', 'BERT', 'GPT Models', 'Rasa', 'Python', 'React', 'WebSockets']
    },
    
    result: {
      title: 'Enhanced Customer Experience',
      description: 'Significantly improved customer satisfaction while reducing operational costs and response times.',
      achievements: [
        '91% customer satisfaction score',
        '70% reduction in average response time',
        'Support for 12 different languages',
        '88% first-contact resolution rate'
      ],
      metrics: [
        { label: 'Customer Satisfaction', value: '91%', icon: '😊' },
        { label: 'Response Time Reduction', value: '70%', icon: '⚡' },
        { label: 'Languages Supported', value: '12', icon: '🌍' },
        { label: 'First-Contact Resolution', value: '88%', icon: '✅' }
      ],
      impact: 'Transformed customer support operations while providing superior customer experience around the clock.'
    },
    
    featuredImage: '/images/project2.jpg',
    
    team: [
      { name: 'Dr. Aisha Patel', role: 'NLP Research Lead' },
      { name: 'Maria Gonzalez', role: 'Conversation Design Specialist' },
      { name: 'Alex Thompson', role: 'Full-Stack Developer' }
    ],
    
    client: 'TechCorp Solutions'
  }
];