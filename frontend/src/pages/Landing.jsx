import { BookingProvider } from "@/components/landing/BookingProvider";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FeaturedPosters from "@/components/landing/FeaturedPosters";
import QuickCheck from "@/components/landing/QuickCheck";
import About from "@/components/landing/About";
import Rooms from "@/components/landing/Rooms";
import Dining from "@/components/landing/Dining";
import Banquet from "@/components/landing/Banquet";
import Platforms from "@/components/landing/Platforms";
import Gallery from "@/components/landing/Gallery";
import Offers from "@/components/landing/Offers";
import Amenities from "@/components/landing/Amenities";
import Reviews from "@/components/landing/Reviews";
import Nearby from "@/components/landing/Nearby";
import FAQ from "@/components/landing/FAQ";
import Location from "@/components/landing/Location";
import SocialConnect from "@/components/landing/SocialConnect";
import Footer from "@/components/landing/Footer";
import FloatingButtons from "@/components/landing/FloatingButtons";
import MobileBottomBar from "@/components/landing/MobileBottomBar";

export default function Landing() {
    return (
        <BookingProvider>
            <div data-testid="landing-page" className="min-h-screen bg-brand-cream overflow-x-hidden">
                <Header />
                <main>
                    <Hero />
                    <FeaturedPosters />
                    <QuickCheck />
                    <About />
                    <Rooms />
                    <Dining />
                    <Banquet />
                    <Platforms />
                    <Gallery />
                    <Offers />
                    <Amenities />
                    <Reviews />
                    <Nearby />
                    <FAQ />
                    <Location />
                    <SocialConnect />
                </main>
                <Footer />
                <FloatingButtons />
                <MobileBottomBar />
                {/* Spacer below mobile bar so content isn't hidden */}
                <div className="md:hidden h-16" aria-hidden />
            </div>
        </BookingProvider>
    );
}
