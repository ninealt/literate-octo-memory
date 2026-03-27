import { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.horizontal-scroll');
      if (!scrollContainer) return;
      
      const scrollLeft = scrollContainer.scrollLeft;
      const panelWidth = window.innerWidth;
      const panelIndex = Math.round(scrollLeft / panelWidth);
      
      const sections = ['hero', 'skills', 'experience', 'education', 'contact'];
      setActiveSection(sections[panelIndex] || 'hero');
    };

    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          for those who come after
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
