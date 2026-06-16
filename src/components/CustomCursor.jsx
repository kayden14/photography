import { useEffect } from 'react';

/**
 * CustomCursor — matches the original `pe` class from the legacy app bundle.
 *
 * Architecture (DOM-injected, same as original):
 *   .a-mouse-horizonatal-line  — full-width horizontal crosshair line
 *   .a-mouse-vertical-line     — full-height vertical crosshair line
 *   .a-mouse-main-wrapper      — circular dot that follows mouse
 *     └── .a-mouse-container
 *           ├── .a-mouse-basic-content   (default: cross+bracket SVG)
 *           ├── .a-mouse-video-content   (on data-mouse="video" hover: play circle)
 *           └── .a-mouse-links-content   (on data-mouse="link" hover: arrow)
 *
 * States:
 *   Video hover  → hide lines, hide basic, show video
 *   Link hover   → hide lines, hide basic, show links
 *   Hero hover   → show scroll-down indicator opacity
 *   Default      → show lines, show basic, hide others
 */
export default function CustomCursor() {
  useEffect(() => {
    // --- Don't mount on touch devices ---
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const POINTER_SIZE = 40;
    let pointerX = -1;
    let pointerY = -1;
    let rafId;

    // ── Create H/V lines ──────────────────────────────────────────────────
    const mouseHLine = document.createElement('div');
    mouseHLine.className = 'a-mouse-horizonatal-line position-fixed';

    const mouseVLine = document.createElement('div');
    mouseVLine.className = 'a-mouse-vertical-line position-fixed';

    // ── Create circular wrapper ───────────────────────────────────────────
    const mouseWrapper = document.createElement('div');
    mouseWrapper.className = 'position-fixed a-mouse-main-wrapper';
    mouseWrapper.style.width  = POINTER_SIZE + 'px';
    mouseWrapper.style.height = POINTER_SIZE + 'px';

    const mouseContainer = document.createElement('div');
    mouseContainer.className = 'position-relative a-mouse-container';
    mouseContainer.style.width  = POINTER_SIZE + 'px';
    mouseContainer.style.height = POINTER_SIZE + 'px';

    // ── Basic content (crosshair brackets + scroll indicator) ─────────────
    const mouseBasicContent = document.createElement('div');
    mouseBasicContent.className = 'position-absolute a-mouse-basic-content a-mouse-content';
    mouseBasicContent.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.5 8.5V0.5H8.5M32.5 0.5H40.5V8.5M40.5 32.5V40.5H32.5M8.5 40.5H0.5V32.5M20.5 10.5V30.5M10.5 20.5H30.5" stroke="white"/>
</svg>`;

    // ── Video content (play button circle) ────────────────────────────────
    const mouseVideoContent = document.createElement('div');
    mouseVideoContent.className = 'position-absolute a-mouse-video-content a-mouse-content a-mouse-hidden';
    mouseVideoContent.innerHTML = `<svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM85 125.98L130 100L85 74.0195V125.98Z" fill="white"/>
</svg>`;

    // ── Links content (arrow indicator) ───────────────────────────────────
    const mouseLinksContent = document.createElement('div');
    mouseLinksContent.className = 'position-absolute a-mouse-links-content a-mouse-content a-mouse-hidden';
    mouseLinksContent.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 20.5H33M33 20.5L20.5 8M33 20.5L20.5 33" stroke="white" stroke-width="1.5"/>
</svg>`;

    // ── Assemble DOM ──────────────────────────────────────────────────────
    mouseContainer.appendChild(mouseBasicContent);
    mouseContainer.appendChild(mouseVideoContent);
    mouseContainer.appendChild(mouseLinksContent);
    mouseWrapper.appendChild(mouseContainer);

    document.body.appendChild(mouseWrapper);
    document.body.appendChild(mouseHLine);
    document.body.appendChild(mouseVLine);

    // ── Helpers ───────────────────────────────────────────────────────────
    const setPos = (x, y) => {
      pointerX = x;
      pointerY = y;
    };

    const updateDom = () => {
      mouseWrapper.style.top  = pointerY + 'px';
      mouseWrapper.style.left = pointerX + 'px';
      mouseHLine.style.top    = pointerY + 'px';
      mouseVLine.style.left   = pointerX + 'px';
    };

    const hideLines = (hidden) => {
      if (hidden) {
        mouseHLine.classList.add('a-mouse-line-hidden');
        mouseVLine.classList.add('a-mouse-line-hidden');
      } else {
        mouseHLine.classList.remove('a-mouse-line-hidden');
        mouseVLine.classList.remove('a-mouse-line-hidden');
      }
    };

    const hideContent = (el, hidden) => {
      if (hidden) el.classList.add('a-mouse-hidden');
      else        el.classList.remove('a-mouse-hidden');
    };

    // ── State handlers ────────────────────────────────────────────────────
    const onVideoIn  = () => { hideLines(true);  hideContent(mouseBasicContent, true);  hideContent(mouseVideoContent, false); };
    const onVideoOut = () => { hideLines(false); hideContent(mouseBasicContent, false); hideContent(mouseVideoContent, true);  };
    const onLinkIn   = () => { hideLines(true);  hideContent(mouseBasicContent, true);  hideContent(mouseLinksContent, false); };
    const onLinkOut  = () => { hideLines(false); hideContent(mouseBasicContent, false); hideContent(mouseLinksContent, true);  };

    // ── Event listeners (delegate via mouseover for dynamic elements) ─────
    const onMouseMove = (e) => setPos(e.clientX, e.clientY);

    const onMouseOver = (e) => {
      const el = e.target.closest('[data-mouse]');
      if (!el) return;
      const type = el.dataset.mouse;
      if (type === 'video') onVideoIn();
      else if (type === 'link') onLinkIn();
    };

    const onMouseOut = (e) => {
      const el = e.target.closest('[data-mouse]');
      if (!el) return;
      const type = el.dataset.mouse;
      if (type === 'video') onVideoOut();
      else if (type === 'link') onLinkOut();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout',  onMouseOut);

    // ── rAF loop ──────────────────────────────────────────────────────────
    const tick = () => {
      updateDom();
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout',  onMouseOut);
      cancelAnimationFrame(rafId);
      mouseWrapper.remove();
      mouseHLine.remove();
      mouseVLine.remove();
    };
  }, []);

  return null; // All DOM is injected imperatively, matching the original
}
