function Experience() {
  const experiences = [
    {
      date: "Octubre 2025 - Actual",
      title: "Feeds & Structured Data Executive",
      company: "iProspect Chile",
      desc: "Parte del equipo de tecnología de iProspect chile. Potenciamos a los clientes con soluciones integrales y dinámicas. Creando herramientas adaptadas y funcionales para cada cliente.",
    },
    {
      date: "Diciembre 2023 - Diciembre 2024",
      title: "Desarrolladora Full Stack",
      company: "Banco Bice",
      desc: "Parte del equipo de tecnología del Banco Bice. Apoyo en desarrollo tanto en front-end como en back-end, trabajando con diversas tecnologías y metodologías ágiles.",
    },
    {
      date: "Diciembre 2021 - Diciembre 2023",
      title: "Desarrolladora Full Stack",
      company: "Clever by Bice",
      desc: "Parte del equipo de Clever by Bice, una Fintech asociada al Banco Bice. Desarrollo de soluciones tecnológicas innovadoras para el sector financiero.",
    },
    {
      date: "Septiembre 2017 - Septiembre 2018",
      title: "Trainee de Tecnología",
      company: "J.P. Morgan and Chase",
      desc: "Parte del equipo en Chile de soporte e implementación de tecnología. Experiencia valiosa en un entorno corporativo global y exigente.",
    },
    {
      date: "Septiembre 2018 - Enero 2019",
      title: "Diseñadora y Montajista",
      company: "Museo Marítimo de Chile",
      desc: 'Parte del equipo de proyecto de colaboración con Escocia. Diseño y montaje de la exposición "Cochrane 200" en el Museo Santa Rosa de Apoquindo, Santiago.',
    },
  ];

  return (
    <div className="experience-container">
      <p className="section-label">Campañas Completadas</p>
      <h2 className="section-title serif">Experiencia <em>Profesional</em></h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-date">{exp.date}</div>
            <h3 className="experience-title">{exp.title}</h3>
            <div className="experience-company">{exp.company}</div>
            <p className="experience-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
