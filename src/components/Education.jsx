function Education() {
  const education = [
    {
      date: "Octubre 2025 - Marzo 2026",
      title: "Diseño UI/UX",
      school: "Aula Virtual (SENCE) - Sustantiva",
      category: "Diseño",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a853" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <ellipse cx="24" cy="24" rx="18" ry="12" fill="url(#grad1)" opacity="0.3"/>
          <ellipse cx="24" cy="20" rx="14" ry="9" fill="none" stroke="#d4a853" strokeWidth="1"/>
          <circle cx="24" cy="18" r="6" fill="rgba(212,168,83,0.2)"/>
          <path d="M20 26 Q24 30 28 26" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      desc: "Diseño de interfaces y experiencia de usuario"
    },
    {
      date: "Diciembre 2021 - Marzo 2022",
      title: "Unity básico 2D/3D",
      school: "{desafío latam_}",
      category: "Desarrollo",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <polygon points="24,8 38,20 32,40 16,40 10,20" fill="url(#grad2)" opacity="0.3"/>
          <polygon points="24,12 34,21 30,36 18,36 14,21" fill="none" stroke="#a855f7" strokeWidth="1"/>
          <circle cx="24" cy="26" r="4" fill="rgba(168,85,247,0.3)"/>
        </svg>
      ),
      desc: "Desarrollo de videojuegos con Unity"
    },
    {
      date: "Marzo 2021 - Septiembre 2021",
      title: "Diplomado Full Stack Python",
      school: "Coding Dojo (SENCE) - Inacap",
      category: "Desarrollo",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="24" height="24" rx="4" fill="url(#grad3)" opacity="0.3" transform="rotate(45 24 24)"/>
          <rect x="15" y="15" width="18" height="18" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1" transform="rotate(45 24 24)"/>
          <circle cx="24" cy="24" r="5" fill="rgba(34,211,238,0.2)"/>
        </svg>
      ),
      desc: "Desarrollo web completo con Python"
    },
    {
      date: "Abril 2017 - Julio 2017",
      title: "Diplomado en Programación Java y .NET",
      school: "Educación Continua - DuocUC",
      category: "Desarrollo",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#d4a853" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <path d="M24 6 L40 18 L40 36 L24 42 L8 36 L8 18 Z" fill="url(#grad4)" opacity="0.3"/>
          <path d="M24 10 L36 19 L36 33 L24 38 L12 33 L12 19 Z" fill="none" stroke="#f97316" strokeWidth="1"/>
          <circle cx="24" cy="25" r="4" fill="rgba(249,115,22,0.2)"/>
        </svg>
      ),
      desc: "Programación orientada a objetos y frameworks"
    },
    {
      date: "2008 - 2015",
      title: "Diseño",
      school: "Universidad de Valparaíso",
      category: "Grado",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#d4a853" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <ellipse cx="24" cy="28" rx="16" ry="10" fill="url(#grad5)" opacity="0.3"/>
          <ellipse cx="24" cy="22" rx="12" ry="7" fill="none" stroke="#ec4899" strokeWidth="1"/>
          <path d="M18 16 Q24 8 30 16" stroke="#d4a853" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="14" r="3" fill="rgba(236,72,153,0.3)"/>
        </svg>
      ),
      desc: "Formación en diseño gráfico y visual"
    },
    {
      date: "2004 - 2007",
      title: "Pedagogía en Filosofía",
      school: "Universidad de Valparaíso",
      category: "Grado",
      icon: (
        <svg viewBox="0 0 48 48" className="education-icon-svg">
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="16" fill="url(#grad6)" opacity="0.2"/>
          <circle cx="24" cy="24" r="12" fill="none" stroke="#22d3ee" strokeWidth="1"/>
          <circle cx="24" cy="24" r="6" fill="none" stroke="#a855f7" strokeWidth="1"/>
          <circle cx="24" cy="24" r="2" fill="rgba(34,211,238,0.5)"/>
        </svg>
      ),
      desc: "Formación docente y pensamiento crítico"
    },
  ];

  return (
    <div className="education-container">
      <p className="section-label">Formación Académica</p>
      <h2 className="section-title serif">Educación & <em>Formación</em></h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="skill-card education-card-alt" key={index}>
            <div className="skill-card-header">
              <span className="skill-category">{edu.category}</span>
              <span className="education-date-alt">{edu.date}</span>
            </div>
            <div className="skill-icon-wrapper education-icon-wrapper">
              {edu.icon}
            </div>
            <h3 className="skill-name">{edu.title}</h3>
            <div className="education-school-alt">{edu.school}</div>
            <p className="skill-desc">{edu.desc}</p>
            <div className="skill-card-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
