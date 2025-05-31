// src/components/companyProfile/CaseStudyTeaserCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudyTeaser } from '../../types/companyProfile'; // Adjust path
import { ArrowRight } from 'lucide-react';

interface CaseStudyTeaserCardProps {
  teaser: CaseStudyTeaser;
}

const CaseStudyTeaserCard: React.FC<CaseStudyTeaserCardProps> = ({ teaser }) => {
  return (
    <Link 
      to={`/${teaser.slug}`} // Ensure slug includes base path like 'case-studies/...'
      className="group relative block rounded-xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
    >
      <img 
        src={teaser.imageUrl} 
        alt={teaser.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight group-hover:text-primary transition-colors">
          {teaser.title}
        </h3>
        <p className="text-sm text-slate-300 mb-2">{teaser.resultHighlight}</p>
        <span className="inline-flex items-center text-xs font-medium text-primary group-hover:underline">
          Read Full Story <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyTeaserCard;