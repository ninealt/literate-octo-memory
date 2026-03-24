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
    <section className="languages-tools">
      <div className="container">
        <p className="section-label">Inventario</p>
        <h2>
          Herramientas & <span style={{ fontStyle: "italic", color: "var(--foreground)" }}>Tecnologías</span>
        </h2>

        <div className="tools-grid" style={{ marginTop: "2rem" }}>
          {tools.map((tool, index) => (
            <div className="tool-category" key={index}>
              <h4>{tool.category}</h4>
              <div className="tool-list">
                {tool.items.map((item, i) => (
                  <span key={i}>
                    {item}
                    {i < tool.items.length - 1 && <br />}
                  </span>
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
