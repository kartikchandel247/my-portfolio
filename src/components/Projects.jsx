import { useState } from 'react';
import { ExternalLink, Lock, Smartphone, Globe, Bot, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const categories = ['All', 'Mobile', 'Web', 'AI & System', 'Enterprise / CRM', 'QA & Testing'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Flagship Engineering <span className="text-gradient-indigo">Projects</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real-world web platforms, mobile Flutter applications, AI assistants, and enterprise CRM solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isPrivate = project.isPrivate;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background soft glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/60 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform" />

                <div>
                  {/* Category & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-soft-sm">
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
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 bg-white/80 p-4 rounded-2xl border border-slate-200/70">
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
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-200/70 text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                  {isPrivate ? (
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-800 bg-amber-50/70 px-3 py-1.5 rounded-xl border border-amber-200/60 w-full">
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
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-soft-sm"
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
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2 rounded-xl transition-all shadow-md shadow-indigo-500/20"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Visit Live App
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Account Auto-Inspection Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
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
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-indigo-50 transition-all shrink-0 shadow-lg"
          >
            <span>Visit @kartikchandel247</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
