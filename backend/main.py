from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="WanderMind API")

# Configure CORS
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    return {
        "metrics": {
            "total_paid_users": "12,450",
            "monthly_revenue": "$186,750",
            "match_satisfaction": "94%"
        },
        "line_chart": {
            "labels": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            "data": [4200, 5800, 7100, 8900, 10500, 12450]
        },
        "doughnut_chart": {
            "labels": ['5 Stars (Excellent)', '4 Stars (Good)', '3 Stars (Average)', 'Below 3 Stars'],
            "data": [65, 25, 7, 3]
        }
    }

@app.get("/api/dashboard/community")
async def get_community_matches():
    return [
        { "name": 'Elena R.', "style": 'Solo Explorer', "score": '98% Match', "img": 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        { "name": 'Marcus & Jin', "style": 'Adventure Duo', "score": '92% Match', "img": 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        { "name": 'Sarah T.', "style": 'Culture Seeker', "score": '89% Match', "img": 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        { "name": 'The Nomads', "style": 'Group Voyagers', "score": '85% Match', "img": 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        { "name": 'David L.', "style": 'Luxury Traveler', "score": '82% Match', "img": 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
        { "name": 'Maya S.', "style": 'Backpacker', "score": '79% Match', "img": 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    ]

@app.get("/api/dashboard/memory")
async def get_memory_capsule():
    return [
        { "img": 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', "label": 'Paris, France', "large": True },
        { "img": 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'Bali Coast', "large": False },
        { "img": 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'Swiss Alps', "large": False },
        { "img": 'https://images.unsplash.com/photo-1504150558240-1bdf2a0f8b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'Grand Canyon', "large": False },
        { "img": 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'Dubai Desert', "large": False },
        { "img": 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', "label": 'Alpine Lake', "large": True },
        { "img": 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'London Nights', "large": False },
        { "img": 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', "label": 'Venice Canals', "large": False },
    ]

@app.get("/api/itinerary")
async def get_itinerary():
    return [
        { "id": 1, "title": 'Day 1: Arrival & Temple Sunset', "time": '4:00 PM', "desc": 'Settle in and head to Uluwatu Temple for a breathtaking sunset over the cliffs.' },
        { "id": 2, "title": 'Day 2: Rice Terraces & Waterfall', "time": '9:00 AM', "desc": 'Explore the lush Tegalalang Rice Terraces followed by a refreshing dip at Tegenungan Waterfall.' },
        { "id": 3, "title": 'Day 3: Island Hopping to Nusa Penida', "time": '8:00 AM', "desc": 'Take a fast boat to Nusa Penida. Discover Kelingking Beach and Broken Beach.' },
        { "id": 4, "title": 'Day 4: Cultural Heart of Ubud', "time": '10:00 AM', "desc": 'Visit the Sacred Monkey Forest and browse the traditional art markets.' },
        { "id": 5, "title": 'Day 5: Beach Club & Departure', "time": '11:00 AM', "desc": 'Relax at a premium beach club in Seminyak before heading to the airport.' },
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
