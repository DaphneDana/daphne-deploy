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
  // ... (all your existing state and logic: allNews, filteredNews, selectedContentType, searchTerm, sortBy, etc.)
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
      {/* Page Header - This section spans full width for its background/border */}
      <div className="py-16 md:py-20 text-center border-b border-slate-700">
        {/* Content within Page Header is constrained */}
        <div className="container-mx">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary uppercase tracking-wider animate-fade-in-up">
            Latest News
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-text-muted-dark animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest announcements, activities, and insights from LLP and our members.
          </p>
        </div>
      </div>

      {/* Main content area that needs container for side spacing */}
      {/* This div will now wrap all content below the header section */}
      <div className="container-mx py-12 md:py-16">
        {/* Featured Section */}
        {featuredNewsItems.length > 0 && selectedContentType === 'All' && searchTerm === '' && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-text-main-dark mb-8 text-center sm:text-left">Featured News</h2>
            <div className="grid gap-8">
              {featuredNewsItems.map(item => (
                <FeaturedNewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Filters and Sorting Controls */}
        {/* This section was already within the container-mx if the structure above is followed.
            Its internal bg-card-dark-bg will make it look like a distinct panel. */}
        <section className="mb-8 p-4 sm:p-6 bg-card-dark-bg rounded-lg shadow-md">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nonFeaturedNewsItems.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            {/* ... (no results content) ... */}
            <img src="/src/assets/react.svg" alt="No results" className="mx-auto h-24 w-24 text-slate-600 opacity-50 mb-4" />
            <p className="text-xl text-text-muted-dark">No news items match your current filters.</p>
            <p className="text-sm text-slate-500 mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div> {/* End of main container-mx */}
    </div>
  );
};

export default LatestNewsPage;