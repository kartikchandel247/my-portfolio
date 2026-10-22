import { ArrowRight, Code2, ShieldCheck, Sparkles, Smartphone, Bot, Cpu, CheckCircle2, MessageSquare, Mail, Phone, ExternalLink } from 'lucide-react';
import Hero from './Hero';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import { personalInfo, projects, services } from '../data/portfolioData';

export default function HomeOverview({ onNavigate }) {
  const quickStats = [
    { number: '4+', label: 'Flagship Projects', detail: 'Mobile, Web, CRM, AI' },
    { number: '100+', label: 'QA Test Scenarios', detail: 'Automated & Manual Probes' },
    { number: '100%', label: 'Commitment', detail: 'Clean code & Zero regressions' },
    { number: '24/7', label: 'Availability', detail: 'Direct on WhatsApp & Email' },
  ];

  const featuredProjects = projects.slice(0, 2);
  const featuredServices = services.slice(0, 2);

  const topTech = [
    { name: 'React', cat: 'Frontend', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { name: 'Flutter', cat: 'Mobile', color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { name: 'Playwright', cat: 'QA Testing', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'Node.js', cat: 'Backend', color: 'text-green-600 bg-green-50 border-green-200' },
    { name: 'Python', cat: 'AI & Scripting', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { name: 'Tailwind CSS', cat: 'Styling', color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
    { name: 'Supabase', cat: 'Database', color: 'text-teal-600 bg-teal-50 border-teal-200' },
    { name: 'Docker', cat: 'DevOps', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. Hero Section with 3D Rings & Cutout */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Compact Quick Stats Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-soft-xl">
          {quickStats.map((stat, idx) => {
            const floats = ['animate-card-float-1', 'animate-card-float-2', 'animate-card-float-3', 'animate-card-float-4'];
            return (
              <div key={stat.label} className="text-center p-3 rounded-2xl hover:bg-slate-50/80 transition-colors">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-indigo mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">{stat.detail}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Short About Snapshot (Brief 2-Sentence Bio + Teaser Highlights) */}
      <section className="relative py-8 overflow-hidden">
        <SectionBackground variant="about" showTopDivider={false} showBottomDivider={false} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
                  About Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Developer Mindset. <span className="text-gradient-indigo">QA Precision.</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Based in Bilaspur, HP, and studying at {personalInfo.education.institution}. 
                  I bridge modern web & mobile engineering (React, Flutter, Node.js) with deep automated test coverage using Playwright to ensure zero regressions in production.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100/80 px-5 py-3 rounded-xl transition-all border border-indigo-200 shadow-2xs group cursor-pointer"
                  >
                    <span>Read Full Story & Engineering Superpowers</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* 2 Quick Superpower Teasers */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-indigo-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Full Stack & Mobile</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">React, Flutter, Node.js APIs & Supabase backends.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-emerald-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Automated QA Edge Probing</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">Playwright E2E suites, boundary probing & visual reports.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Short Featured Services Snapshot (Top 2 Services) */}
      <section className="relative py-6 overflow-hidden">
        <SectionBackground variant="services" showTopDivider={false} showBottomDivider={false} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
                Services Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                What I <span className="text-gradient-indigo">Deliver</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 group cursor-pointer self-start sm:self-auto"
            >
              <span>Explore All 4 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service, idx) => (
              <TiltCard
                key={service.id}
                maxTilt={8}
                scale={1.02}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-indigo-300 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {t}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Short Featured Projects Snapshot (Top 2 Projects) */}
      <section className="relative py-6 overflow-hidden">
        <SectionBackground variant="projects" showTopDivider={false} showBottomDivider={false} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
                Portfolio Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                Flagship <span className="text-gradient-indigo">Builds</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 group cursor-pointer self-start sm:self-auto"
            >
              <span>View All 5 Projects & Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <TiltCard
                key={p.id}
                maxTilt={8}
                scale={1.02}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200/60">
                      {p.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {p.techStack.slice(0, 3).join(' • ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-xs text-indigo-600/90 font-medium mb-3">{p.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                  <span onClick={() => onNavigate('projects')} className="hover:underline flex items-center gap-1">
                    Read Architecture & Highlights
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Short Tech Stack Quick Ribbon */}
      <section className="relative py-6 overflow-hidden">
        <SectionBackground variant="skills" showTopDivider={false} showBottomDivider={false} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft-sm text-center space-y-6">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
                Skills Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Core <span className="text-gradient-indigo">Ecosystem</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Full-stack web, mobile Flutter, and industrial QA automation testing.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
              {topTech.map((item) => (
                <span
                  key={item.name}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border shadow-2xs ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
            </div>

            <div>
              <button
                onClick={() => onNavigate('skills')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100/70 px-4 py-2.5 rounded-xl transition-all border border-indigo-200 cursor-pointer"
              >
                <span>View Complete 20+ Skills & Proficiency Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Short Direct Contact CTA Banner */}
      <section className="relative py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                Ready to Collaborate
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Let's Build Something Exceptional Together
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Available for full-time software engineering roles, contract projects, and QA automation consulting.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-indigo-50 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Open Full Contact Form</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
