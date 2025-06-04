// src/components/home/MemberCompanyTeaserCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // or your preferred icon library
// Assuming a simplified type for teaser, or adapt from existing MemberCompany type
interface MemberTeaser {
  slug: string;
  name: string;
  logoUrl: string; // Use a high-quality, transparent BG logo if possible
  shortDescription: string;
}

interface MemberCompanyTeaserCardProps {
  company: MemberTeaser;
  index: number;
}

const MemberCompanyTeaserCard: React.FC<MemberCompanyTeaserCardProps> = ({ company, index }) => {
  return (
    <motion.div
      className="bg-card-dark-bg p-6 rounded-xl shadow-xl h-full flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-primary/25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img 
        src="/images/news1.jpeg" 
        alt={`${company.name} Logo`} 
        className="h-20 max-h-20 w-auto max-w-[180px] object-contain mb-5 bg-white/10 p-3 rounded-md" // Light bg for dark logos
      />
      <h3 className="text-xl font-semibold text-text-main-dark mb-2">{company.name}</h3>
      <p className="text-sm text-text-muted-dark leading-relaxed mb-4 flex-grow line-clamp-3">
        {company.shortDescription}
      </p>
      <Link 
        to={`/member-companies/${company.slug}`}
        className="mt-auto text-sm font-medium text-primary hover:text-primary-light inline-flex items-center group"
      >
        Learn More <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default MemberCompanyTeaserCard;