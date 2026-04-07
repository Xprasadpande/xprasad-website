import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedBackground Component
 * Creates a dynamic starfield and grid pattern background
 * with parallax scrolling effect
 */
export default function AnimatedBackground({ scrollPosition }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Star field data
    const stars = [];
    const particleCount = 100;
    
    // Initialize stars
    for (let i = 0; i < particleCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.5,
      });
    }
    
    let animationId;
    const animate = () => {
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 100;
      
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      
      for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
      
      // Draw and update stars
      stars.forEach((star) => {
        star.y += star.speed;
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.3 + 0.5;
        
        if (star.y > canvas.height) {
          star.y = -star.radius;
        }
        
        ctx.fillStyle = `rgba(0, 255, 136, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow
        ctx.strokeStyle = `rgba(0, 255, 136, ${star.opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, #0a0e27 0%, #1a1f3a 100%)',
        }}
      />
      
      {/* Floating orbs for extra ambiance */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyberpunk-purple to-transparent opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyberpunk-cyan to-transparent opacity-10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
