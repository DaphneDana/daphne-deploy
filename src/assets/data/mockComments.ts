// src/assets/data/mockComments.ts
import type { BlogComment } from '../../types/blog';

export const mockComments: BlogComment[] = [
  {
    id: 'comment-1',
    postId: 'team-culture-1',
    authorName: 'Alex Chen',
    authorEmail: 'alex.chen@example.com',
    content: 'This is such an inspiring look into your team culture! The emphasis on collaboration really shows in the quality of research you produce. How do you maintain this culture as the team grows?',
    publishedDate: '2025-05-21T10:30:00Z',
    likes: 12,
    isHighlighted: false
  },
  {
    id: 'comment-2',
    postId: 'team-culture-1',
    authorName: 'Dr. Maria Rodriguez',
    authorEmail: 'maria.rodriguez@university.edu',
    content: 'As someone in academia, I really appreciate your commitment to open science and reproducible research. Would love to explore potential collaboration opportunities!',
    publishedDate: '2025-05-21T14:45:00Z',
    likes: 8,
    isHighlighted: false
  },
  {
    id: 'comment-3',
    postId: 'team-culture-1',
    authorName: 'Sarah Chen',
    authorEmail: 'sarah.chen@company.com',
    content: 'Thanks for the thoughtful questions! We maintain our culture through regular team retrospectives, mentorship programs, and by ensuring every new hire understands our core values from day one. The key is making culture a deliberate practice, not just something that happens naturally.',
    publishedDate: '2025-05-21T16:20:00Z',
    likes: 15,
    isHighlighted: true,
    parentId: 'comment-1'
  },
  {
    id: 'comment-4',
    postId: 'neural-networks-deep-dive',
    authorName: 'Jordan Kim',
    authorEmail: 'jordan.kim@tech.com',
    content: 'Fantastic deep dive into NAS! The section on differentiable architecture search was particularly enlightening. Have you experimented with hardware-aware NAS for edge deployment?',
    publishedDate: '2025-05-19T09:15:00Z',
    likes: 6,
    isHighlighted: false
  },
  {
    id: 'comment-5',
    postId: 'neural-networks-deep-dive',
    authorName: 'Dr. Michael Zhang',
    authorEmail: 'mzhang@research.org',
    content: 'Great article! I\'d love to see more details about your search space design principles. The computational cost reduction techniques you mentioned sound promising.',
    publishedDate: '2025-05-19T11:30:00Z',
    likes: 4,
    isHighlighted: false
  }
];