import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { HOTEL } from "@/lib/constants";

export default function SocialConnect() {
    return (
        <section
            id="social"
            data-testid="section-social"
            className="relative bg-brand-cream py-14 md:py-20"
        >
            <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-12 text-center">
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-gold-deep font-medium mb-3">
                    <span className="w-8 h-px bg-brand-gold" />
                    Stay Connected
                    <span className="w-8 h-px bg-brand-gold" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy leading-tight">
                    Follow The King&rsquo;s Mahal
                </h2>
                <p className="mt-3 text-brand-navy/60 max-w-xl mx-auto text-sm md:text-base">
                    Get a peek into every celebration, new offer and behind-the-scenes moment on our socials.
                </p>

                <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
                    {/* Instagram */}
                    <motion.a
                        href={HOTEL.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="social-instagram-btn"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden rounded-2xl p-5 md:p-6 flex items-center gap-4 text-left shadow-soft"
                        style={{
                            background:
                                "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        }}
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                            <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0 text-white">
                            <div className="text-[11px] tracking-[0.25em] uppercase text-white/80">
                                Instagram
                            </div>
                            <div className="font-serif text-xl md:text-2xl leading-tight truncate">
                                @kings_mahal_
                            </div>
                            <div className="text-xs text-white/75 mt-1 hidden sm:block">
                                Reels, offers &amp; guest moments
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#dc2743] transition-colors shrink-0">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </motion.a>

                    {/* Facebook */}
                    <motion.a
                        href={HOTEL.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="social-facebook-btn"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden rounded-2xl p-5 md:p-6 flex items-center gap-4 text-left shadow-soft"
                        style={{
                            background:
                                "linear-gradient(135deg, #1877F2 0%, #0e5fc3 100%)",
                        }}
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                            <Facebook className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
                        </div>
                        <div className="flex-1 min-w-0 text-white">
                            <div className="text-[11px] tracking-[0.25em] uppercase text-white/80">
                                Facebook
                            </div>
                            <div className="font-serif text-xl md:text-2xl leading-tight truncate">
                                The King&rsquo;s Mahal
                            </div>
                            <div className="text-xs text-white/75 mt-1 hidden sm:block">
                                Events, weddings &amp; updates
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1877F2] transition-colors shrink-0">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
