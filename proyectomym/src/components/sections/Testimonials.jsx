import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: "M&M hizo de nuestra boda un sueño hecho realidad. Cada detalle fue perfecto, desde la decoración floral hasta la coordinación del día. No podríamos estar más agradecidas.",
    name: "Sofía & Martín",
    event: "Boda — Corrientes, 2024"
  },
  {
    text: "Profesionalismo de principio a fin. Organizaron nuestro evento corporativo de 500 personas sin un solo inconveniente. La atención al detalle fue impecable.",
    name: "Grupo Empresarial NEA",
    event: "Congreso Anual — Resistencia, 2023"
  },
  {
    text: "Los 15 de mi hija fueron mágicos. Mercedes y Gabriela entendieron exactamente lo que queríamos y lo superaron con creces. ¡Infinitas gracias!",
    name: "Carolina Méndez",
    event: "Fiesta de 15 — Posadas, 2024"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">
            Testimonios
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Lo que dicen<br />nuestros clientes
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="testimonial-quote-icon">
                <Quote size={24} />
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
