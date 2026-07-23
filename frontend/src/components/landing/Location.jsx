import { Section, FadeIn } from "./Section";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { HOTEL } from "@/lib/constants";

// Google Maps embed (coords from user-provided share URL — lat 21.7236188, lng 81.5340002)
const MAP_EMBED =
    "https://maps.google.com/maps?q=21.7236188,81.5340002&hl=en&z=16&output=embed";
const MAP_DIRECTIONS = "https://maps.app.goo.gl/znRRBNA45c1o3VQv5";

export default function Location() {
    return (
        <Section
            id="location"
            eyebrow="Find Us"
            title="Located in the Heart of Pikari"
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
                <FadeIn className="lg:col-span-2">
                    <div className="bg-white border border-brand-line rounded-2xl p-7 md:p-8 shadow-soft h-full">
                        <div className="flex items-center gap-2 text-brand-gold-deep text-xs tracking-[0.25em] uppercase mb-3">
                            <MapPin className="w-4 h-4" /> Address
                        </div>
                        <h3 className="font-serif text-3xl text-brand-navy leading-tight">
                            {HOTEL.name}
                        </h3>
                        <div className="gold-divider-short my-5" />
                        <p className="text-brand-navy/70 leading-relaxed">
                            {HOTEL.address}
                        </p>
                        <p className="text-sm text-brand-navy/55 mt-3">
                            Approx. 1.5 km from Bemetara city center · Well-connected by road.
                        </p>

                        <div className="mt-7 space-y-3">
                            <a href={`tel:${HOTEL.phone}`} className="block">
                                <Button
                                    data-testid="location-call-btn"
                                    variant="outline"
                                    className="w-full justify-start border-brand-line hover:border-brand-gold hover:bg-brand-sand/40 text-brand-navy"
                                >
                                    📞 {HOTEL.phoneDisplay}
                                </Button>
                            </a>
                            <a
                                href={MAP_DIRECTIONS}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    data-testid="location-directions-btn"
                                    className="w-full bg-brand-navy hover:bg-brand-navy-deep text-white"
                                >
                                    <Navigation className="w-4 h-4 mr-2" />
                                    Get Directions
                                </Button>
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1} className="lg:col-span-3">
                    <div className="rounded-2xl overflow-hidden border border-brand-line shadow-soft h-[400px] lg:h-full min-h-[400px]">
                        <iframe
                            data-testid="map-embed"
                            src={MAP_EMBED}
                            title="The King's Mahal — Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: 400 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
