import React from 'react';

const MATCHES = [
  { id: 1, name: 'Elena R.', style: 'Solo Explorer', score: 92, image: '/persons/person-1.png' },
  { id: 2, name: 'Marcus & Jin', style: 'Adventure Duo', score: 88, image: '/persons/person-2.png' },
  { id: 3, name: 'The Nomads', style: 'Group Voyager', score: 95, image: '/persons/person-3.png' },
];

export function TravelerMatching() {
  return (
    <section id="community" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-indigo mb-4">Find Your Travel Tribe</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          AI matches you with travelers who share your vibe, pace, and destination dreams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MATCHES.map((match) => (
          <div key={match.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
            {/* Avatar Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-terracotta transition-colors mb-6 shadow-md">
              <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{match.name}</h3>
            
            <span className="inline-block px-4 py-1.5 bg-brand-sand text-brand-forest font-medium text-sm rounded-full mb-6">
              {match.style}
            </span>
            
            <div className="w-full bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="text-sm text-gray-500 mb-1">Compatibility</div>
              <div className="text-2xl font-bold text-brand-indigo">{match.score}% Match</div>
            </div>
            
            <button className="w-full py-3 rounded-xl border-2 border-brand-indigo text-brand-indigo font-medium hover:bg-brand-indigo hover:text-white transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
