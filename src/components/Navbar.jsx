import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-soft-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            KC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
              Kartik Chandel
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:block">
              Full Stack & QA Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-soft-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 px-4 py-2 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Direct WhatsApp */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-2 rounded-full transition-all hover:scale-[1.02] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 px-4 py-2 rounded-full transition-all shadow-md hover:shadow-indigo-500/25 hover:scale-[1.02]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
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
                className="text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-colors"
              >
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
