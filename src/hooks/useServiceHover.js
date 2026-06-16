import { useEffect } from 'react';

/**
 * Services section row hover effect — slides a highlight bar
 * across each service row on hover (replicates dny19.com).
 */
export function useServiceHover() {
  useEffect(() => {
    const rows = document.querySelectorAll('.a-services-row-wrap');

    rows.forEach((row) => {
      // Create the highlight overlay
      const highlight = document.createElement('div');
      highlight.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        pointer-events: none;
        z-index: 1;
      `;
      row.appendChild(highlight);

      row.addEventListener('mouseenter', () => {
        highlight.style.transform = 'translateX(0)';
      });
      row.addEventListener('mouseleave', () => {
        highlight.style.transform = 'translateX(100%)';
        setTimeout(() => {
          highlight.style.transition = 'none';
          highlight.style.transform = 'translateX(-100%)';
          requestAnimationFrame(() => {
            highlight.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
          });
        }, 600);
      });
    });
  }, []);
}
