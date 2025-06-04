// src/components/home/HomeHeroSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const heroImages = [
  '/images/news1.jpeg',
  '/images/hero.jpeg',
  '/images/profile2.jpeg',
  '/images/news2.jpeg',
];

const HomeHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Slower transition for better viewing

    return () => clearInterval(intervalId);
  }, []);

  const headlineText = "Orchestrating AI Excellence, Powering Africa's Digital Future.";
  const words = headlineText.split(" ").map(word => ({
    text: word,
    id: Math.random().toString(36).substring(7)
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      rotateX: -15,
      transformOrigin: "bottom"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        scale: { duration: 20, ease: "linear" }
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" }
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-full"
          variants={imageVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Overlay System */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-mx relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center px-4 py-2 mb-8 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">Leading AI Innovation in Africa</span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}
            variants={containerVariants}
          >
            {words.map((wordObj) => (
              <motion.span
                key={wordObj.id}
                variants={wordVariants}
                className={`inline-block mr-3 lg:mr-4 ${
                  (wordObj.text.toLowerCase().includes('africa') || 
                   wordObj.text.toLowerCase().includes('ai') ||
                   wordObj.text.toLowerCase().includes('excellence')) && 
                  !wordObj.text.endsWith(',') && 
                  !wordObj.text.endsWith('.') 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent' 
                    : ''
                }`}
              >
                {wordObj.text}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: words.length * 0.08 + 0.5 }}
          >
            LLP is the central nervous system for AI innovation, coordinating a dynamic ecosystem of member companies, research, and talent to drive transformative digital solutions across the continent.
          </motion.p>

          {/* CTA Buttons
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: words.length * 0.08 + 0.8 }}
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-w-[200px]"
            >
              <span>Discover LLP</span>
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              to="/member-companies"
              className="group relative inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent min-w-[200px]"
            >
              <Play size={18} className="mr-2" />
              <span>Explore Ecosystem</span>
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div> */}

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: words.length * 0.08 + 1.2 }}
          >
            {[
              { number: "50+", label: "AI Projects Delivered" },
              { number: "200+", label: "Professionals Trained" },
              { number: "5M+", label: "Lives Impacted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: words.length * 0.08 + 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/70 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2 group-hover:text-white transition-colors">Scroll to explore</span>
          <ChevronDown size={24} className="group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-blue-400 w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHeroSection;