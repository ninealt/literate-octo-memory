function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div>
          <div className="hero-badge">✦ FULL STACK DEVELOPER</div>
          <h1 className="hero-title serif">
            <span className="first-name">Tamara</span>
            <br />
            <span className="last-name">Palma</span>
          </h1>
          <p className="hero-description">
            Diseñadora de formación y desarrolladora Full Stack Python. Creativa, 
            motivada, con conocimientos amplios en el área del Diseño y Tecnología. 
            Proactiva y receptiva a los cambios del negocio.
          </p>
          <a href="#contact" className="hero-cta">
            Iniciar Contacto →
          </a>
        </div>
        
        <div className="rpg-card-wrapper">
          <div className="rpg-card">
            <div className="rpg-card-header">
              <div className="rpg-title-group">
                <div className="rpg-title">Full Stack Dev</div>
                <div className="rpg-subtitle">Diseñadora + Developer</div>
                <div className="rpg-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Quillota, Chile
                </div>
              </div>
            </div>
            
            <div className="rpg-stats">
              <div className="rpg-stat-row">
                <div className="rpg-stat-header">
                  <span className="rpg-stat-label">Desarrollo</span>
                  <span className="rpg-stat-value">85%</span>
                </div>
                <div className="rpg-progress-bg">
                  <div className="rpg-progress-fill purple" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="rpg-stat-row">
                <div className="rpg-stat-header">
                  <span className="rpg-stat-label">Diseño</span>
                  <span className="rpg-stat-value">75%</span>
                </div>
                <div className="rpg-progress-bg">
                  <div className="rpg-progress-fill cyan" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="rpg-stat-row">
                <div className="rpg-stat-header">
                  <span className="rpg-stat-label">Inglés</span>
                  <span className="rpg-stat-value">60%</span>
                </div>
                <div className="rpg-progress-bg">
                  <div className="rpg-progress-fill gold" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="rpg-footer">
              <div className="rpg-footer-stat">
                <div className="rpg-footer-value">6+</div>
                <div className="rpg-footer-label">Años Tech</div>
              </div>
              <div className="rpg-footer-stat">
                <div className="rpg-footer-value">Active</div>
                <div className="rpg-footer-label">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
