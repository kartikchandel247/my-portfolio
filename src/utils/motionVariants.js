/**
 * motionVariants.js
 * High-performance, snappy Framer Motion variants.
 * Engineered for fast, responsive 60FPS fluid entrances with zero lag.
 */

// 1. Fast Vertical Spring Animations (Header, lead copy, stats)
export const fadeUp = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
      mass: 0.5,
    },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
      mass: 0.5,
    },
  },
};

// 2. Snappy Horizontal Slide-In Effects (Left vs Right)
export const slideLeft = {
  hidden: { opacity: 0, x: -28, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
      mass: 0.5,
    },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
      mass: 0.5,
    },
  },
};

// 3. Fast Zoom-In / Zoom-Out Scale Transitions
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.94, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 28,
      mass: 0.5,
    },
  },
};

export const zoomOutSettle = {
  hidden: { opacity: 0, scale: 1.05, y: 10 },
  visible: {
    opacity: 1,
    scale: 1.0,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 4. Staggered Container Factory (Snappy delay and child intervals)
export const staggerContainer = (staggerChildren = 0.05, delayChildren = 0.03) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
