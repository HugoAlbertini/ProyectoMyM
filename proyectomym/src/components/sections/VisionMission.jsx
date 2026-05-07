import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="section-padding vm-section">
      <div className="container">
        <div className="vm-header">
          <motion.span 
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >Nuestro Propósito</motion.span>
        </div>

        <div className="vm-container">
          <motion.div 
            className="vm-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="vm-icon"><Target size={28} /></div>
            <h2>Misión</h2>
            <div className="gold-line"></div>
            <ul>
              <li>Planificamos el éxito y controlamos los imprevistos.</li>
              <li>Generamos experiencias y nos adaptamos a las circunstancias.</li>
              <li>Trabajamos con una vasta red de proveedores reconocidos y con años de experiencia.</li>
            </ul>
            <blockquote className="vm-quote">
              "Si quieres llegar rápido ve solo, pero si quieres llegar lejos trabaja en equipo."
            </blockquote>
          </motion.div>

          <motion.div 
            className="vm-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="vm-icon"><Sparkles size={28} /></div>
            <h2>Visión</h2>
            <div className="gold-line"></div>
            <p>
              Nuestro lema: <em>"Los sueños se realizan, no se negocian"</em>.
            </p>
            <p>
              Dejá todo en nuestras manos y disfrutá del momento. Diseñamos y planificamos todo, 
              incluso los imprevistos. Nos proponemos ser referentes en la producción de eventos 
              del NEA, superando las expectativas de cada cliente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
