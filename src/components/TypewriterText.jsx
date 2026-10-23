import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * TypewriterText
 * Smooth character-by-character typing animation with realistic cursor blink.
 * Replays when scrolled into view if replayOnScroll is true.
 */
export default function TypewriterText({
  text = '',
  speed = 12,
  delay = 40,
  className = '',
  cursorColor = 'bg-indigo-600',
  replayOnScroll = true,
  onComplete,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: !replayOnScroll,
    amount: 0.1,
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) {
      if (replayOnScroll) {
        setDisplayedText('');
        setIsTyping(false);
      }
      return;
    }

    let currentIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, speed, delay, replayOnScroll, onComplete]);

  return (
    <span ref={containerRef} className={`inline-flex items-baseline flex-wrap ${className}`}>
      <span>{displayedText}</span>
      <span
        className={`inline-block w-0.5 sm:w-1 h-[1em] ml-1 ${cursorColor} rounded-full transition-opacity duration-100 ${
          isTyping ? 'animate-pulse opacity-100' : 'animate-ping opacity-75'
        }`}
        style={{ verticalAlign: 'text-bottom' }}
      />
    </span>
  );
}
