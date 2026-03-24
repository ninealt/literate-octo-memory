function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-label">Enviar invitación para Party?</p>
          <h2 className="section-title">
            Contacto <em>Directo</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            ¿Tienes un proyecto interesante o una oportunidad? 
            ¡Estoy lista para nuevas aventuras!
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:tamara.vph@gmail.com" className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <span className="contact-label">Email</span>
            <span className="contact-value">tamara.vph@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/tpalmah" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/tpalmah</span>
          </a>

          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="contact-label">Ubicación</span>
            <span className="contact-value">Quillota, Chile</span>
          </div>
        </div>
        
        {/* Botón Summon */}
        <div className="contact-cta-wrapper">
          <a href="mailto:tamara.vph@gmail.com" className="summon-btn">
            <span className="summon-icon">✦</span>
            Summon
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
