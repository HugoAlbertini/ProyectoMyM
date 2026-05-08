import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import './CaseStudy.css';

const CaseStudy = ({ item, onClose }) => {
  const { playClick, playHover } = useSound();

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    playClick();
    onClose();
  };

  return (
    <motion.div 
      className="case-study-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="case-study-container">
        
        {/* Sticky Header */}
        <header className="case-study-header">
          <button 
            className="case-close-btn" 
            onClick={handleClose}
            onMouseEnter={playHover}
            aria-label="Cerrar caso de estudio"
            data-cursor="CERRAR"
          >
            <ArrowLeft size={24} />
            <span>Volver al Portfolio</span>
          </button>
        </header>

        {/* Hero Image with Layout Animation */}
        <motion.div 
          className="case-hero"
          layoutId={`gallery-item-${item.id}`}
        >
          <img src={item.src} alt={item.label} />
          <div className="case-hero-overlay"></div>
          
          <motion.div 
            className="case-hero-content container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="case-category">{item.category}</span>
            <h1 className="case-title">{item.label}</h1>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="case-content-wrapper container">
          <motion.div 
            className="case-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="meta-item">
              <Calendar size={20} />
              <div>
                <strong>Fecha</strong>
                <span>Temporada 2024</span>
              </div>
            </div>
            <div className="meta-item">
              <MapPin size={20} />
              <div>
                <strong>Locación</strong>
                <span>Corrientes, Arg.</span>
              </div>
            </div>
            <div className="meta-item">
              <Users size={20} />
              <div>
                <strong>Invitados</strong>
                <span>+300 personas</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="case-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="case-description">
              <h2>El Desafío</h2>
              <p>
                Para este evento, el objetivo principal fue transformar un espacio completamente vacío 
                en una experiencia sensorial inmersiva. Diseñamos cada rincón pensando en la fluidez 
                de los invitados, combinando iluminación cálida, arreglos florales colgantes y un 
                layout dinámico.
              </p>
              
              <h2>La Propuesta</h2>
              <p>
                M&M se encargó del diseño conceptual, la gestión de más de 15 proveedores y la 
                coordinación milimétrica durante el día del evento. La paleta de colores fue elegida 
                para contrastar con el entorno natural, utilizando tonos terracota, dorados y verdes profundos.
              </p>
            </div>

            <div className="case-palette">
              <h3>Paleta del Evento</h3>
              <div className="palette-colors">
                <div className="color-swatch" style={{ background: '#D4AF37' }}></div>
                <div className="color-swatch" style={{ background: '#2C3E50' }}></div>
                <div className="color-swatch" style={{ background: '#E07A5F' }}></div>
                <div className="color-swatch" style={{ background: '#F4F1DE' }}></div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default CaseStudy;
