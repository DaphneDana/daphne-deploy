
// src/components/blog/BlogPagination.tsx
import React from 'react';
import type { BlogPaginationProps } from '../../types/blog';

const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalPosts
}) => {
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  const postsPerPage = 6;

  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
      {/* Results info */}
      <p className="text-sm text-gray-400">
        Showing {((currentPage - 1) * postsPerPage) + 1} to {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} posts
      </p>
      
      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border text-gray-300 rounded-lg transition-all duration-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'rgba(26, 35, 50, 0.6)',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        >
          ← Previous
        </button>
        
        {getPageNumbers().map((page: number) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              currentPage === page
                ? 'text-white shadow-lg'
                : 'text-gray-300 border hover:text-white'
            }`}
            style={{
              background: currentPage === page 
                ? '#4096ff' 
                : 'rgba(26, 35, 50, 0.6)',
              borderColor: currentPage === page 
                ? 'transparent' 
                : 'rgba(64, 150, 255, 0.3)',
              boxShadow: currentPage === page 
                ? '0 8px 25px rgba(64, 150, 255, 0.25)' 
                : 'none'
            }}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border text-gray-300 rounded-lg transition-all duration-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'rgba(26, 35, 50, 0.6)',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BlogPagination;