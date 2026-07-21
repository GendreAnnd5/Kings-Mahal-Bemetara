import { useMemo, useState } from "react";
import { Section, FadeIn } from "./Section";
import { GALLERY_ALL } from "@/lib/constants";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const TABS = ["All", "Rooms", "Banquet & Events", "Exteriors"];

export default function Gallery() {
    const [active, setActive] = useState("All");
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    const items = useMemo(
        () =>
            active === "All"
                ? GALLERY_ALL
                : GALLERY_ALL.filter((g) => g.category === active),
        [active],
    );

    const openAt = (i) => {
        setIdx(i);
        setOpen(true);
    };

    const next = () => setIdx((i) => (i + 1) % items.length);
    const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

    return (
        <Section
            id="gallery"
            eyebrow="Gallery"
            title="A Glimpse of The King’s Mahal"
            subtitle="From elegant rooms to grand celebrations — explore moments captured at our property."
            className="bg-brand-ivory"
        >
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                {TABS.map((t) => (
                    <button
                        key={t}
                        data-testid={`gallery-tab-${t.toLowerCase().replace(/\s|&/g, "-")}`}
                        onClick={() => setActive(t)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                            active === t
                                ? "bg-brand-navy text-white border-brand-navy"
                                : "bg-white text-brand-navy/70 border-brand-line hover:border-brand-gold"
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {items.map((g, i) => (
                    <FadeIn key={`${g.url}-${i}`} delay={i * 0.03}>
                        <button
                            onClick={() => openAt(i)}
                            data-testid={`gallery-item-${i}`}
                            className={`group block w-full overflow-hidden rounded-xl border border-brand-line bg-white ${
                                i % 5 === 0 ? "md:row-span-2 h-64 md:h-[504px]" : "h-64 md:h-60"
                            }`}
                        >
                            <img
                                src={g.url}
                                alt={`Gallery ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </button>
                    </FadeIn>
                ))}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="max-w-5xl bg-black/95 border-none p-0 rounded-2xl overflow-hidden"
                    data-testid="lightbox"
                >
                    <VisuallyHidden.Root>
                        <DialogTitle>Gallery preview</DialogTitle>
                        <DialogDescription>Use arrows to navigate, Escape to close.</DialogDescription>
                    </VisuallyHidden.Root>
                    <div className="relative">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        {items[idx] && (
                            <img
                                src={items[idx].url}
                                alt="Preview"
                                className="w-full max-h-[80vh] object-contain bg-black"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </Section>
    );
}
