import './Habilidades.css';

// Importación de certificados
import certIoT from '../../assets/certificados/iot.png';
import certCiberseguridad from '../../assets/certificados/ciberseguridad.png';
import certRedes from '../../assets/certificados/redes.png';
import certHardware from '../../assets/certificados/hardware.png';
import certDataScience from '../../assets/certificados/ciencia_datos.png';
import certPython from '../../assets/certificados/python.png';

const Habilidades = () => {
  const skillsData = [
    {
      id: 1,
      titulo: "Fundamentos de Python 1",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Sintaxis básica, estructuras de control, funciones y fundamentos de programación orientada a objetos en Python.",
      fecha: "07 Sep 2024",
      certificadoImg: certPython
    },
    {
      id: 2,
      titulo: "Introducción a la Ciencia de Datos",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Conceptos clave del análisis de datos, ciclo de vida del dato y herramientas fundamentales de Data Science.",
      fecha: "10 Aug 2024",
      certificadoImg: certDataScience
    },
    {
      id: 3,
      titulo: "Conceptos Básicos de Hardware de Computadora",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Arquitectura interna de computadoras, componentes de hardware, mantenimiento básico y diagnóstico de fallas.",
      fecha: "27 Jul 2024",
      certificadoImg: certHardware
    },
    {
      id: 4,
      titulo: "Conceptos Básicos de Redes",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Fundamentos de redes de comunicación, modelo OSI/TCP-IP, direccionamiento IP y protocolos esenciales.",
      fecha: "06 Jul 2024",
      certificadoImg: certRedes
    },
    {
      id: 5,
      titulo: "Introducción a Ciberseguridad",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Principios de protección de datos, amenazas comunes en la red y mejores prácticas de seguridad digital.",
      fecha: "08 Jun 2024",
      certificadoImg: certCiberseguridad
    },
    {
      id: 6,
      titulo: "Introducción al IoT y Transformación Digital",
      institucion: "Cisco Networking Academy / SENATI",
      descripcion: "Conectividad de dispositivos inteligentes, automatización e impacto del Internet de las Cosas en la industria.",
      fecha: "28 May 2024",
      certificadoImg: certIoT
    }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title text-center text-white mb-2">Mis Certificaciones</h2>
        <p className="text-center text-cyan mb-5">Emitidas por Cisco Networking Academy & SENATI</p>
        
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="skill-badge badge-green">COMPLETADO</span>
              </div>
              
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-institution text-cyan mb-2" style={{ fontSize: '0.85rem' }}>{skill.institucion}</p>
                <p className="skill-desc">{skill.descripcion}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="skill-level">{skill.fecha}</span>
                  <a 
                    href={skill.certificadoImg} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-info btn-sm"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                  >
                    VER CERTIFICADO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;