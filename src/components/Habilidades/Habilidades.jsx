import './Habilidades.css';

const Habilidades = () => {
  const skillsData = [
    { id: 1, titulo: "React", descripcion: "Construcción de interfaces de usuario modernas con componentes.", nivel: "Avanzado", botonTexto: "VER CERTIFICADO", estado: "completado" },
    { id: 2, titulo: "JavaScript", descripcion: "Lenguaje de programación interpretado y moderno.", nivel: "Avanzado", botonTexto: "VER CERTIFICADO", estado: "completado" },
    { id: 3, titulo: "SQL Server / MySQL", descripcion: "Gestión y diseño de bases de datos relacionales.", nivel: "Avanzado", botonTexto: "VER CERTIFICADO", estado: "completado" },
    { id: 4, titulo: "Git / GitHub", descripcion: "Control de versiones y repositorios en la nube.", nivel: "Avanzado", botonTexto: "VER CERTIFICADO", estado: "completado" },
    { id: 5, titulo: "HTML5 / CSS3", descripcion: "Maquetación web responsiva y adaptativa.", nivel: "Avanzado", botonTexto: "VER CERTIFICADO", estado: "completado" },
    { id: 6, titulo: "C# / .NET", descripcion: "Desarrollo de APIs y lógica de negocio en backend.", nivel: "Intermedio", botonTexto: "EN PROCESO", estado: "proceso" }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title text-center mb-4 text-white">Tech Stack</h2>
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;