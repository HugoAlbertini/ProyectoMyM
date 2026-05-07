import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola! Soy ${formData.name}.\nEvento: ${formData.eventType}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\n${formData.message}`;
    window.open(`https://wa.me/5493791234567?text=${encodeURIComponent(text)}`, '_blank');
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
            <div className="contact-detail-item">
              <Phone size={18} />
              <span>+54 9 379 123-4567</span>
            </div>
            <div className="contact-detail-item">
              <Mail size={18} />
              <span>contacto@mymeventos.com</span>
            </div>
            <div className="contact-detail-item">
              <MapPin size={18} />
              <span>Nordeste Argentino & Paraguay</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+54 9 xxx xxx-xxxx" />
            </div>
            <div className="form-group">
              <label htmlFor="eventType">Tipo de evento</label>
              <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                <option value="">Seleccioná una opción</option>
                <option value="boda">Boda</option>
                <option value="corporativo">Evento Corporativo</option>
                <option value="cumpleanos">Cumpleaños / Fiesta de 15</option>
                <option value="social">Evento Social</option>
                <option value="lanzamiento">Lanzamiento</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Contanos sobre tu evento</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="¿Qué tenés en mente? Fecha estimada, cantidad de invitados, estilo..."></textarea>
          </div>

          <button type="submit" className="btn-gold form-submit">
            Enviar Consulta <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
