import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine pointers (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = spotlightRef.current;
    if (!el) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.08), rgba(16, 185, 129, 0.05) 40%, transparent 80%)`;
      });
    };

    const handleMouseLeave = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-200 opacity-0 transform-gpu hardware-accelerated"
    />
  );
}
