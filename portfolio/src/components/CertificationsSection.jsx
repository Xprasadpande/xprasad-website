import React from 'react';
import { motion } from 'framer-motion';

/**
 * CertificationsSection Component
 * 
 * EASY TO EXTEND: Simply add new certification objects to the `certifications` array
 * Each certification should have:
 *   - id: unique identifier
 *   - title: certification name
 *   - issuer: organization that issued the cert
 *   - date: when it was earned
 *   - badge: emoji or icon representation
 *   - color: gradient color (from-X to-Y format)
 * 
 * Example:
 * {
 *   id: 3,
 *   title: 'Full Stack Development',
 *   issuer: 'Your Cert Provider',
 *   date: '2024',
 *   badge: '🏆',
 *   color: 'from-yellow-500 to-orange-500',
 * }
 */
export default function CertificationsSection() {
  // CERTIFICATION ITEMS ARRAY - Easy to add more!
  const certifications = [
    {
      id: 1,
      title: 'React Advanced Concepts',
      issuer: 'Tech Academy',
      date: '2024',
      badge: '⚛️',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'Node.js Backend Mastery',
      issuer: 'Backend Institute',
      date: '2024',
      badge: '🟢',
      color: 'from-lime-500 to-green-500',
    },
    {
      id: 3,
      title: 'Web Performance Optimization',
      issuer: 'Performance Labs',
      date: '2023',
      badge: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <section
      id="certifications"
      className="relative z-10 min-h-screen w-full flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-neon via-cyberpunk-pink to-cyberpunk-purple bg-clip-text text-transparent">
              Certifications & Badges
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Professional Achievements</p>
        </motion.div>
        
        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group h-full"
            >
              <div className="relative h-full">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
                
                {/* Certificate Card */}
                <motion.div
                  className="h-full p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Badge Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  >
                    {cert.badge}
                  </motion.div>
                  
                  {/* Certificate Title */}
                  <h3 className="text-xl font-bold mb-2 text-white flex-grow">
                    {cert.title}
                  </h3>
                  
                  {/* Issuer */}
                  <p className="text-gray-400 text-sm mb-2">
                    {cert.issuer}
                  </p>
                  
                  {/* Date */}
                  <motion.p
                    className={`text-xs font-mono uppercase tracking-widest bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}
                  >
                    {cert.date}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Add More Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm italic">
            💡 Tip: To add more certifications, simply add objects to the certifications array with the same structure
          </p>
        </motion.div>
      </div>
    </section>
  );
}
