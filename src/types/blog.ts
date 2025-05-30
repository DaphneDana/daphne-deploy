// src/types/blog.ts
export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: BlogAuthor;
  publishedDate: string;
  updatedDate?: string;
  category: BlogCategory;
  tags: string[];
  featuredImage?: string;
  readTime: number; // in minutes
  featured?: boolean;
  views?: number;
  slug?: string;
}

export type BlogCategory = 'informal-updates' | 'blog-posts';

export interface BlogPageProps {
  initialPosts?: BlogPost[];
}

export interface BlogListProps {
  posts: BlogPost[];
  loading?: boolean;
}

export interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  animationDelay?: number;
}

export interface BlogFilterProps {
  activeCategory: BlogCategory | 'all';
  onCategoryChange: (category: BlogCategory | 'all') => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export interface BlogDetailProps {
  post: BlogPost;
}

export interface RelatedPostsProps {
  currentId: string;
  category: BlogCategory;
  maxPosts?: number;
}

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalPosts: number;
}

export interface FeaturedPostProps {
  post: BlogPost;
}

export interface BlogStatsProps {
  totalPosts: number;
  totalViews: number;
  categoryCounts: Record<BlogCategory, number>;
}