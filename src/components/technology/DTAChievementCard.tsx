// src/components/technology/DigitalTransformationAchievementCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { DigitalTransformationAchievement } from '../../types/technology';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface DTAchievementCardProps {
  achievement: DigitalTransformationAchievement;
  index: number;
  layout?: 'image-left' | 'image-right';
}

const DTAchievementCard: React.FC<DTAchievementCardProps> = ({ achievement, index, layout = 'image-left' }) => {
  return (
    <motion.div
      className={`bg-card-dark-bg rounded-xl shadow-xl overflow-hidden md:flex ${layout === 'image-right' ? 'md:flex-row-reverse' : 'md:flex-row'} group transition-all duration-300 hover:shadow-primary/20`}
      initial={{ opacity: 0, x: layout === 'image-left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {achievement.imageUrl && (
        <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
          <img 
            src={achievement.imageUrl} 
            alt={achievement.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`p-6 md:p-8 flex flex-col ${achievement.imageUrl ? 'md:w-3/5' : 'w-full'}`}>
        <h3 className="text-xl md:text-2xl font-semibold text-text-main-dark mb-2 group-hover:text-primary transition-colors">
          {achievement.title}
        </h3>
        {achievement.clientName && (
          <p className="text-xs text-primary mb-1 uppercase tracking-wider font-medium">
            Client: {achievement.clientName} {achievement.industry && `(${achievement.industry})`}
          </p>
        )}
        <p className="text-sm text-text-muted-dark leading-relaxed mb-4 flex-grow">
          {achievement.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-main-dark mb-1.5">Key Metrics:</h4>
          <ul className="space-y-1">
            {achievement.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-center text-xs text-teal-300">
                <CheckCircle size={14} className="mr-2 flex-shrink-0 text-teal-400" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
        {achievement.slug && (
          <Link 
            to={achievement.slug}
            className="mt-auto text-sm font-medium text-primary hover:text-primary-light inline-flex items-center self-start group/link"
          >
            View Full Story <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default DTAchievementCard;