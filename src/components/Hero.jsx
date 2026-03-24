function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">Full Stack Developer</div>
            <h1 className="hero-title">
              <span className="first-name">Tamara</span>
              <br />
              <span className="last-name">Palma</span>
            </h1>
            <p className="hero-description">
              Diseñadora de formación y desarrolladora Full Stack Python. Creativa, motivada, 
              con conocimientos amplios en el área del Diseño y Tecnología. Proactiva y receptiva 
              a los cambios del negocio.
            </p>
            <a href="#contact" className="hero-cta">
              Iniciar Contacto →
            </a>
          </div>
          
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-avatar">TP</div>
              <div>
                <div className="hero-card-title">Full Stack Dev</div>
                <div className="hero-card-subtitle">Diseñadora + Developer</div>
                <div className="hero-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Quillota, Chile
                </div>
              </div>
            </div>
            
            <div className="hero-stats">
              <div>
                <div className="stat-row">
                  <span className="stat-label">Desarrollo</span>
                  <span className="stat-value">85%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill purple"></div>
                </div>
              </div>
              <div>
                <div className="stat-row">
                  <span className="stat-label">Diseño</span>
                  <span className="stat-value">75%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill cyan"></div>
                </div>
              </div>
              <div>
                <div className="stat-row">
                  <span className="stat-label">Inglés</span>
                  <span className="stat-value">60%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill gold"></div>
                </div>
              </div>
            </div>
            
            <div className="hero-footer">
              <div className="hero-stat">
                <div className="hero-stat-value">6+</div>
                <div className="hero-stat-label">Años Tech</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">Active</div>
                <div className="hero-stat-label">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
