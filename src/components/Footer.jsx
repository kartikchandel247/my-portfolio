import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Tech Stack', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">
              Kartik Chandel
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Full Stack Web & Mobile Developer • Quality Assurance Automation Specialist
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Bilaspur, Himachal Pradesh • Amritsar Group of Colleges
            </p>
          </div>

          {/* Subpage Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate && onNavigate(link.id)}
                className="hover:text-indigo-400 text-slate-400 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                {social.name === 'GitHub' && <GithubIcon className="w-4 h-4" />}
                {social.name === 'LinkedIn' && <LinkedinIcon className="w-4 h-4" />}
                {social.name === 'Instagram' && <InstagramIcon className="w-4 h-4" />}
                {social.name === 'WhatsApp' && <WhatsAppIcon className="w-4 h-4" />}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kartik Chandel. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with precision & high QA standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
