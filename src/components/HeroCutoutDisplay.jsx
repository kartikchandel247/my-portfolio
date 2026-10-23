import { useRef } from 'react';

/**
 * HeroCutoutDisplay
 * 
 * Posture-tailored holographic cyber presentation for Kartik Chandel:
 * 1. 3D Concentric Cyber Hologram Pedestal under feet (roots the standing posture).
 * 2. Angled Hologram Gimbal Orbit around chest & shoulders.
 * 3. Neon Cyber Planetary Energy Belt orbiting waist & hands in pockets.
 * 4. Holographic Biometric Laser Scan wave traveling vertically along silhouette.
 * 5. Floating Glassmorphic Cyber HUD telemetry tags framing his posture.
 * 6. High-Definition Cutout rendering with studio-grade contrast and neon rim-glow.
 */
export default function HeroCutoutDisplay() {
  const containerRef = useRef(null);
  const tiltBoxRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    if (!containerRef.current || !tiltBoxRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = ((y / (rect.height / 2)) * -5).toFixed(2);
    const tiltY = ((x / (rect.width / 2)) * 5).toFixed(2);

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (tiltBoxRef.current) {
        tiltBoxRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (tiltBoxRef.current) {
      tiltBoxRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] w-full select-none overflow-visible"
      style={{ perspective: '1200px' }}
    >
      {/* 
        CENTRAL TILT CONTAINER:
        Ensures Kartik and all posture-aligned hologram layers move in perfect unity.
      */}
      <div
        ref={tiltBoxRef}
        className="relative inline-flex items-center justify-center transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Radiant Cyber Aura directly behind his torso */}
        <div className="absolute top-[48%] left-1/2 w-[240px] sm:w-[300px] h-[360px] sm:h-[460px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-cyan-400/30 rounded-full blur-[60px] sm:blur-[70px] pointer-events-none z-0 animate-cyber-aura" />

        {/* ============================================================== */}
        {/* 1. 3D HOLOGRAPHIC CYBER PEDESTAL (UNDER FEET)                  */}
        {/* ============================================================== */}
        <div
          className="absolute pointer-events-none z-5"
          style={{
            bottom: '-22px',
            left: '50%',
            transform: 'translateX(-50%) rotateX(75deg)',
            width: '320px',
            height: '320px',
          }}
        >
          {/* Ground Energy Radial Wash */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/30 to-purple-500/20 blur-xl" />

          {/* Outer Concentric Radar Ring with Crosshair Ticks */}
          <div
            className="absolute inset-0 rounded-full border border-cyan-400/40 animate-radar-spin"
            style={{
              boxShadow: '0 0 25px rgba(6, 182, 212, 0.4), inset 0 0 25px rgba(6, 182, 212, 0.2)',
            }}
          >
            {/* Compass / Radar Marker Nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
          </div>

          {/* Mid Counter-Rotating Dashed Orbit */}
          <div
            className="absolute inset-[18%] rounded-full border-2 border-dashed border-purple-400/60 animate-radar-reverse"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.35)',
            }}
          />

          {/* Inner High-Energy Core */}
          <div className="absolute inset-[36%] rounded-full border border-cyan-300/80 bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
        </div>

        {/* ============================================================== */}
        {/* 2. BACK HALF OF ORBITAL ENERGY RINGS (z-index: 5)             */}
        {/* ============================================================== */}

        {/* Chest Orbit Ring (Back Half) - Electric Violet */}
        <div
          className="absolute pointer-events-none overflow-visible w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px]"
          style={{
            top: '41%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(-66deg) rotateZ(16deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: 5,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw"
            style={{
              border: '2px solid rgba(168, 85, 247, 0.85)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 10px rgba(168, 85, 247, 0.3)',
            }}
          />
        </div>

        {/* Waist Orbit Ring (Back Half) - Cyber Cyan */}
        <div
          className="absolute pointer-events-none overflow-visible w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px]"
          style={{
            top: '59%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(72deg) rotateZ(-12deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: 5,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.9)',
              boxShadow: '0 0 24px rgba(6, 182, 212, 0.65), inset 0 0 12px rgba(6, 182, 212, 0.35)',
            }}
          />
        </div>

        {/* ============================================================== */}
        {/* 3. HIGH-DEFINITION CUTOUT IMAGE (z-index: 10)                 */}
        {/* ============================================================== */}
        <div className="relative z-10 flex items-center justify-center">
          <img
            src="/kartik-cutout-tight.png"
            alt="Kartik Chandel - Full Stack & SDET Portfolio"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-auto h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] object-contain transition-all duration-300"
            style={{
              // Studio-grade crispness enhancement & dual-tone cyber rim light
              filter: 'drop-shadow(0 18px 30px rgba(15, 23, 42, 0.28)) drop-shadow(0 0 22px rgba(99, 102, 241, 0.35)) drop-shadow(0 0 45px rgba(6, 182, 212, 0.22)) contrast(1.04) brightness(1.02)',
            }}
          />

          {/* Underfoot Energy Horizon Line */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[200px] sm:w-[240px] h-3 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-sm rounded-full pointer-events-none" />
        </div>

        {/* ============================================================== */}
        {/* 4. HOLOGRAPHIC BIOMETRIC LASER SCAN SWEEP (z-index: 18)        */}
        {/* ============================================================== */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[210px] sm:w-[270px] pointer-events-none z-18 animate-holo-scan">
          {/* Luminous Neon Beam Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#22d3ee,0_0_24px_#06b6d4]" />
          {/* Faint Trailing Hologram Sheen */}
          <div className="h-6 w-full bg-gradient-to-b from-cyan-400/20 via-indigo-500/5 to-transparent blur-[1.5px]" />
        </div>

        {/* ============================================================== */}
        {/* 5. FRONT HALF OF ORBITAL ENERGY RINGS (z-index: 20)            */}
        {/* ============================================================== */}

        {/* Chest Orbit Ring (Front Half) - Electric Violet */}
        <div
          className="absolute pointer-events-none overflow-visible w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px]"
          style={{
            top: '41%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(-66deg) rotateZ(16deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw relative"
            style={{
              border: '2px solid rgba(168, 85, 247, 0.95)',
              boxShadow: '0 0 22px rgba(168, 85, 247, 0.7), inset 0 0 10px rgba(168, 85, 247, 0.35)',
            }}
          >
            {/* Front Orbiting Quantum Bead with Violet Energy Flare */}
            <div className="w-3.5 h-3.5 rounded-full bg-purple-200 shadow-[0_0_12px_#c084fc,0_0_24px_#a855f7] absolute top-1.5 right-1/4" />
          </div>
        </div>

        {/* Waist Orbit Ring (Front Half) - Cyber Cyan */}
        <div
          className="absolute pointer-events-none overflow-visible w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px]"
          style={{
            top: '59%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(72deg) rotateZ(-12deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw relative"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.95)',
              boxShadow: '0 0 24px rgba(6, 182, 212, 0.75), inset 0 0 12px rgba(6, 182, 212, 0.4)',
            }}
          >
            {/* Front Orbiting Plasma Bead traversing waist */}
            <div className="w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_14px_#22d3ee,0_0_28px_#06b6d4] absolute bottom-1 left-1/3" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 6. POSTURE-FRAMED FLOATING CYBER HUD BADGES (z-index: 25)      */}
        {/* Positioned cleanly outside the subject silhouette on mobile/tablet */}
        {/* ============================================================== */}

        {/* Top-Right Badge: FullStack Core */}
        {/* Sits comfortably above shoulder in open space, never touching chin or face */}
        <div
          className="absolute top-[4%] sm:top-[6%] md:top-[10%] left-[70%] sm:left-[80%] md:left-[88%] lg:left-[90%] z-25 pointer-events-auto transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_16px_rgba(6,182,212,0.35)] text-[10px] sm:text-xs font-mono text-cyan-300 whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-cyan-400" />
            </span>
            <span className="font-semibold tracking-wide">FullStack.dev</span>
          </div>
        </div>

        {/* Mid-Left Badge: QA & SDET Automation */}
        {/* Sits outward to the left of the arm, never touching chest or arm */}
        <div
          className="absolute top-[42%] sm:top-[46%] md:top-[48%] right-[76%] sm:right-[84%] md:right-[88%] lg:right-[92%] z-25 pointer-events-auto transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-purple-500/50 shadow-[0_0_16px_rgba(168,85,247,0.35)] text-[10px] sm:text-xs font-mono text-purple-300 whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-purple-400" />
            </span>
            <span className="font-semibold tracking-wide">QA & SDET</span>
          </div>
        </div>

        {/* Bottom-Right Badge: Active Status */}
        {/* Sits down near pedestal/ankles, never touching belt, pockets, or hands */}
        <div
          className="absolute bottom-[6%] sm:bottom-[8%] md:bottom-[10%] left-[70%] sm:left-[80%] md:left-[86%] lg:left-[88%] z-25 pointer-events-auto transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 shadow-[0_0_16px_rgba(16,185,129,0.35)] text-[9px] sm:text-[11px] font-mono text-emerald-300 whitespace-nowrap">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0" />
            <span className="font-semibold tracking-wide">Ready to Deploy</span>
          </div>
        </div>

      </div>
    </div>
  );
}
