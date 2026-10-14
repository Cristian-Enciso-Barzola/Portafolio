import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="text-cyan">Cristian</span> Enciso Barzola
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;