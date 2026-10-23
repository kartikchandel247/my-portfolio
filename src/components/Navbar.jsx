import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FolderGit2, Cpu, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? 'glass-nav py-3 shadow-soft-sm' : 'bg-transparent py-4'
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

          {/* Desktop Navigation Aligned in Right Top Corner */}
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

          {/* Mobile Hamburger Button (44px min tap target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none ml-auto cursor-pointer shadow-soft-sm active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Animated Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden glass-nav border-t border-slate-200/80 shadow-2xl mt-2"
            >
              <div className="px-5 py-5 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Navigation Links */}
                <div className="grid grid-cols-1 gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = currentPage === link.id;
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.name}
                        onClick={(e) => handleLinkClick(e, link.id)}
                        className={`text-sm font-bold min-h-[44px] py-2.5 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer w-full text-left ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/90 shadow-sm font-extrabold'
                            : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                          <span>{link.name}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Quick Action Strip (Instant Direct Reachability) */}
                <div className="pt-3 border-t border-slate-200/80 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    Instant Connect
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={personalInfo.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-soft-sm active:scale-98 transition-transform"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-soft-sm active:scale-98 transition-transform"
                    >
                      <Phone className="w-3.5 h-3.5 text-indigo-300" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dimmed Backdrop when Mobile Menu Open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/25 backdrop-blur-[2px] z-40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
