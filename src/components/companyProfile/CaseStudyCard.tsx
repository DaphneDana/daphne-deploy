// src/components/companyProfile/CaseStudyTeaserCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudyTeaser } from '../../types/companyProfile';
import { ArrowRight, FileText } from 'lucide-react';

interface CaseStudyTeaserCardProps {
  teaser: CaseStudyTeaser;
}

const CaseStudyTeaserCard: React.FC<CaseStudyTeaserCardProps> = ({ teaser }) => {
  return (
    <Link 
      to={`/${teaser.slug}`}
      className="group relative block rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/blog.png"
          alt={teaser.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
        {/* Icon */}
        <div className="flex items-center mb-3">
          <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30 backdrop-blur-sm mr-3">
            <FileText size={16} className="text-blue-400 sm:w-5 sm:h-5" />
          </div>
          <span className="text-xs sm:text-sm text-blue-300 font-medium uppercase tracking-wider">Case Study</span>
        </div>
        
        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 leading-tight group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
          {teaser.title}
        </h3>
        
        {/* Result Highlight */}
        <p className="text-xs sm:text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300 line-clamp-2">
          {teaser.resultHighlight}
        </p>
        
        {/* CTA */}
        <div className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-all duration-300">
          <span>Read Full Story</span>
          <ArrowRight size={12} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:w-4 sm:h-4" />
        </div>
      </div>
      
      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-gray-600/30 group-hover:border-blue-500/40 transition-colors duration-300"></div>
    </Link>
  );
};

export default CaseStudyTeaserCard;