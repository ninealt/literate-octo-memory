function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <div className="logo-dot"></div>
            <span>TAMARA PALMA</span>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/tpalmah" target="_blank" rel="noopener noreferrer" className="social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:tamara.vph@gmail.com" className="social" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
          <p className="copyright">© 2026 Tamara Palma.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
