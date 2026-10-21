import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#64dfdf',
        background: '#1c2541',
        color: '#ffffff'
      });

      setFormulario({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
        icon: 'error',
        confirmButtonColor: '#64dfdf',
        background: '#1c2541',
        color: '#ffffff'
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title text-center text-white mb-5">Trabajemos Juntos</h2>
        
        <div className="contacto-grid">
          {/* Columna Izquierda: Información */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus flujos de trabajo? Me encantaría escucharte.
            </p>
            <div className="info-items">
              <div className="info-item">
                <div>
                  <span className="item-label">Email</span>
                  <p className="item-text">encisobarzolacristian@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                  disabled={cargando}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={cargando}>
                {cargando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;