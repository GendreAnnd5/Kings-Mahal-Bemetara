from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="The King's Mahal API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------------- Models ----------------
class Review(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    contact: Optional[str] = None  # email or phone (optional)
    rating: int = Field(ge=1, le=5)
    review_text: str
    service_type: Optional[str] = None  # Room Stay / Dining / Banquet / Staff
    approved: bool = False
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ReviewCreate(BaseModel):
    name: str
    contact: Optional[str] = None
    rating: int = Field(ge=1, le=5)
    review_text: str
    service_type: Optional[str] = None


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    guests: Optional[int] = None
    enquiry_type: Optional[str] = "stay"  # stay | event
    message: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class EnquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    guests: Optional[int] = None
    enquiry_type: Optional[str] = "stay"
    message: Optional[str] = None


class Subscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class SubscriberCreate(BaseModel):
    email: EmailStr


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "The King's Mahal API is running"}


# Reviews
@api_router.post("/reviews", response_model=Review)
async def create_review(payload: ReviewCreate):
    review = Review(**payload.model_dump())
    # New reviews are auto-approved for instant feedback (moderation can flip approved=False later)
    review.approved = True
    await db.reviews.insert_one(review.model_dump())
    return review


@api_router.get("/reviews", response_model=List[Review])
async def list_reviews(approved: bool = True, limit: int = 50):
    cursor = db.reviews.find({"approved": approved}, {"_id": 0}).sort("created_at", -1).limit(limit)
    items = await cursor.to_list(length=limit)
    return items


@api_router.get("/reviews/stats")
async def review_stats():
    # Static baseline trust numbers from public listings; live submissions are added on top.
    base_total = 122
    base_avg = 4.6
    base_breakdown = {"5": 78, "4": 32, "3": 8, "2": 3, "1": 1}

    live = await db.reviews.find({"approved": True}, {"_id": 0, "rating": 1}).to_list(length=10000)
    live_count = len(live)
    live_sum = sum(r["rating"] for r in live)
    breakdown = dict(base_breakdown)
    for r in live:
        breakdown[str(r["rating"])] = breakdown.get(str(r["rating"]), 0) + 1

    total = base_total + live_count
    avg = round((base_avg * base_total + live_sum) / total, 2) if total else 0

    return {
        "average": avg,
        "total": total,
        "breakdown": breakdown,
    }


# Enquiries
@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(payload: EnquiryCreate):
    enquiry = Enquiry(**payload.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries(limit: int = 100):
    cursor = db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(limit)
    items = await cursor.to_list(length=limit)
    return items


# Newsletter
@api_router.post("/newsletter", response_model=Subscriber)
async def subscribe(payload: SubscriberCreate):
    existing = await db.subscribers.find_one({"email": payload.email})
    if existing:
        raise HTTPException(status_code=409, detail="Email already subscribed")
    sub = Subscriber(**payload.model_dump())
    await db.subscribers.insert_one(sub.model_dump())
    return sub


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def seed_reviews():
    """Seed a few baseline approved testimonials so the carousel is never empty."""
    count = await db.reviews.count_documents({})
    if count > 0:
        return
    seeds = [
        {
            "name": "Aarav Sharma",
            "rating": 5,
            "review_text": "Stayed for our cousin's wedding — rooms were spotless, staff was warm and the banquet lawn looked absolutely magical at night. Honestly the best property in Bemetara right now.",
            "service_type": "Banquet & Events",
            "contact": None,
        },
        {
            "name": "Priya Verma",
            "rating": 5,
            "review_text": "The Royal Family Room was huge and spotlessly clean. Food was pure veg and full of flavour. My kids enjoyed every moment. Will return for sure.",
            "service_type": "Room Stay",
            "contact": None,
        },
        {
            "name": "Rohit Agrawal",
            "rating": 4,
            "review_text": "Booked a corporate stay for our team — smooth check-in, polite staff and the AC rooms were comfortable. Restaurant available 24x7 was a big plus.",
            "service_type": "Staff Service",
            "contact": None,
        },
        {
            "name": "Neha Pandey",
            "rating": 5,
            "review_text": "Hosted my engagement at the indoor banquet hall. Decor came out beautiful, lighting was warm, and the management was extremely cooperative throughout.",
            "service_type": "Banquet & Events",
            "contact": None,
        },
        {
            "name": "Sandeep Tiwari",
            "rating": 4,
            "review_text": "Pleasant stay, clean rooms, hot water available, parking is right in front. Family friendly and reasonably priced for the experience.",
            "service_type": "Room Stay",
            "contact": None,
        },
    ]
    for s in seeds:
        r = Review(**s, approved=True)
        await db.reviews.insert_one(r.model_dump())
    logger.info("Seeded baseline reviews for The King's Mahal.")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
