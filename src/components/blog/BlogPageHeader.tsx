// src/components/blog/BlogPageHeader.tsx
import React from 'react';

const BlogPageHeader: React.FC = () => {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      <h1 
        className="text-5xl font-bold mb-4"
        style={{
          background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Blog & Updates
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover insights, behind-the-scenes stories, and the latest developments from our AI & ML research team
      </p>
    </div>
  );
};

export default BlogPageHeader;