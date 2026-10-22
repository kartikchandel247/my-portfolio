import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Home, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Tech Stack', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-soft-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Avatar */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
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
        </a>

        {/* Desktop Navigation with Active Indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-soft-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70'
                }`}
              >
                {link.name === 'Home' && <Home className="w-3.5 h-3.5" />}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 px-3.5 py-2 rounded-full transition-all hover:scale-[1.02] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition-all shadow-md shadow-indigo-500/25 hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-200/80 px-6 py-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {link.name === 'Home' && <Home className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-2.5">
            <a
              href={personalInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 py-3 rounded-xl"
            >
              Direct WhatsApp Chat
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 py-3 rounded-xl shadow-md"
            >
              Contact Me Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
