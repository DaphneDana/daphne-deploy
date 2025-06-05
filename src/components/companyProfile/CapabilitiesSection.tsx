// src/components/companyProfile/ServiceCapabilitiesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData } from '../../types/companyProfile';
import ServiceCapabilityCard from './ServiceCapability';
import { Zap, Sparkles } from 'lucide-react';

interface ServiceCapabilitiesSectionProps {
  services: CompanyProfileData['serviceCapabilities'];
}

const ServiceCapabilitiesSection: React.FC<ServiceCapabilitiesSectionProps> = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1e2a3d 50%, #0a0f1c 100%)'
      }}
    >
      {/* Clear Section Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <Zap size={28} className="text-blue-400 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Sparkles size={16} className="text-blue-400 mr-2 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium uppercase tracking-wider">Our Expertise</span>
            <Sparkles size={16} className="text-blue-400 ml-2 sm:w-5 sm:h-5" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Our Service Capabilities
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Comprehensive AI solutions designed to drive innovation and deliver measurable results across industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <ServiceCapabilityCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <Zap size={14} className="text-blue-400 mr-2 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">Ready to transform your business with AI?</span>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default ServiceCapabilitiesSection;