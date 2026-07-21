import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOTEL, LOGO_URL, TEL_LINK, WA_LINK } from "@/lib/constants";
import { useBooking } from "./BookingProvider";

const NAV = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Dining", href: "#dining" },
    { label: "Banquet", href: "#banquet" },
    { label: "Gallery", href: "#gallery" },
    { label: "Offers", href: "#offers" },
    { label: "Reviews", href: "#reviews" },
    { label: "Amenities", href: "#amenities" },
    { label: "FAQ", href: "#faq" },
    { label: "Location", href: "#location" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { openBooking } = useBooking();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-brand-cream/90 backdrop-blur-xl border-b border-brand-gold/20 shadow-soft"
                    : "bg-transparent"
            }`}
        >
            {/* ===== Top utility bar (hidden on scroll) ===== */}
            <div
                className={`hidden md:block overflow-hidden transition-all duration-300 ${
                    scrolled
                        ? "max-h-0 opacity-0"
                        : "max-h-12 opacity-100 bg-brand-navy/40 backdrop-blur-md border-b border-white/10"
                }`}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 h-10 flex items-center justify-between text-[12px] text-white/85">
                    <div className="flex items-center gap-6">
                        <a
                            href={TEL_LINK}
                            data-testid="topbar-call"
                            className="flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            {HOTEL.phoneDisplay}
                        </a>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="topbar-whatsapp"
                            className="hidden lg:flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
                        >
                            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            WhatsApp Us
                        </a>
                        <span className="hidden xl:flex items-center gap-1.5 text-white/65">
                            <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
                            Pikari, Bemetara · Chhattisgarh
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden lg:inline text-[11px] tracking-[0.25em] uppercase text-brand-gold-light">
                            Open 24×7 · 3-Star
                        </span>
                        <div className="flex items-center gap-3 text-white/70">
                            <a
                                href={HOTEL.instagram}
                                aria-label="Instagram"
                                className="hover:text-brand-gold-light"
                            >
                                <Instagram className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href={HOTEL.facebook}
                                aria-label="Facebook"
                                className="hover:text-brand-gold-light"
                            >
                                <Facebook className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Main header ===== */}
            <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
                <div
                    className={`flex items-center justify-between transition-all duration-300 ${
                        scrolled ? "h-20" : "h-28 md:h-36"
                    }`}
                >
                    {/* Logo — circular crop showing the central crown + elephants emblem */}
                    <a
                        href="#home"
                        data-testid="header-logo"
                        className="flex items-center gap-3"
                    >
                        <div
                            className={`overflow-hidden rounded-full bg-brand-cream ring-2 ring-brand-gold/60 transition-all duration-300 shrink-0 ${
                                scrolled
                                    ? "w-14 h-14 md:w-16 md:h-16"
                                    : "w-20 h-20 md:w-24 md:h-24 ring-brand-gold/80 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                            }`}
                        >
                            <img
                                src={LOGO_URL}
                                alt="The King's Mahal Hotel & Resorts"
                                className="w-full h-full object-cover scale-[1.0]"
                                style={{ objectPosition: "center center" }}
                                loading="eager"
                            />
                        </div>
                        <div
                            className={`hidden sm:flex flex-col leading-tight transition-all duration-300 ${
                                scrolled ? "" : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                            }`}
                        >
                            <span
                                className={`font-serif text-lg md:text-2xl tracking-wide ${
                                    scrolled ? "text-brand-navy" : "text-white"
                                }`}
                            >
                                The King&rsquo;s Mahal
                            </span>
                            <span
                                className={`text-[10px] md:text-[11px] tracking-[0.32em] uppercase mt-0.5 ${
                                    scrolled
                                        ? "text-brand-gold-deep"
                                        : "text-brand-gold-light"
                                }`}
                            >
                                Hotel &amp; Resorts
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {NAV.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`text-[13px] font-medium tracking-wide relative group transition-colors ${
                                    scrolled
                                        ? "text-brand-navy/80 hover:text-brand-gold-deep"
                                        : "text-white/95 hover:text-brand-gold-light"
                                }`}
                            >
                                {n.label}
                                <span className="absolute -bottom-1.5 left-0 w-0 group-hover:w-full h-px bg-brand-gold transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* Right: Book Now */}
                    <div className="flex items-center gap-2">
                        <Button
                            data-testid="header-book-now-btn"
                            onClick={() => openBooking("stay")}
                            className={`hidden sm:inline-flex bg-brand-gold hover:bg-brand-gold-deep text-white font-medium rounded-full shadow-gold hover:shadow-gold-glow transition-all ${
                                scrolled ? "h-10 px-5 text-sm" : "h-11 px-6 text-sm"
                            }`}
                        >
                            Book Now
                        </Button>

                        <button
                            data-testid="mobile-menu-toggle"
                            onClick={() => setOpen((v) => !v)}
                            className={`xl:hidden p-2 ${
                                scrolled ? "text-brand-navy" : "text-white"
                            }`}
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div
                    data-testid="mobile-menu"
                    className="xl:hidden bg-brand-cream border-t border-brand-line max-h-[80vh] overflow-y-auto"
                >
                    <div className="px-5 py-5 flex flex-col gap-1">
                        {NAV.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setOpen(false)}
                                className="py-3 text-brand-navy text-base border-b border-brand-line/50 flex items-center justify-between"
                            >
                                <span>{n.label}</span>
                                <span className="text-brand-gold/60">→</span>
                            </a>
                        ))}

                        <div className="flex items-center gap-3 py-4 border-b border-brand-line/50">
                            <a
                                href={TEL_LINK}
                                className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full border border-brand-navy/15 text-brand-navy text-sm font-medium"
                            >
                                <Phone className="w-4 h-4" /> Call
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full bg-[#25D366] text-white text-sm font-medium"
                            >
                                <MessageCircle className="w-4 h-4" /> WhatsApp
                            </a>
                        </div>

                        <Button
                            onClick={() => {
                                setOpen(false);
                                openBooking("stay");
                            }}
                            className="mt-3 h-12 bg-brand-gold hover:bg-brand-gold-deep text-white rounded-full"
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
