
import React, { useState, useEffect, useRef } from 'react';

interface RollingCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  staticValue?: boolean;
}

const RollingCounter: React.FC<RollingCounterProps> = ({ 
  value, 
  duration = 4000, 
  suffix = '', 
  decimals = 0,
  staticValue = false 
}) => {
  const [count, setCount] = useState(staticValue ? value : 0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (staticValue) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [staticValue, hasStarted]);

  useEffect(() => {
    if (!hasStarted || staticValue) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easedProgress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration, staticValue]);

  return (
    <span ref={countRef}>
      {count.toLocaleString('da-DK', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </span>
  );
};

export default RollingCounter;
