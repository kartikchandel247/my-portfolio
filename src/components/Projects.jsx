import { useState } from 'react';
import { ExternalLink, Lock, Smartphone, Globe, Bot, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';

const categories = ['All', 'Mobile', 'Web', 'AI & System', 'Enterprise / CRM', 'QA & Testing'];

export default function Projects({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="projects" showTopDivider={false} showBottomDivider={true} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="Featured Portfolio"
        title="Flagship Engineering"
        titleHighlight="Projects"
        description="Comprehensive real-world web platforms, mobile Flutter applications, AI assistants, and enterprise CRM solutions with live architecture breakdowns."
        currentId="projects"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Immediate Display + 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
              const isPrivate = project.isPrivate;
              const projectFloats = ['animate-card-float-1', 'animate-card-float-3', 'animate-card-float-2', 'animate-card-float-4'];
              const floatClass = projectFloats[index % projectFloats.length];

              return (
                <div key={project.id} className="h-full">
                  <div className={`${floatClass} pause-on-hover h-full`}>
                    <TiltCard
                      maxTilt={10}
                      scale={1.03}
                      glareColor="rgba(99, 102, 241, 0.35)"
                      className="group relative rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-indigo-400 p-7 flex flex-col justify-between transition-all duration-150 hover:shadow-2xl overflow-hidden h-full cursor-pointer"
                    >
                      {/* Periodic Cinematic Light Beam Sweep */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                      {/* Background soft glow on hover */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/70 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-200" />

                      <div>
                        {/* Category & Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-soft-sm">
                          {project.category === 'Mobile' && <Smartphone className="w-3.5 h-3.5 text-indigo-500" />}
                          {project.category === 'Web' && <Globe className="w-3.5 h-3.5 text-blue-500" />}
                          {project.category === 'AI & System' && <Bot className="w-3.5 h-3.5 text-purple-500" />}
                          {project.category === 'Enterprise / CRM' && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                          {project.category === 'QA & Testing' && <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />}
                          {project.category}
                        </span>

                        {/* Status Pill */}
                        {isPrivate ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                            <Lock className="w-3 h-3 text-amber-600" />
                            Private Enterprise
                          </span>
                        ) : project.liveUrl ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live in Production
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-800 bg-indigo-50 border border-indigo-200/80 px-2.5 py-1 rounded-full">
                            <Sparkles className="w-3 h-3 text-indigo-500" />
                            Featured Build
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors duration-150">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-1 mb-4">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 mb-6 bg-white/90 p-4 rounded-2xl border border-slate-200/80 shadow-sm group-hover:border-indigo-200 transition-colors duration-150">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                          Architecture & Key Highlights:
                        </span>
                        <ul className="space-y-1.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-200/80 text-slate-800 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors duration-150"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Bar */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                      {isPrivate ? (
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-200/70 w-full">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Confidential client codebase — Architecture showcased under NDA.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-soft-sm hover:-translate-y-0.5"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              GitHub Code
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2 rounded-xl transition-all shadow-md shadow-indigo-500/20 hover:-translate-y-0.5"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              Visit Live App
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                  </TiltCard>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Account Auto-Inspection Callout */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
              <GithubIcon className="w-5 h-5 text-indigo-400" />
              Explore More on My GitHub Profile
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Actively pushing commits, open-source repositories, and automation experiments.
            </p>
          </div>
          <a
            href="https://github.com/kartikchandel247"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-indigo-50 transition-all shrink-0 shadow-lg hover:-translate-y-0.5"
          >
            <span>Visit @kartikchandel247</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
