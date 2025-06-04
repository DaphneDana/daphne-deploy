// src/components/technology/AiSolutionCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { AiSolutionItem } from '../../types/technology'; // Adjust path
import * as LucideIcons from 'lucide-react';
import { CheckCircle } from 'lucide-react'; // Explicit for highlights

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
      {solution.imageUrl && (
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={solution.imageUrl}
            alt={solution.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm ${
            solution.type === 'Product' ? 'bg-teal-500/80 text-white' : 'bg-purple-500/80 text-white'
          }`}>
            {solution.type}
          </span>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start mb-3">
          <div className="p-2 bg-primary/10 rounded-md mr-3 mt-0.5">
            <IconComponent size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-main-dark leading-tight">{solution.title}</h3>
            <p className="text-xs text-text-muted-dark">{solution.category}</p>
          </div>
        </div>
        
        <p className="text-sm text-text-muted-dark mb-4 leading-relaxed flex-grow line-clamp-3">{solution.description}</p>

        {solution.highlights && solution.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Highlights:</h4>
            <ul className="space-y-1.5">
              {solution.highlights.slice(0,2).map((highlight, idx) => ( // Show max 2-3 highlights
                <li key={idx} className="flex items-start text-xs text-text-muted-dark">
                  <CheckCircle size={14} className="mr-2 mt-0.5 text-teal-400 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-slate-700/50">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5">
            {solution.technologies.slice(0, 5).map((tech) => ( // Show max 5 tech tags
              <span key={tech} className="text-xs bg-slate-700 text-blue-300 px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {solution.technologies.length > 5 && <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded-full">...</span>}
          </div>
        </div>
      </div>
    </>
  );
  
  const cardClasses = "bg-card-dark-bg rounded-xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20";

  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
    {solution.slug ? (
        <Link to={solution.slug} className={cardClasses}>
            {cardContent}
        </Link>
    ) : (
        <div className={cardClasses}>
            {cardContent}
        </div>
    )}
    </motion.div>
  );
};

export default AiSolutionCard;