import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FolderGit2, Cpu, MessageSquare, Phone, ChevronRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
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
      {/* HYPER-MODERN GLASSMORPHIC SIDE MENU BAR (SLIDE-OVER)    */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            
            {/* 1. Frosted Ambient Backdrop with Deep Atmospheric Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* 2. Glassmorphic Slide-in Side Menu Sheet */}
            <motion.aside
              initial={{ x: '100%', opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-[86%] max-w-[340px] h-[100dvh] flex flex-col justify-between overflow-hidden select-none z-10 border-l border-white/70 shadow-[-25px_0_60px_rgba(15,23,42,0.22),0_0_45px_rgba(99,102,241,0.2)]"
              style={{
                background: 'linear-gradient(150deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 250, 252, 0.78) 45%, rgba(241, 245, 249, 0.86) 100%)',
                backdropFilter: 'blur(32px) saturate(190%)',
                WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              }}
            >
              {/* Internal Radiant Aurora Glowing Orbs for Glass Depth */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -left-28 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* TOP: Profile Header & Close Button */}
              <div className="p-5 border-b border-slate-200/60 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-md overflow-hidden">
                        <img
                          src="/kartik-avatar.jpg"
                          alt="Kartik Chandel"
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-slate-900 tracking-tight text-base leading-tight">
                        Kartik Chandel
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-700 bg-indigo-50/90 px-2 py-0.5 rounded-md border border-indigo-200/70 mt-0.5 shadow-2xs">
                        <Sparkles className="w-2.5 h-2.5 text-indigo-500" />
                        Full Stack & QA
                      </span>
                    </div>
                  </div>

                  {/* Frosted Glass Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-soft-sm active:scale-95 transition-all cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </button>
                </div>
              </div>

              {/* CENTER: Navigation Links with Micro-Interactions */}
              <div className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto relative z-10 no-scrollbar">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
                  Menu Navigation
                </span>

                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`w-full min-h-[48px] py-2.5 px-3 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer group text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-indigo-500/5 text-indigo-900 border border-indigo-300/80 shadow-sm shadow-indigo-500/10 font-extrabold backdrop-blur-sm'
                          : 'text-slate-700 hover:text-indigo-600 hover:bg-white/70 border border-transparent hover:border-white/90'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                              : 'bg-white/80 text-slate-500 group-hover:text-indigo-600 group-hover:bg-white shadow-2xs border border-slate-200/70'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold tracking-tight">{link.name}</span>
                      </div>

                      {isActive ? (
                        <span className="relative flex h-2 w-2 mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all opacity-70" />
                      )}
                    </button>
                  );
                })}

                {/* Status Card in Drawer */}
                <div className="pt-2">
                  <div className="p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-soft-sm flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5 shrink-0 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-900 leading-tight">
                        Available for Full Stack & QA Roles
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                        Bilaspur, HP • AGC Graduate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM: Action Strip & Social Links */}
              <div className="p-4 border-t border-slate-200/60 bg-white/60 backdrop-blur-xl relative z-10 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/12 hover:bg-emerald-500/20 border border-emerald-300/80 text-emerald-800 text-xs font-bold shadow-soft-sm active:scale-98 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900/95 hover:bg-indigo-600 text-white text-xs font-bold shadow-md shadow-slate-900/20 active:scale-98 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* Social Networks Quick Row */}
                <div className="flex items-center justify-between pt-1 px-1">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Social Networks
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-white flex items-center justify-center transition-all shadow-2xs"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 text-blue-600 hover:bg-white flex items-center justify-center transition-all shadow-2xs"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={personalInfo.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/80 text-pink-600 hover:bg-white flex items-center justify-center transition-all shadow-2xs"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
