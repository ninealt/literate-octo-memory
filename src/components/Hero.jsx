import { useState } from 'react';
import HeroTypewriter from './HeroTypewriter';

function Hero() {
  const [showCard, setShowCard] = useState(false);
  const [avatarZoomed, setAvatarZoomed] = useState(false);

  const stats = [
    { name: 'Desarrollo', sublabel: 'ACTIVE', value: 85, color: 'cyan' },
    { name: 'Diseño', sublabel: 'CREATIVE', value: 75, color: 'gold' },
    { name: 'Inglés', sublabel: 'COMMUNICATION', value: 60, color: 'purple' },
  ];

  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div>
          {/* Nombre y descripción */}
          <HeroTypewriter onComplete={() => setShowCard(true)} />
          
          <a href="#contact" className="hero-cta">
            Iniciar Contacto →
          </a>
        </div>
        
        {/* RPG Card combinado */}
        <div className={`rpg-card-wrapper ${showCard ? 'visible' : ''}`}>
          <div className="skill-card rpg-card-combined">
            <div className="skill-card-header">
              <span className="skill-category">Rol Principal</span>
            </div>
            
            {/* Foto + grimorio (foto primero) */}
            <div className="rpg-avatar-section">
              <div 
                className={`rpg-avatar-wrapper ${avatarZoomed ? 'zoomed' : ''}`}
                onClick={() => setAvatarZoomed(!avatarZoomed)}
                onMouseLeave={() => setAvatarZoomed(false)}
              >
                <img 
                  src="/profile-avatar.jpg" 
                  alt="Tamara Palma"
                  className="rpg-avatar-img"
                />
              </div>
              
              <div className="rpg-avatar-divider"></div>
              
              <div className="rpg-grimoire-section">
                <div className="rpg-grimoire-wrapper">
                  <svg viewBox="0 0 60 70" className="rpg-grimoire-svg">
                    <defs>
                      <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3d2817"/>
                        <stop offset="50%" stopColor="#5c3d2a"/>
                        <stop offset="100%" stopColor="#3d2817"/>
                      </linearGradient>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4a853"/>
                        <stop offset="100%" stopColor="#fbbf24"/>
                      </linearGradient>
                      <filter id="bookGlow">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#d4a853" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    {/* Libro cerrado */}
                    <rect x="5" y="5" width="50" height="60" rx="3" fill="url(#bookGrad)" filter="url(#bookGlow)"/>
                    {/* Lomo del libro */}
                    <rect x="5" y="5" width="8" height="60" rx="2" fill="#2a1a0f"/>
                    {/* Borde dorado */}
                    <rect x="16" y="8" width="36" height="54" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="1"/>
                    {/* Símbolo mágico central */}
                    <circle cx="34" cy="28" r="8" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
                    <path d="M34 20 L34 36 M26 28 L42 28" stroke="url(#goldGrad)" strokeWidth="1"/>
                    <circle cx="34" cy="28" r="3" fill="rgba(212,168,83,0.3)"/>
                    {/* Cierre del libro */}
                    <rect x="28" y="48" width="12" height="8" rx="1" fill="url(#goldGrad)"/>
                    <circle cx="34" cy="52" r="2" fill="#3d2817"/>
                  </svg>
                </div>
                <span className="rpg-class-label">Clase Fav: Mago / Support</span>
              </div>
            </div>
            
            <h3 className="skill-name" style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              Full Stack Developer
            </h3>
            <p className="skill-desc" style={{ fontSize: '0.6875rem', marginBottom: '1rem' }}>
              Desarrolladora Web & Diseñadora UI/UX
            </p>
            
            {/* Stats elegantes con barras */}
            <div className="rpg-stats-elegant">
              {stats.map((stat, index) => (
                <div key={index} className="rpg-stat-elegant">
                  <div className="rpg-stat-header-elegant">
                    <div className="rpg-stat-title-group">
                      <span className="rpg-stat-name-elegant">{stat.name}</span>
                      <span className="rpg-stat-sublabel">
                        <span className="rpg-stat-dot"></span>
                        {stat.sublabel}
                      </span>
                    </div>
                    <span className={`rpg-stat-percent-elegant ${stat.color}`}>{stat.value}%</span>
                  </div>
                  <div className="rpg-progress-track">
                    <div className={`rpg-progress-bar ${stat.color}`} style={{ width: `${stat.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="rpg-footer-compact">
              <div className="rpg-footer-item">
                <span className="rpg-footer-num">6+</span>
                <span className="rpg-footer-text">Años Tech</span>
              </div>
              <div className="rpg-footer-divider"></div>
              <div className="rpg-footer-item">
                <span className="rpg-footer-status">●</span>
                <span className="rpg-footer-text">In Duty</span>
              </div>
            </div>
            
            <div className="skill-card-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
