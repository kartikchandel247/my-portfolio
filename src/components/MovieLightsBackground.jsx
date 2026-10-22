export default function MovieLightsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none hardware-accelerated">
      
      {/* 1. Hero Stage Spotlight - Conic Cyber Violet Beam */}
      <div
        className="absolute -top-40 -left-32 w-[750px] h-[1050px] opacity-70 mix-blend-multiply blur-3xl transform -rotate-18 animate-pulse-slow transform-gpu"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(99, 102, 241, 0.45) 0deg, rgba(168, 85, 247, 0.35) 40deg, transparent 75deg)',
        }}
      />

      {/* 2. Hero Stage Spotlight - Conic Neon Emerald / Cyan Beam */}
      <div
        className="absolute -top-40 -right-32 w-[800px] h-[1100px] opacity-65 mix-blend-multiply blur-3xl transform rotate-16 animate-pulse-slow-reverse transform-gpu"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(16, 185, 129, 0.4) 0deg, rgba(6, 182, 212, 0.35) 45deg, transparent 80deg)',
        }}
      />

      {/* 3. Subtle Cyber Grid & Cinema Film Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.8) 1.2px, transparent 1.2px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* 4. Floating Neon Stardust & Bokeh Flares */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[14%] left-[12%] w-3.5 h-3.5 bg-indigo-500/50 rounded-full blur-[1px] animate-bounce-float" />
        <div className="absolute top-[28%] right-[15%] w-4.5 h-4.5 bg-emerald-400/50 rounded-full blur-[1px] animate-bounce-float-delay" />
        <div className="absolute top-[48%] left-[20%] w-4 h-4 bg-purple-400/45 rounded-full blur-[1px] animate-bounce-float" />
        <div className="absolute top-[68%] right-[22%] w-5 h-5 bg-cyan-400/45 rounded-full blur-[2px] animate-bounce-float-delay" />
        <div className="absolute top-[86%] left-[16%] w-4 h-4 bg-amber-400/40 rounded-full blur-[1px] animate-bounce-float" />
      </div>

    </div>
  );
}
