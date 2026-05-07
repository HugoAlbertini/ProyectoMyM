import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, CalendarCheck, PartyPopper } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <MessageSquare size={28} />,
    number: '01',
    title: 'Consulta Inicial',
    desc: 'Nos reunimos para conocer tus sueños, tu estilo y tu presupuesto. Escuchamos cada detalle.'
  },
  {
    icon: <Palette size={28} />,
    number: '02',
    title: 'Diseño & Propuesta',
    desc: 'Creamos una propuesta personalizada con concepto, paleta de colores, proveedores y cronograma.'
  },
  {
    icon: <CalendarCheck size={28} />,
    number: '03',
    title: 'Planificación',
    desc: 'Coordinamos cada proveedor, espacio y detalle. Vos no te preocupás por nada.'
  },
  {
    icon: <PartyPopper size={28} />,
    number: '04',
    title: 'El Gran Día',
    desc: 'Ejecutamos todo mientras vos disfrutás. Cada imprevisto ya lo tenemos planificado.'
  }
];

const Process = () => {
  return (
    <section className="section-padding process-section">
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">
            Nuestro Proceso
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Cómo trabajamos
          </h2>
        </motion.div>

        <div className="process-timeline">
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="process-dot">
                <span>{step.number}</span>
              </div>
              <div className="process-card">
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
