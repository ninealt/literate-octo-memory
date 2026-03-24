function Tools() {
  const tools = [
    {
      category: "Lenguajes",
      items: ["Python", "JavaScript", "Java", "C#", "Ruby", "HTML/CSS"],
    },
    {
      category: "Frameworks",
      items: ["Angular", "Node.js", "Ruby on Rails", ".NET"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud Platform", "Vercel", "Render", "GitHub / GitLab"],
    },
    {
      category: "Data & BI",
      items: ["IBM ETL", "Cognos (IBM)", "Jupyter Notebook", "Big Data"],
    },
    {
      category: "Enterprise",
      items: ["Microsoft SharePoint", "Jira", "Microsoft Teams", "Office Suite"],
    },
    {
      category: "Diseño & 3D",
      items: ["Adobe Suite", "AutoCAD", "Rhinoceros 5.0-7.0", "Unity (Básico)"],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Inventario</p>
        <h2 className="section-title">
          Herramientas & <em>Tecnologías</em>
        </h2>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>
              <h4 className="tool-title">{tool.category}</h4>
              <div className="tool-list">
                {tool.items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
