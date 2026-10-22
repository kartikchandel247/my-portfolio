import { useMemo } from 'react';

const variantThemes = {
  hero: {
    primary: 'radial-gradient(circle, rgba(99, 102, 241, 0.32) 0%, rgba(168, 85, 247, 0.22) 50%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.22) 55%, transparent 80%)',
    tertiary: 'radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
    primaryPos: 'top-10 -left-20 w-[750px] h-[750px]',
    secondaryPos: 'bottom-0 -right-20 w-[720px] h-[720px]',
    tertiaryPos: 'top-1/3 left-1/2 -translate-x-1/2 w-[580px] h-[580px]',
    stardustColors: [
      'bg-indigo-500 shadow-[0_0_10px_#6366f1]',
      'bg-emerald-400 shadow-[0_0_10px_#10b981]',
      'bg-purple-400 shadow-[0_0_10px_#a855f7]',
      'bg-cyan-400 shadow-[0_0_10px_#06b6d4]',
    ],
  },
  about: {
    primary: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(99, 102, 241, 0.22) 45%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(20, 184, 166, 0.2) 55%, transparent 80%)',
    tertiary: 'radial-gradient(circle, rgba(244, 63, 94, 0.16) 0%, rgba(168, 85, 247, 0.16) 50%, transparent 75%)',
    primaryPos: 'top-12 -left-32 w-[800px] h-[800px]',
    secondaryPos: 'bottom-10 right-0 w-[750px] h-[750px]',
    tertiaryPos: 'top-1/2 left-1/3 w-[600px] h-[600px]',
    stardustColors: [
      'bg-purple-500 shadow-[0_0_10px_#a855f7]',
      'bg-indigo-400 shadow-[0_0_10px_#6366f1]',
      'bg-emerald-400 shadow-[0_0_10px_#10b981]',
      'bg-pink-400 shadow-[0_0_10px_#ec4899]',
    ],
  },
  services: {
    primary: 'radial-gradient(circle, rgba(6, 182, 212, 0.32) 0%, rgba(59, 130, 246, 0.22) 50%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(14, 165, 233, 0.2) 55%, transparent 80%)',
    tertiary: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.16) 50%, transparent 70%)',
    primaryPos: 'top-20 -right-28 w-[820px] h-[820px]',
    secondaryPos: 'bottom-8 -left-20 w-[760px] h-[760px]',
    tertiaryPos: 'top-1/3 left-1/4 w-[620px] h-[620px]',
    stardustColors: [
      'bg-cyan-400 shadow-[0_0_10px_#06b6d4]',
      'bg-blue-500 shadow-[0_0_10px_#3b82f6]',
      'bg-emerald-400 shadow-[0_0_10px_#10b981]',
      'bg-indigo-400 shadow-[0_0_10px_#6366f1]',
    ],
  },
  projects: {
    primary: 'radial-gradient(circle, rgba(99, 102, 241, 0.32) 0%, rgba(139, 92, 246, 0.22) 50%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(244, 63, 94, 0.18) 50%, transparent 75%)',
    tertiary: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.16) 50%, transparent 70%)',
    primaryPos: 'top-16 left-0 w-[850px] h-[850px]',
    secondaryPos: 'bottom-12 -right-32 w-[800px] h-[800px]',
    tertiaryPos: 'top-1/2 right-1/4 w-[620px] h-[620px]',
    stardustColors: [
      'bg-indigo-500 shadow-[0_0_10px_#6366f1]',
      'bg-amber-400 shadow-[0_0_10px_#f59e0b]',
      'bg-violet-400 shadow-[0_0_10px_#8b5cf6]',
      'bg-rose-400 shadow-[0_0_10px_#f43f5e]',
    ],
  },
  skills: {
    primary: 'radial-gradient(circle, rgba(16, 185, 129, 0.32) 0%, rgba(6, 182, 212, 0.22) 50%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(168, 85, 247, 0.2) 55%, transparent 80%)',
    tertiary: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
    primaryPos: 'top-20 -left-20 w-[820px] h-[820px]',
    secondaryPos: 'bottom-10 -right-24 w-[780px] h-[780px]',
    tertiaryPos: 'top-1/3 left-1/2 w-[600px] h-[600px]',
    stardustColors: [
      'bg-emerald-400 shadow-[0_0_10px_#10b981]',
      'bg-teal-400 shadow-[0_0_10px_#14b8a6]',
      'bg-indigo-400 shadow-[0_0_10px_#6366f1]',
      'bg-cyan-400 shadow-[0_0_10px_#06b6d4]',
    ],
  },
  contact: {
    primary: 'radial-gradient(circle, rgba(244, 63, 94, 0.22) 0%, rgba(99, 102, 241, 0.26) 50%, transparent 75%)',
    secondary: 'radial-gradient(circle, rgba(14, 165, 233, 0.26) 0%, rgba(16, 185, 129, 0.2) 55%, transparent 80%)',
    tertiary: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
    primaryPos: 'top-10 -right-28 w-[850px] h-[850px]',
    secondaryPos: 'bottom-0 -left-24 w-[800px] h-[800px]',
    tertiaryPos: 'top-1/2 right-1/3 w-[620px] h-[620px]',
    stardustColors: [
      'bg-rose-400 shadow-[0_0_10px_#f43f5e]',
      'bg-indigo-500 shadow-[0_0_10px_#6366f1]',
      'bg-sky-400 shadow-[0_0_10px_#0ea5e9]',
      'bg-purple-400 shadow-[0_0_10px_#a855f7]',
    ],
  },
};

export default function SectionBackground({ variant = 'about', showTopDivider = true, showBottomDivider = true }) {
  const theme = useMemo(() => variantThemes[variant] || variantThemes.about, [variant]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
      
      {/* 1. Primary Drifting Aurora Plasma Orb */}
      <div
        className={`absolute ${theme.primaryPos} rounded-full blur-[130px] opacity-75 animate-aurora-1`}
        style={{ background: theme.primary }}
      />

      {/* 2. Secondary Counter-Drifting Aurora Plasma Orb */}
      <div
        className={`absolute ${theme.secondaryPos} rounded-full blur-[140px] opacity-70 animate-aurora-2`}
        style={{ background: theme.secondary }}
      />

      {/* 3. Tertiary Accent Moving Flare */}
      <div
        className={`absolute ${theme.tertiaryPos} rounded-full blur-[120px] opacity-60 animate-aurora-3`}
        style={{ background: theme.tertiary }}
      />

      {/* 4. Moving Cyber Grid / Film Dot Matrix */}
      <div
        className="absolute inset-0 opacity-[0.045] animate-grid-mesh pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.85) 1.2px, transparent 1.2px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* 5. Floating Glowing Stardust / Bokeh Beads */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-[18%] left-[10%] w-3 h-3 rounded-full blur-[0.5px] animate-stardust-1 ${theme.stardustColors[0]}`}
        />
        <div
          className={`absolute top-[34%] right-[12%] w-4 h-4 rounded-full blur-[1px] animate-stardust-2 ${theme.stardustColors[1]}`}
        />
        <div
          className={`absolute top-[62%] left-[18%] w-3.5 h-3.5 rounded-full blur-[0.5px] animate-stardust-1 ${theme.stardustColors[2]}`}
        />
        <div
          className={`absolute top-[78%] right-[16%] w-4 h-4 rounded-full blur-[1px] animate-stardust-2 ${theme.stardustColors[3]}`}
        />
      </div>

      {/* 6. Subtle Animated Flowing Glowing Dividers */}
      {showTopDivider && (
        <div className="absolute top-0 left-0 right-0 h-[1.5px] animated-gradient-border opacity-40" />
      )}
      {showBottomDivider && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] animated-gradient-border opacity-40" />
      )}

      {/* 7. Protective Frosted Glass Veil for Crystal Clear Text Readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none" />

    </div>
  );
}
