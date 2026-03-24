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
    <section className="section education" id="education">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          Educación & <em>Formación</em>
        </h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-date">{edu.date}</div>
              <h3 className="education-title">{edu.title}</h3>
              <div className="education-school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
