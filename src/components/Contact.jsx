function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-label">Enviar invitación para Party?</p>
          <h2>
            Contacto <span style={{ fontStyle: "italic", color: "var(--foreground)" }}>Directo</span>
          </h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
            ¿Tienes un proyecto interesante o una oportunidad? 
            ¡Estoy lista para nuevas aventuras!
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:tamara.vph@gmail.com" className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="contact-label">Email</div>
            <div className="contact-value">tamara.vph@gmail.com</div>
          </a>

          <a href="https://linkedin.com/in/tpalmah" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">linkedin.com/in/tpalmah</div>
          </a>

          <div className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-label">Ubicación</div>
            <div className="contact-value">Quillota, Chile</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
