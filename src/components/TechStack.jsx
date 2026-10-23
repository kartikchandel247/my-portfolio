import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Database, ShieldCheck, CheckCircle, Terminal, Layers, Sparkles, ArrowRight, Wrench, GitBranch } from 'lucide-react';
import { skills } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';
import { zoomIn, slideLeft, slideRight, fadeUp } from '../utils/motionVariants';

const categoryIcons = {
  'Frontend & Mobile': Code2,
  'Backend & Database': Database,
  'Quality Assurance & Testing': ShieldCheck,
  'DevOps & Tools': Wrench,
};

const categoryAccents = {
  'Frontend & Mobile': {
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    borderHover: 'hover:border-indigo-400',
    barColor: 'bg-indigo-600',
  },
  'Backend & Database': {
    badge: 'bg-violet-50 text-violet-700 border-violet-200/80',
    iconBg: 'bg-violet-50 border-violet-100 text-violet-600',
    borderHover: 'hover:border-violet-400',
    barColor: 'bg-violet-600',
  },
  'Quality Assurance & Testing': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    borderHover: 'hover:border-emerald-400',
    barColor: 'bg-emerald-600',
  },
  'DevOps & Tools': {
    badge: 'bg-sky-50 text-sky-700 border-sky-200/80',
    iconBg: 'bg-sky-50 border-sky-100 text-sky-600',
    borderHover: 'hover:border-sky-400',
    barColor: 'bg-sky-600',
  },
};

export default function TechStack({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: false, amount: 0.15 });

  const terminalRef = useRef(null);
  const isTerminalInView = useInView(terminalRef, { once: false, amount: 0.2 });

  const categories = ['All', 'Frontend & Mobile', 'Backend & Database', 'Quality Assurance & Testing', 'DevOps & Tools'];

  const filteredGroups = activeFilter === 'All'
    ? skills
    : skills.filter((g) => g.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(g.category.toLowerCase()));

  return (
    <section id="skills" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="skills" showTopDivider={false} showBottomDivider={true} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="Skills & Ecosystem"
        title="Technical Stack &"
        titleHighlight="Tools"
        description="A specialized, battle-tested stack spanning modern full-stack web architectures, mobile Flutter development, and industrial-strength QA test automation with Playwright."
        currentId="skills"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 1. Category Cards with Zoom-In Entrance (scale: 0.85 -> 1.0) + 3D Tilt */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group, index) => {
            const IconComponent = categoryIcons[group.category] || Code2;
            const accent = categoryAccents[group.category] || categoryAccents['Frontend & Mobile'];
            // Alternating entrance: even slideLeft, odd slideRight
            const cardVariant = index % 2 === 0 ? slideLeft : slideRight;

            return (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
                variants={cardVariant}
                transition={{ delay: index * 0.1 }}
                className="h-full will-change-transform"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.045}
                  horizontalMove={14}
                  glareColor="rgba(99, 102, 241, 0.3)"
                  className={`rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 ${accent.borderHover} transition-all flex flex-col justify-between h-full shadow-soft-sm hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden group cursor-pointer`}
                >
                  {/* Periodic Cinematic Light Beam Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-200 ${accent.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-2xs ${accent.badge}`}>
                        Domain #{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-5">
                      {group.description}
                    </p>

                    {/* Interactive Floating Hover Badges */}
                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.03, x: 2, transition: { duration: 0.15 } }}
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            <span className="text-xs font-bold text-slate-800">{skill.name}</span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-indigo-600">
                            {skill.badge || skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    <span>Verified Competency</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Interactive Terminal Architecture Simulator (Zoom-In Entrance) */}
        <div ref={terminalRef} className="mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
            variants={zoomIn}
            className="rounded-3xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden font-mono text-xs sm:text-sm"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs text-slate-400 font-sans font-bold">kartik-chandel@dev-environment: ~/architecture-pipeline</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-bold hidden sm:inline-block">● Pipeline Active</span>
            </div>

            {/* Code Pipeline Log */}
            <div className="space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
              <p className="text-emerald-400">$ npx playwright test --project=chromium,firefox,webkit</p>
              <p className="text-slate-400">Running 100+ E2E automated test scenarios across Chromium, WebKit & Firefox...</p>
              <p className="text-indigo-400">✓ Auth cascade barrier check passed (24ms)</p>
              <p className="text-indigo-400">✓ Offline lead queue synchronization validated with Supabase (41ms)</p>
              <p className="text-indigo-400">✓ 300m GPS geofencing radius assertion verified (18ms)</p>
              <p className="text-emerald-300 font-bold">Passed: 100 / 100 (100.0%) — 0 regressions detected. Ready for production deployment on Vercel.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
