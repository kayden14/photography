import { useEffect, useRef } from 'react';

/**
 * Attach IntersectionObserver to all elements with data-anime="intersection"
 * Fades them in when they enter the viewport.
 */
export function useScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-anime="intersection"]');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
