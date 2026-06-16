import { useEffect } from 'react';

export function useHeroVideoHover() {
  useEffect(() => {
    const heroVideo = document.querySelector('.a-hero-preview-video');
    const timelineItems = document.querySelectorAll('.a-timeline-item');
    if (!heroVideo || timelineItems.length === 0) return;

    // Apply styles to the video to make it cover the background and fade nicely
    heroVideo.style.transition = 'opacity 0.4s ease';
    heroVideo.style.opacity = '0';
    heroVideo.style.objectFit = 'cover';
    heroVideo.style.width = '100%';
    heroVideo.style.height = '100%';
    heroVideo.muted = true;
    heroVideo.loop = true;
    heroVideo.playsInline = true;

    const handleMouseEnter = (e) => {
      const videoSrc = e.currentTarget.getAttribute('data-video');
      if (videoSrc) {
        heroVideo.src = `/assets/videos/${videoSrc}`;
        heroVideo.play().catch(() => {});
        heroVideo.style.opacity = '0.5'; // Keep it slightly dimmed so text is readable
      }
    };

    const handleMouseLeave = () => {
      heroVideo.style.opacity = '0';
      setTimeout(() => {
        if (heroVideo.style.opacity === '0') {
          heroVideo.pause();
        }
      }, 400); // match transition duration
    };

    timelineItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      timelineItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
