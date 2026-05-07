import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
  },
  {
    text: "Excelente servicio. Nos ayudaron a planificar la inauguración de nuestro local y todo salió impecable. Altamente recomendables por su dedicación.",
    name: "Estudio Arquitectura",
    event: "Lanzamiento Comercial — Chaco, 2024"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0
      };
    }
  };

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

        <div className="testimonials-carousel-wrapper">
          <div className="testimonials-carousel-container">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="testimonial-card testimonial-card--carousel"
              >
                <div className="testimonial-quote-icon">
                  <Quote size={32} />
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                <div className="testimonial-author">
                  <strong>{testimonials[currentIndex].name}</strong>
                  <span>{testimonials[currentIndex].event}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls">
            <button className="carousel-nav-btn" onClick={prevTestimonial} aria-label="Testimonio anterior">
              <ChevronLeft size={20} />
            </button>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button className="carousel-nav-btn" onClick={nextTestimonial} aria-label="Siguiente testimonio">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
