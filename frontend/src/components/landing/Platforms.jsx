import { Section, FadeIn } from "./Section";
import { PLATFORMS, TEL_LINK, WA_LINK } from "@/lib/constants";
import { ExternalLink, Star, Phone, MessageCircle } from "lucide-react";

export default function Platforms() {
    return (
        <Section
            id="platforms"
            eyebrow="Booking Platforms"
            title="Also Available On Your Favourite Booking Platforms"
            subtitle="Prefer booking through a travel site? Find The King’s Mahal listed across all the major platforms — or book directly with us for the best rate."
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PLATFORMS.map((p, i) => (
                    <FadeIn key={p.name} delay={i * 0.08}>
                        <a
                            data-testid={`platform-card-${p.name.toLowerCase()}`}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white border border-brand-line rounded-2xl p-5 hover:border-brand-gold hover:shadow-gold transition-all hover:-translate-y-1"
                        >
                            <div className="h-24 flex items-center justify-center bg-black rounded-xl overflow-hidden">
                                <img
                                    src={p.logo}
                                    alt={`${p.name} logo`}
                                    className="max-h-16 max-w-[75%] object-contain transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="gold-divider-short my-4" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-serif text-xl text-brand-navy">
                                        {p.name}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-brand-navy/60 mt-1">
                                        <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                                        {p.rating}
                                    </div>
                                </div>
                                <div className="text-brand-gold-deep flex items-center gap-1 text-sm font-medium">
                                    View &amp; Book
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>

            <div className="mt-12 text-center bg-brand-ivory border border-brand-gold/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                <p className="text-brand-navy/70">
                    Or book directly with us for the best rates and personalised assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                    <a
                        data-testid="platforms-call-btn"
                        href={TEL_LINK}
                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-brand-navy text-white hover:bg-brand-navy-deep font-medium"
                    >
                        <Phone className="w-4 h-4" /> Call Us
                    </a>
                    <a
                        data-testid="platforms-whatsapp-btn"
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#25D366] text-white hover:opacity-90 font-medium"
                    >
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </Section>
    );
}
