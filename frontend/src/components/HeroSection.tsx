"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ImageSequencePlayer } from './ImageSequencePlayer';
import { DemoVideoModal } from './DemoVideoModal';
import { AiPlannerModal } from './AiPlannerModal';

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      if (textRef.current) {
        // Parallax factor of 0.3 means it moves 30% of scroll distance
        const scrollY = window.scrollY;
        textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      animationFrameId = requestAnimationFrame(() => {});
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video Sequence */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <div className="w-full h-full scale-[1.02] filter contrast-125 saturate-150 brightness-90">
          <ImageSequencePlayer 
            frameCount={50}
            framePrefix="/hero-sequence/ezgif-frame-"
            frameSuffix=".jpg"
            fps={20} // Adjusted to 20 for a smoother but slower cinematic playback
            className="w-full h-full min-h-screen"
          />
        </div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center will-change-transform"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          WanderMind
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light drop-shadow-md">
          Your AI travel companion. Every journey, remembered.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => setIsAiModalOpen(true)}
            className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Plan My Trip
          </button>
          <button 
            onClick={() => setIsVideoModalOpen(true)}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 px-8 py-4 rounded-full text-lg font-medium transition-all hover:border-white shadow-lg backdrop-blur-sm"
          >
            Explore Demo
          </button>
        </div>
      </div>

      <DemoVideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <AiPlannerModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
    </section>
  );
}
