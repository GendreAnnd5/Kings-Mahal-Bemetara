import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import "@/App.css";

function App() {
    useEffect(() => {
        // Smooth anchor scroll fallback for browsers without scroll-behavior support
        const handler = (e) => {
            const target = e.target.closest("a[href^='#']");
            if (!target) return;
            const id = target.getAttribute("href");
            if (!id || id === "#") return;
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                // Close any open mobile drawer/menu — handled by component state
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="top-center" richColors />
        </div>
    );
}

export default App;
