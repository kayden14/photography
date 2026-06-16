import { useEffect } from 'react';

/**
 * useLazyImages — immediately resolves data-src → src so all images render.
 * Uses a MutationObserver to catch any images added after initial mount.
 */
export function useLazyImages() {
  useEffect(() => {
    const resolve = () => {
      document.querySelectorAll('img[data-src]').forEach((img) => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    };

    // Run immediately on mount
    resolve();

    // Also watch for any late-rendered images (e.g. after SPA transitions)
    const observer = new MutationObserver(resolve);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}

/**
 * useImageHoverEffects — grayscale → full colour scale on project card hover.
 */
export function useImageHoverEffects() {
  useEffect(() => {
    const init = () => {
      document.querySelectorAll('.a-works-image-wrapper').forEach((wrapper) => {
        const img = wrapper.querySelector('img');
        if (!img || wrapper.dataset.hoverBound) return;
        wrapper.dataset.hoverBound = '1';

        img.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease';
        img.style.filter = 'grayscale(20%)';

        wrapper.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.04)';
          img.style.filter    = 'grayscale(0%)';
        });
        wrapper.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
          img.style.filter    = 'grayscale(20%)';
        });
      });
    };

    init();
    // Re-init if Works page renders more cards later
    const mo = new MutationObserver(init);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
}

/**
 * useVideoPreview — on hovering a [data-mouse="video"][data-video] element,
 * plays the corresponding video in the global .a-preview-wrapper overlay.
 * Mirrors the original app.js canvas/video preview interaction.
 */
export function useVideoPreview() {
  useEffect(() => {
    const previewWrapper  = document.querySelector('.a-preview-wrapper');
    const previewVideo    = document.querySelector('.a-preview-video-container');
    const previewImage    = document.querySelector('.a-preview-image-container');
    const previewTitle    = document.querySelector('.a-preview-title');
    const previewClose    = document.querySelector('.a-preview-close-btn');
    const previewPlay     = document.querySelector('.a-preview-play-btn');
    const previewMute     = document.querySelector('.a-preview-mute-btn');
    const progressBar     = document.querySelector('.a-preview-progress-indicator');
    const currentTimeEl   = document.querySelector('.a-preview-current-time');
    const durationTimeEl  = document.querySelector('.a-preview-duration-time');

    if (!previewWrapper || !previewVideo) return;

    const fmtTime = (s) => {
      const m = Math.floor(s / 60).toString().padStart(2, '0');
      const sec = Math.floor(s % 60).toString().padStart(2, '0');
      return `00:${m}:${sec}`;
    };

    const openPreview = (videoFile, title) => {
      if (!videoFile) return;
      const src = `/assets/videos/${videoFile}`;
      previewVideo.src = src;
      if (previewImage) previewImage.src = '';
      if (previewTitle) previewTitle.textContent = title || '';
      previewWrapper.classList.remove('a-preview-hidden', 'a-preview-closed');
      previewVideo.play().catch(() => {});
    };

    const closePreview = () => {
      previewWrapper.classList.add('a-preview-closed');
      previewVideo.pause();
      setTimeout(() => previewWrapper.classList.add('a-preview-hidden'), 400);
    };

    // Click on any video card opens the full-screen preview
    // const onClick = (e) => {
    //   const card = e.target.closest('[data-mouse="video"][data-video]');
    //   if (card) openPreview(card.dataset.video, card.dataset.title);
    // };

    // Progress bar update
    const onTimeUpdate = () => {
      if (!previewVideo.duration) return;
      const pct = (previewVideo.currentTime / previewVideo.duration) * 100;
      if (progressBar) progressBar.style.width = pct + '%';
      if (currentTimeEl) currentTimeEl.textContent  = fmtTime(previewVideo.currentTime);
      if (durationTimeEl) durationTimeEl.textContent = fmtTime(previewVideo.duration);
    };

    // Play/pause toggle
    const togglePlay = () => {
      if (previewVideo.paused) previewVideo.play().catch(() => {});
      else previewVideo.pause();
    };

    // Mute toggle
    const toggleMute = () => { previewVideo.muted = !previewVideo.muted; };

    // document.addEventListener('click', onClick);
    if (previewClose) previewClose.addEventListener('click', closePreview);
    if (previewPlay)  previewPlay.addEventListener('click', togglePlay);
    if (previewMute)  previewMute.addEventListener('click', toggleMute);
    previewVideo.addEventListener('timeupdate', onTimeUpdate);

    return () => {
      // document.removeEventListener('click', onClick);
      if (previewClose) previewClose.removeEventListener('click', closePreview);
      if (previewPlay)  previewPlay.removeEventListener('click', togglePlay);
      if (previewMute)  previewMute.removeEventListener('click', toggleMute);
      previewVideo.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);
}
