import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

/**
 * Wraps any heading in the graffiti spray-sweep reveal,
 * triggered once when it enters the viewport.
 */
const SprayHeading = ({ children, className = '', style, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Start fully off-screen to the right (like spray can hasn't touched yet)
    el.style.clipPath = 'inset(-30% 100% -30% -10%)';

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.animation = 'spraySweep 0.9s cubic-bezier(0.1, 0.5, 0.3, 1.05) forwards';
        }, delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`inline-block ${className}`} style={style}>
      {children}
    </div>
  );
};

export default SprayHeading;
