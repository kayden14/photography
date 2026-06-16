import { useEffect } from 'react';

/**
 * Smooth scroll navigation for anchor links (data-navigation="scroll")
 */
export function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('[data-navigation="scroll"]');

    const handler = (e) => {
      e.preventDefault();
      const target = e.currentTarget.dataset.target;
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    links.forEach((link) => link.addEventListener('click', handler));
    return () => links.forEach((link) => link.removeEventListener('click', handler));
  }, []);
}
