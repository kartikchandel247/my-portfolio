import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedCounterText
 * Dynamically counts up numbers when scrolled into view (e.g. 0 -> 4+, 0 -> 100+)
 */
function AnimatedCounterText({ target, isInView }) {
  const [displayValue, setDisplayValue] = useState(target);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue('0');
      return;
    }

    const match = target.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(target);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2]; // "+", "%", "/7"

    let startTime = null;
    const duration = 1100; // ms
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Exponential ease-out for energetic snapping
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * targetNum);
      
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target]);

  return <span>{displayValue}</span>;
}

/**
 * ScrollPopStatCard
 * Individual stat card that pops up with spring physics and locks into position
 */
function ScrollPopStatCard({ stat, index, isInView }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.82,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 280,
            damping: 20,
            delay: index * 0.1,
          },
        },
      }}
      whileHover={{
        y: -6,
        scale: 1.04,
        transition: { duration: 0.18, ease: 'easeOut' },
      }}
      className="group relative text-center p-3 sm:p-4 rounded-2xl bg-white/70 hover:bg-white transition-all duration-200 border border-transparent hover:border-indigo-200/80 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer overflow-hidden"
    >
      {/* Background Soft Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-colors duration-300 pointer-events-none rounded-2xl" />

      {/* Floating Micro Shimmer Line */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-beam-sweep bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 rounded-[inherit]" />

      {/* 1. Metric Number (Bounces & Pops into Position) */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.35,
            y: 24,
          },
          visible: {
            opacity: 1,
            scale: [0.35, 1.25, 1],
            y: [24, -6, 0],
            transition: {
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
              delay: index * 0.1,
            },
          },
        }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-indigo mb-1 tracking-tight will-change-transform"
      >
        <AnimatedCounterText target={stat.number} isInView={isInView} />
      </motion.div>

      {/* 2. Main Stat Label (Smooth Slide-Up into Position) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1 + 0.12,
            },
          },
        }}
        className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors"
      >
        {stat.label}
      </motion.div>

      {/* 3. Stat Detail Pill (Fades and Locks in Place) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1 + 0.22,
            },
          },
        }}
        className="text-[11px] text-slate-500 mt-1 hidden sm:block font-medium"
      >
        {stat.detail}
      </motion.div>
    </motion.div>
  );
}

/**
 * ScrollPopStats
 * The full quick stats container that observes scroll intersection
 * and triggers lively pop-up motions for all text & metrics.
 */
export default function ScrollPopStats({ stats, className = '' }) {
  const containerRef = useRef(null);
  
  // Triggers whenever user scrolls this section into view (once: false allows re-play when scrolling back)
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.25,
    margin: '-20px 0px -20px 0px',
  });

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-soft-xl relative overflow-hidden"
      >
        {/* Subtle Ambient Border Light Sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-0 rounded-[inherit]" />

        {stats.map((stat, idx) => (
          <ScrollPopStatCard
            key={stat.label}
            stat={stat}
            index={idx}
            isInView={isInView}
          />
        ))}
      </motion.div>
    </div>
  );
}
