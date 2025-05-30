// src/components/blog/BlogFilter.tsx
import React from 'react';
import { Search } from 'lucide-react';
import type { BlogFilterProps } from '../../types/blog';

const BlogFilter: React.FC<BlogFilterProps> = ({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange
}) => {
  const categories = [
    { key: 'all', label: 'All Posts', icon: '📚' },
    { key: 'informal-updates', label: 'Team Updates', icon: '🏢' },
    { key: 'blog-posts', label: 'Blog Posts', icon: '✍️' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'title', label: 'By Title' },
    { value: 'read-time', label: 'Read Time' }
  ];

  return (
    <div 
      className="rounded-2xl p-6 mb-8 border animate-fade-in-up"
      style={{
        background: 'rgba(26, 35, 50, 0.8)',
        backdropFilter: 'blur(10px)',
        borderColor: 'rgba(64, 150, 255, 0.3)',
        animationDelay: '200ms'
      }}
    >
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search posts, tags, or authors..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2"
            style={{
              background: 'rgba(51, 65, 85, 0.8)',
              borderColor: 'rgba(64, 150, 255, 0.3)'
            }}
          />
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.key
                  ? 'text-white shadow-lg transform -translate-y-0.5'
                  : 'text-gray-200 border hover:text-white hover:transform hover:-translate-y-0.5'
              }`}
              style={{
                background: activeCategory === category.key 
                  ? '#4096ff'
                  : 'rgba(64, 150, 255, 0.1)',
                borderColor: activeCategory === category.key 
                  ? 'transparent'
                  : 'rgba(64, 150, 255, 0.3)',
                boxShadow: activeCategory === category.key 
                  ? '0 8px 25px rgba(64, 150, 255, 0.3)'
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.key) {
                  e.currentTarget.style.background = '#4096ff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.key) {
                  e.currentTarget.style.background = 'rgba(64, 150, 255, 0.1)';
                }
              }}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 text-gray-200"
          style={{
            background: 'rgba(51, 65, 85, 0.8)',
            borderColor: 'rgba(64, 150, 255, 0.3)',
            border: '1px solid'
          }}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value} style={{ background: '#334155', color: '#e2e8f0' }}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BlogFilter;