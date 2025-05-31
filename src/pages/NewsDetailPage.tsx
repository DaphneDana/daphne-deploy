// src/pages/NewsDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNewsData } from '../assets/data/newsData'; 
import type { NewsItem } from '../types/news'; 
import { ArrowLeft, CalendarDays, User, MapPin, ExternalLink, ListChecks } from 'lucide-react';

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    const item = mockNewsData.find(n => n.slug === slug);
    
    // Simulate a slight delay as if fetching from an API
    const timer = setTimeout(() => {
        setNewsItem(item);
        setIsLoading(false);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center text-gray-200" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-12 w-12 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-xl text-text-muted-dark">Loading news article...</p>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center px-4 text-gray-200" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="w-full max-w-md mx-auto rounded-lg p-8 shadow-md" style={{
          background: 'rgba(26, 35, 50, 0.7)',
          borderColor: 'rgba(64, 150, 255, 0.25)'
        }}>
          <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-text-main-dark mb-2">News Article Not Found</p>
          <p className="text-text-muted-dark mb-8">
            Sorry, we couldn't find the news article you were looking for.
          </p>
          <Link
            to="/latest-news"
            className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Latest News
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(newsItem.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Placeholder for fullContent which might be simple text or rich HTML/Markdown
  const renderFullContent = (content: string | undefined) => {
    if (!content) return <p className="text-gray-300">Full content not available.</p>;
    // For simple text, split into paragraphs
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed text-gray-300 text-base md:text-lg">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="pt-8 pb-16 md:pt-12 md:pb-24 min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      {/* Main container with better centering */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-gray-200">
        
        {/* Back Link */}
        <div className="mb-6 md:mb-8">
          <Link
            to="/latest-news"
            className="inline-flex items-center text-sm text-primary hover:text-primary-light transition-colors group"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Latest News
          </Link>
        </div>

        {/* News Header */}
        <header className="mb-8 md:mb-10 border-b border-slate-700/30 pb-6 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
            {newsItem.contentType}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-300 leading-tight mb-4">
            {newsItem.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm text-gray-400 space-x-4">
            <span className="flex items-center">
              <CalendarDays size={16} className="mr-1.5 text-primary/80" />
              Published on {formattedDate}
            </span>
            {newsItem.author && (
              <span className="flex items-center">
                <User size={16} className="mr-1.5 text-primary/80" />
                By {newsItem.author}
              </span>
            )}
          </div>
        </header>

        {/* Main Content Area */}
        <article className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-8">
              {newsItem.imageUrl && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none text-gray-200 
                              prose-headings:text-blue-300 prose-a:text-blue-400 hover:prose-a:text-blue-300
                              prose-strong:text-gray-200">
                
                {/* Summary/Lead */}
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  {newsItem.summary}
                </p>
                
                {/* Full Content */}
                {newsItem.fullContent ? renderFullContent(newsItem.fullContent) : (
                   <div className="space-y-4 text-gray-300 text-base md:text-lg">
                      <p>This is where the full detailed content of the news article would appear. It could be multiple paragraphs, include lists, or even subheadings if the data supported it.</p>
                      <p>For LLP's recent announcement regarding Q3 growth, key highlights included a 25% increase in recurring revenue and the onboarding of 15 new enterprise clients. The new AI ethics platform, "Aegis AI," focuses on providing organizations with tools for bias detection, explainability, and continuous monitoring of AI models. Early feedback from beta users has been overwhelmingly positive, praising its intuitive interface and comprehensive feature set.</p>
                      <p>Further details about the platform's architecture and its impact on various industries will be shared in an upcoming whitepaper and a dedicated webinar series.</p>
                   </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {newsItem.contentType === 'Event' && newsItem.eventDetails && (
                <div className="p-6 rounded-lg shadow-md" style={{
                  background: 'rgba(26, 35, 50, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4 border-b border-slate-700/30 pb-2">
                    Event Details
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <CalendarDays size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <strong>Date:</strong> {newsItem.eventDetails.date}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <strong>Location:</strong> {newsItem.eventDetails.location}
                      </div>
                    </li>
                    {newsItem.eventDetails.agendaLink && (
                      <li className="flex items-start">
                        <ListChecks size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                        <a href={newsItem.eventDetails.agendaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          View Agenda <ExternalLink size={14} className="inline ml-1" />
                        </a>
                      </li>
                    )}
                    {newsItem.eventDetails.registrationLink && (
                      <li className="flex items-start">
                        <ExternalLink size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                         <a href={newsItem.eventDetails.registrationLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Register Here <ExternalLink size={14} className="inline ml-1" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {newsItem.tags && newsItem.tags.length > 0 && (
                <div className="p-6 rounded-lg shadow-md" style={{
                  background: 'rgba(26, 35, 50, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4 border-b border-slate-700/30 pb-2">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {newsItem.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetailPage;