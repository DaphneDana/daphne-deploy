// src/components/home/HomeHeroSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Array of background image URLs (assuming they are in public/images/)
const heroImages = [
  '/images/news1.jpeg', // Replace with your actual image paths
  '/images/hero.jpeg',
  '/images/profile2.jpeg',
  '/images/news2.jpeg', // Add more images as desired
];

const HomeHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const headlineText = "Orchestrating AI Excellence, Powering Africa's Digital Future.";
  // Split by space, but keep punctuation attached to words for now.
  // A more sophisticated split might be needed for complex punctuation.
  const words = headlineText.split(" ").map(word => ({
    text: word,
    id: Math.random().toString(36).substring(7) // Unique key for each word span
  }));


  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Time between each word animating in
        delayChildren: 0.5, // Initial delay before first word starts
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25, rotateX: -45, transformOrigin: "bottom" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1, ease: "easeInOut" },
        scale: { duration: 15, ease: "linear" } // Slow zoom/pan effect
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1, // Zoom out slightly on exit for a smoother crossfade feel
      transition: {
        opacity: { duration: 1, ease: "easeInOut" }
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center py-20 md:py-32 relative overflow-hidden bg-dark-bg">
      {/* Image Slideshow Background */}
      <AnimatePresence initial={false}> {/* initial={false} so first image doesn't animate in if already there */}
        <motion.div
          key={currentImageIndex} // Key change triggers enter/exit animations
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          variants={imageVariants}
          initial="exit" // Start from exit (or a different initial state if preferred)
          animate="enter"
          exit="exit"
        />
      </AnimatePresence>

      {/* Subtle Overlay to enhance text readability - adjust as needed */}
      {/* This overlay is crucial. We want to keep image colors, but text needs contrast. */}
      {/* Option 1: Dark Vignette / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-[1]"></div>
      {/* Option 2: Very subtle full overlay */}
      {/* <div className="absolute inset-0 bg-black/20 z-[1]"></div> */}


      <div className="container-mx relative z-[2] flex flex-col items-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl
                     [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]" // Text shadow for readability
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((wordObj) => (
            <motion.span
              key={wordObj.id}
              variants={wordVariants}
              className={`inline-block mr-2 md:mr-3 ${(wordObj.text.toLowerCase().includes('africa') || wordObj.text.toLowerCase().includes('ai')) && !wordObj.text.endsWith(',') ? 'text-primary' : ''}`}
            >
              {wordObj.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto mb-10 leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: words.length * 0.12 + 0.8, ease: "easeOut" }}
        >
          LLP is the central nervous system for AI innovation, coordinating a dynamic ecosystem of member companies, research, and talent to drive transformative digital solutions across the continent.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: words.length * 0.12 + 1.0, ease: "easeOut" }}
        >
          <Link
            to="/about"
            className="btn bg-primary text-white hover:bg-primary-dark px-8 py-3 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            Discover LLP
          </Link>
          <Link
            to="/member-companies"
            className="btn bg-white/20 text-white backdrop-blur-sm border border-white/40 hover:bg-white/30 px-8 py-3 text-lg font-semibold rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-dark-bg inline-flex items-center"
          >
            Explore Our Ecosystem <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Optional Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: words.length * 0.12 + 2.0, duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/70">
          <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HomeHeroSection;