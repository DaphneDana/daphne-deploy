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
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-mx relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center section-margin"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
            <div className="relative p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <Trophy size={40} className="text-blue-400" />
            </div>
          </div>
          <h2 className="text-responsive-3xl font-bold text-white mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record of success and innovation across the AI landscape.
          </p>
        </motion.div>

        {/* Key Metrics */}
        {achievements.keyMetrics && achievements.keyMetrics.length > 0 && (
          <motion.div 
            className="section-margin"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <TrendingUp size={24} className="text-blue-400 mr-3" />
              <h3 className="text-responsive-2xl font-semibold text-white text-center">
                Key Metrics
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 responsive-grid-gap">
              {achievements.keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AchievementMetricCard metric={metric} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 responsive-grid-gap items-start">
          {/* Milestones Timeline */}
          {achievements.milestones && achievements.milestones.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                  <div className="relative p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30">
                    <CalendarCheck2 size={28} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-responsive-2xl font-semibold text-white ml-4">
                  Major Milestones
                </h3>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>
                
                <div className="space-y-8 sm:space-y-12">
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
                        <div className="absolute left-6 top-2 transform -translate-x-1/2">
                          <div className="relative">
                            <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 group-hover:border-blue-400 transition-colors duration-300">
                              <div className="absolute inset-1 bg-white rounded-full group-hover:bg-blue-100 transition-colors duration-300"></div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-16 pb-1">
                          <div 
                            className="p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10"
                            style={{
                              background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {milestone.year} - {milestone.event}
                            </h4>
                            {milestone.description && (
                              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
            >
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-md" />
                  <div className="relative p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/30 rounded-full border border-yellow-500/30">
                    <AwardIconLucide size={28} className="text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-responsive-2xl font-semibold text-white ml-4">
                  Awards & Recognitions
                </h3>
              </div>
              
              <div className="space-y-6">
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
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/10"
                      style={{
                        background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 50%, #1e2a3d/80 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="flex-shrink-0">
                        {award.imageUrl ? (
                          <div className="relative">
                            <img 
                              src={award.imageUrl} 
                              alt={`${award.name} badge`} 
                              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-lg bg-white/10 p-2 border border-gray-600/50 group-hover:border-yellow-500/30 transition-colors duration-300" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ) : (
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center border border-gray-600/50 group-hover:border-yellow-500/30 transition-colors duration-300"
                               style={{
                                 background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
                               }}>
                            <AwardIconLucide size={32} className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300 mb-1">
                          {award.name}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
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
    </section>
  );
};

export default AchievementsSection;