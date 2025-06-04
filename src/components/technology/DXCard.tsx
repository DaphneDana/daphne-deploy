// src/components/technology/DXCaseCard.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, ExternalLink } from 'lucide-react';
import type { DxCaseItem } from '../../types/technology';

interface DXCaseCardProps {
  caseItem: DxCaseItem;
  index: number;
}

const DXCaseCard: React.FC<DXCaseCardProps> = ({ caseItem, index }) => {
  return (
    <motion.div
      className="rounded-2xl border cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group h-full flex flex-col"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={caseItem.imageUrl}
          alt={caseItem.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4 p-3 rounded-xl bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
          <Palette size={20} className="text-purple-400" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-blue-200 transition-colors">
          {caseItem.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed flex-grow line-clamp-3">
          {caseItem.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {caseItem.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full font-medium transition-colors hover:bg-purple-500/30"
              style={{
                background: 'rgba(147, 51, 234, 0.15)',
                color: '#c4b5fd'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {caseItem.slug && (
          <Link 
            to={caseItem.slug} 
            className="mt-auto text-sm font-medium text-purple-400 hover:text-purple-300 inline-flex items-center group/link"
          >
            View Case Study 
            <ExternalLink size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-0.5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default DXCaseCard;