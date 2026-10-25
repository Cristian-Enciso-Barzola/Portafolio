import './Proyectos.css';

// Importación de imágenes locales para los circuitos de Tinkercad
import imgCircuitoParking from '../../assets/tinkercad_circuito.png';
import imgCircuitoServidores from '../../assets/servidores_circuito.png';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      titulo: "Sistema IoT de Control de Acceso e Iluminación",
      descripcion: "Sistema automatizado con Arduino Uno, sensor TMP36, LDR, PIR y servomotor para la gestión inteligente de estacionamientos y alertas térmicas.",
      tecnologias: ["Arduino", "C++", "Sensores IoT", "Tinkercad", "LCD I2C"],
      imagen: imgCircuitoParking,
      linkVideo: "https://youtu.be/jIEj6B1CY58" // Video de YouTube
    },
    {
      id: 2,
      titulo: "EcoTrack App - Gestión de Residuos",
      descripcion: "Aplicación orientada al monitoreo y gestión inteligente de residuos sólidos e impacto ambiental para soluciones ecológicas sostenibles.",
      tecnologias: ["React", "JavaScript", "Mobile App", "Node.js"],
      imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      linkGithub: "https://github.com/jeremyylasaca40-a11y/EcoTrack2",
      linkDriveApp: "https://drive.google.com/drive/folders/1FteKL7r5evHHRdPGzjGViqL5TgWRjlPg?usp=drive_link" // Enlace de Google Drive
    },
    {
      id: 3,
      titulo: "Control de Temperatura en Sala de Servidores",
      descripcion: "Sistema IoT desarrollado en Tinkercad con Arduino Uno, sensor TMP36, pantalla LCD 16x2, servomotor para compuerta de ventilación y buzzer de alerta.",
      tecnologias: ["Arduino", "C++", "Tinkercad", "Sensores IoT", "LCD 16x2"],
      imagen: imgCircuitoServidores,
      linkVideo: "https://drive.google.com/drive/folders/18pmYDI6JxLTJYC8IhRwUYLfCUcC1tIc0?usp=drive_link" // Pega aquí tu enlace del MP4 en Drive
    },
    {
      id: 4,
      titulo: "AppTareas - Gestor y Organizador de Tareas",
      descripcion: "Aplicación orientada a la administración eficiente de tareas diarias, control de pendientes y organización de productividad personal.",
      tecnologias: ["React", "JavaScript", "Mobile App", "CSS"],
      imagen: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&q=80",
      linkGithub: "https://github.com/jeremyylasaca40-a11y/AppTareas",
      linkDriveApp: "https://drive.google.com/drive/folders/1FteKL7r5evHHRdPGzjGViqL5TgWRjlPg?usp=drive_link" // Enlace de Google Drive proporcionado
    },
    {
      id: 5,
      titulo: "ECOLIM - Plataforma Web de Reciclaje",
      descripcion: "Proyecto grupal integrador (Full Stack Developer) que promueve la separación de residuos, catálogo interactivo de materiales y calculadora de impacto ambiental.",
      tecnologias: ["React", "Vite", "JavaScript", "CSS", "Git Workflow"],
      imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      linkGithub: "https://github.com/jeremyylasaca40-a11y/web_reciclaje",
      linkApp: "https://web-reciclaje.vercel.app/" // Enlace oficial de Vercel
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

                {/* Botones de evidencias dinámicos */}
                <div className="proyecto-links mt-4" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {proyecto.linkVideo && (
                    <a 
                      href={proyecto.linkVideo} 
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
                      Ver Simulación / Video
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

                  {proyecto.linkDriveApp && (
                    <a 
                      href={proyecto.linkDriveApp} 
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
                      Probar App (Drive)
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
                      Ver Aplicación Web (Vercel)
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