import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

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
        {/* Brand Logo & Avatar on Left */}
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

        {/* Desktop Navigation Aligned in Right Top Corner */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-slate-200/90 shadow-soft-sm ml-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-50/90 text-indigo-600 border border-indigo-200/90 shadow-sm shadow-indigo-500/15 backdrop-blur-sm scale-[1.02]'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 border border-transparent'
                }`}
              >
                {link.name === 'Home' && <Home className="w-3.5 h-3.5" />}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none ml-auto"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-200/80 px-6 py-6 mt-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2.5 px-3.5 rounded-xl transition-all flex items-center gap-2 ${
                  activeSection === link.id
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-200 shadow-sm'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {link.name === 'Home' && <Home className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
