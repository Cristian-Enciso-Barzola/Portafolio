import './Proyectos.css';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema IoT de Control de Acceso e Iluminación",
      descripcion: "Sistema automatizado con Arduino Uno, sensor TMP36, LDR, PIR y servomotor para la gestión inteligente de estacionamientos y alertas térmicas.",
      tecnologias: ["Arduino", "C++", "Sensores IoT", "Tinkercad", "LCD I2C"]
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema de Gestión de Calidad Alimenticia",
      descripcion: "Plataforma para el registro y supervisión de comedores, zonas, áreas, tipos de evaluación, calificaciones y control de medidas correctivas.",
      tecnologias: ["SQL Server", "C#", "ASP.NET", "Base de Datos Relacional"]
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema de Control Vehicular",
      descripcion: "Aplicación para gestionar registros de vehículos, conductores, control de ingresos/salidas, mantenimientos y administración de usuarios.",
      tecnologias: ["C#", ".NET", "SQL Server", "Visual Studio"]
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      titulo: "Sistema Web de Carta Digital y Comandas",
      descripcion: "Aplicación web para visualizar menús organizados por categorías, gestión de carrito de compras, generación de pedidos únicos y control de estados.",
      tecnologias: ["ASP.NET Core", "HTML5", "CSS3", "JavaScript", "SQL Server"]
    },
    {
      id: 5,
      imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      titulo: "Reproductor de Música Web Dinámico",
      descripcion: "Reproductor web interactivo que carga aleatoriamente pistas musicales desde el servidor con controles de reproducción, pausa, salto y bucle continuo.",
      tecnologias: ["JavaScript", "HTML5", "CSS3", "IIS"]
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;