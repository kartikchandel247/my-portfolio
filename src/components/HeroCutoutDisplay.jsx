import { useState, useRef } from 'react';

export default function HeroCutoutDisplay() {
  const containerRef = useRef(null);
  const tiltBoxRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !tiltBoxRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = ((y / (rect.height / 2)) * -6).toFixed(2);
    const tiltY = ((x / (rect.width / 2)) * 6).toFixed(2);

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
      className="relative flex items-center justify-center min-h-[520px] sm:min-h-[580px] w-full select-none"
      style={{ perspective: '1200px' }}
    >
      
      {/* 
        CENTRAL ANCHORED CONTAINER:
        Both the body and all 3D rotating rings are children of this EXACT same box.
        This guarantees that Kartik is always 100% in the dead center of the rings,
        and the rings will never drift away into the text!
      */}
      <div
        ref={tiltBoxRef}
        className="relative inline-flex items-center justify-center transition-transform duration-150 ease-out animate-card-float-1 will-change-transform"
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        
        {/* Soft Radiant Aura directly behind his torso */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-[340px] sm:h-[440px] bg-gradient-to-tr from-indigo-500/35 via-purple-500/25 to-cyan-400/30 rounded-full blur-[55px] sm:blur-[65px] pointer-events-none z-0" />

        {/* ============================================================== */}
        {/* LAYER 1: BACK HALF OF RINGS (z-index: 5 - RENDERED BEHIND BODY) */}
        {/* ============================================================== */}

        {/* Ring 1 BACK: Neon Cyan Torso/Waist Ring */}
        <div
          className="absolute pointer-events-none overflow-visible w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px]"
          style={{
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(74deg) rotateZ(10deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: 5,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.95)',
              boxShadow: '0 0 22px rgba(6, 182, 212, 0.75), inset 0 0 12px rgba(6, 182, 212, 0.4)',
            }}
          />
        </div>

        {/* Ring 2 BACK: Electric Violet Chest Orbit Ring */}
        <div
          className="absolute pointer-events-none overflow-visible w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] md:w-[290px] md:h-[290px]"
          style={{
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(-70deg) rotateZ(18deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: 5,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw"
            style={{
              border: '2.5px solid rgba(168, 85, 247, 0.9)',
              boxShadow: '0 0 22px rgba(168, 85, 247, 0.7), inset 0 0 12px rgba(168, 85, 247, 0.4)',
            }}
          />
        </div>

        {/* Ring 3 BACK: Emerald Lower Orbit Ring */}
        <div
          className="absolute pointer-events-none overflow-visible w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px]"
          style={{
            top: '72%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(76deg) rotateZ(-12deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: 5,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-slow"
            style={{
              border: '1.5px dashed rgba(16, 185, 129, 0.85)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.55)',
            }}
          />
        </div>

        {/* ============================================================== */}
        {/* LAYER 2: KARTIK'S CUTOUT BODY (z-index: 10 - IN THE DEAD CENTER) */}
        {/* ============================================================== */}
        <div className="relative z-10 flex items-center justify-center">
          <img
            src="/kartik-cutout-tight.png"
            alt="Kartik Chandel Cutout"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-auto h-[380px] sm:h-[450px] md:h-[500px] lg:h-[530px] object-contain drop-shadow-[0_16px_35px_rgba(15,23,42,0.22)] drop-shadow-[0_0_35px_rgba(99,102,241,0.35)] transition-all duration-300"
          />

          {/* Underfoot Cyber Energy Glow */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] h-5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-md rounded-full pointer-events-none" />
        </div>

        {/* ============================================================== */}
        {/* LAYER 3: FRONT HALF OF RINGS (z-index: 20 - PASSING IN FRONT OF BODY) */}
        {/* ============================================================== */}

        {/* Ring 1 FRONT: Neon Cyan Torso/Waist Ring (Passing IN FRONT of belt/waist) */}
        <div
          className="absolute pointer-events-none overflow-visible w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px]"
          style={{
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(74deg) rotateZ(10deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw relative"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.95)',
              boxShadow: '0 0 22px rgba(6, 182, 212, 0.75), inset 0 0 12px rgba(6, 182, 212, 0.4)',
            }}
          >
            {/* Front Orbiting Plasma Bead traversing across his waist */}
            <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-cyan-300 shadow-[0_0_14px_#06b6d4,0_0_24px_#06b6d4] absolute bottom-1.5 left-1/3" />
          </div>
        </div>

        {/* Ring 2 FRONT: Electric Violet Chest Orbit Ring (Passing IN FRONT of shirt/chest) */}
        <div
          className="absolute pointer-events-none overflow-visible w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] md:w-[290px] md:h-[290px]"
          style={{
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(-70deg) rotateZ(18deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw relative"
            style={{
              border: '2.5px solid rgba(168, 85, 247, 0.9)',
              boxShadow: '0 0 22px rgba(168, 85, 247, 0.7), inset 0 0 12px rgba(168, 85, 247, 0.4)',
            }}
          >
            {/* Front Orbiting Purple Energy Bead traversing across his chest */}
            <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-purple-300 shadow-[0_0_14px_#a855f7,0_0_24px_#a855f7] absolute top-2 right-1/4" />
          </div>
        </div>

        {/* Ring 3 FRONT: Emerald Lower Orbit Ring (Passing IN FRONT of lower body) */}
        <div
          className="absolute pointer-events-none overflow-visible w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px]"
          style={{
            top: '72%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(76deg) rotateZ(-12deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-slow relative"
            style={{
              border: '1.5px dashed rgba(16, 185, 129, 0.85)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.55)',
            }}
          >
            {/* Front Orbiting Emerald Bead */}
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-300 shadow-[0_0_12px_#10b981] absolute bottom-3 right-1/3" />
          </div>
        </div>

      </div>

    </div>
  );
}
