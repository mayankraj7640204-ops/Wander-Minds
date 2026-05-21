import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export function CommunityView() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [communityData, setCommunityData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = '';
    fetch(`${apiUrl}/api/dashboard/community`)
      .then(res => res.json())
      .then(data => {
        setCommunityData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-slate-400">Loading community...</div>;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Community Matches</h1>
        <p className="text-slate-400">Travelers matched based on vibe, pace, and destination dreams.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {communityData.map((person, idx) => (
          <div 
            key={idx} 
            className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500 p-0.5 mb-4 relative">
              <Image src={person.img} alt={person.name} fill className="object-cover rounded-full" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{person.style}</p>
            <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full text-xs font-bold">
              {person.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
