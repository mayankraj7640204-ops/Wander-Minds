import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'Paris, France', large: true },
    { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'Bali Coast', large: false },
    { img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'Swiss Alps', large: false },
    { img: 'https://images.unsplash.com/photo-1504150558240-1bdf2a0f8b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'Grand Canyon', large: false },
    { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'Dubai Desert', large: false },
    { img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'Alpine Lake', large: true },
    { img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'London Nights', large: false },
    { img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', label: 'Venice Canals', large: false },
  ]);
}
