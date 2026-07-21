import { Section, FadeIn } from "./Section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, POLICIES } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function FAQ() {
    return (
        <Section
            id="faq"
            eyebrow="Need to Know"
            title="Frequently Asked Questions"
            className="bg-brand-ivory"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <FadeIn className="lg:col-span-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-3"
                        data-testid="faq-accordion"
                    >
                        {FAQ_ITEMS.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                data-testid={`faq-item-${i}`}
                                className="bg-white border border-brand-line rounded-xl px-5 data-[state=open]:border-brand-gold/60 data-[state=open]:shadow-soft"
                            >
                                <AccordionTrigger className="text-left font-medium text-brand-navy hover:no-underline py-5">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-brand-navy/65 leading-relaxed pb-5">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div
                        id="policies"
                        data-testid="policies-card"
                        className="bg-brand-navy text-white rounded-2xl p-7 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-jaali opacity-[0.06]" />
                        <div className="relative">
                            <div className="flex items-center gap-2 text-brand-gold-light text-xs tracking-[0.25em] uppercase mb-3">
                                <ShieldCheck className="w-4 h-4" /> House Policies
                            </div>
                            <h3 className="font-serif text-3xl text-white">
                                Our Policies
                            </h3>
                            <div className="gold-divider-short my-5" />
                            <ul className="space-y-3">
                                {POLICIES.map((p) => (
                                    <li
                                        key={p}
                                        className="flex gap-3 text-sm text-white/85 leading-relaxed"
                                    >
                                        <span className="text-brand-gold mt-1">◆</span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
