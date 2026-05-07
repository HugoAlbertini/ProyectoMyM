import React from 'react';
import { motion } from 'framer-motion';
import './InstagramFeed.css';

const feedImages = [
  { src: '/gallery-wedding.png', alt: 'Boda elegante' },
  { src: '/gallery-corporate.png', alt: 'Evento corporativo' },
  { src: '/gallery-social.png', alt: 'Evento social' },
  { src: '/gallery-celebration.png', alt: 'Celebración' },
  { src: '/gallery-launch.png', alt: 'Lanzamiento' },
  { src: '/hero-bg.png', alt: 'Producción de evento' },
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const InstagramFeed = () => {
  return (
    <section className="instagram-section">
      <motion.div
        className="instagram-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="instagram-tag">@mymbyceclectica</span>
        <p className="instagram-cta">Seguinos en Instagram</p>
      </motion.div>

      <div className="instagram-grid">
        {feedImages.map((img, index) => (
          <motion.a
            key={index}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="instagram-overlay">
              <InstagramIcon />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
