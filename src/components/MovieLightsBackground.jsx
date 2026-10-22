import { useEffect, useState } from 'react';

export default function MovieLightsBackground() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* 1. Hero Stage Spotlight - Conic Cyber Violet Beam */}
      <div
        className="absolute -top-40 -left-32 w-[750px] h-[1050px] opacity-70 mix-blend-multiply blur-3xl transform -rotate-12 animate-pulse-slow"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(99, 102, 241, 0.45) 0deg, rgba(168, 85, 247, 0.35) 40deg, transparent 75deg)',
          transform: `translateY(${offsetY * 0.08}px) rotate(-18deg)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 2. Hero Stage Spotlight - Conic Neon Emerald / Cyan Beam */}
      <div
        className="absolute -top-40 -right-32 w-[800px] h-[1100px] opacity-65 mix-blend-multiply blur-3xl transform rotate-12 animate-pulse-slow-reverse"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(16, 185, 129, 0.4) 0deg, rgba(6, 182, 212, 0.35) 45deg, transparent 80deg)',
          transform: `translateY(${offsetY * 0.06}px) rotate(16deg)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 3. About Sub-page Moving Light Orb (Electric Magenta / Indigo) */}
      <div
        className="absolute top-[22%] -left-40 w-[850px] h-[650px] rounded-full blur-[140px] opacity-45 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, rgba(99, 102, 241, 0.25) 45%, rgba(59, 130, 246, 0.1) 75%, transparent 100%)',
          transform: `translate(${Math.sin(offsetY * 0.002) * 50}px, ${offsetY * 0.05}px)`,
        }}
      />

      {/* 4. Services Sub-page Moving Light Orb (Cyan & Vibrant Teal) */}
      <div
        className="absolute top-[42%] -right-40 w-[900px] h-[700px] rounded-full blur-[150px] opacity-45 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(16, 185, 129, 0.25) 50%, transparent 80%)',
          transform: `translate(${-Math.sin(offsetY * 0.002) * 60}px, 0px)`,
        }}
      />

      {/* 5. Projects Sub-page Light Ribbon (Warm Amber & Royal Indigo) */}
      <div
        className="absolute top-[62%] left-1/4 -translate-x-1/2 w-[950px] h-[750px] rounded-full blur-[160px] opacity-40 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(244, 63, 94, 0.2) 40%, rgba(99, 102, 241, 0.15) 70%, transparent 85%)',
          transform: `translateY(${Math.cos(offsetY * 0.002) * 40}px)`,
        }}
      />

      {/* 6. Tech Stack & Contact Sub-page Light Glow (Cyber Emerald & Blue) */}
      <div
        className="absolute top-[82%] -right-32 w-[900px] h-[800px] rounded-full blur-[160px] opacity-50 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(99, 102, 241, 0.25) 45%, rgba(14, 165, 233, 0.2) 70%, transparent 85%)',
        }}
      />

      {/* 7. Subtle Cyber Grid & Cinema Film Mesh */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.8) 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* 8. Floating Neon Stardust & Bokeh Flares */}
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
