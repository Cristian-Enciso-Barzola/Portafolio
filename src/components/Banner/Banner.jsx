import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>
        <div className="profile-photo-container">
          <img src={miFoto} alt="Foto de Perfil" className="profile-photo" />
        </div>
        <h1 className="hero-title">
          Cristian <br />
          <span className="text-cyan">Enciso Barzola</span>
        </h1>
        <h2 className="hero-subtitle">
          Estudiante de Ingeniería de Software | Desarrollador Full Stack Jr.
        </h2>
        <p className="hero-description">
          Construyo aplicaciones web funcionales y sistemas orientados a resolver necesidades reales. Apasionado por el desarrollo de software y las nuevas tecnologías.
        </p>
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Banner;