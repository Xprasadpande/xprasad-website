import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection Component
 * Full-screen hero with centered content and animations
 */
export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const glowVariants = {
    animate: {
      textShadow: [
        '0 0 20px rgba(0, 255, 136, 0.5)',
        '0 0 40px rgba(0, 255, 136, 0.8)',
        '0 0 20px rgba(0, 255, 136, 0.5)',
      ],
    },
  };
  
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20"
    >
      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading with Typing Effect */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter"
          >
            <motion.span
              variants={glowVariants}
              animate="animate"
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-cyberpunk-neon via-cyberpunk-cyan to-cyberpunk-purple bg-clip-text text-transparent"
            >
              Still Learning.
            </motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl text-cyberpunk-cyan mb-8 font-light tracking-wide"
          >
            MERN Stack Developer | Deep Thinker & Part-time Comedian
          </motion.h2>
          
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting intelligent, scalable web experiences with modern technologies. 
            Passionate about building elegant solutions to complex problems.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyberpunk-neon to-cyberpunk-cyan text-cyberpunk-black font-bold rounded-lg uppercase tracking-widest text-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#skills"
              className="px-8 py-3 border-2 border-cyberpunk-purple text-cyberpunk-purple hover:bg-cyberpunk-purple/10 font-bold rounded-lg uppercase tracking-widest text-sm transition-colors"
              whileHover={{
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Skills
            </motion.a>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <svg
              className="w-6 h-6 mx-auto text-cyberpunk-neon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
