// src/components/blog/BlogDetailSidebar.tsx
import React from 'react';
import { Clock, Calendar, User, Eye, Bookmark } from 'lucide-react';
import type { DetailedBlogPost } from '../../types/blog';

interface BlogDetailSidebarProps {
  post: DetailedBlogPost;
}

const BlogDetailSidebar: React.FC<BlogDetailSidebarProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6 sticky top-8">
      {/* Post Stats */}
      <div 
        className="rounded-xl p-6 border"
        style={{
          background: 'rgba(26, 35, 50, 0.6)',
          borderColor: 'rgba(64, 150, 255, 0.2)'
        }}
      >
        <h3 className="text-lg font-semibold text-blue-300 mb-4">Post Details</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedDate)}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <User className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>
          {post.views && (
            <div className="flex items-center gap-3 text-gray-400">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          )}
          {post.wordCount && (
            <div className="flex items-center gap-3 text-gray-400">
              <Bookmark className="w-4 h-4" />
              <span>{post.wordCount.toLocaleString()} words</span>
            </div>
          )}
        </div>
      </div>

      {/* Table of Contents (if available) */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <div 
          className="rounded-xl p-6 border"
          style={{
            background: 'rgba(26, 35, 50, 0.6)',
            borderColor: 'rgba(64, 150, 255, 0.2)'
          }}
        >
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            {post.tableOfContents.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Tags */}
      <div 
        className="rounded-xl p-6 border"
        style={{
          background: 'rgba(26, 35, 50, 0.6)',
          borderColor: 'rgba(64, 150, 255, 0.2)'
        }}
      >
        <h3 className="text-lg font-semibold text-blue-300 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-blue-500/30 cursor-pointer"
              style={{
                background: 'rgba(64, 150, 255, 0.15)',
                color: '#94a3b8'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div 
        className="rounded-xl p-6 border"
        style={{
          background: 'linear-gradient(135deg, rgba(64, 150, 255, 0.1), rgba(82, 196, 255, 0.05))',
          borderColor: 'rgba(64, 150, 255, 0.3)'
        }}
      >
        <h3 className="text-lg font-semibold text-blue-300 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-400 mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-lg border text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          style={{
            background: 'rgba(51, 65, 85, 0.8)',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        />
        <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default BlogDetailSidebar;