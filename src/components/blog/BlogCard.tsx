// src/components/blog/BlogCard.tsx (Updated with proper routing)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Eye } from 'lucide-react';
import type { BlogCardProps } from '../../types/blog';

const BlogCard: React.FC<BlogCardProps> = ({ post, animationDelay = 0 }) => {
  const navigate = useNavigate();

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

  const handleClick = () => {
    // Use React Router navigation instead of window.location
    navigate(`/blog/${post.id}`);
  };

  // Use correct images for each category
  const getImageSrc = () => {
    if (post.featuredImage) {
      return post.featuredImage;
    }
    return post.category === 'blog-posts' ? '/images/blog.png' : '/images/blog-updates.png';
  };

  return (
    <article 
      className="rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden group h-full flex flex-col"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        animationDelay: `${animationDelay}ms`
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(64, 150, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
      }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-0.5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, #4096ff, transparent)' }}
      ></div>
      
      {/* Enhanced Image */}
      <div className="w-full h-48 rounded-xl mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={getImageSrc()}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        
        {/* Fallback placeholder if image fails */}
        <div 
          className="w-full h-full hidden items-center justify-center text-gray-400"
          style={{ background: 'linear-gradient(135deg, rgba(64, 150, 255, 0.1), rgba(82, 196, 255, 0.05))' }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-2 left-2 w-4 h-4 bg-green-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{categoryInfo.icon}</div>
            <p className="text-xs font-medium text-gray-500">
              {post.category === 'blog-posts' ? 'Blog Post' : 'Team Update'}
            </p>
          </div>
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </div>
        
        {/* Overlay for all images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Category Badge */}
      <div className="mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color} flex items-center gap-1 w-fit`}>
          <span className="w-2 h-2 bg-current rounded-full"></span>
          {categoryInfo.label}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors line-clamp-2 flex-shrink-0">
          {post.title}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 rounded text-xs font-medium transition-colors hover:bg-blue-500/20"
                style={{
                  background: 'rgba(64, 150, 255, 0.1)',
                  color: '#94a3b8'
                }}
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-500 flex items-center">+{post.tags.length - 3}</span>
            )}
          </div>
        )}
        
        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-600/50">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.publishedDate)}
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {post.author.name}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min
          </div>
          {post.views && (
            <div className="flex items-center gap-1 ml-auto">
              <Eye className="w-3 h-3" />
              {post.views}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;