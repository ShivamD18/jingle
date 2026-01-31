import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"

// Landing page sections
import Testimonials from "./sections/Testimonials"
import Footer from "./sections/Footer"
import Contact from "./sections/Contact"
import TechStack from "./sections/TechStack"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoShowcase from "./sections/LogoShowcase"
import FeatureCards from "./sections/FeatureCards"

// Pages
import Explorations from "./pages/Explorations.jsx"

const Home = () => (
    <>
        <Hero />
        <ShowcaseSection />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
)

const App = () => (
    <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorations" element={<Explorations />} />
        </Routes>
    </BrowserRouter>
)

export default App
