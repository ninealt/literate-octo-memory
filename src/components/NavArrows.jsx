import { useState, useEffect } from 'react';

function NavArrows() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const panels = ['hero', 'skills', 'experience', 'education', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.horizontal-scroll');
      if (!scrollContainer) return;
      
      const scrollLeft = scrollContainer.scrollLeft;
      const panelWidth = window.innerWidth;
      const panelIndex = Math.round(scrollLeft / panelWidth);
      setCurrentPanel(Math.min(panelIndex, panels.length - 1));
    };

    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const goToPanel = (index) => {
    if (index >= 0 && index < panels.length) {
      const element = document.getElementById(panels[index]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      }
    }
  };

  return (
    <>
      {currentPanel > 0 && (
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={() => goToPanel(currentPanel - 1)}
          aria-label="Previous section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      {currentPanel < panels.length - 1 && (
        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={() => goToPanel(currentPanel + 1)}
          aria-label="Next section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </>
  );
}

export default NavArrows;
