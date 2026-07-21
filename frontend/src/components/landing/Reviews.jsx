import { useEffect, useState } from "react";
import { Section, FadeIn } from "./Section";
import { Star, Loader2, Quote } from "lucide-react";
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
import { fetchReviews, fetchReviewStats, submitReview } from "@/lib/api";

const SERVICES = ["Room Stay", "Dining", "Banquet & Events", "Staff Service"];

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [stats, setStats] = useState({
        average: 4.6,
        total: 122,
        breakdown: { 5: 78, 4: 32, 3: 8, 2: 3, 1: 1 },
    });
    const [loading, setLoading] = useState(true);

    const load = async () => {
        try {
            const [list, s] = await Promise.all([fetchReviews(), fetchReviewStats()]);
            setReviews(list || []);
            setStats(s);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <Section
            id="reviews"
            eyebrow="Guest Voices"
            title="Share Your Experience"
            subtitle="Real stories from our guests. Read what people are saying — and add your own."
            className="bg-brand-cream"
        >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Stats */}
                <FadeIn className="lg:col-span-2">
                    <div className="bg-white border border-brand-line rounded-2xl p-6 md:p-7 shadow-soft lg:sticky lg:top-28">
                        <div className="flex items-baseline gap-2">
                            <div className="font-serif text-6xl text-brand-navy leading-none">
                                {stats.average}
                            </div>
                            <div className="text-brand-navy/60 text-sm">/ 5</div>
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    className={`w-5 h-5 ${
                                        s <= Math.round(stats.average)
                                            ? "fill-brand-gold text-brand-gold"
                                            : "text-brand-line"
                                    }`}
                                />
                            ))}
                        </div>
                        <p className="mt-2 text-sm text-brand-navy/60">
                            Based on {stats.total} verified reviews
                        </p>

                        <div className="mt-6 space-y-2">
                            {[5, 4, 3, 2, 1].map((s) => {
                                const count = stats.breakdown[s] || stats.breakdown[String(s)] || 0;
                                const pct = stats.total ? (count / stats.total) * 100 : 0;
                                return (
                                    <div key={s} className="flex items-center gap-3 text-xs">
                                        <div className="w-8 text-brand-navy/70 flex items-center gap-0.5">
                                            {s}
                                            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                                        </div>
                                        <div className="flex-1 h-2 bg-brand-line rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-brand-gold rounded-full transition-all"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <div className="w-8 text-brand-navy/60 text-right">
                                            {count}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>

                {/* Review form + carousel */}
                <FadeIn delay={0.1} className="lg:col-span-3">
                    <ReviewForm onSubmitted={load} />

                    {/* Carousel of reviews */}
                    <div className="mt-10">
                        <h3 className="font-serif text-2xl text-brand-navy mb-5">
                            What guests are saying
                        </h3>
                        {loading ? (
                            <div className="flex items-center justify-center py-10 text-brand-navy/40">
                                <Loader2 className="w-5 h-5 animate-spin" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {reviews.slice(0, 6).map((r) => (
                                    <div
                                        key={r.id}
                                        data-testid={`review-card-${r.id}`}
                                        className="bg-brand-ivory border border-brand-line rounded-2xl p-6 shadow-soft"
                                    >
                                        <Quote className="w-5 h-5 text-brand-gold mb-3" />
                                        <p className="text-sm text-brand-navy/80 leading-relaxed">
                                            {r.review_text}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div>
                                                <div className="font-medium text-brand-navy text-sm">
                                                    {r.name}
                                                </div>
                                                {r.service_type && (
                                                    <div className="text-[11px] uppercase tracking-wider text-brand-navy/50 mt-0.5">
                                                        {r.service_type}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <Star
                                                        key={s}
                                                        className={`w-3.5 h-3.5 ${
                                                            s <= r.rating
                                                                ? "fill-brand-gold text-brand-gold"
                                                                : "text-brand-line"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}

function ReviewForm({ onSubmitted }) {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        rating: 0,
        review_text: "",
        service_type: "Room Stay",
    });
    const [hover, setHover] = useState(0);
    const [submitting, setSubmitting] = useState(false);

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.review_text.trim() || form.rating < 1) {
            toast.error("Please add your name, a rating and a short review.");
            return;
        }
        try {
            setSubmitting(true);
            await submitReview(form);
            toast.success("Thank you! Your review has been posted.");
            setForm({
                name: "",
                contact: "",
                rating: 0,
                review_text: "",
                service_type: "Room Stay",
            });
            onSubmitted && onSubmitted();
        } catch (err) {
            console.error(err);
            toast.error("Could not submit review. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            data-testid="review-form"
            className="bg-white border border-brand-line rounded-2xl p-6 md:p-8 shadow-soft"
        >
            <h3 className="font-serif text-2xl text-brand-navy">Write a Review</h3>
            <p className="text-sm text-brand-navy/60 mt-1">
                Your honest feedback helps us serve you better.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                    <Label className="text-brand-navy/80">Name *</Label>
                    <Input
                        data-testid="review-name-input"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Your name"
                        className="bg-brand-cream border-brand-line focus-visible:ring-brand-gold"
                    />
                </div>
                <div>
                    <Label className="text-brand-navy/80">Email or Phone</Label>
                    <Input
                        data-testid="review-contact-input"
                        value={form.contact}
                        onChange={(e) => set("contact", e.target.value)}
                        placeholder="Optional"
                        className="bg-brand-cream border-brand-line focus-visible:ring-brand-gold"
                    />
                </div>
            </div>

            <div className="mt-4">
                <Label className="text-brand-navy/80">Your Rating *</Label>
                <div
                    className="flex gap-1.5 mt-2"
                    data-testid="review-rating"
                    onMouseLeave={() => setHover(0)}
                >
                    {[1, 2, 3, 4, 5].map((s) => (
                        <button
                            key={s}
                            type="button"
                            data-testid={`review-star-${s}`}
                            onMouseEnter={() => setHover(s)}
                            onClick={() => set("rating", s)}
                            className="p-1"
                        >
                            <Star
                                className={`w-7 h-7 transition-all ${
                                    s <= (hover || form.rating)
                                        ? "fill-brand-gold text-brand-gold scale-110"
                                        : "text-brand-line"
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <Label className="text-brand-navy/80">Which service?</Label>
                <Select
                    value={form.service_type}
                    onValueChange={(v) => set("service_type", v)}
                >
                    <SelectTrigger
                        data-testid="review-service-trigger"
                        className="bg-brand-cream border-brand-line focus:ring-brand-gold"
                    >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {SERVICES.map((s) => (
                            <SelectItem key={s} value={s}>
                                {s}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-4">
                <Label className="text-brand-navy/80">Your Review *</Label>
                <Textarea
                    data-testid="review-text-input"
                    rows={4}
                    value={form.review_text}
                    onChange={(e) => set("review_text", e.target.value)}
                    placeholder="Tell us about your experience..."
                    className="bg-brand-cream border-brand-line focus-visible:ring-brand-gold"
                />
            </div>

            <Button
                data-testid="review-submit-btn"
                type="submit"
                disabled={submitting}
                className="mt-6 h-12 px-8 rounded-full bg-brand-navy hover:bg-brand-navy-deep text-white"
            >
                {submitting ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Posting...
                    </>
                ) : (
                    "Post Review"
                )}
            </Button>
        </form>
    );
}
