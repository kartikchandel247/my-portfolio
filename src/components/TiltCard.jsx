import { useRef, useEffect } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.045,
  horizontalMove = 14,
  glare = true,
  glareColor = 'rgba(99, 102, 241, 0.35)',
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    // Disable expensive tilt on touch/mobile devices to keep scrolling smooth and natural
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const shiftX = ((x - centerX) / centerX) * horizontalMove;
    const shiftY = ((y - centerY) / centerY) * 4;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      card.style.transition = 'transform 0.08s ease-out';
      card.style.transform = `perspective(1000px) translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`;

      if (glare && glareRef.current) {
        const glareX = ((x / rect.width) * 100).toFixed(1);
        const glareY = ((y / rect.height) * 100).toFixed(1);
        glareRef.current.style.opacity = '0.24';
        glareRef.current.style.background = `radial-gradient(circle 320px at ${glareX}% ${glareY}%, ${glareColor}, transparent 70%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'perspective(1000px) translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
    >
      {/* Dynamic Specular Light Glare */}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-150 opacity-0"
        />
      )}
      {children}
    </div>
  );
}
