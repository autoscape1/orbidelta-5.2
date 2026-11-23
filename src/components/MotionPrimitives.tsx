import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  immediate?: boolean;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RevealBlock({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  y = 28,
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          ease: EASE_OUT_EXPO,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -48px 0px' }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealLineProps {
  className?: string;
  delay?: number;
}

export function RevealLine({ className = '', delay = 0.15 }: RevealLineProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div aria-hidden="true" className={className} />;
  }

  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -48px 0px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      style={{ originX: 0 }}
      className={className}
    />
  );
}

export function ScrollProgressBar() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E53935] origin-left pointer-events-none"
    />
  );
}

interface AnimatedMetricProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  fallbackText: string;
}

function formatMetricNumber(num: number, decimals: number): string {
  if (decimals > 0) {
    return num.toFixed(decimals).replace('.', ',');
  }
  return Math.round(num).toString();
}

export function AnimatedMetric({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  fallbackText,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState<string>(fallbackText);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(fallbackText);
      return;
    }

    let frameId = 0;
    const durationMs = 650;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;

      if (progress >= 1) {
        setDisplay(fallbackText);
        return;
      }

      setDisplay(`${prefix}${formatMetricNumber(current, decimals)}${suffix}`);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, value, decimals, prefix, suffix, fallbackText]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
