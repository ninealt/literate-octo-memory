function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">TAMARA PALMA</div>
        
        <div className="footer-social">
          <a href="https://linkedin.com/in/tpalmah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:tamara.vph@gmail.com" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
        
        <p className="footer-copy">© 2025 Tamara Palma. Diseñada con 💜 y código.</p>
      </div>
    </footer>
  );
}

export default Footer;
