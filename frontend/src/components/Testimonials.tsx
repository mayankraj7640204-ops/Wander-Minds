import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The AI itinerary was flawless. It suggested a hidden cafe in Kyoto that ended up being the highlight of our trip.",
    name: "Sarah Jenkins",
    destination: "Visited Japan",
    rating: 5,
  },
  {
    id: 2,
    quote: "I met my current travel buddy through WanderMind's matching feature. We just finished our second trip to Patagonia!",
    name: "David Chen",
    destination: "Visited Chile",
    rating: 5,
  },
  {
    id: 3,
    quote: "The real-time insights saved us from a massive storm in Bali. I don't travel without this app anymore.",
    name: "Emma Roberts",
    destination: "Visited Indonesia",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="bg-brand-sand py-24 px-6 lg:px-12 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-indigo mb-16">Stories from the Road</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-terracotta text-brand-terracotta" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center text-[8px] font-bold text-gray-500 text-center">
                  USER<br/>PHOTO
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.destination}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
