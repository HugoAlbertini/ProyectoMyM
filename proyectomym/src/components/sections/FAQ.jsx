import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: '¿Con cuánta anticipación debo contratar sus servicios?',
    answer: 'Recomendamos entre 6 y 12 meses de anticipación para bodas y eventos de gran escala. Para eventos corporativos o sociales más pequeños, 3 meses suelen ser suficientes. Sin embargo, siempre trabajamos para adaptarnos a tus tiempos.'
  },
  {
    question: '¿Trabajan solo en Corrientes?',
    answer: 'No, cubrimos todo el Nordeste Argentino: Corrientes, Chaco, Misiones, Formosa y Santa Fe. También hemos llevado nuestra producción hasta Paraguay. Si tu evento es en otra ubicación, ¡consultanos!'
  },
  {
    question: '¿Qué incluye el servicio de producción de eventos?',
    answer: 'Nuestro servicio integral incluye diseño conceptual, planificación completa, coordinación de proveedores, montaje y desmontaje, dirección del evento en el día, y gestión de imprevistos. Todo para que vos solo disfrutes.'
  },
  {
    question: '¿Pueden adaptarse a mi presupuesto?',
    answer: 'Absolutamente. Trabajamos con presupuestos variados y siempre buscamos la mejor relación calidad-inversión. En nuestra primera reunión, escuchamos tus ideas y te presentamos opciones que se ajusten a tus posibilidades sin comprometer la calidad.'
  },
  {
    question: '¿Qué pasa si hay un imprevisto el día del evento?',
    answer: 'Nuestro lema es "planificamos hasta los imprevistos". Contamos con planes de contingencia para cada aspecto del evento: clima, proveedores, logística. En 18 años de experiencia, aprendimos a anticiparnos a cualquier situación.'
  },
  {
    question: '¿Ofrecen servicio de decoración y diseño de interiores?',
    answer: 'Sí, es uno de nuestros diferenciales. Mercedes es Diseñadora de Interiores de profesión, por lo que cada evento tiene un concepto estético cuidado al detalle: paleta de colores, texturas, iluminación y puesta en escena de primer nivel.'
  }
];

const FAQItem = ({ faq, isOpen, toggle, index }) => {
  return (
    <motion.div
      className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button className="faq-question" onClick={toggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <motion.div
          className="faq-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding faq-section">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">
            Preguntas Frecuentes
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Todo lo que<br />necesitás saber
          </h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
