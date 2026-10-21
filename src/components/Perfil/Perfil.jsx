import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>
            <p className="card-text">
              Estudiante del bloque IA 501 en SENATI, cursando la carrera de desarrollo de software con sólidos conocimientos en programación orientada a objetos, bases de datos y desarrollo web frontend y backend.<br /><br />
              Capacidad para trabajar en equipo, resolver problemas de lógica y crear soluciones tecnológicas eficientes empleando herramientas modernas.
            </p>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3>Educación</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Ingenieria de software</h4>
                  <span className="badge badge-outline">En curso</span>
                </div>
                <span className="timeline-date">SENATI (Bloque IA 501)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;