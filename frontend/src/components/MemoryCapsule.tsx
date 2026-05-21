import React from 'react';

export function MemoryCapsule() {
  const cards = [
    { id: 1, tilt: 'polaroid-tilt-1', image: '/memory/memory-1.png' },
    { id: 2, tilt: 'polaroid-tilt-2', image: '/memory/memory-2.png' },
    { id: 3, tilt: 'polaroid-tilt-3', image: '/memory/memory-3.png' },
    { id: 4, tilt: 'polaroid-tilt-2', hasCaption: true, image: '/memory/memory-4.png' },
    { id: 5, tilt: 'polaroid-tilt-1', image: '/memory/memory-5.png' },
    { id: 6, tilt: 'polaroid-tilt-3', image: '/memory/memory-6.png' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-indigo mb-4">Your Journey, Beautifully Remembered</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We automatically curate your photos and stories into a timeless memory capsule.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 px-4">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`bg-white p-4 pb-16 md:pb-20 shadow-xl border border-gray-100 rounded-sm relative transition-transform duration-500 hover:scale-105 hover:z-10 ${card.tilt}`}
          >
            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden">
              <img src={card.image} alt={`Memory ${card.id}`} className="w-full h-full object-cover" />
            </div>
            {card.hasCaption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-sans text-gray-700 italic">&quot;Sunset at Tanah Lot — the moment the sky turned gold.&quot;</p>
                <div className="mt-2 text-xs font-bold tracking-widest text-brand-terracotta uppercase">AI Caption</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-brand-indigo hover:bg-brand-indigo/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-transform hover:scale-105">
          Generate Memory Capsule
        </button>
      </div>
    </section>
  );
}
