import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Heart, Gift, Users, Briefcase, Coffee, Palette, GraduationCap, Scissors, Calendar, Globe, Star, Utensils, X, Plus } from 'lucide-react';
import './Services.css';

const servicesList = [
  { icon: <Users size={28} />, name: 'Eventos Sociales', number: '01', desc: 'Diseñamos celebraciones íntimas y grandes fiestas. Transformamos tus fechas especiales en experiencias memorables, cuidando cada detalle para que vos y tus invitados disfruten al máximo.' },
  { icon: <Heart size={28} />, name: 'Bodas', number: '02', desc: 'Bodas de autor donde cada detalle refleja la historia de los novios. Nos encargamos de la planificación integral, desde la ceremonia hasta la fiesta, creando un ambiente mágico, romántico y sin estrés.' },
  { icon: <Gift size={28} />, name: 'Cumpleaños', number: '03', desc: 'Fiestas temáticas, de 15 años o aniversarios. Creamos atmósferas únicas, llenas de sorpresas y diversión, garantizando que el agasajado viva la mejor noche de su vida.' },
  { icon: <Star size={28} />, name: 'Exposiciones', number: '04', desc: 'Producción de muestras y exposiciones de alto nivel. Cuidamos la iluminación, la circulación espacial y la estética visual para que el contenido sea el verdadero protagonista.' },
  { icon: <Briefcase size={28} />, name: 'Almuerzos de Trabajo', number: '05', desc: 'Encuentros corporativos diseñados para fomentar el networking y cerrar grandes acuerdos. Ofrecemos ambientes sobrios, menúes exclusivos y una atención impecable.' },
  { icon: <Utensils size={28} />, name: 'Brunch', number: '06', desc: 'Reuniones matutinas o de mediodía con propuestas gastronómicas de vanguardia. Ideal para celebraciones diurnas, presentaciones de marca o eventos estilo boutique.' },
  { icon: <Palette size={28} />, name: 'Eventos Culturales', number: '07', desc: 'Gestión y producción de eventos artísticos y culturales. Fusionamos arte, música y diseño en espacios que inspiran y conectan profundamente con la audiencia.' },
  { icon: <Users size={28} />, name: 'Congresos', number: '08', desc: 'Organización logística impecable para grandes congresos. Manejamos acreditaciones, cronogramas, requerimientos técnicos y hospitalidad para conferencistas y asistentes.' },
  { icon: <GraduationCap size={28} />, name: 'Capacitaciones', number: '09', desc: 'Espacios optimizados para el aprendizaje corporativo. Proveemos tecnología audiovisual de punta, mobiliario cómodo y coffee breaks pensados para mantener la energía.' },
  { icon: <Scissors size={28} />, name: 'Lanzamientos', number: '10', desc: 'Potenciamos la presentación de tu producto o marca con puestas en escena de alto impacto. Creamos momentos "wow" que cautivan a tu audiencia y a la prensa.' },
  { icon: <Calendar size={28} />, name: 'Fiestas de Fin de Año', number: '11', desc: 'El cierre perfecto para tu empresa. Creamos fiestas corporativas que celebran los logros del año, unen a los equipos y dejan a todos con una gran sonrisa.' },
  { icon: <Globe size={28} />, name: 'Ferias Nacionales e Int.', number: '12', desc: 'Proyectamos la identidad de tu marca a gran escala. Diseñamos stands, coordinamos la logística y generamos activaciones que atraen a potenciales clientes a nivel nacional e internacional.' }
];

/* ── 3D Tilt Card ── */
const TiltCard = ({ children, className, onClick }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transform, transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Close modal when pressing Escape
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <TiltCard className="service-card" onClick={() => setSelectedService(service)}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <div className="service-card-action">
                  <Plus size={16} />
                  <span>Ver más</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Modal Interactivo */}
        <AnimatePresence>
          {selectedService && (
            <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
              <motion.div 
                className="service-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <button className="service-modal-close" onClick={() => setSelectedService(null)}>
                  <X size={24} />
                </button>
                <div className="service-modal-header">
                  <div className="service-modal-icon">{selectedService.icon}</div>
                  <span className="service-modal-number">{selectedService.number}</span>
                </div>
                <h3 className="service-modal-title">{selectedService.name}</h3>
                <div className="service-modal-divider"></div>
                <p className="service-modal-desc">{selectedService.desc}</p>
                <button className="btn-gold service-modal-btn" onClick={() => {
                  setSelectedService(null);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Consultar Presupuesto
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
