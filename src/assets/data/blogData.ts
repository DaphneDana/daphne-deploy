// src/assets/data/blogData.ts
import type { BlogPost } from '../../types/blog';

export const blogData: BlogPost[] = [
  {
    id: 'team-culture-1',
    title: 'Building AI Excellence: Inside Our Research Culture',
    excerpt: 'A behind-the-scenes look at how our team fosters innovation, collaboration, and breakthrough discoveries in artificial intelligence research.',
    publishedDate: '2025-05-20',
    category: 'informal-updates',
    author: {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      avatar: '/images/authors/sarah-chen.jpg'
    },
    tags: ['team culture', 'research', 'innovation', 'AI'],
    featuredImage: '/images/blog-updates.png', // Team updates use blog-updates.png
    readTime: 5,
    featured: true,
    views: 1250,
    slug: 'building-ai-excellence-research-culture'
  },
  {
    id: 'neural-networks-deep-dive',
    title: 'The Future of Neural Architecture Search: A Technical Deep Dive',
    excerpt: 'Exploring cutting-edge techniques in automated neural network design and their implications for next-generation AI systems.',
    publishedDate: '2025-05-18',
    category: 'blog-posts',
    author: {
      name: 'Dr. Marcus Rodriguez',
      role: 'Senior Research Scientist',
      avatar: '/images/authors/marcus-rodriguez.jpg'
    },
    tags: ['neural networks', 'automation', 'research', 'machine learning'],
    featuredImage: '/images/blog.png', // Blog posts use blog.png
    readTime: 12,
    views: 890,
    slug: 'future-neural-architecture-search'
  },
  {
    id: 'office-expansion-update',
    title: 'New Silicon Valley Lab: Where Innovation Meets Collaboration',
    excerpt: 'Take a virtual tour of our new state-of-the-art research facility and meet the brilliant minds driving AI forward.',
    publishedDate: '2025-05-15',
    category: 'informal-updates',
    author: {
      name: 'Emily Watson',
      role: 'Head of Operations',
      avatar: '/images/authors/emily-watson.jpg'
    },
    tags: ['office expansion', 'team updates', 'Silicon Valley', 'facilities'],
    featuredImage: '/images/blog-updates.png', // Team updates use blog-updates.png
    readTime: 4,
    views: 675,
    slug: 'new-silicon-valley-lab'
  },
  {
    id: 'explainable-ai-ethics',
    title: 'Demystifying AI: Building Transparent and Ethical AI Systems',
    excerpt: 'How we approach explainable AI development to ensure our systems are not just powerful, but also trustworthy and transparent.',
    publishedDate: '2025-05-12',
    category: 'blog-posts',
    author: {
      name: 'Dr. Aisha Patel',
      role: 'Ethics in AI Lead',
      avatar: '/images/authors/aisha-patel.jpg'
    },
    tags: ['AI ethics', 'explainable AI', 'transparency', 'responsible AI'],
    featuredImage: '/images/blog.png', // Blog posts use blog.png
    readTime: 8,
    views: 1150,
    slug: 'demystifying-ai-transparent-ethical-systems'
  },
  {
    id: 'hackathon-highlights',
    title: 'LLP Internal Hackathon: 48 Hours of Pure Innovation',
    excerpt: 'Recap of our latest internal hackathon where teams pushed boundaries and created amazing AI-powered solutions in just two days.',
    publishedDate: '2025-05-10',
    category: 'informal-updates',
    author: {
      name: 'Alex Thompson',
      role: 'Developer Relations',
      avatar: '/images/authors/alex-thompson.jpg'
    },
    tags: ['hackathon', 'innovation', 'team building', 'development'],
    featuredImage: '/images/blog-updates.png', // Team updates use blog-updates.png
    readTime: 6,
    views: 520,
    slug: 'llp-internal-hackathon-innovation'
  },
  {
    id: 'federated-learning-guide',
    title: 'Federated Learning: Privacy-Preserving AI at Scale',
    excerpt: 'A comprehensive guide to federated learning techniques and how they enable collaborative AI training while protecting data privacy.',
    publishedDate: '2025-05-08',
    category: 'blog-posts',
    author: {
      name: 'Dr. James Liu',
      role: 'Principal Researcher',
      avatar: '/images/authors/james-liu.jpg'
    },
    tags: ['federated learning', 'privacy', 'distributed AI', 'security'],
    featuredImage: '/images/blog.png', // Blog posts use blog.png
    readTime: 15,
    views: 980,
    slug: 'federated-learning-privacy-preserving-ai'
  },
  {
    id: 'conference-recap-neurips',
    title: 'NeurIPS 2024: Key Takeaways and LLP Presentations',
    excerpt: 'Our team\'s experience at the premier AI conference, including highlights from our presentations and exciting research trends.',
    publishedDate: '2025-05-05',
    category: 'informal-updates',
    author: {
      name: 'Maria Gonzalez',
      role: 'Research Communications',
      avatar: '/images/authors/maria-gonzalez.jpg'
    },
    tags: ['NeurIPS', 'conference', 'research trends', 'presentations'],
    featuredImage: '/images/blog-updates.png', // Team updates use blog-updates.png
    readTime: 7,
    views: 760,
    slug: 'neurips-2024-takeaways-presentations'
  },
  {
    id: 'quantum-ml-exploration',
    title: 'Quantum Machine Learning: The Next Frontier',
    excerpt: 'Exploring the intersection of quantum computing and machine learning, and what it means for the future of artificial intelligence.',
    publishedDate: '2025-05-02',
    category: 'blog-posts',
    author: {
      name: 'Dr. Robert Kim',
      role: 'Quantum Computing Researcher',
      avatar: '/images/authors/robert-kim.jpg'
    },
    tags: ['quantum computing', 'machine learning', 'future tech', 'research'],
    featuredImage: '/images/blog.png', // Blog posts use blog.png
    readTime: 10,
    views: 1340,
    slug: 'quantum-machine-learning-next-frontier'
  }
];