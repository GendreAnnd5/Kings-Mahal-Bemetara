import { Section, FadeIn } from "./Section";
import { Button } from "@/components/ui/button";
import { BANQUET, EVENT_GALLERY } from "@/lib/constants";
import { Users, Sparkles } from "lucide-react";
import { useBooking } from "./BookingProvider";

export default function Banquet() {
    const { openBooking } = useBooking();
    return (
        <Section
            id="banquet"
            eyebrow="Weddings · Events · Celebrations"
            title="Where Celebrations Become Memories"
            subtitle="Warm lighting, tasteful decor and royal interiors — perfect for weddings, engagements, birthdays, and corporate gatherings. On-site stay makes us ideal for destination weddings."
            className="bg-brand-navy text-white relative overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-jaali opacity-[0.06] pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {BANQUET.map((b, i) => (
                    <FadeIn key={b.name} delay={i * 0.1}>
                        <div
                            data-testid={`banquet-card-${i}`}
                            className="group relative rounded-2xl overflow-hidden h-[380px] sm:h-[440px] md:h-[520px] shadow-2xl"
                        >
                            <img
                                src={b.image}
                                alt={b.name}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
                                <div className="flex items-center gap-2 text-brand-gold-light text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3">
                                    <Sparkles className="w-3.5 h-3.5" /> Premium Venue
                                </div>
                                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-none">
                                    {b.name}
                                </h3>
                                <p className="text-white/75 text-sm md:text-base mt-3 max-w-md leading-relaxed">
                                    {b.desc}
                                </p>
                                <div className="flex items-center gap-4 sm:gap-5 mt-4 sm:mt-5">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-gold-light">
                                        <Users className="w-4 h-4" />
                                        {b.seating}
                                    </div>
                                    <div className="text-white/50 text-xs sm:text-sm">
                                        · {b.floating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="relative text-center mt-12">
                <Button
                    data-testid="banquet-enquire-btn"
                    onClick={() => openBooking("event")}
                    className="h-14 px-10 rounded-full bg-brand-gold hover:bg-brand-gold-deep text-white text-base font-medium shadow-gold"
                >
                    Enquire for Your Event
                </Button>
            </div>

            {/* Event gallery strip */}
            <div className="relative mt-14 md:mt-16">
                <div className="grid grid-cols-3 gap-3 md:gap-5">
                    {EVENT_GALLERY.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Wedding setup ${i + 1}`}
                            loading="lazy"
                            className="w-full h-36 md:h-56 object-cover rounded-xl border border-brand-gold/20"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
