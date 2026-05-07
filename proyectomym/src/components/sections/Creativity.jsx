import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Hand, Wind, Music, Wine } from 'lucide-react';
import Particles from '../ui/Particles';
import './Creativity.css';

const senses = [
  { icon: <Eye size={28} />, name: 'Visual', desc: 'Puestas en escena que cautivan desde el primer instante' },
  { icon: <Hand size={28} />, name: 'Tacto', desc: 'Texturas nobles y materiales que invitan a sentir' },
  { icon: <Wind size={28} />, name: 'Olfato', desc: 'Aromas y fragancias que crean atmósferas únicas' },
  { icon: <Music size={28} />, name: 'Auditivo', desc: 'Música y acústica perfectamente curada' },
  { icon: <Wine size={28} />, name: 'Gusto', desc: 'Sabores que se vuelven recuerdos memorables' }
];

const Creativity = () => {
  return (
    <section className="section-padding creativity-section">
      {/* Background decoration */}
      <div className="creativity-bg-deco"></div>
      <Particles count={40} color="rgba(201, 168, 76, 0.4)" />

      <div className="container creativity-wrapper">
        <motion.div 
          className="creativity-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center" style={{color: 'var(--gold-light)'}}>
            Nuestra Esencia
          </span>
          <h2 className="section-title section-title--light" style={{ textAlign: 'center' }}>
            Creatividad y<br />originalidad
          </h2>
          <p className="section-subtitle section-subtitle--light" style={{margin: '0 auto'}}>
            Creamos experiencias en los 5 sentidos. Porque si bien los eventos 
            son efímeros, las emociones perduran por siempre.
          </p>
        </motion.div>

        <div className="senses-grid">
          {senses.map((sense, index) => (
            <motion.div 
              key={index}
              className="sense-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="sense-icon">{sense.icon}</div>
              <h3>{sense.name}</h3>
              <p>{sense.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creativity;
