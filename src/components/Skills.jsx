function Skills() {
  const skills = [
    { icon: "🐍", name: "Python" },
    { icon: "⚛️", name: "JavaScript" },
    { icon: "🅰️", name: "Angular" },
    { icon: "☕", name: "Java" },
    { icon: "🔷", name: "C# / .NET" },
    { icon: "💎", name: "Ruby" },
    { icon: "📄", name: "HTML/CSS" },
    { icon: "⬢", name: "Node.js" },
  ];

  const hobbies = [
    { icon: "🎮", label: "Gaming" },
    { icon: "🎵", label: "Música" },
    { icon: "📖", label: "Lectura" },
    { icon: "📷", label: "Fotografía" },
    { icon: "✈️", label: "Viajes" },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills-grid">
          <div>
            <p className="section-label">Arsenal Tecnológico</p>
            <h2 className="section-title">
              Habilidades <em>Principales</em>
            </h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="section-label">Perfil del Personaje</p>
            <h3 className="about-title">
              Forjada en la <em>Creatividad</em>
            </h3>
            <p className="about-text">
              Mi viaje comenzó en el mundo del diseño, estudiando en la Universidad de Valparaíso 
              donde desarrollé un ojo crítico para la estética y la experiencia de usuario.
            </p>
            <p className="about-text">
              La transición al desarrollo fue natural: descubrí que podía dar vida a mis diseños 
              a través del código. El diplomado en Full Stack Python de Coding Dojo fue mi puerta 
              de entrada al mundo tech.
            </p>
            <p className="about-text">
              Hoy combino ambos mundos: el diseño visual que cautiva y el código robusto que 
              funciona. He trabajado en entornos exigentes como J.P. Morgan y el Banco Bice, 
              donde aprendí a adaptarme rápidamente a nuevas tecnologías.
            </p>
            <div className="hobbies">
              {hobbies.map((hobby, index) => (
                <div className="hobby" key={index}>
                  <span className="hobby-icon">{hobby.icon}</span>
                  <span className="hobby-label">{hobby.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
