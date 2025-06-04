// src/components/technology/DTAchievementCard.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { DigitalTransformationAchievement } from '../../types/technology';

interface DTAchievementCardProps {
  achievement: DigitalTransformationAchievement;
  index: number;
  layout?: 'image-left' | 'image-right';
}

const DTAchievementCard: React.FC<DTAchievementCardProps> = ({ achievement, index, layout = 'image-left' }) => {
  return (
    <motion.div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 relative group ${
        layout === 'image-right' ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:flex`}
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, x: layout === 'image-left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(64, 150, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
      }}
    >
      {/* Animated top border */}
      <div 
        className="absolute top-0 left-0 w-full h-0.5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, #4096ff, transparent)' }}
      ></div>

      {achievement.imageUrl && (
        <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
          <img 
            src={achievement.imageUrl} 
            alt={achievement.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}
      
      <div className={`p-8 flex flex-col ${achievement.imageUrl ? 'md:w-3/5' : 'w-full'}`}>
        <div className="mb-4">
          {achievement.clientName && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">
                {achievement.industry}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-blue-400 font-medium">
                {achievement.clientName}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
            {achievement.title}
          </h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
          {achievement.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results</h4>
          <ul className="space-y-2">
            {achievement.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-300">
                <CheckCircle size={16} className="mr-3 flex-shrink-0 text-emerald-400" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
        
        {achievement.slug && (
          <Link 
            to={achievement.slug}
            className="mt-auto text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center group/link"
          >
            View Full Case Study
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default DTAchievementCard;