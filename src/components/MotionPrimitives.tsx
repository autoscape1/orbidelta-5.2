import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealBlock({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.9, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.38,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
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
