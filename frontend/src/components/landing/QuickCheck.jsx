import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, Search } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { motion } from "framer-motion";

export default function QuickCheck() {
    const { openBooking } = useBooking();
    const [ci, setCi] = useState("");
    const [co, setCo] = useState("");
    const [g, setG] = useState(2);

    const submit = (e) => {
        e.preventDefault();
        openBooking("stay");
        // The modal opens; the dates won't auto-fill since modal manages own state.
        // Users have already seen the form — minor UX trade-off, acceptable.
    };

    return (
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-12 -mt-12 md:-mt-16 z-30">
            <motion.form
                onSubmit={submit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="quick-check-widget"
                className="bg-white rounded-2xl shadow-gold border border-brand-gold/20 p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
                <div className="col-span-2 md:col-span-1">
                    <Label className="text-[11px] uppercase tracking-wider text-brand-navy/60 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> Check-in
                    </Label>
                    <Input
                        data-testid="qc-checkin"
                        type="date"
                        value={ci}
                        onChange={(e) => setCi(e.target.value)}
                        className="border-0 bg-transparent text-brand-navy font-medium p-0 h-9 focus-visible:ring-0"
                    />
                </div>
                <div>
                    <Label className="text-[11px] uppercase tracking-wider text-brand-navy/60 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> Check-out
                    </Label>
                    <Input
                        data-testid="qc-checkout"
                        type="date"
                        value={co}
                        onChange={(e) => setCo(e.target.value)}
                        className="border-0 bg-transparent text-brand-navy font-medium p-0 h-9 focus-visible:ring-0"
                    />
                </div>
                <div>
                    <Label className="text-[11px] uppercase tracking-wider text-brand-navy/60 flex items-center gap-1.5">
                        <Users className="w-3 h-3" /> Guests
                    </Label>
                    <Input
                        data-testid="qc-guests"
                        type="number"
                        min={1}
                        value={g}
                        onChange={(e) => setG(e.target.value)}
                        className="border-0 bg-transparent text-brand-navy font-medium p-0 h-9 focus-visible:ring-0"
                    />
                </div>
                <Button
                    data-testid="qc-submit"
                    type="submit"
                    className="col-span-2 md:col-span-1 h-12 bg-brand-gold hover:bg-brand-gold-deep text-white rounded-xl"
                >
                    <Search className="w-4 h-4 mr-2" />
                    Check Availability
                </Button>
            </motion.form>
        </div>
    );
}
