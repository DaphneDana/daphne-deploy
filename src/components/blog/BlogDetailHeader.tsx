// src/components/blog/BlogDetailHeader.tsx
import React from 'react';
import { Calendar, Clock, User, Eye, Tag } from 'lucide-react';
import type { DetailedBlogPost } from '../../types/blog';

interface BlogDetailHeaderProps {
  post: DetailedBlogPost;
}

const BlogDetailHeader: React.FC<BlogDetailHeaderProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'informal-updates':
        return { label: 'Team Update', color: 'bg-green-500/20 text-green-300', icon: '🏢' };
      case 'blog-posts':
        return { label: 'Blog Post', color: 'bg-blue-500/20 text-blue-300', icon: '✍️' };
      default:
        return { label: 'Post', color: 'bg-gray-500/20 text-gray-300', icon: '📝' };
    }
  };

  const categoryInfo = getCategoryInfo(post.category);

  return (
    <header className="mb-12 animate-fade-in-up">
      {/* Category Badge */}
      <div className="mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryInfo.color} flex items-center gap-2 w-fit`}>
          <span className="text-lg">{categoryInfo.icon}</span>
          {categoryInfo.label}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-blue-300 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
        {post.excerpt}
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>Published {formatDate(post.publishedDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>{post.readTime} min read</span>
        </div>
        {post.views && (
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        )}
        {post.difficulty && (
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            <span className="capitalize">{post.difficulty}</span>
          </div>
        )}
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-blue-500/30"
              style={{
                background: 'rgba(64, 150, 255, 0.15)',
                color: '#94a3b8'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Featured Image */}
      <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden relative mb-8">
        <img
          src={post.featuredImage || (post.category === 'blog-posts' ? '/images/blog.png' : '/images/blog-updates.png')}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Fallback */}
        <div 
          className="w-full h-full hidden items-center justify-center text-gray-400"
          style={{ background: 'linear-gradient(135deg, rgba(64, 150, 255, 0.1), rgba(82, 196, 255, 0.05))' }}
        >
          <div className="text-center">
            <div className="text-8xl mb-4">{categoryInfo.icon}</div>
            <p className="text-xl font-medium">{categoryInfo.label}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogDetailHeader;
