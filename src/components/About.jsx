import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Award, CheckCircle2, Cpu, Bot, ArrowUpRight, Sparkles, ShieldCheck, Code2, Zap } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';
import ScrollPopStats from './ScrollPopStats';
import TypewriterText from './TypewriterText';
import { slideLeft, slideRight, fadeUp, zoomIn } from '../utils/motionVariants';

const pillarIcons = {
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Bot: Bot,
};

export default function About({ onNavigate }) {
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: false, amount: 0.25 });

  const pillarsRef = useRef(null);
  const isPillarsInView = useInView(pillarsRef, { once: false, amount: 0.2 });

  const stats = [
    { number: '4+', label: 'Flagship Projects', detail: 'Mobile, Web, CRM, AI' },
    { number: '100+', label: 'QA Test Scenarios', detail: 'Automated & Manual Probes' },
    { number: '100%', label: 'Commitment', detail: 'Clean code & Zero regressions' },
    { number: '24/7', label: 'Availability', detail: 'Direct on WhatsApp & Email' },
  ];

  return (
    <section id="about" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="about" showTopDivider={false} showBottomDivider={true} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="About Kartik Chandel"
        title="Developer Mindset."
        titleHighlight="QA Precision."
        description="I don't just build applications — I ensure they operate flawlessly under every real-world edge case. Discover my engineering philosophy, QA standards, and passion for autonomous innovation below."
        currentId="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Main Intro Section: Photo + Typewriter Bio Card */}
        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Portrait Photo with 3D Tilt & Magnetic Glare */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
            variants={slideLeft}
            className="lg:col-span-5 flex justify-center will-change-transform"
          >
            <TiltCard maxTilt={10} scale={1.04} horizontalMove={16} className="relative w-full max-w-[360px]">
              {/* Radiant Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-emerald-500/30 rounded-3xl blur-xl transition-all" />

              <div className="relative rounded-3xl p-3.5 bg-white/95 border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="w-full h-[390px] rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src="/kartik-portrait.jpg"
                    alt="Kartik Chandel Profile"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Top Gradient Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Location Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold">{personalInfo.location}</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">India</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Main Intro Card with Typewriter Headline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
            variants={slideRight}
            className="lg:col-span-7 space-y-6 will-change-transform text-left"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft-sm space-y-5 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-0 rounded-[inherit]" />

              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Identity & Journey</span>
              </div>

              {/* Dynamic Typewriter Headline */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                <TypewriterText
                  text="Full Stack Web & Mobile Engineer with Rigorous QA Testing Precision."
                  speed={12}
                  delay={40}
                  className="text-slate-900 font-extrabold"
                  cursorColor="bg-indigo-600"
                />
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Based in <strong className="text-slate-900">Bilaspur, Himachal Pradesh</strong>, and currently pursuing Computer Science & Engineering at <strong className="text-slate-900">{personalInfo.education.institution}</strong>. 
                I bridge the gap between building modern client-facing applications and enforcing industrial-grade automated quality assurance.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Having broken real-world software across countless edge-case scenarios, I code with a defensive, performance-first mindset. My work ensures high-contrast light aesthetics, sub-second response times, and 100% regression-free deployments.
              </p>

              {/* Academic & Hometown Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{personalInfo.education.institution}</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">{personalInfo.education.status} • {personalInfo.education.focus}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Bilaspur, Himachal Pradesh</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">Hometown Roots • Remote & Hybrid Ready</p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personalInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100/70 px-5 py-3 rounded-xl transition-all border border-indigo-200/80 shadow-sm hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 2. Core Pillars: 3 Feature Cards (Philosophy, QA, Innovation) */}
        <div ref={pillarsRef} className="mt-20 space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
              Core Engineering Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How I Approach <span className="text-gradient-indigo">Every Project</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              A balanced trinity of clean code craftsmanship, uncompromising test automation, and cutting-edge AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutPillars.map((pillar, idx) => {
              const IconComponent = pillarIcons[pillar.icon] || Cpu;
              // Alternating entrance: 0 -> slideLeft, 1 -> slideRight, 2 -> slideLeft
              const cardVariant = idx % 2 === 0 ? slideLeft : slideRight;

              return (
                <motion.div
                  key={pillar.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
                  variants={cardVariant}
                  className="h-full will-change-transform"
                >
                  <TiltCard
                    maxTilt={9}
                    scale={1.045}
                    horizontalMove={15}
                    className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex flex-col justify-between overflow-hidden relative group cursor-pointer"
                  >
                    {/* Beam Sweep */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 rounded-[inherit]" />

                    {/* Ambient Flare */}
                    <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${pillar.accentGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-300`} />

                    <div>
                      {/* Top Header Badge & Icon */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-sm ${pillar.color}`}>
                          <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:rotate-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border bg-slate-50 text-slate-700 border-slate-200/80 shadow-2xs">
                          {pillar.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <div className="text-xs font-semibold text-indigo-600/90 mt-0.5 mb-3">
                        {pillar.subtitle}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {pillar.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {pillar.points.map((pt) => (
                          <li key={pt} className="text-[11px] text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                      <span>Engineering Standard</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Stats Row with Scroll-Triggered Pop-Up Motion & Dynamic Counters */}
        <div className="mt-20 pt-12 border-t border-slate-200/70">
          <ScrollPopStats stats={stats} />
        </div>

      </div>
    </section>
  );
}
