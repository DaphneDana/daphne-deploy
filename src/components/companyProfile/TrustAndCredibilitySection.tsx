// src/components/companyProfile/TrustAndCredibilitySection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData, Certification, PressMention } from '../../types/companyProfile';
import TestimonialCard from './TestimonialsCard';
import { ShieldCheck, Newspaper, BadgeCheck, Users, Star } from 'lucide-react';

interface TrustAndCredibilitySectionProps {
  trustInfo: CompanyProfileData['trustAndCredibility'];
}

const TrustAndCredibilitySection: React.FC<TrustAndCredibilitySectionProps> = ({ trustInfo }) => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Clear Section Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-purple-500/5 rounded-full blur-3xl" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl" />
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20 backdrop-blur-sm">
              <ShieldCheck size={28} className="text-green-400 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Trust & Credibility
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Building confidence through transparency, strategic partnerships, and proven results.
          </p>
        </motion.div>

        {/* Client Logos */}
        {trustInfo.clientLogos && trustInfo.clientLogos.length > 0 && (
          <motion.div 
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users size={20} className="text-blue-400 mr-2 sm:w-6 sm:h-6" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                  Trusted By Leading Organizations
                </h3>
              </div>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <div 
                className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-700/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30"
                style={{
                  background: 'linear-gradient(135deg, #1a2332/50 0%, #242f42/50 50%, #1e2a3d/50 100%)'
                }}
              >
                {trustInfo.clientLogos.map((client, index) => (
                  <motion.a 
                    key={index} 
                    href={client.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={client.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <img 
                        src="/images/blog.png"
                        alt={client.name} 
                        className="h-10 sm:h-12 lg:h-16 max-w-[100px] sm:max-w-[120px] lg:max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Testimonials */}
        {trustInfo.testimonials && trustInfo.testimonials.length > 0 && (
          <motion.div 
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12">
              <Star size={20} className="text-yellow-400 mr-2 sm:mr-3 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                What Our Clients Say
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {trustInfo.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Certifications */}
          {trustInfo.certifications && trustInfo.certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md" />
                  <div className="relative p-2 sm:p-3 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-full border border-green-500/30">
                    <BadgeCheck size={20} className="text-green-400 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white ml-3 sm:ml-4">
                  Certifications & Compliance
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {trustInfo.certifications.map((cert: Certification, index: number) => (
                  <motion.a 
                    key={index} 
                    href={cert.link || '#'}
                    target={cert.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="flex items-center gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 rounded-xl border border-gray-700/50 group-hover:border-green-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10"
                      style={{
                        background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="flex-shrink-0">
                        {cert.logoUrl ? (
                          <div className="relative">
                            <img 
                              src="/images/blog.png"
                              alt={cert.name} 
                              className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain bg-white/10 p-2 rounded-lg border border-gray-600/50 group-hover:border-green-500/30 transition-colors duration-300" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ) : (
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center border border-gray-600/50 group-hover:border-green-500/30 transition-colors duration-300"
                               style={{
                                 background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
                               }}>
                            <BadgeCheck size={16} className="text-green-400 group-hover:text-green-300 transition-colors duration-300 sm:w-6 sm:h-6"/>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-green-100 transition-colors duration-300 mb-1">
                          {cert.name}
                        </p>
                        {cert.issuer && (
                          <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {cert.issuer}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Press Mentions */}
          {trustInfo.pressMentions && trustInfo.pressMentions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                  <div className="relative p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30">
                    <Newspaper size={20} className="text-blue-400 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white ml-3 sm:ml-4">
                  In The Press
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {trustInfo.pressMentions.map((mention: PressMention, index: number) => (
                  <motion.a 
                    key={index} 
                    href={mention.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="p-4 sm:p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10"
                      style={{
                        background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-sm sm:text-base font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {mention.outlet}
                        </p>
                        <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-shrink-0 ml-4">
                          {new Date(mention.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-white leading-snug group-hover:text-blue-100 transition-colors duration-300">
                        {mention.headline}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
    </section>
  );
};

export default TrustAndCredibilitySection;