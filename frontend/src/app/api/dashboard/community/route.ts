import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { name: 'Elena R.', style: 'Solo Explorer', score: '98% Match', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Marcus & Jin', style: 'Adventure Duo', score: '92% Match', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Sarah T.', style: 'Culture Seeker', score: '89% Match', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'The Nomads', style: 'Group Voyagers', score: '85% Match', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'David L.', style: 'Luxury Traveler', score: '82% Match', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Maya S.', style: 'Backpacker', score: '79% Match', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  ]);
}
