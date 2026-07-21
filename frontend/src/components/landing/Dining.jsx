import { Section, FadeIn } from "./Section";
import { Clock, Leaf, Sparkles, UtensilsCrossed } from "lucide-react";

const ICONS = [
    { icon: Clock, label: "24x7 Service" },
    { icon: Leaf, label: "Pure Vegetarian" },
    { icon: Sparkles, label: "Fresh Ingredients" },
    { icon: UtensilsCrossed, label: "Multi-cuisine" },
];

export default function Dining() {
    return (
        <Section id="dining" className="bg-brand-cream">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <FadeIn delay={0.1}>
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-brand-gold-deep font-medium mb-4">
                            <span className="w-8 h-px bg-brand-gold" />
                            Dining
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                            Royal Flavours,
                            <span className="block italic text-brand-gold-deep">
                                Authentic Taste
                            </span>
                        </h2>
                        <div className="gold-divider-short my-6" />
                        <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed">
                            Our kitchen serves pure-vegetarian, authentic & traditional dishes prepared with the finest quality ingredients. From hearty breakfasts to soulful dinners — our restaurant runs 24x7, every day of the year.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mt-8">
                            {ICONS.map((s) => (
                                <div
                                    key={s.label}
                                    className="flex items-center gap-3 bg-white border border-brand-line rounded-xl px-4 py-3 shadow-soft"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-brand-sand flex items-center justify-center">
                                        <s.icon className="w-4 h-4 text-brand-gold-deep" />
                                    </div>
                                    <div className="text-sm font-medium text-brand-navy">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
                            alt="Restaurant interior"
                            loading="lazy"
                            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-soft"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=80"
                            alt="Indian thali platter"
                            loading="lazy"
                            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-soft mt-8"
                        />
                    </div>
                    <p className="text-[11px] text-brand-navy/40 mt-2 text-right italic">
                        {/* PLACEHOLDER: Replace dining/food photos with actual hotel restaurant images */}
                        * Sample dining photos — replace with actual hotel restaurant photos
                    </p>
                </FadeIn>
            </div>
        </Section>
    );
}
