import { useState, useEffect } from 'react';

function HeroTypewriter({ onComplete }) {
  const [phase, setPhase] = useState('name');
  const [displayName, setDisplayName] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullName = 'Tamara Palma';
  const paragraph = 'Diseñadora de formación y desarrolladora Full Stack Python. Creativa, motivada, con conocimientos amplios en el área del Diseño y Tecnología. Proactiva y receptiva a los cambios del negocio.';

  useEffect(() => {
    let timeout;
    
    if (phase === 'name') {
      if (displayName.length < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayName(fullName.slice(0, displayName.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => {
          setPhase('pause');
        }, 800);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => {
        setPhase('paragraph');
      }, 500);
    } else if (phase === 'paragraph') {
      if (displayText.length < paragraph.length) {
        timeout = setTimeout(() => {
          setDisplayText(paragraph.slice(0, displayText.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          onComplete && onComplete();
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayName, displayText, phase, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const nameParts = displayName.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts[1] || '';

  return (
    <>
      <h1 className="hero-title serif">
        <span className="first-name">{firstName}</span>
        {firstName && lastName && <br />}
        <span className="last-name">
          {lastName}
          {phase !== 'paragraph' && (
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          )}
        </span>
      </h1>
      
      {(phase === 'paragraph' || displayText.length > 0) && (
        <p className="hero-description">
          {displayText}
          {phase === 'paragraph' && displayText.length < paragraph.length && (
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          )}
        </p>
      )}
    </>
  );
}

export default HeroTypewriter;
