function Experience() {
  const experiences = [
    {
      date: "Octubre 2025 - Actual",
      title: "Feeds & Structured Data Executive",
      company: "★ iProspect Chile",
      desc: "Parte del equipo de tecnología de iProspect chile. Potenciamos a los clientes con soluciones integrales y dinámicas. Creando herramientas adaptadas y funcionales para cada cliente.",
    },
    {
      date: "Diciembre 2023 - Diciembre 2024",
      title: "Desarrolladora Full Stack",
      company: "★ Banco Bice",
      desc: "Parte del equipo de tecnología del Banco Bice. Apoyo en desarrollo tanto en front-end como en back-end, trabajando con diversas tecnologías y metodologías ágiles.",
    },
    {
      date: "Diciembre 2021 - Diciembre 2023",
      title: "Desarrolladora Full Stack",
      company: "◆ Clever by Bice",
      desc: "Parte del equipo de Clever by Bice, una Fintech asociada al Banco Bice. Desarrollo de soluciones tecnológicas innovadoras para el sector financiero.",
    },
    {
      date: "Septiembre 2017 - Septiembre 2018",
      title: "Trainee de Tecnología",
      company: "★ J.P. Morgan and Chase",
      desc: "Parte del equipo en Chile de soporte e implementación de tecnología. Experiencia valiosa en un entorno corporativo global y exigente.",
    },
    {
      date: "Septiembre 2018 - Enero 2019",
      title: "Diseñadora y Montajista",
      company: "⚓ Museo Marítimo de Chile",
      desc: 'Parte del equipo de proyecto de colaboración con Escocia. Diseño y montaje de la exposición "Cochrane 200" en el Museo Santa Rosa de Apoquindo, Santiago.',
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <p className="section-label">Campañas Completadas</p>
        <h2>
          Experiencia <span style={{ fontStyle: "italic", color: "var(--foreground)" }}>Profesional</span>
        </h2>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div className="exp-item" key={index}>
              <div className="exp-date">{exp.date}</div>
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-desc">{exp.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
