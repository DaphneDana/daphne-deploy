
// src/components/blog/FeaturedPost.tsx (Updated with proper routing)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Eye } from 'lucide-react';
import type { FeaturedPostProps } from '../../types/blog';

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
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
        return { label: 'Team Update', color: 'bg-green-500/20 text-green-300' };
      case 'blog-posts':
        return { label: 'Blog Post', color: 'bg-blue-500/20 text-blue-300' };
      default:
        return { label: 'Post', color: 'bg-gray-500/20 text-gray-300' };
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
    <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2">
        <span className="text-yellow-400">⭐</span>
        Featured Post
      </h2>
      
      <article 
        className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 relative group"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9), rgba(15, 26, 46, 0.8))',
          backdropFilter: 'blur(10px)'
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(64, 150, 255, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.3)';
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
        ></div>
        
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryInfo.color}`}>
                {categoryInfo.label}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #4096ff, #52c4ff)' }}
              >
                Featured
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedDate)}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
              {post.views && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {post.views} views
                </div>
              )}
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative">
            <div className="w-full h-64 lg:h-full rounded-xl overflow-hidden relative">
              <img
                src={getImageSrc()}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Fallback if image fails */}
            <div 
              className="w-full h-64 lg:h-full rounded-xl hidden items-center justify-center text-gray-400"
              style={{ background: 'rgba(51, 65, 85, 0.5)' }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{post.category === 'blog-posts' ? '✍️' : '🏢'}</div>
                <p className="text-lg font-medium">
                  {post.category === 'blog-posts' ? 'Blog Post' : 'Team Update'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedPost;