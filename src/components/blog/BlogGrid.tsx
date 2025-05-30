// src/components/blog/BlogGrid.tsx
import React from 'react';
import type { BlogListProps } from '../../types/blog';
import BlogCard from './BlogCard';

const BlogGrid: React.FC<BlogListProps> = ({ posts, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="rounded-2xl p-6 border animate-pulse"
            style={{
              background: 'rgba(26, 35, 50, 0.7)',
              borderColor: 'rgba(64, 150, 255, 0.25)'
            }}
          >
            <div className="w-full h-48 bg-gray-600 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-600 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div 
        className="text-center py-16 rounded-2xl border"
        style={{
          background: 'rgba(26, 35, 50, 0.7)',
          borderColor: 'rgba(64, 150, 255, 0.25)'
        }}
      >
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-blue-300 mb-2">No Posts Found</h3>
        <p className="text-gray-400">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        {posts.map((post, index) => (
          <BlogCard 
            key={post.id} 
            post={post}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;