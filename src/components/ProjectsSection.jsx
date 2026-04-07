import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProjectsSection Component
 * 
 * EASY TO EXTEND: Add new projects to the `projects` array
 * Each project should have:
 *   - id: unique identifier
 *   - title: project name
 *   - description: brief project description
 *   - tech: array of technologies used
 *   - link: project URL or demo link
 *   - gradient: gradient color (from-X to-Y format)
 *   - icon: emoji representing the project
 */
export default function ProjectsSection() {
  // PROJECTS ARRAY - Easy to add more!
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration, user authentication, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      gradient: 'from-cyan-500 to-blue-500',
      icon: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team features, and productivity analytics.',
      tech: ['React', 'Express', 'Firebase', 'Tailwind'],
      link: '#',
      gradient: 'from-purple-500 to-pink-500',
      icon: '✅',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application using geolocation and third-party APIs with beautiful data visualization.',
      tech: ['React', 'Weather API', 'D3.js', 'Redux'],
      link: '#',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🌤️',
    },
    {
      id: 4,
      title: 'Social Network API',
      description: 'RESTful backend API with user authentication, posts, comments, and follow system using Node.js and MongoDB.',
      tech: ['Express', 'MongoDB', 'JWT', 'Node.js'],
      link: '#',
      gradient: 'from-pink-500 to-orange-500',
      icon: '🌐',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Markdown-based blogging platform with SEO optimization, category system, and comment functionality.',
      tech: ['Next.js', 'MongoDB', 'Markdown', 'Vercel'],
      link: '#',
      gradient: 'from-lime-500 to-green-500',
      icon: '📝',
    },
    {
      id: 6,
      title: 'Code Collab Editor',
      description: 'Real-time collaborative code editor with syntax highlighting, live execution, and user sessions.',
      tech: ['React', 'WebSockets', 'Node.js', 'Monaco Editor'],
      link: '#',
      gradient: 'from-orange-500 to-red-500',
      icon: '💻',
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
    <section
      id="projects"
      className="relative z-10 min-h-screen w-full flex items-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-purple to-cyberpunk-cyan bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcase of Recent Work</p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group h-full"
            >
              <div className="relative h-full">
                {/* Gradient Border Animation */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}
                />
                
                {/* Project Card */}
                <motion.div
                  className="h-full p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    y: -8,
                  }}
                >
                  {/* Icon and Title Row */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    >
                      {project.icon}
                    </motion.div>
                    <motion.div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={`px-3 py-1 text-xs font-mono rounded-full bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/10`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Link Button */}
                  <motion.a
                    href={project.link}
                    className={`w-full py-2 rounded-lg text-center text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${project.gradient} hover:from-white hover:to-white text-white hover:text-black transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">Interested in collaborating?</p>
          <motion.a
            href="#"
            className="inline-block px-8 py-3 rounded-lg border-2 border-cyberpunk-neon text-cyberpunk-neon hover:bg-cyberpunk-neon/10 font-bold uppercase tracking-widest text-sm transition-all duration-300"
            whileHover={{
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.6)',
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
