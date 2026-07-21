import { Section, FadeIn } from "./Section";
import { ROOMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useBooking } from "./BookingProvider";

export default function Rooms() {
    const { openBooking } = useBooking();
    return (
        <Section
            id="rooms"
            eyebrow="Stays"
            title="Rooms Designed for Comfort"
            subtitle="Refurbished, spotlessly clean and well-maintained rooms across five thoughtfully designed categories — every stay feels like a home away from home."
            className="bg-brand-ivory"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {ROOMS.map((r, i) => (
                    <FadeIn key={r.name} delay={i * 0.05}>
                        <div
                            data-testid={`room-card-${i}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-brand-line hover:shadow-gold transition-all hover:-translate-y-1"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={r.image}
                                    alt={r.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-2xl text-brand-navy">
                                    {r.name}
                                </h3>
                                <div className="gold-divider-short my-3" />
                                <p className="text-sm text-brand-navy/60 leading-relaxed">
                                    {r.tagline}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {r.features.map((f) => (
                                        <span
                                            key={f}
                                            className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-sand text-brand-navy/70"
                                        >
                                            {f}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => openBooking("stay")}
                                    data-testid={`room-card-cta-${i}`}
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-brand-gold-deep hover:text-brand-navy font-medium"
                                >
                                    Enquire / Book
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button
                    data-testid="rooms-view-all-btn"
                    onClick={() => openBooking("stay")}
                    className="h-12 px-8 rounded-full bg-brand-navy hover:bg-brand-navy-deep text-white"
                >
                    Check Availability
                </Button>
            </div>
        </Section>
    );
}
