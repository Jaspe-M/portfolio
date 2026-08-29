import { useEffect } from "react";
import Nav from "./components/navbar/Nav.tsx";
import Hero from "./components/hero/Hero.tsx";
import Projects from "./components/projects/Projects.tsx";
import Experience from "./components/experience/Experience.tsx";
import MarqueeFooter from "./components/footer/MarqueeFooter.tsx";

export default function App() {
    // " The page Scrolls down 40px immediately upon loading"
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 60);
    }, []);

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Projects />
                <Experience />
            </main>
            <MarqueeFooter />
        </>
    );
}