// src/components/companyProfile/AchievementCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Metric } from '../../types/companyProfile';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface AchievementMetricCardProps {
  metric: Metric;
}

const AchievementMetricCard: React.FC<AchievementMetricCardProps> = ({ metric }) => {
  const content = (
    <div className="relative h-full group w-full">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      />
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500" />
      
      {/* Content */}
      <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-center items-center text-center min-h-[200px] sm:min-h-[240px]">
        {/* Icon */}
        <div className="relative mb-3 sm:mb-4 lg:mb-6">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <TrendingUp size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </div>
        </div>
        
        {/* Metric Value */}
        <motion.div 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-2 sm:mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {metric.value}
        </motion.div>
        
        {/* Metric Label */}
        <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-2 sm:mb-3">
          {metric.label}
        </div>
        
        {/* Description */}
        {metric.description && (
          <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed max-w-xs text-center">
            {metric.description}
          </p>
        )}
        
        {/* Link Indicator */}
        {metric.slug && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={14} className="text-blue-400 sm:w-4 sm:h-4" />
          </div>
        )}
      </div>
    </div>
  );

  const cardClasses = "h-full w-full transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer";

  return metric.slug ? (
    <Link to={`/${metric.slug}`} className={cardClasses}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>
      {content}
    </div>
  );
};

export default AchievementMetricCard;