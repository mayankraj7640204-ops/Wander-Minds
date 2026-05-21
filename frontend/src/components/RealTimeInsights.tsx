import React from 'react';
import { Placeholder } from './Placeholder';
import { Calendar, DollarSign, ShieldCheck, CloudRain } from 'lucide-react';

const STATS = [
  { id: 1, label: 'Best Time to Visit', value: 'May - Sept', icon: Calendar },
  { id: 2, label: 'Avg. Trip Cost', value: '$1,200', sub: 'per week', icon: DollarSign },
  { id: 3, label: 'Safety Score', value: '94/100', icon: ShieldCheck },
  { id: 4, label: 'Local Weather', value: '78°F', sub: 'Partly Cloudy', icon: CloudRain },
];

export function RealTimeInsights() {
  return (
    <section className="bg-brand-indigo py-24 px-6 lg:px-12 w-full text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Real-Time Travel Insights</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Make informed decisions with up-to-the-minute data powered by our global AI network.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <stat.icon size={24} className="text-brand-terracotta" />
              </div>
              <div className="text-white/60 text-sm font-medium mb-1">{stat.label}</div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold">{stat.value}</div>
                {stat.sub && <div className="text-white/50 text-sm mb-1">{stat.sub}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Video Reel Placeholder */}
        <div className="w-full">
          <Placeholder 
            label="DESTINATION REEL VIDEO PLACEHOLDER" 
            minHeight="380px"
            className="w-full bg-black/40 border-white/20 text-white/50 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
