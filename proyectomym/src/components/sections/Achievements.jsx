import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Achievements.css';

const galleryItems = [
  { id: 1, src: `${import.meta.env.BASE_URL}gallery-wedding.png`, label: 'Bodas', category: 'bodas' },
  { id: 2, src: `${import.meta.env.BASE_URL}gallery-corporate.png`, label: 'Corporativos', category: 'corporativos' },
  { id: 3, src: `${import.meta.env.BASE_URL}gallery-social.png`, label: 'Sociales', category: 'sociales' },
  { id: 4, src: `${import.meta.env.BASE_URL}gallery-launch.png`, label: 'Lanzamientos', category: 'corporativos' },
  { id: 5, src: `${import.meta.env.BASE_URL}gallery-celebration.png`, label: 'Celebraciones', category: 'sociales' },
  { id: 6, src: `${import.meta.env.BASE_URL}hero-bg.png`, label: 'Producción de evento', category: 'bodas' },
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'corporativos', label: 'Corporativos' },
  { id: 'sociales', label: 'Sociales' }
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');

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

  const filteredItems = filter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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

        {/* Filters */}
        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          layout
          className="gallery-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <img src={item.src} alt={item.label} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Cerrar imagen">
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
