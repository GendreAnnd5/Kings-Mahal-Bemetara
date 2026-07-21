import React, { createContext, useContext, useState, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { submitEnquiry } from "@/lib/api";
import { WA_LINK, HOTEL } from "@/lib/constants";
import { MessageCircle, Loader2 } from "lucide-react";

const BookingContext = createContext(null);

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [enquiryType, setEnquiryType] = useState("stay");

    const openBooking = useCallback((type = "stay") => {
        setEnquiryType(type);
        setOpen(true);
    }, []);

    return (
        <BookingContext.Provider value={{ openBooking }}>
            {children}
            <BookingModal
                open={open}
                onOpenChange={setOpen}
                defaultType={enquiryType}
            />
        </BookingContext.Provider>
    );
}

function BookingModal({ open, onOpenChange, defaultType }) {
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        check_in: "",
        check_out: "",
        guests: 2,
        enquiry_type: defaultType,
        message: "",
    });

    React.useEffect(() => {
        setForm((f) => ({ ...f, enquiry_type: defaultType }));
    }, [defaultType]);

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) {
            toast.error("Please share your name and phone so we can reach you.");
            return;
        }
        try {
            setSubmitting(true);
            await submitEnquiry({
                ...form,
                guests: form.guests ? Number(form.guests) : undefined,
            });
            toast.success("Enquiry received! Our team will reach out shortly.");
            onOpenChange(false);
            // Optional: redirect to WhatsApp with pre-filled context
            const msg = encodeURIComponent(
                `Hi, I just enquired on your website.\nName: ${form.name}\nPhone: ${form.phone}` +
                    (form.check_in ? `\nCheck-in: ${form.check_in}` : "") +
                    (form.check_out ? `\nCheck-out: ${form.check_out}` : "") +
                    (form.guests ? `\nGuests: ${form.guests}` : "") +
                    `\nType: ${form.enquiry_type === "event" ? "Event/Banquet" : "Room Stay"}` +
                    (form.message ? `\nMessage: ${form.message}` : ""),
            );
            window.open(`https://wa.me/${HOTEL.whatsapp}?text=${msg}`, "_blank");
            setForm({
                name: "",
                phone: "",
                email: "",
                check_in: "",
                check_out: "",
                guests: 2,
                enquiry_type: defaultType,
                message: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Could not submit. Please try WhatsApp or call us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-w-lg bg-brand-cream border-brand-line rounded-2xl"
                data-testid="booking-modal"
            >
                <DialogHeader>
                    <DialogTitle className="font-serif text-3xl text-brand-navy">
                        Reserve Your Royal Stay
                    </DialogTitle>
                    <DialogDescription className="text-brand-navy/60">
                        Share a few details — our team will confirm availability within minutes.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="booking-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <Label className="text-brand-navy/80">Full Name *</Label>
                            <Input
                                data-testid="booking-name-input"
                                value={form.name}
                                onChange={(e) => set("name", e.target.value)}
                                placeholder="Your name"
                                className="bg-white border-brand-line focus-visible:ring-brand-gold"
                            />
                        </div>
                        <div>
                            <Label className="text-brand-navy/80">Phone *</Label>
                            <Input
                                data-testid="booking-phone-input"
                                value={form.phone}
                                onChange={(e) => set("phone", e.target.value)}
                                placeholder="+91 9XXXXXXXXX"
                                className="bg-white border-brand-line focus-visible:ring-brand-gold"
                            />
                        </div>
                    </div>
                    <div>
                        <Label className="text-brand-navy/80">Email (optional)</Label>
                        <Input
                            data-testid="booking-email-input"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            placeholder="you@example.com"
                            className="bg-white border-brand-line focus-visible:ring-brand-gold"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className="text-brand-navy/80">Check-in</Label>
                            <Input
                                data-testid="booking-checkin-input"
                                type="date"
                                value={form.check_in}
                                onChange={(e) => set("check_in", e.target.value)}
                                className="bg-white border-brand-line focus-visible:ring-brand-gold"
                            />
                        </div>
                        <div>
                            <Label className="text-brand-navy/80">Check-out</Label>
                            <Input
                                data-testid="booking-checkout-input"
                                type="date"
                                value={form.check_out}
                                onChange={(e) => set("check_out", e.target.value)}
                                className="bg-white border-brand-line focus-visible:ring-brand-gold"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className="text-brand-navy/80">Guests</Label>
                            <Input
                                data-testid="booking-guests-input"
                                type="number"
                                min={1}
                                value={form.guests}
                                onChange={(e) => set("guests", e.target.value)}
                                className="bg-white border-brand-line focus-visible:ring-brand-gold"
                            />
                        </div>
                        <div>
                            <Label className="text-brand-navy/80">Enquiry Type</Label>
                            <Select
                                value={form.enquiry_type}
                                onValueChange={(v) => set("enquiry_type", v)}
                            >
                                <SelectTrigger
                                    data-testid="booking-type-trigger"
                                    className="bg-white border-brand-line focus:ring-brand-gold"
                                >
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="stay">Room Stay</SelectItem>
                                    <SelectItem value="event">Event / Banquet</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label className="text-brand-navy/80">Message (optional)</Label>
                        <Textarea
                            data-testid="booking-message-input"
                            rows={3}
                            value={form.message}
                            onChange={(e) => set("message", e.target.value)}
                            placeholder="Any special requests..."
                            className="bg-white border-brand-line focus-visible:ring-brand-gold"
                        />
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                        <Button
                            data-testid="booking-whatsapp-btn"
                            type="button"
                            variant="outline"
                            className="border-brand-gold text-brand-navy hover:bg-brand-gold/10"
                            onClick={() => window.open(WA_LINK, "_blank")}
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat on WhatsApp
                        </Button>
                        <Button
                            data-testid="booking-submit-btn"
                            type="submit"
                            disabled={submitting}
                            className="flex-1 bg-brand-navy hover:bg-brand-navy-deep text-white"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                                </>
                            ) : (
                                "Submit Enquiry"
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
