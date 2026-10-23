import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HomeOverview from './components/HomeOverview';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import MovieLightsBackground from './components/MovieLightsBackground';

// Lazy load dedicated subpage bundles for ultra-fast mobile initial load
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-200 animate-ping opacity-60" />
        <div className="w-12 h-12 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
      </div>
      <p className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase animate-pulse">
        Loading View...
      </p>
    </div>
  );
}

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

      {/* Dedicated Page / Subpage Views with Instant Suspense Boundary */}
      <main className="relative z-10 min-h-[85vh]">
        <Suspense fallback={<PageLoader />}>
          {currentPage === 'home' && <HomeOverview onNavigate={navigate} />}
          {currentPage === 'about' && <About onNavigate={navigate} />}
          {currentPage === 'services' && <Services onNavigate={navigate} />}
          {currentPage === 'projects' && <Projects onNavigate={navigate} />}
          {currentPage === 'skills' && <TechStack onNavigate={navigate} />}
          {currentPage === 'contact' && <Contact onNavigate={navigate} />}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
