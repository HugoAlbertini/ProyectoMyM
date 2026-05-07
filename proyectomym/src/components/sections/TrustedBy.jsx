import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Calendar, Heart } from 'lucide-react';
import './TrustedBy.css';

const badges = [
  { icon: <Calendar size={28} />, number: '18+', label: 'Años de Experiencia' },
  { icon: <Globe size={28} />, number: '2', label: 'Países Alcanzados' },
  { icon: <Award size={28} />, number: '5', label: 'Provincias del NEA' },
  { icon: <Heart size={28} />, number: '∞', label: 'Momentos Inolvidables' },
];

const TrustedBy = () => {
  return (
    <section className="trustedby-section">
      <div className="container trustedby-container">
        <motion.p
          className="trustedby-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Han confiado en nosotras
        </motion.p>
        <div className="trustedby-grid">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="trust-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="trust-icon">{badge.icon}</div>
              <span className="trust-number">{badge.number}</span>
              <span className="trust-label">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
