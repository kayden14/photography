import { useEffect } from 'react';

export function useTimelineStrips() {
  useEffect(() => {
    const stripsContainer = document.querySelector('.a-timeline-strips');
    if (!stripsContainer) return;

    // We want a full width timeline, the reference seems to adjust the width dynamically
    // Let's create multiple small vertical lines inside the SVG
    const width = window.innerWidth - 64; // rough padding
    const height = 24;
    stripsContainer.setAttribute('width', width);
    stripsContainer.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = '';
    const numStrips = Math.floor(width / 15); // one strip every 15px

    for (let i = 0; i < numStrips; i++) {
      const x = i * 15;
      const h = i % 5 === 0 ? 24 : 12; // make every 5th line longer
      const y = 24 - h;
      d += `M${x} ${y}V24 `;
    }

    path.setAttribute('d', d);
    path.setAttribute('stroke', '#e1e6e1');
    path.setAttribute('stroke-width', '1');
    path.setAttribute('opacity', '0.3');

    // clear existing and append new
    stripsContainer.innerHTML = '';
    stripsContainer.appendChild(path);

  }, []);
}
