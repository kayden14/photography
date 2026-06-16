import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';

function scramble(el, originalText) {
  let frame = 0;
  const totalFrames = 20;
  let raf;

  const tick = () => {
    const progress = frame / totalFrames;
    el.textContent = originalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (i < Math.floor(progress * originalText.length)) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');

    if (frame < totalFrames) {
      frame++;
      raf = requestAnimationFrame(tick);
    } else {
      el.textContent = originalText;
    }
  };

  tick();
  return () => cancelAnimationFrame(raf);
}

/**
 * Attach scramble-on-hover to all elements with data-anime="scramble"
 */
export function useTextScramble() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-anime="scramble"]');
    const handlers = [];

    els.forEach((el) => {
      const original = el.textContent;
      let cancel = null;

      const onEnter = () => {
        if (cancel) cancel();
        cancel = scramble(el, original);
      };

      el.addEventListener('mouseenter', onEnter);
      handlers.push({ el, onEnter });
    });

    return () => {
      handlers.forEach(({ el, onEnter }) =>
        el.removeEventListener('mouseenter', onEnter)
      );
    };
  }, []);
}
