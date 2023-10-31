import React from 'react';


const footerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  fontFamily: 'Comic Sans MS', 
  backgroundImage: 'url("../assets/vista-superior-manos-sosteniendo-telefono-inteligente.jpg")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '20px',
};

const columnStyle = {
  flex: '1',
  padding: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <div style={footerStyle} className="footer">
      <div style={columnStyle}>
        <h2>Turismo en Medellín</h2>
        <p>Viajes y Turismo Globo S.A.S</p>
        <p>Carrera 87A 34-56 barrio almeria - Colombia</p>
        <p>Teléfono: (321) 8940542</p>
        <p>Celular: 3052169982</p>
        <p>operacionesturismoenmedellin@gmail.com</p>
      </div>
      <div style={columnStyle}>
        <a href="#" style={linkStyle}>Contáctenos</a>
        <a href="#" style={linkStyle}>Avisos Legales</a>
        <a href="#" style={linkStyle}>Términos y condiciones</a>
        <a href="#" style={linkStyle}>Cláusulas de Responsabilidad</a>
        <a href="#" style={linkStyle}>Pólitica de protección de datos</a>
        <a href="#" style={linkStyle}>Preguntas Frecuentes Pagos en línea</a>
        <a href="#" style={linkStyle}>Mapa del sitio</a>
      </div>
      <div style={columnStyle}>
        <p>Medellín me encanta</p>
        <p>CALIFIQUE SU EXPERIENCIA</p>
      </div>
    </div>
  );
};

export default Footer;
