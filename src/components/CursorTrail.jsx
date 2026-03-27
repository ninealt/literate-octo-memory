import { useEffect, useRef } from 'react';

function CursorTrail() {
  const trailRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-particle';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      container.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} className="cursor-trail-container" />;
}

export default CursorTrail;
