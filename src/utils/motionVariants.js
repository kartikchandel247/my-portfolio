/**
 * motionVariants.js
 * Comprehensive Framer Motion variant library for directional scroll,
 * spring physics, and staggered entrances across all portfolio subpages.
 */

// 1. Alternating Vertical Spring Animations
export const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 22,
      mass: 0.85,
    },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 22,
      mass: 0.85,
    },
  },
};

// 2. Staggered Horizontal Slide-In Effects (Left vs Right)
export const slideLeft = {
  hidden: { opacity: 0, x: -85, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 210,
      damping: 22,
      mass: 0.85,
    },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 85, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 210,
      damping: 22,
      mass: 0.85,
    },
  },
};

// 3. Zoom-In / Zoom-Out Scale Transitions for high-priority cards
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 20,
    },
  },
};

export const zoomOutSettle = {
  hidden: { opacity: 0, scale: 1.12, y: 25 },
  visible: {
    opacity: 1,
    scale: 1.0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 4. Staggered Container Factory
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
