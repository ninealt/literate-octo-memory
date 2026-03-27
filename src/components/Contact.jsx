function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "tamara.vph@gmail.com",
      href: "mailto:tamara.vph@gmail.com",
      category: "Comunicación",
      icon: (
        <svg viewBox="0 0 48 48" className="contact-icon-svg">
          <defs>
            <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <ellipse cx="24" cy="28" rx="16" ry="10" fill="url(#emailGrad)" opacity="0.3"/>
          <path d="M12 20 L24 28 L36 20" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
          <rect x="12" y="18" width="24" height="16" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1"/>
        </svg>
      ),
      desc: "Escríbeme directamente"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/tpalmah",
      href: "https://linkedin.com/in/tpalmah",
      category: "Red Profesional",
      icon: (
        <svg viewBox="0 0 48 48" className="contact-icon-svg">
          <defs>
            <linearGradient id="linkedinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a66c2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect x="14" y="10" width="20" height="28" rx="3" fill="url(#linkedinGrad)" opacity="0.3"/>
          <rect x="16" y="12" width="16" height="24" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1"/>
          <circle cx="20" cy="18" r="2" fill="#22d3ee"/>
          <path d="M18 24 L18 32" stroke="#22d3ee" strokeWidth="1.5"/>
          <path d="M22 24 L22 32 M22 26 Q26 24 26 28 L26 32" stroke="#22d3ee" strokeWidth="1.5"/>
        </svg>
      ),
      desc: "Conecta con mi perfil"
    },
    {
      type: "Ubicación",
      value: "Quillota, Chile",
      href: null,
      category: "Base de Operaciones",
      icon: (
        <svg viewBox="0 0 48 48" className="contact-icon-svg">
          <defs>
            <linearGradient id="locGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a853" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <ellipse cx="24" cy="36" rx="12" ry="4" fill="url(#locGrad)" opacity="0.2"/>
          <path d="M24 8 C32 8 36 14 36 20 C36 28 24 38 24 38 C24 38 12 28 12 20 C12 14 16 8 24 8" fill="url(#locGrad)" opacity="0.3"/>
          <path d="M24 8 C32 8 36 14 36 20 C36 28 24 38 24 38 C24 38 12 28 12 20 C12 14 16 8 24 8" fill="none" stroke="#d4a853" strokeWidth="1"/>
          <circle cx="24" cy="20" r="4" fill="rgba(212,168,83,0.4)"/>
        </svg>
      ),
      desc: "Disponible remoto"
    },
  ];

  const CardContent = ({ method }) => (
    <div className="skill-card contact-card-alt">
      <div className="skill-card-header">
        <span className="skill-category">{method.category}</span>
      </div>
      <div className="skill-icon-wrapper education-icon-wrapper">
        {method.icon}
      </div>
      <h3 className="skill-name">{method.type}</h3>
      <div className="contact-value-alt">{method.value}</div>
      <p className="skill-desc">{method.desc}</p>
      <div className="skill-card-border"></div>
    </div>
  );

  return (
    <div className="contact-container">
      <p className="section-label">Enviar invitación para Party?</p>
      <h2 className="section-title serif">Contacto <em>Directo</em></h2>

      <div className="contact-grid-alt">
        {contactMethods.map((method, index) => (
          method.href ? (
            <a 
              key={index} 
              href={method.href} 
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-link-wrapper"
            >
              <CardContent method={method} />
            </a>
          ) : (
            <CardContent key={index} method={method} />
          )
        ))}
      </div>
    </div>
  );
}

export default Contact;
