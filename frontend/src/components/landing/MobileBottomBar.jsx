import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { TEL_LINK, WA_LINK } from "@/lib/constants";
import { useBooking } from "./BookingProvider";

export default function MobileBottomBar() {
    const { openBooking } = useBooking();
    return (
        <div
            data-testid="mobile-bottom-bar"
            className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 divide-x divide-white/10 bg-brand-navy text-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
            <button
                data-testid="mobile-bar-book"
                onClick={() => openBooking("stay")}
                className="flex flex-col items-center justify-center py-3 active:opacity-90 bg-brand-gold text-white"
            >
                <CalendarCheck className="w-5 h-5" />
                <span className="text-[11px] mt-1 font-medium">Book Now</span>
            </button>
            <a
                data-testid="mobile-bar-whatsapp"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-3 active:bg-white/10"
            >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-[11px] mt-1">WhatsApp</span>
            </a>
            <a
                data-testid="mobile-bar-call"
                href={TEL_LINK}
                className="flex flex-col items-center justify-center py-3 active:bg-white/10"
            >
                <Phone className="w-5 h-5 text-brand-gold-light" />
                <span className="text-[11px] mt-1">Call</span>
            </a>
        </div>
    );
}
