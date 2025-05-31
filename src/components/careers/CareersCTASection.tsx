// src/components/careers/CareersCTASection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const CareersCTASection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <motion.section 
      id={id} 
      className="py-16 md:py-20"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          className="max-w-xl mx-auto text-center p-8 rounded-2xl shadow-2xl"
          style={{
            background: 'rgba(26, 35, 50, 0.8)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            Have Questions or Want to Connect?
          </h3>
          <p className="text-gray-300 mb-6">
            Our talent acquisition team is here to help. Reach out to us directly.
          </p>
          
          <div className="space-y-3 mb-8">
            <a 
              href="mailto:careers@llp.ai" 
              className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" /> 
              careers@llp.ai
            </a>
            <a 
              href="tel:+256123456789" 
              className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" /> 
              +256 123 456 789
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LLP LinkedIn" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LLP Twitter" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareersCTASection;