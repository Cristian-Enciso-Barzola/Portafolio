import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({ nombre: '', email: '', mensaje: '' });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`¡Gracias por tu mensaje, ${formulario.nombre}! Te contactaré pronto.`);
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title text-white text-center mb-5">Trabajemos Juntos</h2>
        <div className="contacto-grid">
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">¿Tienes un proyecto en mente o requieres un desarrollador para tu equipo? Escríbeme y hablemos.</p>
            <div className="info-items">
              <div className="info-item">
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formulario.email} onChange={manejarCambio} placeholder="tu@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" value={formulario.mensaje} onChange={manejarCambio} placeholder="Cuéntame sobre tu proyecto..." rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;