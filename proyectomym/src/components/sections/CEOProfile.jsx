import React from 'react';
import { motion } from 'framer-motion';
import './CEOProfile.css';

const CEOProfile = () => {
  return (
    <section className="section-padding ceo-section">
      <div className="container ceo-container">
        <motion.div 
          className="ceo-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ceo-image-frame">
            <img src="/founders.png" alt="María de las Mercedes Cardozo - CEO M&M" className="ceo-photo" />
            <div className="ceo-image-accent"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="ceo-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">La Directora</span>
          <h2 className="ceo-name">María de las Mercedes Cardozo</h2>
          <h3 className="ceo-title">CEO — M&M by Ecléctica</h3>
          
          <ul className="ceo-credentials">
            <li>
              <strong>Diseñadora de interiores</strong>
              <span>Formación profesional en diseño de espacios</span>
            </li>
            <li>
              <strong>Organizadora de eventos</strong>
              <span>Más de 18 años en la industria</span>
            </li>
            <li>
              <strong>Profesora universitaria</strong>
              <span>Universidad Popular – Cursos de diseño y organización (2009 – 2020)</span>
            </li>
            <li>
              <strong>Seminarios DINA</strong>
              <span>Diseñadoras del NEA – UNNE y Colegio de Arquitectos (2017/2018)</span>
            </li>
            <li>
              <strong>Integrante de CARE</strong>
              <span>Comunidad Argentina de Romance y Eventos</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOProfile;
