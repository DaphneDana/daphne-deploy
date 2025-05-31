// src/components/careers/CareersHeroSection.tsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CareersHeroSectionProps {
  onSeeOpenPositionsClick: () => void;
}

const CareersHeroSection: React.FC<CareersHeroSectionProps> = ({ onSeeOpenPositionsClick }) => {
  return (
    <section 
      className="min-h-[80vh] flex items-center justify-center text-center py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border mb-6 sm:mb-8 animate-fade-in-up"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              animationDelay: '0.4s'
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-blue-300">We're Hiring</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Build the Future{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up px-4 sm:px-0"
            style={{ animationDelay: '0.8s' }}
          >
            <span className="text-blue-300 font-semibold">Innovative.</span>{' '}
            <span className="text-cyan-300 font-semibold">Inclusive.</span>{' '}
            <span className="text-purple-300 font-semibold">Impact-Driven.</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Join LLP and shape the future of AI & Machine Learning.</span>
          </p>

          {/* CTA Button */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up px-4 sm:px-0"
            style={{ animationDelay: '1.0s' }}
          >
            <button
              onClick={onSeeOpenPositionsClick}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center justify-center gap-2 text-white">
                See Open Positions
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <div 
              className="text-sm text-gray-400 animate-fade-in-up"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                6 positions available
              </span>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-700/30 animate-fade-in-up"
            style={{ animationDelay: '1.4s' }}
          >
            {[
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries' },
              { number: '100+', label: 'Projects Delivered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHeroSection;