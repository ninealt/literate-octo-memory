function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-gold">DIGITAL</span>
          <span className="logo-white"> ALCHEMIST</span>
        </div>
        <nav className="nav">
          <a href="#hero">THE CHAMBER</a>
          <a href="#skills">THE CODEX</a>
          <a href="#projects" className="active">THE QUEST LOG</a>
          <a href="#contact">THE RITUAL</a>
        </nav>
        <div className="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
