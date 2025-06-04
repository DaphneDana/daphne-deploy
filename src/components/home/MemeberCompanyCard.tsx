// src/components/home/MemberCompanyCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

interface MemberTeaser {
  slug: string;
  name: string;
  logoUrl: string;
  shortDescription: string;
}

interface MemberCompanyTeaserCardProps {
  company: MemberTeaser;
  index: number;
}

const MemberCompanyTeaserCard: React.FC<MemberCompanyTeaserCardProps> = ({ company, index }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div 
        className="relative h-full p-6 sm:p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id={`memberPattern${index}`} 
                patternUnits="userSpaceOnUse" 
                width="40" 
                height="40"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.3)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#memberPattern${index})`}/>
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:border-blue-400/30 transition-colors duration-300">
              <img 
                src="/images/news1.jpeg" 
                alt={`${company.name} Logo`} 
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-lg"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Building2 
                size={48} 
                className="text-blue-400 hidden"
              />
            </div>
          </div>
          
          {/* Company Name */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
            {company.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
            {company.shortDescription}
          </p>
          
          {/* Learn More Link */}
          <Link 
            to={`/member-companies/${company.slug}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 group/link"
          >
            <span>Learn More</span>
            <ArrowRight 
              size={16} 
              className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
            />
          </Link>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default MemberCompanyTeaserCard;