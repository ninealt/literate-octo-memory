function Skills() {
  const mainSkills = [
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Lenguaje",
      desc: "Desarrollo backend, scripts y automatización"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Lenguaje",
      desc: "Desarrollo frontend interactivo y dinámico"
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Lenguaje",
      desc: "Código tipado y escalable"
    },
    { 
      name: "HTML / CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Lenguaje",
      desc: "Estructura y estilos web semánticos"
    },
    { 
      name: "Angular", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      category: "Framework",
      desc: "Aplicaciones web robustas y escalables"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Framework",
      desc: "Interfaces de usuario modernas y reactivas"
    },
    { 
      name: "Ruby on Rails", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
      category: "Framework",
      desc: "Desarrollo rápido de aplicaciones web"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Runtime",
      desc: "Servidores y APIs eficientes"
    },
  ];

  const otherSkills = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  ];

  return (
    <div className="skills-container">
      <p className="section-label">Arsenal Tecnológico</p>
      <h2 className="section-title serif">Stack <em>Tecnológico</em></h2>

      {/* Grid principal - 8 cards */}
      <div className="skills-grid">
        {mainSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-category">{skill.category}</span>
            </div>
            <div className="skill-icon-wrapper">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="skill-icon-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="skill-icon-fallback" style={{display: 'none'}}>
                {skill.name.charAt(0)}
              </div>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
            <div className="skill-card-border"></div>
          </div>
        ))}
      </div>

      {/* Otras skills - fila horizontal */}
      <div className="skills-other">
        <p className="skills-other-label">También trabajo con</p>
        <div className="skills-other-list">
          {otherSkills.map((skill, index) => (
            <div key={index} className="skill-other-item" title={skill.name}>
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="skill-other-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="skill-other-fallback" style={{display: 'none'}}>
                {skill.name.charAt(0)}
              </span>
              <span className="skill-other-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
