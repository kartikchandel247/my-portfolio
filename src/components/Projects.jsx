import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Lock, Smartphone, Globe, Bot, ShieldCheck, Check, Sparkles, AlertCircle, Star, GitFork, ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';
import { slideLeft, slideRight, fadeUp, zoomIn } from '../utils/motionVariants';

const categories = ['All', 'Mobile', 'Web', 'AI & System', 'Enterprise / CRM', 'QA & Testing'];

// Curated Fallback in case GitHub API hits rate limit
const fallbackRepos = [
  {
    id: 1,
    name: 'Kira-personal-jarvis-os',
    description: 'Autonomous voice and desktop/mobile automation AI assistant with Kokoro TTS, model routing, and system daemons.',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
    html_url: 'https://github.com/kartikchandel247/Kira-personal-jarvis-os',
    topics: ['ai-agent', 'jarvis', 'fastapi', 'tts', 'docker'],
  },
  {
    id: 2,
    name: 'Mahajan-rides41',
    description: 'Live commercial travel booking portal built with React, Supabase backend, and WhatsApp reservation dispatch.',
    stargazers_count: 2,
    forks_count: 0,
    language: 'JavaScript',
    html_url: 'https://github.com/kartikchandel247/Mahajan-rides41',
    topics: ['react', 'supabase', 'vercel', 'commercial'],
  },
  {
    id: 3,
    name: 'kartikchandel247',
    description: 'Special repository for profile configurations, automated scripts, and continuous integration workflows.',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Markdown',
    html_url: 'https://github.com/kartikchandel247',
    topics: ['portfolio', 'developer', 'qa-automation'],
  },
];

export default function Projects({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [githubRepos, setGithubRepos] = useState(fallbackRepos);
  const [loadingRepos, setLoadingRepos] = useState(true);

  const projectsGridRef = useRef(null);
  const isProjectsInView = useInView(projectsGridRef, { once: false, amount: 0.1 });

  const githubGridRef = useRef(null);
  const isGithubInView = useInView(githubGridRef, { once: false, amount: 0.15 });

  // Auto-fetch public repositories from https://github.com/kartikchandel247
  useEffect(() => {
    let isMounted = true;
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/kartikchandel247/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setGithubRepos(data);
          }
        }
      } catch (err) {
        // Use curated fallback gracefully
      } finally {
        if (isMounted) setLoadingRepos(false);
      }
    }

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

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
        description="Comprehensive real-world mobile Flutter applications, deployed web platforms, autonomous AI assistants, and enterprise CRM solutions with live architecture breakdowns."
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Alternating Slide-In (Odd from Left, Even from Right) + 3D Tilt */}
        <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isPrivate = project.isPrivate;
            // Odd cards enter from Left, Even cards enter from Right
            const cardVariant = index % 2 === 0 ? slideLeft : slideRight;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={isProjectsInView ? 'visible' : 'hidden'}
                variants={cardVariant}
                className="h-full will-change-transform"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.045}
                  horizontalMove={16}
                  glareColor="rgba(99, 102, 241, 0.3)"
                  className="rounded-3xl p-7 sm:p-9 bg-white border border-slate-200/90 hover:border-indigo-400 h-full shadow-soft-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all flex flex-col justify-between group overflow-hidden relative cursor-pointer"
                >
                  {/* Periodic Cinematic Light Beam Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                  <div>
                    {/* Top Row: Category Badge + Privacy / Live Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60">
                        {project.category}
                      </span>

                      {isPrivate ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-bold text-amber-700">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Confidential Enterprise</span>
                        </div>
                      ) : project.liveUrl ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live in Production</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-600">
                          <Sparkles className="w-3 h-3 text-indigo-500" />
                          <span>{project.badgeText}</span>
                        </div>
                      )}
                    </div>

                    {/* Project Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600/90 mt-1 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Core Engineering Highlights:</span>
                      </div>
                      {project.highlights.map((h) => (
                        <div key={h} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Private Repository Notice if applicable */}
                    {isPrivate && (
                      <div className="mb-4 p-3 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">
                          <strong>Enterprise Restricted:</strong> Repository code is confidential under client NDA. Architecture and verification metrics available upon direct request.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Action Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <div className="flex items-center gap-3">
                      {/* GitHub Link (Only for public repos) */}
                      {!isPrivate && project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}

                      {/* Live Demo Link */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-white bg-slate-900 hover:bg-indigo-600 px-3.5 py-1.5 rounded-xl transition-all shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      Build #0{index + 1}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* 2. GitHub Dynamic Grid: Auto-Fetched Public Repositories (Zoom-In Entrance) */}
        <div ref={githubGridRef} className="mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
                GitHub Live Sync
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Public Repositories & <span className="text-gradient-indigo">Open Source</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Real-time synchronized public codebases directly from{' '}
                <a
                  href="https://github.com/kartikchandel247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-600 hover:underline inline-flex items-center gap-1"
                >
                  github.com/kartikchandel247
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>

            <a
              href="https://github.com/kartikchandel247?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-indigo-600 transition-all self-start sm:self-auto shadow-sm cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Explore All Repositories</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.slice(0, 6).map((repo, idx) => (
              <motion.div
                key={repo.id || repo.name}
                initial="hidden"
                animate={isGithubInView ? 'visible' : 'hidden'}
                variants={zoomIn}
                transition={{ delay: idx * 0.08 }}
                className="h-full will-change-transform"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.04}
                  horizontalMove={12}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-indigo-400 hover:shadow-xl transition-all h-full flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:text-indigo-600 transition-colors">
                        <Code2 className="w-4 h-4 text-indigo-500" />
                        <span className="truncate max-w-[180px]">{repo.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          {repo.stargazers_count || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-slate-400" />
                          {repo.forks_count || 0}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {repo.description || 'Open-source software component crafted with clean architecture and automated tests.'}
                    </p>

                    {/* Repo Topics / Tech Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600">
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      {repo.language || 'Software'}
                    </span>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
