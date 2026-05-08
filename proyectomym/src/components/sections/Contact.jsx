import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '../../config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Este campo es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'Este campo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.eventType) newErrors.eventType = 'Seleccioná un tipo de evento';
    if (!formData.message.trim()) newErrors.message = 'Contanos sobre tu evento';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Show success animation
    setSubmitted(true);
    
    // Open WhatsApp after a brief delay for the animation
    setTimeout(() => {
      const text = `Hola! Soy ${formData.name}.\nEvento: ${formData.eventType}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\n${formData.message}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      
      // Reset after sending
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      }, 1000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">Contanos<br />tu idea</h2>
          <p className="contact-desc">
            Cada evento comienza con una conversación. Escribinos y te responderemos a la brevedad para comenzar a planificar juntos.
          </p>

          <div className="contact-details">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-detail-item">
              <Phone size={18} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="contact-detail-item">
              <Mail size={18} />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <div className="contact-detail-item">
              <MapPin size={18} />
              <span>Nordeste Argentino & Paraguay</span>
            </div>
          </div>

          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="map-label">📍 Nuestra Ubicación</span>
            <iframe 
              src="https://maps.google.com/maps?q=-27.442614,-58.998422&hl=es&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación M&M"
            ></iframe>
          </motion.div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                className="form-success"
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={48} />
                <h3>¡Consulta enviada!</h3>
                <p>Redirigiendo a WhatsApp...</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'form-group--error' : ''}`}>
                    <label htmlFor="name">Nombre completo <span className="required">*</span></label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+54 9 xxx xxx-xxxx" />
                  </div>
                  <div className={`form-group ${errors.eventType ? 'form-group--error' : ''}`}>
                    <label htmlFor="eventType">Tipo de evento <span className="required">*</span></label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                      <option value="">Seleccioná una opción</option>
                      <option value="boda">Boda</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="cumpleanos">Cumpleaños / Fiesta de 15</option>
                      <option value="social">Evento Social</option>
                      <option value="lanzamiento">Lanzamiento</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.eventType && <span className="form-error">{errors.eventType}</span>}
                  </div>
                </div>

                <div className={`form-group ${errors.message ? 'form-group--error' : ''}`}>
                  <label htmlFor="message">Contanos sobre tu evento <span className="required">*</span></label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="¿Qué tenés en mente? Fecha estimada, cantidad de invitados, estilo..."></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-gold form-submit">
                  Enviar Consulta <Send size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
