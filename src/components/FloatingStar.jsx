import { useState, useEffect } from 'react';

function FloatingStar() {
  const [position, setPosition] = useState({ x: 5, y: 50 });
  const [isLanded, setIsLanded] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Animación continua del tiempo para el revoloteo
    const timeInterval = setInterval(() => {
      setTime(t => t + 0.05);
    }, 50);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = scrollLeft / maxScroll;
      
      // Posición horizontal base
      const baseX = 5 + (progress * 85);
      
      // Si está cerca del final, aterriza en el footer
      if (progress > 0.92) {
        setIsLanded(true);
      } else {
        setIsLanded(false);
      }
      
      setPosition(prev => ({ ...prev, baseX }));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular posición con revoloteo
  const calculatePosition = () => {
    if (isLanded) {
      return { x: 85, y: 85 };
    }

    const baseX = position.baseX || 5;
    
    // Múltiples ondas senoidales para revoloteo más complejo
    const yOffset = 
      Math.sin(time) * 15 +                    // Onda principal
      Math.sin(time * 2.3) * 8 +               // Onda secundaria rápida
      Math.sin(time * 0.7) * 5;                // Onda lenta
    
    const xOffset = 
      Math.cos(time * 1.5) * 3 +               // Movimiento lateral suave
      Math.sin(time * 3) * 2;                  // Vibración rápida
    
    const rotation = Math.sin(time * 2) * 20 + time * 30; // Rotación continua + oscilación
    
    return {
      x: baseX + xOffset,
      y: 35 + yOffset,
      rotation
    };
  };

  const pos = calculatePosition();

  return (
    <div 
      className={`floating-star ${isLanded ? 'landed' : ''}`}
      style={{
        left: `${pos.x}%`,
        top: isLanded ? 'auto' : `${pos.y}%`,
        bottom: isLanded ? '70px' : 'auto',
        transform: isLanded ? 'none' : `rotate(${pos.rotation}deg)`,
      }}
    >
      <span>✨</span>
      {isLanded && (
        <>
          <div className="star-glow"></div>
          <div className="star-sparkles">
            <span className="sparkle s1">✦</span>
            <span className="sparkle s2">✦</span>
            <span className="sparkle s3">✦</span>
          </div>
        </>
      )}
    </div>
  );
}

export default FloatingStar;
