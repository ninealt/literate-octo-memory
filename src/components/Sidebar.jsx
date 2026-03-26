import { useState, useEffect } from 'react';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const panels = document.querySelectorAll('.panel');
      const scrollContainer = document.querySelector('.horizontal-scroll');
      
      if (!scrollContainer) return;
      
      const scrollLeft = scrollContainer.scrollLeft;
      const panelWidth = window.innerWidth;
      
      panels.forEach((panel, index) => {
        const panelLeft = index * panelWidth;
        const panelRight = (index + 1) * panelWidth;
        
        if (scrollLeft >= panelLeft - panelWidth / 2 && scrollLeft < panelRight - panelWidth / 2) {
          setActiveSection(panel.id);
        }
      });
    };

    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      setActiveSection(id);
    }
  };

  const links = [
    { id: 'hero', icon: 'home', title: 'Home' },
    { id: 'skills', icon: 'skills', title: 'Skills' },
    { id: 'experience', icon: 'experience', title: 'Experience' },
    { id: 'education', icon: 'education', title: 'Education' },
    { id: 'contact', icon: 'contact', title: 'Contact' },
  ];

  const icons = {
    home: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    skills: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    experience: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    education: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    contact: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => (
          <button
            key={link.id}
            className={`sidebar-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollToSection(link.id)}
            title={link.title}
          >
            {icons[link.icon]}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
