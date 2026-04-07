import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkillsSection Component
 * Glassmorphism cards showcasing MERN stack technologies
 */
export default function SkillsSection() {
  const skills = [
    {
      name: 'MongoDB',
      description: 'NoSQL Database',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Express',
      description: 'Backend Framework',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'React',
      description: 'Frontend Library',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Node.js',
      description: 'Runtime Environment',
      icon: '🟢',
      color: 'from-lime-500 to-green-500',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <section id="skills" className="relative z-10 min-h-screen w-full flex items-center py-20 px-4">
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
            <span className="bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-cyan bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">MERN Stack Mastery</p>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group"
              whileHover={{ y: -10 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full">
                {/* Gradient Border Background */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}
                />
                
                {/* Card Content */}
                <motion.div
                  className="relative h-full p-8 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-500"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Skills Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Also proficient in: JavaScript, TypeScript, HTML, CSS, REST APIs, 
            Git, Responsive Design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
