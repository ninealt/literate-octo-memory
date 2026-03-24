function Education() {
  const education = [
    {
      date: "Octubre 2025 - Marzo 2026",
      title: "Diseño UI/UX",
      school: "Aula Virtual (SENCE) - Sustantiva",
    },
    {
      date: "Diciembre 2021 - Marzo 2022",
      title: "Unity básico 2D/3D",
      school: "{desafío latam_}",
    },
    {
      date: "Marzo 2021 - Septiembre 2021",
      title: "Diplomado Full Stack Python",
      school: "Coding Dojo (SENCE) - Inacap",
    },
    {
      date: "Abril 2017 - Julio 2017",
      title: "Diplomado en Programación Java y .NET",
      school: "Educación Continua - DuocUC",
    },
    {
      date: "2008 - 2015",
      title: "Diseño",
      school: "Universidad de Valparaíso",
    },
    {
      date: "2004 - 2007",
      title: "Pedagogía en Filosofía",
      school: "Universidad de Valparaíso",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2>
          Educación & <span style={{ fontStyle: "italic", color: "var(--foreground)" }}>Formación</span>
        </h2>

        <div className="edu-grid">
          {education.map((edu, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-date">{edu.date}</div>
              <div className="edu-title">{edu.title}</div>
              <div className="edu-school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
