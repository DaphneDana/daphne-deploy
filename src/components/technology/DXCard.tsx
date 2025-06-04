// src/components/technology/DXCaseCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { DxCaseItem } from '../../types/technology'; // Adjust path
import { Palette, ExternalLink } from 'lucide-react';

interface DXCaseCardProps {
  caseItem: DxCaseItem;
  index: number;
}

const DXCaseCard: React.FC<DXCaseCardProps> = ({ caseItem, index }) => {
  return (
    <motion.div
      className="bg-card-dark-bg rounded-xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={caseItem.imageUrl}
          alt={caseItem.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 p-2 bg-primary/70 rounded-full backdrop-blur-sm">
            <Palette size={20} className="text-white" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-text-main-dark group-hover:text-primary transition-colors">{caseItem.title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">{caseItem.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseItem.tags.slice(0,4).map((tag) => ( // Show max 4 tags
            <span key={tag} className="text-xs bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {caseItem.slug && (
            <Link 
                to={caseItem.slug} 
                className="mt-auto text-sm font-medium text-primary hover:text-primary-light inline-flex items-center group/link"
            >
                View Case Study <ExternalLink size={14} className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </Link>
        )}
      </div>
    </motion.div>
  );
};

export default DXCaseCard;