import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, GraduationCap, ShieldCheck, Code2, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import HeroCutoutDisplay from './HeroCutoutDisplay';
import SectionBackground from './SectionBackground';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';

const roles = [
  'Full Stack Web Developer',
  'QA Automation Engineer',
  'Mobile App Engineer (Flutter)',
  'AI & Autonomous Systems Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('Full Stack Web Developer');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 45;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="hero" showTopDivider={false} showBottomDivider={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Typing Effect, Action Badges */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300/80 shadow-sm shadow-emerald-500/15 text-xs font-bold text-emerald-800 hover:border-emerald-400 transition-all">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                </span>
                <span>Available for Full Stack & QA Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-soft-sm">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                Bilaspur, HP, India
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-soft-sm">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                Amritsar Group of Colleges
              </div>
            </div>

            {/* Main Heading with Cinematic Typography */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50/80 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Official Developer Portfolio
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-gradient-cinematic">Kartik Chandel</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700">
                  {displayText}
                  <span className="inline-block w-1 h-7 ml-1 bg-gradient-to-b from-indigo-500 to-purple-600 animate-pulse rounded-full" />
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Engineering high-performance web applications and Flutter mobile solutions, powered by 
              <span className="font-bold text-slate-900"> bulletproof QA automation</span> using Playwright. 
              Bridging modern visual aesthetics with enterprise-grade stability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 shadow-lg shadow-slate-900/15 hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4 text-indigo-300" />
                View Featured Projects
              </a>

              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-sm hover:bg-emerald-100/90 transition-all hover:-translate-y-0.5 shadow-soft-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                WhatsApp Chat
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all shadow-soft-sm"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                Call Directly
              </a>
            </div>

            {/* Interactive Social Media Redirection Badges */}
            <div className="pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                Connect Directly Across Networks
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200 shadow-soft-sm text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 ${social.color} ${social.bgHover}`}
                  >
                    {social.name === 'GitHub' && <GithubIcon className="w-4 h-4" />}
                    {social.name === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-blue-600" />}
                    {social.name === 'Instagram' && <InstagramIcon className="w-4 h-4 text-pink-500" />}
                    {social.name === 'WhatsApp' && <WhatsAppIcon className="w-4 h-4 text-emerald-500" />}
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Transparent Body Cutout with Orbiting Cyber Animations */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[520px]"
          >
            <HeroCutoutDisplay />
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-10">
          <a
            href="#about"
            className="flex flex-col items-center text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors group"
          >
            <span>Scroll down to explore</span>
            <ArrowDown className="w-4 h-4 mt-1 group-hover:translate-y-1 transition-transform text-indigo-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
