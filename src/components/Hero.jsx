import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, MapPin, GraduationCap, ShieldCheck, Code2, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Hero3DCanvas from './Hero3DCanvas';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';

const roles = [
  'Full Stack Web Developer',
  'QA Automation Engineer',
  'Mobile App Engineer (Flutter)',
  'AI & Autonomous Systems Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
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
      
      {/* Cinematic Movie Light Flairs & Neon Orbs */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[400px] bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Typing Effect, Action Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-300 shadow-soft-sm text-xs font-bold text-emerald-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Available for Full Stack & QA Roles
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

          </div>

          {/* Right Column: Hero Portrait Showcase with Movie Lighting & 3D Canvas */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Cinematic Portrait Card */}
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Animated Cinematic Movie Light Halo Behind Photo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10 animate-pulse-slow" />
              
              {/* Outer Glowing Glass Frame */}
              <div className="relative rounded-3xl p-2.5 bg-white/85 backdrop-blur-xl border border-white/60 shadow-cinematic overflow-hidden">
                
                {/* Image Container with Custom Portrait Crop */}
                <div className="relative w-full h-[410px] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src="/kartik-portrait.jpg"
                    alt="Kartik Chandel"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay at the base for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* Top-Right Active Status Badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live & Active
                  </div>

                  {/* Bottom Info Bar inside image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Kartik Chandel</div>
                        <div className="text-[10px] text-slate-500 font-medium">Full Stack & QA Engineer</div>
                      </div>
                      <div className="px-2 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold">
                        Himachal Pradesh
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Interactive Micro-Badges */}
                <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-3.5 py-2 shadow-soft-xl flex items-center gap-2 hover:scale-105 transition-transform z-20">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    ⚡
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-900">Full Stack Code</div>
                    <div className="text-[9px] text-slate-500">React • Flutter • Node</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-3.5 py-2 shadow-soft-xl flex items-center gap-2 hover:scale-105 transition-transform z-20">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-900">QA Automated</div>
                    <div className="text-[9px] text-slate-500">Playwright E2E</div>
                  </div>
                </div>

              </div>

            </div>

            {/* 3D WebGL Canvas Layered in Perspective */}
            <div className="w-full mt-4 max-h-[160px] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              <Hero3DCanvas />
            </div>

          </div>

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
