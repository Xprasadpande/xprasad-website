import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import Navigation from './components/Navigation';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cyberpunk-black text-white font-mono overflow-hidden">
      <AnimatedBackground scrollPosition={scrollPosition} />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
    </div>
  );
}
