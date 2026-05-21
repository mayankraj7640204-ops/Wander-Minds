import React from 'react';

export function CallToAction() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-bg.png" 
          alt="Travelers running in a historic street" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays for text readability and cinematic color grading */}
        <div className="absolute inset-0 bg-brand-forest/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
          Start Your Journey Today.
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light drop-shadow">
          Let our AI build the perfect itinerary and connect you with travelers who share your vibe. The world is waiting.
        </p>
        <button className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-10 py-5 rounded-full text-xl font-medium transition-transform hover:scale-105 shadow-xl">
          Get Started Free
        </button>
      </div>
    </section>
  );
}
