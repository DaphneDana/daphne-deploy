// src/types/blog.ts
export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
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

// Extended interface for detailed blog posts with full content
export interface DetailedBlogPost extends BlogPost {
  content: string; // Required for detailed posts
  lastUpdated: string;
  tableOfContents: TableOfContentsItem[];
  relatedPosts: string[]; // Array of post IDs
  seoMeta: SEOMeta;
  estimatedReadingTime?: number; // More precise reading time calculation
  wordCount?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  series?: BlogSeries; // If part of a series
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number; // 1 for h1, 2 for h2, etc.
  anchor?: string; // Custom anchor if different from id
}

export interface SEOMeta {
  description: string;
  keywords: string[];
  ogImage?: string;
  ogTitle?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

export interface BlogSeries {
  id: string;
  title: string;
  description: string;
  posts: string[]; // Array of post IDs in order
  currentPostIndex: number;
}

export type BlogCategory = 'informal-updates' | 'blog-posts';

// Enhanced comment system types
export interface BlogComment {
  id: string;
  postId: string;
  authorName: string;
  authorEmail?: string;
  authorAvatar?: string;
  content: string;
  publishedDate: string;
  parentId?: string; // For nested comments
  likes: number;
  replies?: BlogComment[];
  isHighlighted?: boolean; // For author replies
}

// Reading progress and engagement types
export interface ReadingProgress {
  postId: string;
  userId?: string;
  progressPercentage: number;
  timeSpent: number; // in seconds
  lastReadPosition: string; // section ID or scroll position
  completed: boolean;
  bookmarked: boolean;
}

export interface BlogEngagement {
  postId: string;
  likes: number;
  shares: number;
  comments: number;
  bookmarks: number;
  averageReadingTime: number;
  completionRate: number; // percentage of users who read to the end
}

// Component Props Types
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
  variant?: 'default' | 'compact' | 'minimal';
}

export interface BlogFilterProps {
  activeCategory: BlogCategory | 'all';
  onCategoryChange: (category: BlogCategory | 'all') => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableTags?: string[];
  activeTags?: string[];
  onTagsChange?: (tags: string[]) => void;
}

export interface BlogDetailProps {
  post: DetailedBlogPost;
  comments?: BlogComment[];
  engagement?: BlogEngagement;
  readingProgress?: ReadingProgress;
}

export interface RelatedPostsProps {
  currentId: string;
  category: BlogCategory;
  maxPosts?: number;
  algorithm?: 'category' | 'tags' | 'similarity' | 'popularity';
}

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalPosts: number;
  postsPerPage?: number;
  showPageInfo?: boolean;
}

export interface FeaturedPostProps {
  post: BlogPost;
  showFullContent?: boolean;
}

export interface BlogStatsProps {
  totalPosts: number;
  totalViews: number;
  categoryCounts: Record<BlogCategory, number>;
  topTags?: Array<{ tag: string; count: number }>;
  monthlyStats?: Array<{ month: string; posts: number; views: number }>;
}

// Table of Contents Component Props
export interface TableOfContentsProps {
  items: TableOfContentsItem[];
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
  className?: string;
  maxDepth?: number;
}

// Blog Navigation Props
export interface BlogNavigationProps {
  currentPost: BlogPost;
  previousPost?: BlogPost;
  nextPost?: BlogPost;
  series?: BlogSeries;
}

// Social Sharing Props
export interface SocialSharingProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  platforms?: Array<'twitter' | 'linkedin' | 'facebook' | 'reddit' | 'email' | 'copy'>;
  className?: string;
}

// Author Card Props
export interface AuthorCardProps {
  author: BlogAuthor;
  postCount?: number;
  totalViews?: number;
  variant?: 'compact' | 'detailed' | 'minimal';
  showSocial?: boolean;
  showStats?: boolean;
}

// Blog Search Props
export interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  suggestions?: string[];
  recentSearches?: string[];
  popularSearches?: string[];
}

// Newsletter Signup Props
export interface NewsletterSignupProps {
  onSubscribe: (email: string) => void;
  variant?: 'inline' | 'modal' | 'sidebar';
  title?: string;
  description?: string;
  buttonText?: string;
  showPrivacyNote?: boolean;
}

// Reading Time Props
export interface ReadingTimeProps {
  content: string;
  wordsPerMinute?: number;
  showIcon?: boolean;
  format?: 'short' | 'long';
}

// Blog Archive Props
export interface BlogArchiveProps {
  posts: BlogPost[];
  groupBy: 'month' | 'year' | 'category';
  showCounts?: boolean;
  expandable?: boolean;
}

// Tag Cloud Props
export interface TagCloudProps {
  tags: Array<{ name: string; count: number; slug?: string }>;
  maxTags?: number;
  minFontSize?: number;
  maxFontSize?: number;
  colorScheme?: 'blue' | 'rainbow' | 'monochrome';
  onTagClick?: (tag: string) => void;
}

// Blog Series Props
export interface BlogSeriesProps {
  series: BlogSeries;
  currentPostId: string;
  posts: BlogPost[];
  showProgress?: boolean;
  variant?: 'compact' | 'detailed';
}

// Search Result Props
export interface BlogSearchResultProps {
  query: string;
  results: BlogPost[];
  totalCount: number;
  suggestions?: string[];
  filters?: {
    categories: BlogCategory[];
    tags: string[];
    authors: string[];
    dateRange: { start: Date; end: Date };
  };
}

// Advanced Filter Props
export interface AdvancedFilterProps {
  categories: BlogCategory[];
  tags: string[];
  authors: BlogAuthor[];
  dateRange: { min: Date; max: Date };
  readTimeRange: { min: number; max: number };
  onFiltersChange: (filters: BlogFilters) => void;
  activeFilters: BlogFilters;
}

export interface BlogFilters {
  categories: BlogCategory[];
  tags: string[];
  authors: string[];
  dateRange?: { start: Date; end: Date };
  readTimeRange?: { min: number; max: number };
  featured?: boolean;
  sortBy: 'date' | 'popularity' | 'title' | 'readTime';
  sortOrder: 'asc' | 'desc';
}

// Comment System Props
export interface CommentSectionProps {
  postId: string;
  comments: BlogComment[];
  onAddComment: (comment: Omit<BlogComment, 'id' | 'publishedDate'>) => void;
  onReplyComment: (parentId: string, reply: Omit<BlogComment, 'id' | 'publishedDate' | 'parentId'>) => void;
  onLikeComment: (commentId: string) => void;
  allowGuestComments?: boolean;
  maxNestingLevel?: number;
  moderationEnabled?: boolean;
}

export interface CommentFormProps {
  onSubmit: (comment: Omit<BlogComment, 'id' | 'publishedDate'>) => void;
  parentId?: string;
  placeholder?: string;
  showAuthorFields?: boolean;
  isSubmitting?: boolean;
}

// Admin/Management Props
export interface BlogAdminProps {
  posts: BlogPost[];
  onCreatePost: (post: Omit<BlogPost, 'id'>) => void;
  onUpdatePost: (id: string, post: Partial<BlogPost>) => void;
  onDeletePost: (id: string) => void;
  onPublishPost: (id: string) => void;
  onUnpublishPost: (id: string) => void;
}

// Analytics Props
export interface BlogAnalyticsProps {
  posts: BlogPost[];
  timeRange: { start: Date; end: Date };
  metrics: {
    pageViews: number;
    uniqueVisitors: number;
    averageReadTime: number;
    bounceRate: number;
    topPosts: Array<{ postId: string; views: number; title: string }>;
    topCategories: Array<{ category: BlogCategory; views: number }>;
    topTags: Array<{ tag: string; views: number }>;
  };
}

// API Response Types
export interface BlogAPIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface BlogListResponse extends BlogAPIResponse<BlogPost[]> {
  filters?: BlogFilters;
  suggestions?: string[];
}

export interface BlogDetailResponse extends BlogAPIResponse<DetailedBlogPost> {
  relatedPosts?: BlogPost[];
  comments?: BlogComment[];
  engagement?: BlogEngagement;
}

// Utility Types
export type BlogPostStatus = 'draft' | 'published' | 'archived' | 'scheduled';

export type BlogSortOption = 
  | 'newest'
  | 'oldest'
  | 'most-popular'
  | 'most-read'
  | 'trending'
  | 'alphabetical'
  | 'read-time-asc'
  | 'read-time-desc';

export type BlogViewMode = 'grid' | 'list' | 'cards' | 'minimal';

// Hook Types
export interface UseBlogOptions {
  initialPosts?: BlogPost[];
  filters?: Partial<BlogFilters>;
  autoRefresh?: boolean;
  cacheResults?: boolean;
}

export interface UseBlogSearchOptions {
  debounceMs?: number;
  minQueryLength?: number;
  includeFilters?: boolean;
  maxSuggestions?: number;
}

// Configuration Types
export interface BlogConfig {
  postsPerPage: number;
  enableComments: boolean;
  enableSocialSharing: boolean;
  enableNewsletter: boolean;
  enableSearch: boolean;
  enableTagCloud: boolean;
  enableArchive: boolean;
  enableAnalytics: boolean;
  defaultSortBy: BlogSortOption;
  defaultViewMode: BlogViewMode;
  featuredPostsCount: number;
  relatedPostsCount: number;
  maxTagsInCloud: number;
  wordsPerMinute: number;
  dateFormat: string;
  timeFormat: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    fontFamily: string;
  };
}

// Error Types
export interface BlogError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

export type BlogErrorType = 
  | 'POST_NOT_FOUND'
  | 'CATEGORY_NOT_FOUND'
  | 'AUTHOR_NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'NETWORK_ERROR'
  | 'SERVER_ERROR'
  | 'PERMISSION_DENIED';

// Event Types
export interface BlogEvent {
  type: string;
  postId?: string;
  userId?: string;
  timestamp: Date;
  data?: Record<string, any>;
}

export type BlogEventType = 
  | 'post_view'
  | 'post_like'
  | 'post_share'
  | 'post_bookmark'
  | 'comment_add'
  | 'comment_like'
  | 'newsletter_subscribe'
  | 'search_query'
  | 'filter_applied';

// Validation Types
export interface BlogValidationRules {
  title: {
    minLength: number;
    maxLength: number;
    required: boolean;
  };
  excerpt: {
    minLength: number;
    maxLength: number;
    required: boolean;
  };
  content: {
    minLength: number;
    maxLength: number;
    required: boolean;
  };
  tags: {
    minCount: number;
    maxCount: number;
    maxTagLength: number;
  };
  author: {
    nameRequired: boolean;
    emailRequired: boolean;
    bioMaxLength: number;
  };
}