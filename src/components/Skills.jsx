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

  return (
    <div className="skills-container">
      <p className="section-label">Arsenal Tecnológico</p>
      <h2 className="section-title serif">Habilidades <em>Principales</em></h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
