import { useState, useEffect } from 'react';

function HeroTypewriter({ onComplete }) {
  const [phase, setPhase] = useState('name');
  const [displayName, setDisplayName] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullName = 'Tamara Palma';
  const profileTitle = 'Perfil del Personaje';
  const profileSubtitle = 'Forjada en la Creatividad';
  const paragraph = 'Mi viaje comenzó en el mundo del diseño, estudiando en la Universidad de Valparaíso donde desarrollé un ojo crítico para la estética y la experiencia de usuario.\n\nLa transición al desarrollo fue natural: descubrí que podía dar vida a mis diseños a través del código. El diplomado en Full Stack Python de Coding Dojo fue mi puerta de entrada al mundo tech.\n\nHoy combino ambos mundos: el diseño visual que cautiva y el código robusto que funciona. He trabajado en entornos exigentes como J.P. Morgan y el Banco Bice, donde aprendí a adaptarme rápidamente a nuevas tecnologías.';

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
        }, 15);
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
      
      {(phase === 'profileTitle' || phase === 'profileSubtitle' || phase === 'paragraph' || displayText.length > 0) && (
        <>
          {phase === 'profileTitle' && (
            <p className="hero-profile-title">
              {displayText}
              {displayText.length < profileTitle.length && (
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              )}
            </p>
          )}
          {phase === 'profileSubtitle' && (
            <p className="hero-profile-subtitle">
              {displayText}
              {displayText.length < profileSubtitle.length && (
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              )}
            </p>
          )}
          {phase === 'paragraph' && (
            <div className="hero-description">
              {displayText.split('\n\n').map((block, index) => (
                <p key={index} className="hero-description-paragraph">
                  {block}
                </p>
              ))}
              {displayText.length < paragraph.length && (
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default HeroTypewriter;
