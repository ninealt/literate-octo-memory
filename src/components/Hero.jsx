function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge">
              <span>✦</span>
              <span>Full Stack Developer</span>
            </div>
            <h1>
              <span className="purple">Tamara</span><br />
              <span className="gold">Palma</span>
            </h1>
            <p className="description">
              Diseñadora de formación y desarrolladora Full Stack Python. Creativa, motivada, 
              con conocimientos amplios en el área del Diseño y Tecnología. Proactiva y receptiva 
              a los cambios del negocio.
            </p>
            <a href="#contact" className="btn">Iniciar Contacto →</a>
          </div>
          <div className="stats-card">
            <div className="card-header">
              <div className="avatar">TP</div>
              <div>
                <div className="level">Full Stack Dev</div>
                <div className="role">Diseñadora + Developer</div>
                <div className="location">📍 Quillota, Chile</div>
                <div className="progress-bar">
                  <div className="progress-label">
                    <span>Desarrollo</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill purple-bar"></div>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-label">
                    <span>Diseño</span>
                    <span>75%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill cyan-bar"></div>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-label">
                    <span>Inglés</span>
                    <span>60%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill gold-bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="attributes">
              <div className="attr">
                <div className="attr-value">6+</div>
                <div className="attr-label">Años Tech</div>
              </div>
              <div className="attr">
                <div className="attr-value">Active</div>
                <div className="attr-label">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
