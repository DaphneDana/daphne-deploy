
// src/components/technology/AiSolutionCard.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import type { AiSolutionItem } from '../../types/technology';
import * as LucideIcons from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Activity: LucideIcons.Activity,
  MessageSquare: LucideIcons.MessageSquare,
  BarChart2: LucideIcons.BarChart2,
  Default: LucideIcons.Cpu,
};

interface AiSolutionCardProps {
  solution: AiSolutionItem;
  index: number;
}

const AiSolutionCard: React.FC<AiSolutionCardProps> = ({ solution, index }) => {
  const IconComponent = solution.iconName ? (iconMap[solution.iconName] || iconMap.Default) : iconMap.Default;

  const cardContent = (
    <>
      {/* Animated top border */}
      <div 
        className="absolute top-0 left-0 w-full h-0.5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, #4096ff, transparent)' }}
      ></div>

      {solution.imageUrl && (
        <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
          <img
            src={solution.imageUrl}
            alt={solution.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Type badge */}
          <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
            solution.type === 'Product' 
              ? 'bg-emerald-500/80 text-white' 
              : 'bg-purple-500/80 text-white'
          }`}>
            {solution.type}
          </span>

          {/* Icon overlay */}
          <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
            <IconComponent size={24} className="text-blue-400" />
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
              {solution.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-blue-300 leading-tight group-hover:text-blue-200 transition-colors">
            {solution.title}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow line-clamp-3">
          {solution.description}
        </p>

        {solution.highlights && solution.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {solution.highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-300">
                  <CheckCircle size={16} className="mr-2 mt-0.5 text-emerald-400 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-600/50">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {solution.technologies.slice(0, 5).map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-3 py-1 rounded-full font-medium transition-colors hover:bg-blue-500/30"
                style={{
                  background: 'rgba(64, 150, 255, 0.15)',
                  color: '#94a3b8'
                }}
              >
                {tech}
              </span>
            ))}
            {solution.technologies.length > 5 && (
              <span className="text-xs text-gray-500 flex items-center">
                +{solution.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
  
  const cardClasses = "rounded-2xl border cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group h-full flex flex-col";
  const cardStyle = {
    background: 'rgba(26, 35, 50, 0.7)',
    borderColor: 'rgba(64, 150, 255, 0.25)',
    backdropFilter: 'blur(10px)'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {solution.slug ? (
        <Link 
          to={solution.slug} 
          className={cardClasses}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(64, 150, 255, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
          }}
        >
          {cardContent}
        </Link>
      ) : (
        <div 
          className={cardClasses}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(64, 150, 255, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
          }}
        >
          {cardContent}
        </div>
      )}
    </motion.div>
  );
};

export default AiSolutionCard;