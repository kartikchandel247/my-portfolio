import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeOverview from './components/HomeOverview';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import MovieLightsBackground from './components/MovieLightsBackground';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'services', 'projects', 'skills', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = pageId;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const targetPage = ['about', 'services', 'projects', 'skills', 'contact'].includes(hash) ? hash : 'home';
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-indigo-100 selection:text-indigo-900 font-sans overflow-x-hidden">
      {/* Cinematic Movie Lights & Animated Stage Searchlight Beams */}
      <MovieLightsBackground />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Floating Glass Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* Dedicated Page / Subpage Views */}
      <main className="relative z-10 min-h-[85vh]">
        {currentPage === 'home' && <HomeOverview onNavigate={navigate} />}
        {currentPage === 'about' && <About onNavigate={navigate} />}
        {currentPage === 'services' && <Services onNavigate={navigate} />}
        {currentPage === 'projects' && <Projects onNavigate={navigate} />}
        {currentPage === 'skills' && <TechStack onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact onNavigate={navigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
