// src/components/about/ExternalLinksSection.tsx - NEW IMPROVED COMPONENT
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { AboutUsPageData } from '../../types/aboutUs';

interface ExternalLinksSectionProps {
  externalLinksSection: AboutUsPageData['externalLinksSection'];
}

const ExternalLinksSection: React.FC<ExternalLinksSectionProps> = ({ externalLinksSection }) => {
  return (
    <section 
      className="py-16 md:py-24 relative"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <ExternalLink size={48} className="text-blue-400 mr-4" />
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {externalLinksSection.title}
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {externalLinksSection.subtitle}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="rounded-2xl p-8 md:p-12 border"
            style={{
              background: 'rgba(26, 35, 50, 0.8)',
              borderColor: 'rgba(64, 150, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Decorative gradient line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
            ></div>

            <p className="text-gray-300 leading-relaxed mb-8">
              {externalLinksSection.introductoryText}
            </p>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {externalLinksSection.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 group"
                  style={{
                    background: 'rgba(51, 65, 85, 0.5)',
                    borderColor: 'rgba(64, 150, 255, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.6)';
                    e.currentTarget.style.background = 'rgba(64, 150, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.3)';
                    e.currentTarget.style.background = 'rgba(51, 65, 85, 0.5)';
                  }}
                >
                  <ExternalLink size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {link.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExternalLinksSection;
