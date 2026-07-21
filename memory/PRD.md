# The King's Mahal — Landing Page PRD

## Original Problem Statement
Build a luxurious, premium, high-converting landing page for "The King's Mahal" — a 3-star hotel & banquet venue in Pikari, Bemetara, Chhattisgarh. Royal + warm tone, navy + gold + ivory palette, Cormorant Garamond + Outfit fonts. Sticky header, floating Call + WhatsApp buttons, sticky mobile bottom bar, booking enquiry modal, review submission system, photo gallery with lightbox, Google Maps embed, and more.

## User Choices (from initial ask_human)
- Reviews stored in MongoDB (auto-approved on submit)
- Booking enquiries: store in MongoDB + redirect to WhatsApp with pre-filled message
- Hero: auto-rotating slider
- Logo: provided by user (uploaded asset)
- Google Maps: lat 21.7236188, lng 81.5340002 (Hotel The Kings Mahal place)

## User Personas
- Walk-in / outstation traveller looking for a clean 3-star stay in Bemetara
- Family / wedding host evaluating banquet halls + outdoor lawn for events
- Corporate visitor needing reliable Wi-Fi + parking + pure-veg meals
- Local resident exploring the property for upcoming celebrations

## Architecture
- **Frontend**: React 19 + React Router, Tailwind CSS, shadcn/ui, framer-motion, sonner toasts
- **Backend**: FastAPI + Motor (MongoDB async driver)
- **DB**: MongoDB — collections: `reviews`, `enquiries`, `subscribers`

### Backend endpoints (all under /api)
- GET `/` — health
- GET `/reviews?approved=true` — list approved reviews
- POST `/reviews` — submit a review (auto-approved=True)
- GET `/reviews/stats` — aggregated avg + total + breakdown (mixes baseline 4.6★/122 reviews with live submissions)
- POST `/enquiries` — submit booking/event enquiry
- GET `/enquiries` — admin list
- POST `/newsletter` — subscribe email (returns 409 on duplicate)

### Frontend sections (single page)
1. Sticky header (transparent over hero, glass after scroll)
2. Hero with auto-rotating slider + trust badge
3. Quick availability check widget
4. About / overview
5. Rooms grid (5 categories)
6. Dining (24x7 pure-veg)
7. Banquet & Events (Indoor Hall + Outdoor Lawn) + gallery strip
8. Book via Other Platforms (MakeMyTrip, Goibibo, JustDial)
9. Photo Gallery with filter tabs + lightbox
10. Special Offers (3 packages)
11. Amenities grid
12. Reviews — 4.6★ summary + Write-a-Review form + carousel
13. Nearby Attractions
14. FAQ accordion + Policies card
15. Location with Google Maps iframe
16. Footer with newsletter, social, contact

### Always-on CTAs
- Floating Call (navy) + WhatsApp (green) buttons with pulse rings
- Mobile bottom bar: Call | WhatsApp | Book Now

## What's been implemented (Dec 2025)
- All 16 sections live + responsive
- Hero auto-rotating slider (5.5s)
- Booking enquiry modal with WhatsApp follow-up redirect
- Review system with auto-approval + 5 baseline seed entries
- Newsletter subscription
- Smooth-scroll anchor navigation + mobile hamburger
- Floating CTAs + sticky mobile bottom bar
- Google Maps iframe with directions link
- All `tel:`/`wa.me/` links wired to +91 91316 65380
- Backend tests: 10/10 pass; Frontend e2e: 100% pass via testing agent

## Placeholder images (user to swap manually)
- **Dining section** — both restaurant + food shots are generic Unsplash placeholders. Replace `/app/frontend/src/components/landing/Dining.jsx` image URLs with actual hotel restaurant photos.
- **Rooms section** — currently maps user-provided MMT URLs to room category names; the actual subject of each image was not labelled, so update `ROOMS[i].image` in `/app/frontend/src/lib/constants.js` if a specific photo belongs to a different category.
- **Banquet "Outdoor Lawn"** — may currently show an indoor photo; swap `BANQUET[1].image` in constants.js when an actual lawn photo is available.
- **Logo** already in place (user-uploaded asset URL).

## Prioritized backlog (P0 → P2)
- P0: User to provide final actual room/dining photos + outdoor lawn photo to replace placeholders
- P1: Admin moderation dashboard (currently reviews are auto-approved; toggle `approved=False` on POST and add an admin UI)
- P1: Email notification to hotel when a new enquiry / review arrives (Resend/SendGrid)
- P1: Rate-limiting/captcha on review + enquiry forms to prevent spam
- P2: SEO — JSON-LD structured data (Hotel, LocalBusiness, AggregateRating)
- P2: Instagram + Facebook handles to replace `#` placeholders in footer
- P2: PWA + offline gallery cache
- P2: Multi-language support (EN + HI)

## Next Tasks
- Plug in actual user-uploaded photos when received
- Set proper social media links
- Decide on email notification provider
