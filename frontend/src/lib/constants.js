// Single source of truth for hotel contact info, links, and content
export const HOTEL = {
    name: "The King's Mahal",
    fullName: "Hotel The King's Mahal — Hotel & Resorts",
    tagline: "Royal Hospitality, Affordable Luxury",
    location: "Pikari, Bemetara, Chhattisgarh",
    address: "Near Central Bank of India, Kawardha-Bemetara Road, Pikari, Bemetara, Chhattisgarh",
    phone: "+919243606665",
    phoneDisplay: "+91 924360 6665",
    whatsapp: "919243606665",
    whatsappMessage:
        "Hi%2C%20I%20am%20interested%20in%20booking%20a%20room%2Fevent%20at%20The%20Kings%20Mahal",
    email: "stay@thekingsmahal.in",
    rating: 4.6,
    reviewsCount: 122,
    stars: 3,
    instagram: "https://www.instagram.com/kings_mahal_/",
    facebook: "https://www.facebook.com/p/The-Kings-Mahal-Hotel-Resorts-61575817193511/",
};

export const TEL_LINK = `tel:${HOTEL.phone}`;
export const WA_LINK = `https://wa.me/${HOTEL.whatsapp}?text=${HOTEL.whatsappMessage}`;

export const LOGO_URL =
    "https://i.ibb.co/B27nZrtn/Kinsg-Mahal-Logo.jpg";

export const HERO_IMAGES = [
    "https://i.ibb.co/5bsw2mJ/Experience-the-royal-treatment-you-deserve-From-stylish-interiors-to-an-unforgettable-fine-d.webp",
    "https://i.ibb.co/rKWjfcTs/One-year-of-celebrations-memories-and-royal-moments-Thank-you-for-making-every-event-at-Kin.webp",
    "https://i.ibb.co/0RP0Rt4F/Packing-your-bags-Your-perfect-getaway-is-just-a-tap-away-Book-your-stay-with-us-and-go-fro.webp",
    "https://i.ibb.co/DHqRXhJS/Planning-a-trip-with-your-friends-Gather-your-whole-crew-and-leave-the-rest-to-us-Enjoy.webp",
    "https://i.ibb.co/7xXWVCsV/Step-into-a-world-of-comfort-with-your-loved-ones-From-the-moment-you-walk-through.webp",
    "https://i.ibb.co/Xxnrdsgz/Where-royal-ambience-meets-unforgettable-memories-Your-dream-venue-awaits-at-Bemetara-Drop-by.webp",
];

// Branded promotional posters (portrait 1:1) — used in Featured showcase carousel below hero
export const FEATURED_POSTERS = [
    {
        url: "https://i.ibb.co/5bsw2mJ/Experience-the-royal-treatment-you-deserve-From-stylish-interiors-to-an-unforgettable-fine-d.webp",
        title: "Stay Grand · Stay Royal",
        caption: "Your destination for luxury and unforgettable experiences",
    },
    {
        url: "https://i.ibb.co/0RP0Rt4F/Packing-your-bags-Your-perfect-getaway-is-just-a-tap-away-Book-your-stay-with-us-and-go-fro.webp",
        title: "From Booking to Bliss",
        caption: "Reserve your stay today & experience true luxury",
    },
    {
        url: "https://i.ibb.co/DHqRXhJS/Planning-a-trip-with-your-friends-Gather-your-whole-crew-and-leave-the-rest-to-us-Enjoy.webp",
        title: "Bring Your Crew",
        caption: "We'll handle the comfort — you enjoy the memories",
    },
    {
        url: "https://i.ibb.co/7xXWVCsV/Step-into-a-world-of-comfort-with-your-loved-ones-From-the-moment-you-walk-through.webp",
        title: "Your Journey · Our Hospitality",
        caption: "A warm welcome the moment you step in",
    },
    {
        url: "https://i.ibb.co/Xxnrdsgz/Where-royal-ambience-meets-unforgettable-memories-Your-dream-venue-awaits-at-Bemetara-Drop-by.webp",
        title: "Life's Finest Moments",
        caption: "Royal ambience · Spacious venue · Dream weddings",
    },
];

export const ROOMS = [
    {
        name: "Prince Deluxe Room",
        tagline: "Elegant comfort with all modern essentials",
        image: "https://r1imghtlak.mmtcdn.com/22652247-e55e-433e-8ee5-ed6b89691a03.jpg?downsize=540:*",
        features: ["King Bed", "AC", "Free Wi-Fi", "City View"],
    },
    {
        name: "Prince Premium Room",
        tagline: "Refined interiors with premium upgrades",
        image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202504281828389999-65ed0543-d71c-4f20-8e3d-733be8b55551.jpg?downsize=540:*",
        features: ["King Bed", "Lounge", "Mini Bar", "Premium Toiletries"],
    },
    {
        name: "Princess Room",
        tagline: "Soft tones, cozy retreat for two",
        image: "https://r1imghtlak.mmtcdn.com/e615370a-6d2d-44b1-874d-7034c45de819.jpeg?downsize=540:*",
        features: ["Queen Bed", "AC", "Hairdryer", "Tea/Coffee"],
    },
    {
        name: "Royal Family Room",
        tagline: "Spacious comfort for the whole family",
        image: "https://r1imghtlak.mmtcdn.com/d1995d9b-477a-408b-a984-96b094b28473.jpg?downsize=540:*",
        features: ["Twin Beds + Sofa", "Family-friendly", "AC", "Smart TV"],
    },
    {
        name: "Suite Room",
        tagline: "Our most luxurious stay — fit for royalty",
        image: "https://r1imghtlak.mmtcdn.com/1cf5fcc2-26ce-41f6-a85c-0722bd9d643d.jpeg?downsize=540:*",
        features: ["Living Area", "King Bed", "Premium Bath", "Suite Service"],
    },
];

export const BANQUET = [
    {
        name: "Indoor Banquet Hall",
        seating: "450 seating",
        floating: "700 floating",
        image: "https://r1imghtlak.mmtcdn.com/d1c12691-bc46-412a-8a25-be4c1107b0c8.jpeg?downsize=540:*",
        desc: "Warmly-lit interiors with elegant decor, perfect for weddings, engagements & ceremonies.",
    },
    {
        name: "Outdoor Lawn",
        seating: "1200 seating",
        floating: "2000 floating",
        image: "https://r1imghtlak.mmtcdn.com/169d5fdd-b302-4353-ba61-e5eef329d728.jpg?downsize=540:*",
        desc: "Sprawling lush lawn for grand celebrations, sangeet nights and destination weddings.",
    },
];

export const EVENT_GALLERY = [
    "https://r1imghtlak.mmtcdn.com/a8a808fa-7e7f-4b18-bb24-c8eefe114ba6.jpeg?downsize=540:*",
    "https://r1imghtlak.mmtcdn.com/37030a62-8df3-4a92-91ea-e3aa793ced14.jpg?downsize=540:*",
    "https://r1imghtlak.mmtcdn.com/4d28a7b7-6b6f-4323-8273-5e27fc7c189b.jpeg?downsize=540:*",
];

export const GALLERY_ALL = [
    { url: "https://r1imghtlak.mmtcdn.com/22652247-e55e-433e-8ee5-ed6b89691a03.jpg?downsize=540:*", category: "Rooms" },
    { url: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202504281828389999-65ed0543-d71c-4f20-8e3d-733be8b55551.jpg?downsize=540:*", category: "Rooms" },
    { url: "https://r1imghtlak.mmtcdn.com/e615370a-6d2d-44b1-874d-7034c45de819.jpeg?downsize=540:*", category: "Rooms" },
    { url: "https://r1imghtlak.mmtcdn.com/d1995d9b-477a-408b-a984-96b094b28473.jpg?downsize=540:*", category: "Rooms" },
    { url: "https://r1imghtlak.mmtcdn.com/1cf5fcc2-26ce-41f6-a85c-0722bd9d643d.jpeg?downsize=540:*", category: "Rooms" },
    { url: "https://r1imghtlak.mmtcdn.com/d1c12691-bc46-412a-8a25-be4c1107b0c8.jpeg?downsize=540:*", category: "Banquet & Events" },
    { url: "https://r1imghtlak.mmtcdn.com/169d5fdd-b302-4353-ba61-e5eef329d728.jpg?downsize=540:*", category: "Banquet & Events" },
    { url: "https://r1imghtlak.mmtcdn.com/a8a808fa-7e7f-4b18-bb24-c8eefe114ba6.jpeg?downsize=540:*", category: "Banquet & Events" },
    { url: "https://r1imghtlak.mmtcdn.com/37030a62-8df3-4a92-91ea-e3aa793ced14.jpg?downsize=540:*", category: "Banquet & Events" },
    { url: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202504281828389999-0d6ffd8c-9c10-438c-8bc8-e87a0b4d2351.jpg?downsize=540:*", category: "Exteriors" },
    { url: "https://r1imghtlak.mmtcdn.com/4d28a7b7-6b6f-4323-8273-5e27fc7c189b.jpeg?downsize=540:*", category: "Banquet & Events" },
    { url: "https://r1imghtlak.mmtcdn.com/aeb5ab9b-a48e-41b2-a43f-7ba4da0d103d.jpg?downsize=540:*", category: "Exteriors" },
    { url: "https://r1imghtlak.mmtcdn.com/a61c2542-f5af-41ac-ae47-43da81b9e656.jpeg?downsize=540:*", category: "Rooms" },
];

export const PLATFORMS = [
    {
        name: "MakeMyTrip",
        rating: "4.6 / 5",
        logo: "https://customer-assets.emergentagent.com/job_mahal-royal-stay/artifacts/j39s89qg_MakeMyTrip.png",
        url: "https://www.makemytrip.com/hotels/hotel_the_kings_mahal-details-bemetara.html",
    },
    {
        name: "Goibibo",
        rating: "4.5 / 5",
        logo: "https://customer-assets.emergentagent.com/job_mahal-royal-stay/artifacts/jcfxqat2_Goibibo_Logo.svg.webp",
        url: "https://www.goibibo.com/hotels/the-kings-mahal-hotel-in-bemetara-6848818607456142314/",
    },
    {
        name: "JustDial",
        rating: "4.7 / 5",
        logo: "https://customer-assets.emergentagent.com/job_mahal-royal-stay/artifacts/yhk5qic6_Justdial_Logo.svg.webp",
        url: "https://www.justdial.com/Bemetara/HOTEL-THE-KINGS-MAHAL-Central-Bank-Pikari/9999PX788-X788-250701182136-R9W7_BZDET",
    },
];

export const AMENITIES = [
    { label: "Free Wi-Fi", icon: "Wifi" },
    { label: "Air Conditioning", icon: "Snowflake" },
    { label: "Restaurant & Lounge", icon: "UtensilsCrossed" },
    { label: "Smoking Rooms", icon: "Cigarette" },
    { label: "Newspaper Service", icon: "Newspaper" },
    { label: "Luggage Assistance", icon: "Luggage" },
    { label: "First-Aid Services", icon: "HeartPulse" },
    { label: "Toiletries & Mineral Water", icon: "Droplets" },
    { label: "Hairdryer", icon: "Wind" },
    { label: "Parking Facility", icon: "Car" },
    { label: "Comfortable Seating", icon: "Armchair" },
    { label: "24x7 Front Desk", icon: "BellRing" },
];

export const OFFERS = [
    {
        title: "Weekend Getaway",
        badge: "Limited Time",
        desc: "2 nights stay with complimentary breakfast and late check-out for couples & families.",
    },
    {
        title: "Wedding Season Special",
        badge: "Save up to 20%",
        desc: "Book the indoor hall + 10 guest rooms together and unlock our destination-wedding bundle.",
    },
    {
        title: "Corporate Stay Package",
        badge: "Business Friendly",
        desc: "Discounted nightly rate for teams of 5+, includes meeting space, Wi-Fi and pure-veg meals.",
    },
];

export const NEARBY = [
    { name: "Pikari Local Market", distance: "2 km", icon: "ShoppingBag" },
    { name: "Bemetara City Center", distance: "1 km", icon: "Building2" },
    { name: "Central Bank of India", distance: "0.3 km", icon: "Landmark" },
    { name: "Kawardha Highway", distance: "On road", icon: "Milestone" },
    { name: "Bus Stand", distance: "4 km", icon: "Bus" },
    { name: "Railway Junction (Raipur)", distance: "85 km", icon: "TrainFront" },
];

export const FAQ_ITEMS = [
    {
        q: "What is the standard check-in / check-out time?",
        a: "Check-in is from 12:00 PM and check-out is between 11:00 AM and 12:00 PM. Early check-in subject to availability.",
    },
    {
        q: "Is outside food allowed?",
        a: "We respectfully request guests not to bring outside food. Our restaurant serves pure-vegetarian meals 24x7.",
    },
    {
        q: "Is smoking allowed?",
        a: "Smoking is permitted only in designated smoking rooms. All other rooms and public areas are strictly non-smoking.",
    },
    {
        q: "Do you allow pets?",
        a: "Pets are not allowed on the property at this time.",
    },
    {
        q: "What ID proof is required at check-in?",
        a: "A valid government photo ID — Passport, Aadhaar, Driving License or Voter ID — is required from the primary guest.",
    },
    {
        q: "Can outsiders (non-guests) book the banquet hall or lawn?",
        a: "Absolutely. Our indoor hall and outdoor lawn are available for non-guest bookings as well — weddings, engagements, birthdays, corporate events and more.",
    },
    {
        q: "Is parking available on site?",
        a: "Yes, ample on-site parking is available right at the entrance, complimentary for all guests.",
    },
    {
        q: "Do you serve only vegetarian food?",
        a: "Yes. Our kitchen is 100% pure-vegetarian and serves authentic Indian as well as multi-cuisine dishes round the clock.",
    },
];

export const POLICIES = [
    "Check-in: 12:00 PM  |  Check-out: 11:00 AM – 12:00 PM",
    "Minimum age for primary guest: 18 years",
    "Accepted ID: Passport, Aadhaar, Driving License or other Govt. ID",
    "Pets are not allowed",
    "Outside food & alcohol not allowed",
    "Smoking permitted only in designated rooms",
];
