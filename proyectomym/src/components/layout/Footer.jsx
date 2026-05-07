import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../config';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-deco-top"></div>
      
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>M&M</h2>
          <p className="subtitle">By Ecléctica</p>
          <div className="footer-brand-line"></div>
          <p className="motto">"Los sueños se realizan, no se negocian"</p>
          <div className="footer-region">
            <MapPin size={16} />
            <span>Nordeste Argentino & Paraguay</span>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Contacto</h3>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-item">
            <Phone size={18} />
            <p>{CONTACT_INFO.phone}</p>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="contact-item">
            <Mail size={18} />
            <p>{CONTACT_INFO.email}</p>
          </a>
        </div>

        <div className="footer-nav">
          <h3>Navegación</h3>
          <div className="footer-links">
            <a href="#about">Quiénes Somos</a>
            <a href="#services">Servicios</a>
            <a href="#achievements">Portfolio</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Seguinos en Instagram">
              <InstagramIcon />
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Seguinos en Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} M&M by Ecléctica. Todos los derechos reservados.</p>
          <p className="footer-credit">Diseñado con <span className="footer-heart">♥</span> para crear momentos eternos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
