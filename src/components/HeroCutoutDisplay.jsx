import { useState, useRef } from 'react';
import { ShieldCheck, Code2, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCutoutDisplay() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center min-h-[520px] sm:min-h-[580px] w-full select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 1. Behind-Body Futuristic Cyber Aura & Energy Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[480px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-emerald-400/30 rounded-full blur-[70px] pointer-events-none -z-10 animate-pulse-slow" />
      
      {/* 2. Concentric Holographic Cyber Rings Rotating Around the Body */}
      {/* Ring 1: Cyan Torso Orbit */}
      <div
        className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none -z-10"
        style={{
          border: '2px dashed rgba(6, 182, 212, 0.55)',
          transform: `translate(-50%, -50%) rotateX(68deg) rotateY(${tilt.y * 1.2}deg) rotateZ(20deg)`,
          animation: 'spin 22s linear infinite',
        }}
      />

      {/* Ring 2: Violet Diagonal Orbit */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] rounded-full pointer-events-none -z-10"
        style={{
          border: '1.5px solid rgba(168, 85, 247, 0.45)',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.25)',
          transform: `translate(-50%, -50%) rotateX(-65deg) rotateY(25deg)`,
          animation: 'spin 18s linear infinite reverse',
        }}
      />

      {/* Ring 3: Emerald Outer Floating Orbit */}
      <div
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none -z-10"
        style={{
          border: '1px dashed rgba(16, 185, 129, 0.4)',
          transform: `translate(-50%, -50%) rotateX(75deg) rotateZ(-30deg)`,
          animation: 'spin 30s linear infinite',
        }}
      />

      {/* Orbiting Satellite Energy Beads */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] pointer-events-none animate-spin-slow">
        <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] absolute top-2 left-1/2" />
        <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] absolute bottom-3 right-1/4" />
      </div>

      {/* 3. The Cutout Body Container with 3D Tilt & Float Motion */}
      <div
        className="relative z-10 transition-transform duration-200 ease-out flex items-center justify-center animate-float-slow"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* High-Definition Transparent Cutout of Kartik */}
        <div className="relative group">
          <img
            src="/kartik-cutout-tight.png"
            alt="Kartik Chandel Cutout"
            className="w-auto h-[440px] sm:h-[500px] md:h-[540px] object-contain drop-shadow-[0_15px_35px_rgba(15,23,42,0.18)] drop-shadow-[0_0_35px_rgba(99,102,241,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_45px_rgba(99,102,241,0.4)]"
          />

          {/* Glowing Aura directly under feet/waist */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[240px] h-6 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-md rounded-full pointer-events-none" />
        </div>

        {/* 4. Floating Holographic Tech Badges Attached Around Body */}
        {/* Top-Right Badge: Full Stack Developer */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-2 -right-4 sm:right-2 bg-white/90 backdrop-blur-md border border-indigo-200/90 shadow-soft-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:scale-105 transition-transform z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shadow-sm">
            ⚡
          </div>
          <div className="text-left">
            <div className="text-xs font-extrabold text-slate-900">Full Stack Developer</div>
            <div className="text-[10px] text-slate-500 font-medium">React • Flutter • Node.js</div>
          </div>
        </motion.div>

        {/* Mid-Left Badge: QA Automation Specialist */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[42%] -left-8 sm:-left-6 bg-white/90 backdrop-blur-md border border-emerald-200/90 shadow-soft-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:scale-105 transition-transform z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-left">
            <div className="text-xs font-extrabold text-slate-900">QA Automation</div>
            <div className="text-[10px] text-emerald-700 font-bold">Playwright E2E Probing</div>
          </div>
        </motion.div>

        {/* Bottom-Right Badge: Live Status & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-4 right-0 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-soft-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:scale-105 transition-transform z-20"
        >
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              Kartik Chandel
              <span className="text-[10px] text-indigo-600 font-semibold">• Bilaspur, HP</span>
            </div>
            <div className="text-[10px] text-slate-500">Amritsar Group of Colleges</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
