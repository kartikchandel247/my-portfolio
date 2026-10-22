import { useState, useRef } from 'react';

export default function HeroCutoutDisplay() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -7,
      y: (x / (rect.width / 2)) * 7,
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
      className="relative flex items-center justify-center min-h-[540px] sm:min-h-[600px] w-full select-none"
      style={{ perspective: '1200px' }}
    >
      
      {/* 1. Behind-Body Holographic Aura & Cinematic Light Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[520px] bg-gradient-to-tr from-indigo-500/35 via-purple-500/25 to-cyan-400/30 rounded-full blur-[85px] pointer-events-none z-0 animate-pulse-slow" />

      {/* 2. LAYER A: BACK-HALF OF 3D CYBER RINGS (Rendered BEHIND Kartik's body, z-5) */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-visible">
        
        {/* Ring 1 BACK: Cyan Torso Orbit (Behind Waist/Back) */}
        <div
          className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) rotateX(72deg) rotateY(-18deg) rotateY(${tilt.y * 0.8}deg)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.9)',
              boxShadow: '0 0 28px rgba(6, 182, 212, 0.55), inset 0 0 16px rgba(6, 182, 212, 0.35)',
            }}
          />
        </div>

        {/* Ring 2 BACK: Violet Diagonal Orbit (Behind Shoulders/Back) */}
        <div
          className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) rotateX(-62deg) rotateY(32deg) rotateX(${tilt.x * 0.8}deg)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw"
            style={{
              border: '2px solid rgba(168, 85, 247, 0.8)',
              boxShadow: '0 0 28px rgba(168, 85, 247, 0.5), inset 0 0 16px rgba(168, 85, 247, 0.3)',
            }}
          />
        </div>

        {/* Ring 3 BACK: Outer Emerald Horizon Ring */}
        <div
          className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[530px] h-[530px] pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) rotateX(78deg) rotateZ(-25deg)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-slow"
            style={{
              border: '1.5px dashed rgba(16, 185, 129, 0.7)',
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
            }}
          />
        </div>

      </div>

      {/* 3. LAYER B: KARTIK'S CUTOUT BODY (Unobstructed, z-10) */}
      <div
        className="relative z-10 transition-transform duration-200 ease-out flex items-center justify-center animate-card-float-1"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="relative group">
          {/* High-Definition Transparent Cutout of Kartik with No Obstructing Cards */}
          <img
            src="/kartik-cutout-tight.png"
            alt="Kartik Chandel Cutout"
            className="w-auto h-[460px] sm:h-[510px] md:h-[550px] object-contain drop-shadow-[0_16px_35px_rgba(15,23,42,0.2)] drop-shadow-[0_0_35px_rgba(99,102,241,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_50px_rgba(99,102,241,0.5)]"
          />

          {/* Underfoot / Base Cyber Energy Flare */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[260px] h-7 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-md rounded-full pointer-events-none" />
        </div>
      </div>

      {/* 4. LAYER C: FRONT-HALF OF 3D CYBER RINGS (Rendered IN FRONT of Kartik's body, z-20) */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
        
        {/* Ring 1 FRONT: Cyan Torso Orbit (Passing in front of Waist/Belt) */}
        <div
          className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) rotateX(72deg) rotateY(-18deg) rotateY(${tilt.y * 0.8}deg)`,
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-cw relative"
            style={{
              border: '2.5px dashed rgba(6, 182, 212, 0.9)',
              boxShadow: '0 0 28px rgba(6, 182, 212, 0.55), inset 0 0 16px rgba(6, 182, 212, 0.35)',
            }}
          >
            {/* Front Glowing Plasma Orb traversing the ring */}
            <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_16px_#06b6d4,0_0_30px_#06b6d4] absolute bottom-2 left-1/3" />
          </div>
        </div>

        {/* Ring 2 FRONT: Violet Diagonal Orbit (Passing in front of Chest/Shirt) */}
        <div
          className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) rotateX(-62deg) rotateY(32deg) rotateX(${tilt.x * 0.8}deg)`,
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-ccw relative"
            style={{
              border: '2px solid rgba(168, 85, 247, 0.8)',
              boxShadow: '0 0 28px rgba(168, 85, 247, 0.5), inset 0 0 16px rgba(168, 85, 247, 0.3)',
            }}
          >
            {/* Front Glowing Purple Energy Orb traversing the ring */}
            <div className="w-3.5 h-3.5 rounded-full bg-purple-300 shadow-[0_0_16px_#a855f7,0_0_30px_#a855f7] absolute top-3 right-1/4" />
          </div>
        </div>

        {/* Ring 3 FRONT: Outer Emerald Horizon Ring (Passing in front of Lower Legs) */}
        <div
          className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[530px] h-[530px] pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) rotateX(78deg) rotateZ(-25deg)',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
          }}
        >
          <div
            className="w-full h-full rounded-full animate-ring-spin-slow relative"
            style={{
              border: '1.5px dashed rgba(16, 185, 129, 0.7)',
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.4)',
            }}
          >
            {/* Front Glowing Emerald Energy Orb */}
            <div className="w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_14px_#10b981] absolute bottom-4 right-1/3" />
          </div>
        </div>

      </div>

    </div>
  );
}
