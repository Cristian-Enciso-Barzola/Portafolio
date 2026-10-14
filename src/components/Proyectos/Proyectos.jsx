import './Proyectos.css';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema de Matrícula SENATI",
      descripcion: "Aplicación desarrollada en React con control de estados y tarjetas dinámicas de alumnos.",
      tecnologias: ["React", "JavaScript", "Bootstrap", "CSS3"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      titulo: "Gestión de Inventario y Facturas",
      descripcion: "Sistema web para importación y control automatizado de comprobantes y registros.",
      tecnologias: ["C#", ".NET", "SQL Server", "HTML5"],
      linkDemo: "#",
      linkCodigo: "#"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center text-white mb-5">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              </div>
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">Demo</a>
                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">Código</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;