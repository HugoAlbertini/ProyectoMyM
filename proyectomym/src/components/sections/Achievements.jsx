import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import CaseStudy from './CaseStudy';
import './Achievements.css';

const galleryItems = [
  { id: 1, src: `${import.meta.env.BASE_URL}gallery-wedding.webp`, label: 'Bodas', category: 'bodas' },
  { id: 2, src: `${import.meta.env.BASE_URL}gallery-corporate.webp`, label: 'Corporativos', category: 'corporativos' },
  { id: 3, src: `${import.meta.env.BASE_URL}gallery-social.webp`, label: 'Sociales', category: 'sociales' },
  { id: 4, src: `${import.meta.env.BASE_URL}gallery-launch.webp`, label: 'Lanzamientos', category: 'corporativos' },
  { id: 5, src: `${import.meta.env.BASE_URL}gallery-celebration.webp`, label: 'Celebraciones', category: 'sociales' },
  { id: 6, src: `${import.meta.env.BASE_URL}hero-bg.webp`, label: 'Producción de evento', category: 'bodas' },
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
  const { playHover, playClick, playTransition } = useSound();

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
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                if (filter !== cat.id) {
                  setFilter(cat.id);
                  playTransition();
                }
              }}
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
                key={item.id}
                className="gallery-item"
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setSelectedImage(item);
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                data-cursor="VER"
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedImage && (
          <CaseStudy 
            item={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
