import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function SubpageHeader({
  badge = 'Dedicated Dossier',
  title = 'Page Title',
  titleHighlight = '',
  description = '',
  currentId = 'about',
  onNavigate,
}) {
  const subpages = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="pt-24 pb-8 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Back Button Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          onClick={() => onNavigate && onNavigate('home')}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-soft-sm transition-all hover:-translate-x-0.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-indigo-500" />
          <span>Back to Home Overview</span>
        </button>

        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/80 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-indigo-600 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Home className="w-3 h-3 text-slate-400" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-indigo-600 font-bold capitalize">{currentId === 'skills' ? 'Tech Stack' : currentId}</span>
        </div>
      </div>

      {/* Hero Title & Description for Subpage */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          {badge}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title} {titleHighlight && <span className="text-gradient-indigo">{titleHighlight}</span>}
        </h1>

        {description && (
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        )}
      </div>

      {/* Quick Jump Subpage Switcher Pills (Ultra-convenient for Mobile & Tablet) */}
      <div className="flex items-center gap-2 pt-6 overflow-x-auto no-scrollbar pb-1">
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
          Switch Subpage:
        </span>
        {subpages.map((p) => {
          const isActive = currentId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onNavigate && onNavigate(p.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/20'
                  : 'bg-white/85 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 border border-slate-200/80'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
