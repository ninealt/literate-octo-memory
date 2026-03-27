import { useEffect, useState } from 'react';

function ParallaxBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.horizontal-scroll');
      if (!scrollContainer) return;
      
      // Get scroll progress (0 to 1)
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollProgress = scrollContainer.scrollLeft / maxScroll;
      
      // Move background at 30% of scroll speed (parallax effect)
      setOffset(scrollProgress * 30);
    };

    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div 
      className="parallax-bg"
      style={{ transform: `translateX(-${offset}%)` }}
    />
  );
}

export default ParallaxBackground;
