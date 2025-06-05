// src/components/companyProfile/AchievementsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { CompanyProfileData, Milestone, Award } from '../../types/companyProfile';
import AchievementMetricCard from './AchievementCard';
import { Award as AwardIconLucide, CalendarCheck2, Trophy, TrendingUp } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: CompanyProfileData['achievements'];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Clear Section Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl" />
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
              <Trophy size={28} className="text-blue-400 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Achievements & Milestones
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Our track record of success and innovation across the AI landscape.
          </p>
        </motion.div>

        {/* Key Metrics */}
        {achievements.keyMetrics && achievements.keyMetrics.length > 0 && (
          <motion.div 
            className="mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12">
              <TrendingUp size={20} className="text-blue-400 mr-2 sm:mr-3 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white text-center">
                Key Metrics
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {achievements.keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  <AchievementMetricCard metric={metric} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Milestones Timeline */}
          {achievements.milestones && achievements.milestones.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                  <div className="relative p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30">
                    <CalendarCheck2 size={20} className="text-blue-400 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white ml-3 sm:ml-4">
                  Major Milestones
                </h3>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>
                
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  {achievements.milestones.map((milestone: Milestone, index: number) => {
                    const milestoneContent = (
                      <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-4 sm:left-6 top-2 transform -translate-x-1/2">
                          <div className="relative">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 sm:border-4 border-gray-800 group-hover:border-blue-400 transition-colors duration-300">
                              <div className="absolute inset-0.5 sm:inset-1 bg-white rounded-full group-hover:bg-blue-100 transition-colors duration-300"></div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-12 sm:ml-16 pb-1">
                          <div 
                            className="p-4 sm:p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10"
                            style={{
                              background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {milestone.year} - {milestone.event}
                            </h4>
                            {milestone.description && (
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                {milestone.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );

                    return milestone.slug ? (
                      <Link 
                        key={index} 
                        to={`/${milestone.slug}`} 
                        className="block"
                      >
                        {milestoneContent}
                      </Link>
                    ) : (
                      <div key={index}>
                        {milestoneContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Awards & Recognitions */}
          {achievements.awardsAndRecognition && achievements.awardsAndRecognition.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-md" />
                  <div className="relative p-2 sm:p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/30 rounded-full border border-yellow-500/30">
                    <AwardIconLucide size={20} className="text-yellow-400 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white ml-3 sm:ml-4">
                  Awards & Recognitions
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {achievements.awardsAndRecognition.map((award: Award, index: number) => (
                  <motion.a 
                    key={index} 
                    href={award.link || '#'} 
                    target={award.link ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className="group block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="flex items-center gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-xl border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/10"
                      style={{
                        background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="flex-shrink-0">
                        {award.imageUrl ? (
                          <div className="relative">
                            <img 
                              src="/images/blog.png"
                              alt={`${award.name} badge`} 
                              className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain rounded-lg bg-white/10 p-2 border border-gray-600/50 group-hover:border-yellow-500/30 transition-colors duration-300" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ) : (
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center border border-gray-600/50 group-hover:border-yellow-500/30 transition-colors duration-300"
                               style={{
                                 background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
                               }}>
                            <AwardIconLucide size={24} className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 sm:w-8 sm:h-8" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300 mb-1">
                          {award.name}
                        </h4>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {award.issuer} - <span className="font-medium text-yellow-400">{award.year}</span>
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </section>
  );
};

export default AchievementsSection;