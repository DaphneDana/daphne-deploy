// src/components/companyProfile/TestimonialCard.tsx
import React from 'react';
import type { Testimonial } from '../../types/companyProfile'; // Adjust path
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg h-full flex flex-col">
      <Quote size={32} className="text-primary/40 mb-4 flex-shrink-0" />
      <p className="text-base md:text-lg italic text-text-muted-dark leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="mt-auto flex items-center pt-4 border-t border-slate-700">
        {testimonial.clientLogoUrl && (
          <img 
            src={testimonial.clientLogoUrl} 
            alt={`${testimonial.clientCompany} logo`}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-contain mr-3 bg-white p-0.5" 
          />
        )}
        <div>
          <p className="font-semibold text-text-main-dark text-sm">{testimonial.clientName}</p>
          <p className="text-xs text-text-muted-dark">{testimonial.clientTitle}, {testimonial.clientCompany}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;