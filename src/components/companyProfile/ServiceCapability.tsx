// src/components/companyProfile/ServiceCapabilityCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ServiceCapability } from '../../types/companyProfile';
import { 
  Layers, Users, FileText, BarChart3, Briefcase, ArrowRight, 
   Download, Sparkles 
} from 'lucide-react';

interface ServiceCapabilityCardProps {
  service: ServiceCapability;
}

// Helper to pick an icon based on category title
const getCategoryIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('strategy') || titleLower.includes('consulting')) return Briefcase;
  if (titleLower.includes('development') || titleLower.includes('software')) return Layers;
  if (titleLower.includes('data') || titleLower.includes('analytics')) return BarChart3;
  if (titleLower.includes('talent') || titleLower.includes('training')) return Users;
  return Layers; // Default
};

const ServiceCapabilityCard: React.FC<ServiceCapabilityCardProps> = ({ service }) => {
  const IconComponent = getCategoryIcon(service.categoryTitle);

  const cardContent = (
    <div className="relative h-full group overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      />
      
      {/* Hover Effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500" />
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-all duration-500">
        <Sparkles size={16} className="text-blue-400" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 sm:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start mb-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <IconComponent size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="ml-4 flex-grow">
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
              {service.categoryTitle}
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6 flex-grow">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {service.categoryDescription}
          </p>
        </div>
        
        {/* Sub Services */}
        {service.subServices && service.subServices.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center">
              <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
              Key Offerings
            </h4>
            <ul className="space-y-2">
              {service.subServices.slice(0, 3).map((sub, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-400/70 rounded-full mt-2 mr-3 group-hover/item:bg-blue-300 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover/item:text-gray-200 transition-colors duration-200">
                    {sub.name}
                  </span>
                </motion.li>
              ))}
              {service.subServices.length > 3 && (
                <li className="text-xs text-gray-400 italic pl-4">
                  + {service.subServices.length - 3} more services
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Audience */}
        {service.audience && (
          <div className="mb-6">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-blue-300">
                <span className="font-semibold">Ideal for:</span> {service.audience}
              </p>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            {/* Main CTA */}
            <div className="flex items-center text-sm sm:text-base font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              <span>Learn More</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            
            {/* Secondary Actions */}
            <div className="flex gap-3">
              {service.brochureUrl && (
                <a 
                  href={service.brochureUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-gray-400 hover:text-blue-400 transition-colors duration-200 group/btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={12} className="mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span>Brochure</span>
                </a>
              )}
              
              {service.caseStudyLink && (
                <Link 
                  to={service.caseStudyLink}
                  className="inline-flex items-center text-xs text-gray-400 hover:text-blue-400 transition-colors duration-200 group/btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText size={12} className="mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span>Case Studies</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const cardClasses = "group h-full transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer";

  return service.slug ? (
    <Link to={`/services/${service.slug}`} className={cardClasses}>
      {cardContent}
    </Link>
  ) : (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default ServiceCapabilityCard;