/**
 * motionVariants.js
 * High-performance, snappy Framer Motion variants.
 * Engineered for fast, responsive 60FPS fluid entrances with zero lag.
 */

// 1. Fast Vertical Spring Animations (Header, lead copy, stats)
export const fadeUp = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      y: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      y: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

// 2. Snappy Horizontal Slide-In Effects (Left vs Right)
export const slideLeft = {
  hidden: { opacity: 0, x: -20, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      x: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      x: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

// 3. Fast Zoom-In / Zoom-Out Scale Transitions
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      y: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export const zoomOutSettle = {
  hidden: { opacity: 0, scale: 1.04, y: 10 },
  visible: {
    opacity: 1,
    scale: 1.0,
    y: 0,
    transition: {
      opacity: { duration: 0.12, ease: 'easeOut' },
      scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      y: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

// 4. Staggered Container Factory (Snappy delay and child intervals)
export const staggerContainer = (staggerChildren = 0.04, delayChildren = 0.02) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
