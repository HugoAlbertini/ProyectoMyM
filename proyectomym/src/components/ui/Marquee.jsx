import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    'Bodas', 'Corporativos', 'Celebraciones', 'Congresos', 'Lanzamientos',
    'Fiestas', 'Exposiciones', 'Brunch', 'Galas', 'Eventos Sociales'
  ];
  
  const repeated = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
