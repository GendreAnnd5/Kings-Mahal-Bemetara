import { Section, FadeIn } from "./Section";
import { OFFERS } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "./BookingProvider";

export default function Offers() {
    const { openBooking } = useBooking();
    return (
        <Section
            id="offers"
            eyebrow="Special Offers"
            title="Exclusive Offers Just for You"
            subtitle="Hand-picked seasonal packages — curated for couples, families, weddings and corporate stays."
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {OFFERS.map((o, i) => (
                    <FadeIn key={o.title} delay={i * 0.08}>
                        <div
                            data-testid={`offer-card-${i}`}
                            className="relative bg-white rounded-2xl p-7 border border-brand-line shadow-soft hover:shadow-gold transition-all hover:-translate-y-1 h-full flex flex-col"
                        >
                            <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-white bg-brand-gold px-3 py-1 rounded-full">
                                <Sparkles className="w-3 h-3" /> {o.badge}
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl text-brand-navy mt-3">
                                {o.title}
                            </h3>
                            <div className="gold-divider-short my-4" />
                            <p className="text-brand-navy/65 leading-relaxed flex-1">
                                {o.desc}
                            </p>
                            <Button
                                onClick={() => openBooking("stay")}
                                data-testid={`offer-cta-${i}`}
                                variant="outline"
                                className="mt-6 border-brand-gold text-brand-navy hover:bg-brand-gold hover:text-white rounded-full self-start"
                            >
                                Enquire Now
                            </Button>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
