// src/pages/BlogPage.tsx
import React, { useState, useEffect, useMemo } from 'react';
import type { BlogPost, BlogCategory } from '../types/blog';
import { blogData } from '../assets/data/blogData';
import BlogPageHeader from '../components/blog/BlogPageHeader';
import BlogFilter from '../components/blog/BlogFilter';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGrid';
import BlogPagination from '../components/blog/BlogPagination';

const BlogPage: React.FC = () => {
  const [posts ] = useState<BlogPost[]>(blogData);
  const [loading ] = useState(false);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const postsPerPage = 6;

  // Get featured post
  const featuredPost = useMemo(() => 
    posts.find(post => post.featured) || posts[0], 
    [posts]
  );

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      // Category filter
      if (activeCategory !== 'all' && post.category !== activeCategory) {
        return false;
      }
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      return true;
    });

    // Remove featured post from the grid if it's in the filtered results
    if (featuredPost) {
      filtered = filtered.filter(post => post.id !== featuredPost.id);
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        case 'oldest':
          return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'read-time':
          return a.readTime - b.readTime;
        default:
          return 0;
      }
    });

    return filtered;
  }, [posts, activeCategory, searchQuery, sortBy, featuredPost]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const currentPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: BlogCategory | 'all') => {
    setActiveCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of blog section
    document.getElementById('blog-content')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="blog-content">
        {/* Page Header */}
        <BlogPageHeader />

        {/* Blog Filters */}
        <BlogFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Featured Post */}
        {featuredPost && (
          <FeaturedPost post={featuredPost} />
        )}

        {/* Results Summary */}
        {(searchQuery || activeCategory !== 'all') && (
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div 
              className="rounded-xl p-4 border"
              style={{
                background: 'rgba(26, 35, 50, 0.6)',
                borderColor: 'rgba(64, 150, 255, 0.2)'
              }}
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>
                  {filteredAndSortedPosts.length} post{filteredAndSortedPosts.length !== 1 ? 's' : ''} found
                </span>
                {searchQuery && (
                  <span className="flex items-center gap-1">
                    for "<span className="text-blue-400 font-medium">{searchQuery}</span>"
                  </span>
                )}
                {activeCategory !== 'all' && (
                  <span className="flex items-center gap-1">
                    in <span className="text-blue-400 font-medium">
                      {activeCategory === 'informal-updates' ? 'Team Updates' : 'Blog Posts'}
                    </span>
                  </span>
                )}
                {(searchQuery || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="ml-auto px-3 py-1 text-xs text-gray-400 hover:text-white border border-gray-600 hover:border-blue-400 rounded-full transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <BlogGrid 
          posts={currentPosts}
          loading={loading}
        />

        {/* Pagination */}
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredAndSortedPosts.length}
        />

        {/* Blog Stats */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <div 
            className="rounded-2xl p-8 border"
            style={{
              background: 'rgba(26, 35, 50, 0.6)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Join Our Community</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest insights from our AI & ML research team. 
              From technical deep-dives to behind-the-scenes updates, we share our journey of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">{posts.length}</div>
                <div className="text-gray-400 text-sm">Total Posts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {posts.reduce((sum, post) => sum + (post.views || 0), 0).toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">Total Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">
                  {posts.filter(post => post.category === 'blog-posts').length}
                </div>
                <div className="text-gray-400 text-sm">Technical Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">
                  {posts.filter(post => post.category === 'informal-updates').length}
                </div>
                <div className="text-gray-400 text-sm">Team Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;