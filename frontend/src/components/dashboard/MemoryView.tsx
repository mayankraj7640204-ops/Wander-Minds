import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

import Image from 'next/image';

export function MemoryView() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [memoryPhotos, setMemoryPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = '';
    fetch(`${apiUrl}/api/dashboard/memory`)
      .then(res => res.json())
      .then(data => {
        setMemoryPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-slate-400">Loading memory capsule...</div>;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
      <div className="mb-8 flex-shrink-0">
        <h1 className="text-3xl font-bold text-white mb-2">Memory Capsule Collage</h1>
        <p className="text-slate-400">An AI-generated collage of your most beautiful travel memories.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {memoryPhotos.map((photo, idx) => (
          <div 
            key={idx}
            className={cn(
              "relative rounded-xl overflow-hidden group shadow-md",
              photo.large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            )}
          >
            <Image 
              src={photo.img} 
              alt={photo.label} 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-white font-medium drop-shadow-md">{photo.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
