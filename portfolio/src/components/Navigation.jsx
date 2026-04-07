import React from 'react';
import { motion } from 'framer-motion';

/**
 * Navigation Component
 * Fixed header with smooth animations
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
  ];
  
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-cyberpunk-black/80 backdrop-blur-md border-b border-cyberpunk-purple/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyberpunk-neon to-cyberpunk-cyan bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            XP
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="text-gray-300 hover:text-cyberpunk-neon transition-colors duration-300 text-sm uppercase tracking-widest"
                whileHover={{
                  textShadow: '0 0 10px rgba(0, 255, 136, 0.8)',
                  color: '#00ff88',
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={idx}
                className="w-6 h-0.5 bg-cyberpunk-neon"
                animate={isOpen ? {
                  rotate: idx === 0 ? 45 : idx === 2 ? -45 : 0,
                  y: idx === 0 ? 8 : idx === 2 ? -8 : 0,
                  opacity: idx === 1 ? 0 : 1,
                } : {}}
              />
            ))}
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-cyberpunk-neon transition-colors text-sm uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
