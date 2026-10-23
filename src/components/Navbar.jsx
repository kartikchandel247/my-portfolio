import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FolderGit2, Cpu, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Services', href: '#services', id: 'services', icon: Briefcase },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Tech Stack', href: '#skills', id: 'skills', icon: Cpu },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <>
      {/* Top Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-soft-sm' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Avatar on Left */}
          <button
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/kartik-avatar.jpg"
                  alt="Kartik Chandel"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                Kartik Chandel
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Full Stack & QA Specialist
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-slate-200/90 shadow-soft-sm ml-auto">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50/90 text-indigo-600 border border-indigo-200/90 shadow-sm shadow-indigo-500/15 backdrop-blur-sm scale-[1.02]'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 text-slate-800 hover:text-indigo-600 focus:outline-none ml-auto cursor-pointer shadow-soft-sm active:scale-95 transition-all"
            aria-label="Open side navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MINIMALISTIC GLASSMORPHIC SLIM SIDE MENU BAR            */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            
            {/* 1. Frosted Ambient Backdrop with Deep Atmospheric Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/35 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* 2. Slim Minimalist Glassmorphic Side Sheet */}
            <motion.aside
              initial={{ x: '100%', opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-[78%] max-w-[290px] h-[100dvh] flex flex-col justify-between overflow-hidden select-none z-10 border-l border-white/70 shadow-[-20px_0_40px_rgba(15,23,42,0.14)]"
              style={{
                background: 'linear-gradient(150deg, rgba(255, 255, 255, 0.90) 0%, rgba(248, 250, 252, 0.82) 50%, rgba(241, 245, 249, 0.88) 100%)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              }}
            >
              {/* Internal Radiant Aurora Glowing Orbs for Glass Depth */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* TOP: Slim Profile Header & Close Button */}
              <div className="p-4 border-b border-slate-200/50 relative z-10">
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xs overflow-hidden">
                        <img
                          src="/kartik-avatar.jpg"
                          alt="Kartik Chandel"
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 tracking-tight text-sm leading-tight">
                        Kartik Chandel
                      </h3>
                      <span className="inline-block text-[10px] font-medium text-indigo-600 bg-indigo-50/80 px-1.5 py-0.2 rounded border border-indigo-100 mt-0.5">
                        Full Stack & QA
                      </span>
                    </div>
                  </div>

                  {/* Frosted Glass Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-xl bg-white/80 hover:bg-white border border-slate-200/70 text-slate-500 hover:text-slate-800 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CENTER: Slim, Minimalist Navigation Links (Less Visual Weight) */}
              <div className="flex-1 px-3 py-3 space-y-1 overflow-y-auto relative z-10 no-scrollbar">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-3 block mb-1">
                  Menu
                </span>

                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`w-full py-2.5 px-3 rounded-xl transition-all duration-150 flex items-center justify-between cursor-pointer group text-left ${
                        isActive
                          ? 'bg-indigo-50/90 text-indigo-700 font-semibold border border-indigo-200/60 shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                        <span className="text-sm tracking-tight">{link.name}</span>
                      </div>

                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Minimal Clean Bottom Brand Note */}
              <div className="p-3 border-t border-slate-200/40 relative z-10">
                <p className="text-[11px] text-slate-400 text-center font-normal">
                  © {new Date().getFullYear()} Kartik Chandel
                </p>
              </div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
