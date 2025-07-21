import { useEffect, RefObject } from 'react';

export function useScrollAnimation(ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options]);
} 