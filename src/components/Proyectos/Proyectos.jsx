import './Proyectos.css';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema IoT de Control de Acceso e Iluminación",
      descripcion: "Sistema automatizado con Arduino Uno, sensor TMP36, LDR, PIR y servomotor para la gestión inteligente de estacionamientos y alertas térmicas.",
      tecnologias: ["Arduino", "C++", "Sensores IoT", "Tinkercad", "LCD I2C"],
      linkTinkercad: "https://www.tinkercad.com/things/8UBEnAFoxPx/editel?returnTo=%2Fdashboard&sharecode=n3VLQxC1nXoCJtrQZsWtbifkNBEc-MWr9bZqW4tXLWg"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      titulo: "EcoTrack App - Gestión de Residuos",
      descripcion: "Aplicación móvil orientada al monitoreo y gestión inteligente de residuos sólidos e impacto ambiental para soluciones ecológicas sostenibles.",
      tecnologias: ["React", "JavaScript", "Mobile App", "Node.js"],
      linkGithub: "https://github.com/jeremyylasaca40-a11y/EcoTrack2",
      linkApp: "#" // Aquí puedes cambiar el '#' por el enlace real de tu app si ya la tienes desplegada (ej. en Vercel)
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

                {/* Botones de evidencia condicionales según el proyecto */}
                <div className="proyecto-links mt-4" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {proyecto.linkTinkercad && (
                    <a 
                      href={proyecto.linkTinkercad} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-proyecto"
                      style={{
                        background: '#64dfdf',
                        color: '#0b132b',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      Ver en Tinkercad
                    </a>
                  )}

                  {proyecto.linkGithub && (
                    <a 
                      href={proyecto.linkGithub} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-proyecto"
                      style={{
                        background: 'transparent',
                        color: '#64dfdf',
                        border: '1px solid #64dfdf',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      Repositorio GitHub
                    </a>
                  )}

                  {proyecto.linkApp && (
                    <a 
                      href={proyecto.linkApp} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-proyecto"
                      style={{
                        background: '#64dfdf',
                        color: '#0b132b',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      Ver Aplicación
                    </a>
                  )}
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