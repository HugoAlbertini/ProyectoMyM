import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../config';
import './CTABanner.css';

const CTABanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={ref} className="cta-section">
      <motion.div 
        className="cta-bg-image"
        style={{ y: backgroundY }}
      ></motion.div>
      <div className="cta-overlay"></div>
      
      <div className="container cta-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>¿Lista para crear<br />un evento inolvidable?</h2>
          <p>Contanos tu idea y la hacemos realidad. Cada sueño merece ser perfecto.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-gold">
              Contactanos <ArrowRight size={16} />
            </a>
            <a 
              href={getWhatsAppUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Directo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
