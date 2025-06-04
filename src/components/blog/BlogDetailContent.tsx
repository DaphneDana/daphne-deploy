// src/components/blog/BlogDetailContent.tsx
import React from 'react';
import type { DetailedBlogPost } from '../../types/blog';

interface BlogDetailContentProps {
  post: DetailedBlogPost;
}

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ post }) => {
  return (
    <article className="prose prose-lg prose-invert max-w-none">
      <div 
        className="rounded-2xl p-8 border"
        style={{
          background: 'rgba(26, 35, 50, 0.6)',
          borderColor: 'rgba(64, 150, 255, 0.2)'
        }}
      >
        <div 
          className="blog-content text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}
        />
      </div>
    </article>
  );
};

export default BlogDetailContent;
