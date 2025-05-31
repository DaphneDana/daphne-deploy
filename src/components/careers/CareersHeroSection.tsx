// src/components/careers/CareersHeroSection.tsx
import React from 'react';

interface CareersHeroSectionProps {
  onSeeOpenPositionsClick: () => void;
}

const CareersHeroSection: React.FC<CareersHeroSectionProps> = ({ onSeeOpenPositionsClick }) => {
  return (
    <section 
      className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center py-20 md:py-28 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(/images/LLP.jpeg)` }}
    >
      {/* Dark overlay to ensure text readability over the image */}
      <div className="absolute inset-0 bg-slate-900/70 via-dark-bg/80 to-slate-800/70"></div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-main-dark mb-3 sm:mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Build the Future <span className="text-primary">With Us</span>
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl text-text-muted-dark max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Innovative. Inclusive. Impact-Driven. Join LLP and shape the future of AI.
        </p>
        <button
          onClick={onSeeOpenPositionsClick}
          className="btn btn-primary px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          See Open Positions
        </button>
      </div>
    </section>
  );
};

export default CareersHeroSection;