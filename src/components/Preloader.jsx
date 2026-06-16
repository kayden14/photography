import React, { useEffect, useState, useRef } from 'react';

/**
 * Preloader — uses the original a-preloader-* CSS classes from the legacy
 * portfolio stylesheet (style.8483d983eb5afeb566ad.css) for pixel-perfect
 * cinematic fidelity.
 *
 * Structure matches the original:
 *   .a-preloader-wrap (fixed, full-screen)
 *     ├── .a-preloader-top-half      ← slides up on complete
 *     ├── .a-preloader-bottom-half   ← slides down on complete
 *     └── .a-preloader-content-wrap  ← name + progress bar
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress]   = useState(0);
  const [splitting, setSplitting] = useState(false);
  const [hidden, setHidden]       = useState(false);
  const totalFrames = 500;
  const rafRef = useRef(null);

  useEffect(() => {
    let current = 0;

    const step = () => {
      current += Math.random() * 14 + 5;

      if (current >= totalFrames) {
        current = totalFrames;
        setProgress(totalFrames);

        // Hold briefly, then split open
        setTimeout(() => {
          setSplitting(true);
          // After the CSS transition (0.8s), hide and fire onComplete
          setTimeout(() => {
            setHidden(true);
            if (onComplete) onComplete();
          }, 900);
        }, 280);
        return;
      }

      setProgress(Math.floor(current));
      rafRef.current = requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(step);
    }, 300);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  if (hidden) return null;

  const pct = Math.round((progress / totalFrames) * 100);

  return (
    <div
      className={`position-fixed vw-100 vh-100 d-flex align-items-center justify-content-center a-preloader-wrap${splitting ? ' a-preloader-wrap-hidden' : ''}`}
    >
      {/* Top half — slides up */}
      <div
        className="position-absolute vw-100 a-preloader-top-half"
        style={{
          transition: 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)',
          transform: splitting ? 'translateY(-100%)' : 'translateY(0)',
        }}
      />

      {/* Bottom half — slides down */}
      <div
        className="position-absolute vw-100 a-preloader-bottom-half"
        style={{
          transition: 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)',
          transform: splitting ? 'translateY(100%)' : 'translateY(0)',
        }}
      />

      {/* Content — centred above the split panels */}
      <div className="a-preloader-content-wrap text-center position-relative" style={{ zIndex: 2 }}>
        <p
          className="a-desc-sm mb-1 text-uppercase"
          style={{ letterSpacing: '0.25em', opacity: 0.7 }}
        >
          Faith Ortega
        </p>
        <p
          className="a-tag mb-4"
          style={{ fontFamily: '"JetBrains Mono", monospace', opacity: 0.45 }}
        >
          Photography · Videography · Visual Storytelling
        </p>

        {/* Progress bar — styled with original .a-progress-wrapper */}
        <div
          className="a-progress-wrapper position-relative mx-auto"
          style={{ width: '240px' }}
        >
          <div
            className="a-progress-indicator position-absolute"
            style={{ width: `${pct}%`, transition: 'width 0.06s linear' }}
          />
        </div>

        <p
          className="a-tag mt-2"
          style={{ fontFamily: '"JetBrains Mono", monospace', opacity: 0.35 }}
        >
          {String(progress).padStart(3, '0')} / {totalFrames}
        </p>
      </div>
    </div>
  );
}
