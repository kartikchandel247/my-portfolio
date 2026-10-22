import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, MapPin, GraduationCap, ShieldCheck, Code2, Sparkles, Phone } from 'lucide-react';
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
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Soft Pastel Gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-200/40 via-violet-100/30 to-emerald-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-[450px] h-[350px] bg-gradient-to-br from-emerald-100/40 to-cyan-100/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Typing Effect, Action Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-soft-sm text-xs font-semibold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Full Stack & QA Roles
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200 text-xs font-medium text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Bilaspur, HP, India
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200 text-xs font-medium text-slate-600">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                Amritsar Group of Colleges
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-semibold tracking-wider uppercase text-indigo-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Welcome to my digital portfolio
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-gradient-indigo">Kartik Chandel</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 ml-1 bg-indigo-600 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Engineering full-stack web and mobile platforms with clean design and robust backends, paired with 
              <span className="font-semibold text-slate-800"> rigorous test automation</span> using Playwright. 
              Turning complex software requirements into seamless, bug-free user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-sm hover:bg-indigo-600 shadow-lg shadow-slate-900/10 hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4" />
                View Featured Projects
              </a>

              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-sm hover:bg-emerald-100/80 transition-all hover:-translate-y-0.5 shadow-soft-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                WhatsApp Chat
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                Call Directly
              </a>
            </div>

            {/* Interactive Social Media Redirection Badges */}
            <div className="pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-2.5">
                Connect Directly Across Networks
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-soft-sm text-xs font-medium text-slate-700 transition-all hover:-translate-y-0.5 ${social.color} ${social.bgHover}`}
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

          {/* Right Column: 3D Interactive Canvas & Floating Avatar Display */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Interactive 3D WebGL Canvas */}
            <div className="w-full relative z-10">
              <Hero3DCanvas />
            </div>

            {/* Design Floating Profile Badge / Avatar Card */}
            <div className="absolute -bottom-4 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-soft-xl flex items-center gap-4 z-20 hover:scale-[1.02] transition-transform max-w-sm">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[2px] shadow-md">
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                    <img
                      src="https://avatars.githubusercontent.com/u/150036647?v=4"
                      alt="Kartik Chandel"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="select-none">KC</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Kartik Chandel</span>
                <span className="text-xs text-slate-500">Full Stack & QA Engineer</span>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-indigo-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Quality Assurance Tested
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-14">
          <a
            href="#about"
            className="flex flex-col items-center text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4 mt-1 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
