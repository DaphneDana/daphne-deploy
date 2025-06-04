// src/components/blog/RelatedPosts.tsx
import React, { useMemo } from 'react';
import { blogData } from '../../assets/data/blogData';
import BlogCard from './BlogCard';
import type { BlogCategory } from '../../types/blog';

interface RelatedPostsProps {
  currentId: string;
  category: BlogCategory;
  maxPosts?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ 
  currentId, 
  category, 
  maxPosts = 3 
}) => {
  const relatedPosts = useMemo(() => {
    return blogData
      .filter(post => post.id !== currentId && post.category === category)
      .slice(0, maxPosts);
  }, [currentId, category, maxPosts]);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
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

export default RelatedPosts;