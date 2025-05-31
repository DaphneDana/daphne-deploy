// src/components/careers/LeadershipMessageSection.tsx
import React from 'react';
import type { LeadershipMessage } from '../../types/careers';
import { Quote } from 'lucide-react';

interface LeadershipMessageSectionProps {
  message: LeadershipMessage;
  id: string;
}

const LeadershipMessageSection: React.FC<LeadershipMessageSectionProps> = ({ message, id }) => {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24" 
      style={{
        background: 'linear-gradient(135deg, rgba(15, 26, 46, 0.8) 0%, rgba(26, 35, 50, 0.9) 50%, rgba(10, 15, 28, 0.8) 100%)'
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
            A Message From Our Leadership
          </h2>
        </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div 
              className="md:col-span-4 lg:col-span-3 flex justify-center animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <img 
                src={message.profilePhotoUrl} 
                alt={message.name} 
                className="rounded-full h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover shadow-2xl border-4 border-blue-500/30"
              />
            </div>
            
            <div 
              className="md:col-span-8 lg:col-span-9 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >             <div 
              className="md:col-span-8 lg:col-span-9 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div 
                className="relative mb-6 p-6 rounded-xl shadow-xl"
                style={{
                  background: 'rgba(26, 35, 50, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}
              >
                <Quote size={48} className="absolute top-4 left-4 text-blue-500/30 opacity-50 -translate-x-2 -translate-y-2" />
                <p className="text-xl md:text-2xl italic text-blue-300 font-serif leading-relaxed z-10 relative">
                  "{message.quote}"
                </p>
              </div>
              
              <div className="text-gray-300 space-y-4 leading-relaxed text-base md:text-lg">
                {message.bodyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-6">
                <p className="text-lg font-semibold text-blue-300 font-serif">
                  {message.name}
                </p>
                <p className="text-sm text-blue-400">{message.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessageSection;