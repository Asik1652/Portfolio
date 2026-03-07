import { useEffect, RefObject } from 'react';

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  className: string = 'visible',
  threshold: number = 0.15
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, className, threshold]);
}

export function useScrollAnimationAll(
  containerRef: RefObject<HTMLElement>,
  selector: string = '.reveal, .reveal-left, .reveal-right',
  threshold: number = 0.1
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(selector);
    const observers: IntersectionObserver[] = [];

    elements.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 80);
          }
        },
        { threshold }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [containerRef, selector, threshold]);
}