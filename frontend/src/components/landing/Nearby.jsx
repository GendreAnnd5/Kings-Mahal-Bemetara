import { Section, FadeIn } from "./Section";
import { NEARBY } from "@/lib/constants";
import * as Icons from "lucide-react";

export default function Nearby() {
    return (
        <Section
            id="nearby"
            eyebrow="Explore Around"
            title="Discover Bemetara"
            subtitle="A quick guide to nearby markets, landmarks and travel points — handy for leisure guests and out-of-town wedding visitors."
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {NEARBY.map((n, i) => {
                    const Ic = Icons[n.icon] || Icons.MapPin;
                    return (
                        <FadeIn key={n.name} delay={i * 0.04}>
                            <div
                                data-testid={`nearby-${i}`}
                                className="bg-white border border-brand-line rounded-2xl p-5 text-center hover:border-brand-gold hover:shadow-soft transition-all"
                            >
                                <div className="w-11 h-11 rounded-xl bg-brand-sand mx-auto flex items-center justify-center mb-3">
                                    <Ic className="w-5 h-5 text-brand-gold-deep" />
                                </div>
                                <div className="text-sm font-medium text-brand-navy">
                                    {n.name}
                                </div>
                                <div className="text-xs text-brand-navy/55 mt-1">
                                    {n.distance}
                                </div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </Section>
    );
}
