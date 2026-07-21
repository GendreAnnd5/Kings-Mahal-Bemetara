import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_POSTERS } from "@/lib/constants";

export default function FeaturedPosters() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % FEATURED_POSTERS.length), 4500);
        return () => clearInterval(t);
    }, []);

    const next = () => setIdx((i) => (i + 1) % FEATURED_POSTERS.length);
    const prev = () => setIdx((i) => (i - 1 + FEATURED_POSTERS.length) % FEATURED_POSTERS.length);
    const current = FEATURED_POSTERS[idx];

    return (
        <section
            id="featured"
            data-testid="section-featured"
            className="relative bg-brand-navy overflow-hidden py-12 md:py-20"
        >
            <div className="absolute inset-0 bg-jaali opacity-[0.05] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-10 lg:px-12">
                <div className="text-center mb-6 md:mb-10">
                    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-gold-light font-medium mb-3">
                        <span className="w-8 h-px bg-brand-gold" />
                        Featured Highlights
                        <span className="w-8 h-px bg-brand-gold" />
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                        Moments from The King&rsquo;s Mahal
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 items-center">
                    {/* Poster */}
                    <div className="md:col-span-3 order-1 md:order-2">
                        <div className="relative aspect-square max-w-[440px] mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-brand-gold/30">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={idx}
                                    src={current.url}
                                    alt={current.title}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Mobile indicators + controls */}
                        <div className="flex items-center justify-center gap-4 mt-5 md:hidden">
                            <button
                                onClick={prev}
                                data-testid="featured-prev-btn"
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center active:scale-95 transition"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-1.5">
                                {FEATURED_POSTERS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIdx(i)}
                                        className={`h-1.5 rounded-full transition-all ${
                                            idx === i ? "w-6 bg-brand-gold" : "w-1.5 bg-white/30"
                                        }`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                data-testid="featured-next-btn"
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center active:scale-95 transition"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Copy */}
                    <div className="md:col-span-2 order-2 md:order-1 text-center md:text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.45 }}
                            >
                                <div className="font-serif text-3xl md:text-5xl text-white leading-tight">
                                    {current.title}
                                </div>
                                <div className="gold-divider-short my-4 mx-auto md:mx-0" />
                                <p className="text-white/75 leading-relaxed max-w-md mx-auto md:mx-0">
                                    {current.caption}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Desktop controls + indicators */}
                        <div className="hidden md:flex items-center gap-5 mt-8">
                            <button
                                onClick={prev}
                                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="flex gap-1.5 ml-2">
                                {FEATURED_POSTERS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIdx(i)}
                                        className={`h-1.5 rounded-full transition-all ${
                                            idx === i ? "w-8 bg-brand-gold" : "w-1.5 bg-white/30"
                                        }`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="ml-auto text-white/40 text-xs tracking-widest">
                                {String(idx + 1).padStart(2, "0")}
                                <span className="text-white/20"> / {String(FEATURED_POSTERS.length).padStart(2, "0")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
