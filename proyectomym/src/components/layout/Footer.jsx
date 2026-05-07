import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>M&M</h2>
          <p className="subtitle">By Ecléctica</p>
          <p className="motto">"Los sueños se realizan, no se negocian"</p>
        </div>
        
        <div className="footer-contact">
          <h3>Contacto</h3>
          <div className="contact-item">
            <Phone size={20} />
            <p>+54 9 379 123-4567</p>
          </div>
          <div className="contact-item">
            <Mail size={20} />
            <p>contacto@mymeventos.com</p>
          </div>
          <div className="contact-item">
            <MapPin size={20} />
            <p>Nordeste Argentino & Paraguay</p>
          </div>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" className="social-icon"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} M&M by Ecléctica. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
