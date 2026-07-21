import { Section, FadeIn } from "./Section";
import { AMENITIES } from "@/lib/constants";
import * as Icons from "lucide-react";

export default function Amenities() {
    return (
        <Section
            id="amenities"
            eyebrow="What's Included"
            title="Everything You Need, All in One Place"
            subtitle="From a flawless front desk to thoughtful in-room essentials — every detail is taken care of so you can simply relax."
            className="bg-brand-ivory"
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {AMENITIES.map((a, i) => {
                    const Ic = Icons[a.icon] || Icons.Sparkles;
                    return (
                        <FadeIn key={a.label} delay={i * 0.03}>
                            <div
                                data-testid={`amenity-${i}`}
                                className="bg-white border border-brand-line rounded-2xl p-5 md:p-6 hover:border-brand-gold hover:shadow-soft transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-sand flex items-center justify-center mb-4">
                                    <Ic className="w-5 h-5 text-brand-gold-deep" />
                                </div>
                                <div className="text-sm md:text-base font-medium text-brand-navy leading-snug">
                                    {a.label}
                                </div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </Section>
    );
}
