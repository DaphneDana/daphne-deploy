// src/components/home/InsightCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';

interface InsightSnippet {
  slug: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  date: string;
  category?: string;
}

interface InsightSnippetCardProps {
  insight: InsightSnippet;
  index: number;
}

const InsightSnippetCard: React.FC<InsightSnippetCardProps> = ({ insight, index }) => {
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  });

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'news update':
        return 'bg-green-500/80 text-green-100';
      case 'blog post':
        return 'bg-blue-500/80 text-blue-100';
      case 'event recap':
        return 'bg-purple-500/80 text-purple-100';
      default:
        return 'bg-gray-500/80 text-gray-100';
    }
  };

  return (
    <motion.article
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div 
        className="relative h-full rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id={`insightPattern${index}`} 
                patternUnits="userSpaceOnUse" 
                width="50" 
                height="50"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                <rect x="20" y="20" width="10" height="10" fill="rgba(59, 130, 246, 0.1)" rx="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#insightPattern${index})`}/>
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Section */}
        <Link to={insight.slug} className="block">
          <div className="relative h-48 sm:h-52 overflow-hidden">
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            {insight.category && (
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border border-white/20 ${getCategoryColor(insight.category)}`}>
                  {insight.category}
                </span>
              </div>
            )}
            
            {/* Reading Time Indicator */}
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center text-white/80 text-xs bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                <Clock size={12} className="mr-1" />
                <span>3 min read</span>
              </div>
            </div>
          </div>
        </Link>
        
        {/* Content Section */}
        <div className="relative z-10 p-6 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-13rem)]">
          {/* Date */}
          <div className="flex items-center text-xs text-gray-400 mb-3">
            <CalendarDays size={14} className="mr-2 text-blue-400/80" />
            <span>{formattedDate}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors duration-300">
            <Link 
              to={insight.slug} 
              className="hover:text-blue-300 transition-colors duration-300 line-clamp-2"
            >
              {insight.title}
            </Link>
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
            {insight.excerpt}
          </p>
          
          {/* Read More Link */}
          <div className="mt-auto pt-4 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
            <Link 
              to={insight.slug} 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 group/link"
            >
              <span>Read More</span>
              <ArrowRight 
                size={16} 
                className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
              />
            </Link>
          </div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.article>
  );
};

export default InsightSnippetCard;