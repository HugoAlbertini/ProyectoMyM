import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Achievements.css';

const galleryItems = [
  { src: `${import.meta.env.BASE_URL}gallery-wedding.png`, label: 'Bodas' },
  { src: `${import.meta.env.BASE_URL}gallery-corporate.png`, label: 'Corporativos' },
  { src: `${import.meta.env.BASE_URL}gallery-social.png`, label: 'Sociales' },
  { src: `${import.meta.env.BASE_URL}gallery-launch.png`, label: 'Lanzamientos' },
  { src: `${import.meta.env.BASE_URL}gallery-celebration.png`, label: 'Celebraciones' },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section id="achievements" className="section-padding achievements-section">
      <div className="container">
        <div className="ach-top">
          <motion.div
            className="ach-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Nuestro Portfolio</span>
            <h2 className="section-title">Eventos que<br />hablan por sí solos</h2>
          </motion.div>

          <motion.div 
            className="ach-pillars"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="ach-pillar">
              <h3>Celebraciones Memorables</h3>
              <ul>
                <li>Los detalles son fundamentales</li>
                <li>Gestionamos soluciones creativas</li>
                <li>Innovación marcada por tendencias de diseño</li>
                <li>Espacios a medida de tus deseos</li>
              </ul>
            </div>

            <div className="ach-pillar">
              <h3>Eventos de Gran Escala</h3>
              <p>
                Nuestro trabajo es estar un paso adelante para que tu misión 
                sea disfrutar de la experiencia. Coordinamos logística completa 
                para eventos de cualquier magnitud.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="gallery-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.label} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
            >
              <img src={selectedImage.src} alt={selectedImage.label} className="lightbox-img" />
              <div className="lightbox-caption">{selectedImage.label}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
