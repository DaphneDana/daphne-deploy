// src/pages/LatestNewsPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { mockNewsData } from '../assets/data/newsData'; 
import type { NewsItem } from '../types/news'; 
import type { NewsContentType } from '../types/news'; 
import FeaturedNewsCard from '../components/news/FeaturedNewsCard';
import NewsCard from '../components/news/NewsCard';
import { ListFilter, ArrowDownUp, Search } from 'lucide-react';

const CONTENT_TYPES: NewsContentType[] = ['Update', 'Press Release', 'Activity Report', 'Event'];

const LatestNewsPage: React.FC = () => {
  const [allNews] = useState<NewsItem[]>(() => 
    [...mockNewsData].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
  );
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(allNews);
  const [selectedContentType, setSelectedContentType] = useState<NewsContentType | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'dateDesc' | 'dateAsc' | 'titleAsc'>('dateDesc');

  const featuredNewsItems = useMemo(() => {
    return allNews.filter(item => item.isFeatured).slice(0, 2);
  }, [allNews]);

  const nonFeaturedNewsItems = useMemo(() => {
    return filteredNews.filter(item => !featuredNewsItems.find(f => f.id === item.id));
  }, [filteredNews, featuredNewsItems]);

  useEffect(() => {
    let news = [...allNews];
    if (selectedContentType !== 'All') {
      news = news.filter(item => item.contentType === selectedContentType);
    }
    if (searchTerm.trim() !== '') {
      const lowerSearchTerm = searchTerm.toLowerCase();
      news = news.filter(item =>
        item.title.toLowerCase().includes(lowerSearchTerm) ||
        item.summary.toLowerCase().includes(lowerSearchTerm) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
      );
    }
    news.sort((a, b) => {
        if (sortBy === 'dateDesc') return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        if (sortBy === 'dateAsc') return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        if (sortBy === 'titleAsc') return a.title.localeCompare(b.title);
        return 0;
    });
    setFilteredNews(news);
  }, [selectedContentType, searchTerm, sortBy, allNews]);

  return (
    <div className="bg-dark-bg text-text-main-dark min-h-screen">
      {/* Page Header - Full width for background/border */}
      <div className="py-16 md:py-20 text-center border-b border-slate-700">
        {/* Centered header content */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary uppercase tracking-wider animate-fade-in-up">
            Latest News
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-muted-dark animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest announcements, activities, and insights from LLP and our members.
          </p>
        </div>
      </div>

      {/* Main content area with better centering */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        
        {/* Featured Section */}
        {featuredNewsItems.length > 0 && selectedContentType === 'All' && searchTerm === '' && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-text-main-dark mb-8 text-center sm:text-left">Featured News</h2>
            <div className="grid gap-8 max-w-6xl mx-auto">
              {featuredNewsItems.map(item => (
                <FeaturedNewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Filters and Sorting Controls */}
        <section className="mb-8 p-4 sm:p-6 bg-card-dark-bg rounded-lg shadow-md max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
            
            {/* Search Input */}
            <div className="sm:col-span-2 md:col-span-1">
              <label htmlFor="search-news" className="block text-sm font-medium text-text-muted-dark mb-1">
                Search News
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search-news"
                  placeholder="Keywords, title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-md bg-input-dark-bg border border-slate-600 text-text-main-dark placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              </div>
            </div>
            
            {/* Filter by Type */}
            <div>
              <label htmlFor="filter-type" className="block text-sm font-medium text-text-muted-dark mb-1">
                Filter by Type
              </label>
              <div className="relative">
                <select
                  id="filter-type"
                  value={selectedContentType}
                  onChange={(e) => setSelectedContentType(e.target.value as NewsContentType | 'All')}
                  className="w-full appearance-none pl-3 pr-10 py-2.5 rounded-md bg-input-dark-bg border border-slate-600 text-text-main-dark focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                >
                  <option value="All">All Types</option>
                  {CONTENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ListFilter className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
              </div>
            </div>
            
            {/* Sort By */}
            <div>
              <label htmlFor="sort-by" className="block text-sm font-medium text-text-muted-dark mb-1">
                Sort By
              </label>
               <div className="relative">
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'dateDesc' | 'dateAsc' | 'titleAsc')}
                  className="w-full appearance-none pl-3 pr-10 py-2.5 rounded-md bg-input-dark-bg border border-slate-600 text-text-main-dark focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                >
                  <option value="dateDesc">Most Recent</option>
                  <option value="dateAsc">Oldest First</option>
                  <option value="titleAsc">Title (A-Z)</option>
                </select>
                <ArrowDownUp className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        {nonFeaturedNewsItems.length > 0 ? (
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {nonFeaturedNewsItems.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 max-w-md mx-auto">
            <div className="bg-card-dark-bg rounded-lg p-8 shadow-md">
              <div className="text-6xl mb-4">📰</div>
              <p className="text-xl text-text-muted-dark mb-2">No news items match your current filters.</p>
              <p className="text-sm text-slate-500">Try adjusting your search or filter criteria.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNewsPage;