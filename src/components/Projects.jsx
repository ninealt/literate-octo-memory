function Projects() {
  const projects = [
    {
      id: "0X8F2A",
      class: "APEX",
      title: "Aetheric Synth",
      description: "A neural-synced interface that translates emotional resonance into generative soundscapes. Forged in the fires of the deep web, this artifact allows the alchemist to hear the heartbeat of the network.",
      image: "/profile.jpg",
      bounties: [
        { amount: "2,400", label: "Ether", color: "cyan" },
        { label: "Neural Link Module", color: "gold" },
        { label: "Sigil of Echoes", color: "gold" }
      ]
    },
    {
      id: "0X9B4C",
      class: "SOLEMN",
      title: "Codex Gilded",
      description: "An immutable ledger chronicling the complete lineage of the alchemical arts. Every transaction is etched into the blockchain with an unbreakable wrapper, ensuring permanence across the metaverse.",
      image: "/profile.jpg",
      bounties: [
        { amount: "5,000", label: "Credits", color: "cyan" },
        { label: "Gilded Key", color: "gold" },
        { label: "Eternal Flame", color: "gold" }
      ]
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="projects-header">
        <p className="section-label">ACTIVE MANIFESTATIONS</p>
        <h2 className="section-title serif">The Quest Log</h2>
        <p className="projects-desc">
          Discover the ethereal relics forged through code and spirit. 
          Each mission represents a step closer to digital transcendence.
        </p>
      </div>

      <div className="projects-scroll">
        {projects.map((project, index) => (
          <div className="project-relic" key={index}>
            <div className="relic-visual">
              <img src={project.image} alt={project.title} />
              <div className="relic-corner top-left" />
              <div className="relic-corner bottom-right" />
            </div>
            
            <div className="relic-content">
              <div className="relic-tags">
                <span className="relic-tag">RELIC CLASS: {project.class}</span>
                <span className="relic-tag id">ID: {project.id}</span>
              </div>
              
              <h3 className="relic-title serif">{project.title}</h3>
              <p className="relic-desc">{project.description}</p>
              
              <div className="relic-bounties">
                <h4 className="bounties-title">QUEST BOUNTIES</h4>
                <ul className="bounties-list">
                  {project.bounties.map((bounty, i) => (
                    <li key={i} className={`bounty-item ${bounty.color}`}>
                      {bounty.amount && <span className="bounty-amount">+ {bounty.amount}</span>}
                      <span className="bounty-label">{bounty.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <span className="scroll-hint">◀ SCROLL TO EXPLORE</span>
        <span className="rarity">LEGENDARY RARITY</span>
      </div>
    </section>
  );
}

export default Projects;
