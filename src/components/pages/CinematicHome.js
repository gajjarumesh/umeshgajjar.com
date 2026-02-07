'use client';

import { useState, useEffect } from 'react';
import MountainScene from '@/components/three/MountainScene';
import CinematicText from '@/components/cinematic/CinematicText';
import ScrollProgress from '@/components/cinematic/ScrollProgress';
import { detectWebGL } from '@/components/three/WebGLDetector';
import Link from 'next/link';

export default function CinematicHome() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [webGLSupported, setWebGLSupported] = useState(true);
  
  useEffect(() => {
    setWebGLSupported(detectWebGL());
    
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!webGLSupported) {
    // Fallback: redirect or show message
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WebGL Not Supported
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your browser doesn&apos;t support WebGL, which is required for the 3D experience.
          </p>
          <Link
            href="/about"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View Standard Portfolio
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <MountainScene />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress scrollProgress={scrollProgress} />
      
      {/* Scrollable content container */}
      <div className="relative z-10" style={{ height: '500vh' }}>
        
        {/* Section 1: Hero */}
        <section className="h-screen flex items-center justify-center">
          <CinematicText scrollProgress={scrollProgress} section={0}>
            <div>Hi, I&apos;m Umesh Gajjar</div>
            <div className="text-3xl mt-4">Full Stack Developer & Tech Lead</div>
          </CinematicText>
        </section>
        
        {/* Section 2: Skills */}
        <section className="h-screen flex items-center justify-center">
          <CinematicText scrollProgress={scrollProgress} section={1}>
            <div className="space-y-4">
              <div>Frontend: React, Vue, Next.js</div>
              <div>Backend: Node.js, Laravel</div>
              <div>Cloud: AWS, Docker</div>
            </div>
          </CinematicText>
        </section>
        
        {/* Section 3: Experience */}
        <section className="h-screen flex items-center justify-center">
          <CinematicText scrollProgress={scrollProgress} section={2}>
            <div className="space-y-4">
              <div>7+ years of experience</div>
              <div>6 years of team leadership</div>
              <div>Production-grade scalable systems</div>
            </div>
          </CinematicText>
        </section>
        
        {/* Section 4: Projects */}
        <section className="h-screen flex items-center justify-center">
          <CinematicText scrollProgress={scrollProgress} section={3}>
            <div>Featured Projects</div>
            <div className="text-2xl mt-8 space-y-2">
              <div>E-commerce Platforms</div>
              <div>SaaS Applications</div>
              <div>Enterprise Solutions</div>
            </div>
          </CinematicText>
        </section>
        
        {/* Section 5: Contact */}
        <section className="h-screen flex items-center justify-center">
          <CinematicText scrollProgress={scrollProgress} section={4}>
            <div>Let&apos;s build something meaningful together</div>
            <div className="mt-8 flex gap-4 justify-center pointer-events-auto">
              <Link 
                href="/contact" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-indigo-700 transition"
              >
                Get in Touch
              </Link>
            </div>
          </CinematicText>
        </section>
      </div>
    </div>
  );
}
