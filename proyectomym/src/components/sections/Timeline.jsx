import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Timeline.css';

const milestones = [
  { year: '2008', title: 'El Comienzo', desc: 'María Gabriela y María de las Mercedes fundan M&M con la misión de transformar eventos en experiencias sensoriales.' },
  { year: '2012', title: 'Expansión Regional', desc: 'Nuestros servicios se expanden a Chaco, Misiones y Formosa, consolidándonos en todo el NEA argentino.' },
  { year: '2017', title: 'Seminarios DINA', desc: 'Participación como Diseñadoras del NEA en la UNNE y el Colegio de Arquitectos, compartiendo conocimiento.' },
  { year: '2020', title: 'Fronteras Abiertas', desc: 'Trascendemos fronteras llevando nuestra producción de eventos hasta Paraguay.' },
  { year: '2026', title: '18 Años de Excelencia', desc: 'Más de una década y media creando momentos inolvidables. Referentes indiscutidas de la producción de eventos premium en el NEA.' },
];

const Timeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-padding timeline-section" ref={containerRef}>
      <div className="container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">
            Nuestra Historia
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Un camino de<br />pasión y excelencia
          </h2>
        </motion.div>

        <div className="timeline-container">
          {/* Animated line */}
          <div className="timeline-track">
            <motion.div className="timeline-track-fill" style={{ height: lineHeight }} />
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{milestone.year}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
