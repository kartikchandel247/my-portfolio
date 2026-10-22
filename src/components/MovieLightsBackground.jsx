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
      {/* 1. Cinematic Movie Light Beam - Left Spotlight */}
      <div
        className="absolute -top-32 -left-20 w-[600px] h-[900px] opacity-60 mix-blend-multiply blur-3xl transform -rotate-12 animate-pulse-slow"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(99, 102, 241, 0.35) 0deg, rgba(168, 85, 247, 0.25) 35deg, transparent 70deg)',
          transform: `translateY(${offsetY * 0.08}px) rotate(-18deg)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 2. Cinematic Movie Light Beam - Right Spotlight */}
      <div
        className="absolute -top-32 -right-20 w-[650px] h-[950px] opacity-55 mix-blend-multiply blur-3xl transform rotate-12 animate-pulse-slow-reverse"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(16, 185, 129, 0.3) 0deg, rgba(6, 182, 212, 0.25) 40deg, transparent 75deg)',
          transform: `translateY(${offsetY * 0.05}px) rotate(16deg)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 3. Center Ambient Stage Light (Magenta / Violet Glow) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] rounded-full blur-[130px] opacity-40 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.28) 0%, rgba(99, 102, 241, 0.18) 45%, rgba(59, 130, 246, 0.08) 70%, transparent 100%)',
          transform: `translate(-50%, ${offsetY * 0.1}px)`,
        }}
      />

      {/* 4. Mid-Page Movie Glow (Amber / Gold Accent) */}
      <div
        className="absolute top-[55%] -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(244, 63, 94, 0.14) 50%, transparent 80%)',
        }}
      />

      {/* 5. Lower Section Emerald / Cyan Glow */}
      <div
        className="absolute top-[80%] -right-32 w-[700px] h-[700px] rounded-full blur-[150px] opacity-40 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(14, 165, 233, 0.18) 50%, transparent 80%)',
        }}
      />

      {/* 6. Subtle Cyber / Film Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 7. Floating Light Bokeh Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[18%] left-[15%] w-3 h-3 bg-indigo-400/40 rounded-full blur-[1px] animate-bounce-float" />
        <div className="absolute top-[32%] right-[18%] w-4 h-4 bg-emerald-400/40 rounded-full blur-[1px] animate-bounce-float-delay" />
        <div className="absolute top-[65%] left-[25%] w-3 h-3 bg-purple-400/35 rounded-full blur-[1px] animate-bounce-float" />
        <div className="absolute top-[82%] right-[22%] w-5 h-5 bg-cyan-400/30 rounded-full blur-[2px] animate-bounce-float-delay" />
      </div>
    </div>
  );
}
