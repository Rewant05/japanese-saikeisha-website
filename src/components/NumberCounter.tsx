"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface NumberCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function NumberCounter({ end, suffix = "", duration = 2000, label }: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-2">
      <div className="font-serif text-5xl md:text-7xl font-light tracking-tighter text-[var(--color-brass)]">
        {count}{suffix}
      </div>
      <div className="font-sans text-xs md:text-sm tracking-widest uppercase text-[var(--foreground)]/70 text-center">
        {label}
      </div>
    </div>
  );
}
