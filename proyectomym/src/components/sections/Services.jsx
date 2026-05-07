import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, Briefcase, Coffee, Palette, GraduationCap, Scissors, Calendar, Globe, Star, Utensils } from 'lucide-react';
import './Services.css';

const servicesList = [
  { icon: <Users size={28} />, name: 'Eventos Sociales' },
  { icon: <Heart size={28} />, name: 'Bodas' },
  { icon: <Gift size={28} />, name: 'Cumpleaños' },
  { icon: <Star size={28} />, name: 'Exposiciones' },
  { icon: <Briefcase size={28} />, name: 'Almuerzos de Trabajo' },
  { icon: <Utensils size={28} />, name: 'Brunch' },
  { icon: <Palette size={28} />, name: 'Eventos Culturales' },
  { icon: <Users size={28} />, name: 'Congresos' },
  { icon: <GraduationCap size={28} />, name: 'Capacitaciones' },
  { icon: <Scissors size={28} />, name: 'Lanzamientos' },
  { icon: <Calendar size={28} />, name: 'Fiestas de Fin de Año' },
  { icon: <Globe size={28} />, name: 'Ferias Nacionales e Int.' }
];

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">
            Lo que hacemos
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Nuestros Servicios
          </h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Cada evento es una obra de arte única, diseñada para superar tus expectativas.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
