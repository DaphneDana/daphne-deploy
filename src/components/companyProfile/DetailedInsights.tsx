// src/components/companyProfile/DetailedInsightsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData } from '../../types/companyProfile';
import CaseStudyTeaserCard from './CaseStudyCard';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DetailedInsightsSectionProps {
  insights: CompanyProfileData['detailedInsights'];
}

const DetailedInsightsSection: React.FC<DetailedInsightsSectionProps> = ({ insights }) => {
  if (!insights || !insights.caseStudyTeasers || insights.caseStudyTeasers.length === 0) return null;

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Clear Section Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm">
              <FileText size={28} className="text-purple-400 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Detailed Insights & Case Studies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Explore real-world examples of our impact and expertise.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {insights.caseStudyTeasers.map((teaser, index) => (
            <motion.div
              key={teaser.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <CaseStudyTeaserCard teaser={teaser} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/case-studies" 
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 text-sm sm:text-base"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </section>
  );
};

export default DetailedInsightsSection;