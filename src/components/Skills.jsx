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
    { icon: "🎮", label: "Videojuegos" },
    { icon: "🎵", label: "Música" },
    { icon: "📖", label: "Lectura" },
    { icon: "📷", label: "Fotografía" },
    { icon: "✈️", label: "Viajes" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="two-col">
          <div>
            <p className="section-label">Arsenal Tecnológico</p>
            <h2>Habilidades <span style={{ fontStyle: "italic", color: "var(--foreground)" }}>Principales</span></h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="story" id="about">
            <p className="section-label">Perfil del Personaje</p>
            <h3>
              Forjada en la <span style={{ color: "var(--foreground)" }}>Creatividad</span>
            </h3>
            <p>
              Mi viaje comenzó en el mundo del diseño, estudiando en la Universidad de Valparaíso 
              donde desarrollé un ojo crítico para la estética y la experiencia de usuario.
            </p>
            <p>
              La transición al desarrollo fue natural: descubrí que podía dar vida a mis diseños 
              a través del código. El diplomado en Full Stack Python de Coding Dojo fue mi puerta 
              de entrada al mundo tech.
            </p>
            <p>
              Hoy combino ambos mundos: el diseño visual que cautiva y el código robusto que 
              funciona. He trabajado en entornos exigentes como J.P. Morgan y el Banco Bice, 
              donde aprendí a adaptarme rápidamente a nuevas tecnologías y metodologías.
            </p>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div className="hobby-item" key={index}>
                  {hobby.icon}
                  <div className="hobby-label">{hobby.label}</div>
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
