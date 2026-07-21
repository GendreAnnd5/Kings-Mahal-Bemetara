import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_IMAGES, HOTEL } from "@/lib/constants";
import { useBooking } from "./BookingProvider";

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const { openBooking } = useBooking();

    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 5500);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-[85vh] sm:min-h-[92vh] md:min-h-screen w-full overflow-hidden flex items-center"
        >
            {/* Slider */}
            <div className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={HERO_IMAGES[idx]}
                            alt={`Hotel The King's Mahal — slide ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-brand-navy/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/50" />
            </div>

            {/* Slide controls */}
            <button
                data-testid="hero-prev-btn"
                onClick={() => setIdx((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-white/20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                data-testid="hero-next-btn"
                onClick={() => setIdx((i) => (i + 1) % HERO_IMAGES.length)}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-white/20"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-gold/30 text-brand-gold-light text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        3-Star Property · Pikari, Bemetara
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-serif text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight"
                    >
                        Hotel The
                        <span className="block italic text-brand-gold-light">
                            King&rsquo;s Mahal
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-4 sm:mt-6 text-white/85 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
                    >
                        {HOTEL.tagline} — premium hospitality at honest pricing in the heart of Bemetara, Chhattisgarh.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <Button
                            data-testid="hero-book-stay-btn"
                            onClick={() => openBooking("stay")}
                            className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-brand-gold hover:bg-brand-gold-deep text-white text-sm sm:text-base font-medium shadow-gold hover:translate-y-[-2px] transition-all"
                        >
                            Book Your Stay
                        </Button>
                        <a href="#banquet">
                            <Button
                                data-testid="hero-explore-banquet-btn"
                                variant="outline"
                                className="w-full h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-brand-gold text-sm sm:text-base font-medium backdrop-blur"
                            >
                                Explore Banquet Halls
                            </Button>
                        </a>
                    </motion.div>
                </div>

                {/* Trust badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    data-testid="hero-rating-badge"
                    className="absolute right-5 md:right-10 lg:right-12 bottom-28 md:bottom-32 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-soft border border-brand-gold/30"
                >
                    <div className="flex flex-col items-center justify-center bg-brand-navy text-white rounded-xl w-14 h-14">
                        <div className="font-serif text-2xl leading-none">{HOTEL.rating}</div>
                        <div className="flex gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    className={`w-2.5 h-2.5 ${
                                        s <= Math.round(HOTEL.rating)
                                            ? "fill-brand-gold text-brand-gold"
                                            : "text-white/30"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="font-serif text-base text-brand-navy leading-tight">
                            Loved by Guests
                        </div>
                        <div className="text-xs text-brand-navy/60">
                            {HOTEL.reviewsCount}+ verified reviews
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {HERO_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${
                            idx === i ? "w-10 bg-brand-gold" : "w-2 bg-white/50"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
