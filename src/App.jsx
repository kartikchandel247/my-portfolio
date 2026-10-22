import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import MovieLightsBackground from './components/MovieLightsBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-indigo-100 selection:text-indigo-900 font-sans overflow-x-hidden">
      {/* Cinematic Movie Lights & Animated Stage Searchlight Beams */}
      <MovieLightsBackground />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
