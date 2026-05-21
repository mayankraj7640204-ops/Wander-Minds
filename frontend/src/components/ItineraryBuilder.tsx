"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Sun, Sparkles, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ItineraryBuilder() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [itineraryDays, setItineraryDays] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/itinerary')
      .then(res => res.json())
      .then(data => {
        setItineraryDays(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load itinerary", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="itineraries" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-indigo mb-4">Smart Itinerary Builder</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Instantly generate personalized, day-by-day travel plans optimized for weather, crowds, and your unique preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Interactive Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-terracotta font-medium mb-1">
                <MapPin size={18} />
                <span>Bali, Indonesia</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5-Day Tropical Escape</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                <Sun size={14} />
                <span>28°C</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium border border-purple-100">
                <Sparkles size={14} />
                <span>AI Generated</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="text-gray-500 py-4">Generating AI itinerary...</div>
            ) : (
              itineraryDays.map((day) => {
              const isExpanded = expandedDay === day.id;
              return (
                <div 
                  key={day.id} 
                  className={cn(
                    "border rounded-2xl overflow-hidden transition-colors",
                    isExpanded ? "border-brand-indigo bg-indigo-50/30" : "border-gray-100 bg-gray-50 hover:border-gray-200"
                  )}
                >
                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : day.id)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900">{day.title}</span>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-gray-400 transition-transform duration-300",
                        isExpanded ? "rotate-180 text-brand-indigo" : ""
                      )} 
                    />
                  </button>
                  
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out px-4 md:px-5",
                      isExpanded ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pb-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 mb-4">{day.desc}</p>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100">
                          <Clock size={14} />
                          {day.time}
                        </span>
                        <span className="text-sm font-medium text-brand-forest bg-green-50 px-3 py-1 rounded-full border border-green-100">
                          AI Suggested
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            )}
          </div>
        </div>

        {/* Right: Video */}
        <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-900">
          <video 
            src="/itinerary-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
