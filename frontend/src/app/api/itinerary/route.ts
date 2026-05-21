import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, title: 'Day 1: Arrival & Temple Sunset', time: '4:00 PM', desc: 'Settle in and head to Uluwatu Temple for a breathtaking sunset over the cliffs.' },
    { id: 2, title: 'Day 2: Rice Terraces & Waterfall', time: '9:00 AM', desc: 'Explore the lush Tegalalang Rice Terraces followed by a refreshing dip at Tegenungan Waterfall.' },
    { id: 3, title: 'Day 3: Island Hopping to Nusa Penida', time: '8:00 AM', desc: 'Take a fast boat to Nusa Penida. Discover Kelingking Beach and Broken Beach.' },
    { id: 4, title: 'Day 4: Cultural Heart of Ubud', time: '10:00 AM', desc: 'Visit the Sacred Monkey Forest and browse the traditional art markets.' },
    { id: 5, title: 'Day 5: Beach Club & Departure', time: '11:00 AM', desc: 'Relax at a premium beach club in Seminyak before heading to the airport.' },
  ]);
}
