import { Section, FadeIn } from "./Section";
import { Star, ShieldCheck, Clock, BedDouble } from "lucide-react";
import { HERO_IMAGES } from "@/lib/constants";

const STATS = [
    { icon: Star, label: "4.6★ Rated" },
    { icon: ShieldCheck, label: "3-Star Property" },
    { icon: Clock, label: "Open 24x7" },
    { icon: BedDouble, label: "5 Room Categories" },
];

export default function About() {
    return (
        <Section
            id="about"
            eyebrow="About The Property"
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <FadeIn>
                    <div className="relative">
                        <img
                            src={HERO_IMAGES[1]}
                            alt="The King's Mahal — Lobby"
                            className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-soft"
                            loading="lazy"
                        />
                        <div className="hidden md:block absolute -bottom-6 -right-6 bg-brand-navy text-white rounded-2xl px-7 py-5 shadow-gold">
                            <div className="font-serif text-3xl text-brand-gold-light leading-none">
                                10+
                            </div>
                            <div className="text-xs tracking-wider uppercase mt-1 text-white/80">
                                Years of Hospitality
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl border border-brand-gold/40" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-brand-gold-deep font-medium mb-4">
                            <span className="w-8 h-px bg-brand-gold" />
                            Welcome
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                            Welcome to{" "}
                            <span className="italic text-brand-gold-deep">
                                The King’s Mahal
                            </span>
                        </h2>
                        <div className="gold-divider-short my-6" />
                        <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed">
                            One of Bemetara’s most recommended 3-star hotels, located right next to Central Bank of India in Pikari. Known for our friendly management, seamless guest experience and warm Indian hospitality — trusted by both locals and outstation visitors.
                        </p>
                        <p className="text-brand-navy/65 mt-4 leading-relaxed">
                            Whether it’s a quiet family getaway, a corporate visit or a grand wedding celebration, every detail at our property is designed to feel like home — only more regal.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                            {STATS.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-white border border-brand-line rounded-xl p-4 text-center shadow-soft"
                                >
                                    <s.icon className="w-5 h-5 text-brand-gold-deep mx-auto mb-2" />
                                    <div className="text-xs font-medium text-brand-navy">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
