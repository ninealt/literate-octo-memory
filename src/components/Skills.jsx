import {
  Code2,
  FileType,
  Palette,
  Database,
  GitBranch,
  Terminal,
  Boxes,
  Workflow,
} from "lucide-react";

function Skills() {
  const skills = [
    { icon: <Code2 size={32} />, name: "JavaScript" },
    { icon: <FileType size={32} />, name: "TypeScript" },
    { icon: <Palette size={32} />, name: "React" },
    { icon: <Database size={32} />, name: "Node.js" },
    { icon: <GitBranch size={32} />, name: "Git" },
    { icon: <Terminal size={32} />, name: "SQL" },
    { icon: <Boxes size={32} />, name: "Docker" },
    { icon: <Workflow size={32} />, name: "AWS" },
  ];

  return (
    <div className="skills-container">
      <p className="section-label">Habilidades Adquiridas</p>
      <h2 className="section-title serif">Stack Tecnológico</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
