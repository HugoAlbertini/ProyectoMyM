import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../ui/TextReveal';
import './About.css';

/* ─── Animated Counter Hook ─── */
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return { count, ref };
};

const About = () => {
  const stat1 = useCounter(18, 2000);
  const stat2 = useCounter(5, 1800);
  const stat3 = useCounter(2, 1500);

  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Sobre Nosotras</span>
          <TextReveal text="Creamos momentos que perduran" className="section-title" />
          
          <div className="about-text">
            <p>
              Somos <strong>Maria Gabriela y Maria de las Mercedes</strong>, una productora de 
              eventos con más de <strong>18 años de trayectoria</strong> en el Nordeste Argentino.
            </p>
            <p>
              Producimos momentos de calidad, diseñando tanto el espacio como la experiencia 
              de nuestros clientes. Corrientes, Chaco, Misiones, Formosa y Santa Fe han sido 
              protagonistas de nuestros servicios, trascendiendo fronteras hasta Paraguay.
            </p>
          </div>

          <blockquote className="about-quote">
            <p>Dejá todo en nuestras manos y disfrutá del momento. Diseñamos y planificamos todo, incluso los imprevistos.</p>
          </blockquote>
        </motion.div>
        
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-image-frame">
            <img src="/founders.png" alt="María Gabriela y María de las Mercedes - Fundadoras M&M" className="about-photo" />
            <div className="about-image-border"></div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item" ref={stat1.ref}>
              <span className="stat-number">{stat1.count}+</span>
              <span className="stat-label">Años de<br/>experiencia</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" ref={stat2.ref}>
              <span className="stat-number">{stat2.count}</span>
              <span className="stat-label">Provincias<br/>alcanzadas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" ref={stat3.ref}>
              <span className="stat-number">{stat3.count}</span>
              <span className="stat-label">Países<br/>cubiertos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
