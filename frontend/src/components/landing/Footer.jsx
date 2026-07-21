import { useState } from "react";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { HOTEL, LOGO_URL, TEL_LINK, WA_LINK } from "@/lib/constants";
import { subscribeNewsletter } from "@/lib/api";

const LINKS = [
    { label: "Rooms", href: "#rooms" },
    { label: "Banquet", href: "#banquet" },
    { label: "Dining", href: "#dining" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [busy, setBusy] = useState(false);

    const subscribe = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        try {
            setBusy(true);
            await subscribeNewsletter(email);
            toast.success("Subscribed! Watch your inbox for royal offers.");
            setEmail("");
        } catch (err) {
            if (err?.response?.status === 409) {
                toast.message("You're already on our list!");
            } else {
                toast.error("Could not subscribe. Try again.");
            }
        } finally {
            setBusy(false);
        }
    };

    return (
        <footer
            id="contact"
            data-testid="site-footer"
            className="relative bg-brand-navy text-white pt-20 pb-10 overflow-hidden"
        >
            <div className="absolute inset-0 bg-jaali opacity-[0.05] pointer-events-none" />
            <div className="absolute -right-32 top-10 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-4">
                            <div
                                className="overflow-hidden rounded-full bg-brand-cream ring-2 ring-brand-gold/70 shrink-0"
                                style={{ width: 88, height: 88 }}
                            >
                                <img
                                    src={LOGO_URL}
                                    alt={HOTEL.name}
                                    className="w-full h-full object-cover scale-[1.0]"
                                    style={{ objectPosition: "center center" }}
                                />
                            </div>
                            <div className="leading-tight">
                                <div className="font-serif text-2xl text-white">
                                    The King&rsquo;s Mahal
                                </div>
                                <div className="text-[11px] tracking-[0.32em] uppercase text-brand-gold-light mt-0.5">
                                    Hotel &amp; Resorts
                                </div>
                            </div>
                        </div>
                        <p className="font-serif text-2xl mt-5 leading-tight">
                            Royal Hospitality,
                            <br />
                            <span className="italic text-brand-gold-light">
                                Affordable Luxury.
                            </span>
                        </p>
                        <p className="text-sm text-white/60 mt-4 leading-relaxed">
                            A 3-star property in Pikari, Bemetara — built around honest pricing, warm service and grand celebrations.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-serif text-xl mb-5 text-brand-gold-light">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {LINKS.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-white/75 hover:text-brand-gold transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-xl mb-5 text-brand-gold-light">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-3 text-white/80">
                                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                                {HOTEL.address}
                            </li>
                            <li>
                                <a
                                    href={TEL_LINK}
                                    data-testid="footer-call-link"
                                    className="flex items-center gap-3 text-white/80 hover:text-brand-gold"
                                >
                                    <Phone className="w-4 h-4 text-brand-gold" />
                                    {HOTEL.phoneDisplay}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-whatsapp-link"
                                    className="flex items-center gap-3 text-white/80 hover:text-brand-gold"
                                >
                                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                                    Chat on WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white/80">
                                <Mail className="w-4 h-4 text-brand-gold" />
                                {HOTEL.email}
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-6">
                            <a
                                href={HOTEL.instagram}
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href={HOTEL.facebook}
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl mb-5 text-brand-gold-light">
                            Stay in the Loop
                        </h4>
                        <p className="text-sm text-white/60 mb-4 leading-relaxed">
                            Get updates on offers, events and wedding-season packages — straight to your inbox.
                        </p>
                        <form onSubmit={subscribe} className="space-y-3" data-testid="newsletter-form">
                            <Input
                                data-testid="newsletter-email-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-brand-gold"
                            />
                            <Button
                                data-testid="newsletter-submit-btn"
                                type="submit"
                                disabled={busy}
                                className="w-full bg-brand-gold hover:bg-brand-gold-deep text-white"
                            >
                                {busy ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    "Subscribe"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="gold-divider" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs text-white/50">
                    <div>© 2026 The King&rsquo;s Mahal, Bemetara. All Rights Reserved.</div>
                    <div className="flex gap-6">
                        <a href="#faq" className="hover:text-brand-gold">
                            FAQ
                        </a>
                        <a href="#policies" className="hover:text-brand-gold">
                            Policies
                        </a>
                        <a href="#contact" className="hover:text-brand-gold">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
