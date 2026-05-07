import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from '../ui/Particles';
import Typewriter from '../ui/Typewriter';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms: move background slower than scroll
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const orb1Y = useTransform(scrollY, [0, 1000], [0, -150]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const orb3Y = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="hero">
      {/* Real background image with Parallax */}
      <motion.div 
        className="hero-bg-image"
        style={{ y: backgroundY }}
      ></motion.div>
      {/* Animated background layers */}
      <div className="hero-bg-layer hero-bg-gradient"></div>
      <div className="hero-bg-layer hero-bg-pattern"></div>
      <div className="hero-bg-layer">
        <Particles count={70} color="rgba(201, 168, 76, 0.3)" />
      </div>
      <div className="hero-bg-layer hero-bg-vignette"></div>
      
      {/* Parallax Floating Decorations */}
      <motion.div className="hero-deco hero-deco--1" style={{ y: orb1Y }}></motion.div>
      <motion.div className="hero-deco hero-deco--2" style={{ y: orb2Y }}></motion.div>
      <motion.div className="hero-deco hero-deco--3" style={{ y: orb3Y }}></motion.div>

      <div className="container hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="hero-label-line"></span>
          <span>Productora de Eventos</span>
          <span className="hero-label-line"></span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          M<span className="hero-amp">&</span>M
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          by Ecléctica
        </motion.p>
        
        <motion.div 
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        ></motion.div>

        <motion.p
          className="hero-motto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          "<Typewriter text="Los sueños se realizan, no se negocian" delay={55} startDelay={2200} />"
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <a href="#about" className="btn-gold">Descubrir Más</a>
          <a href="#services" className="btn-outline">Nuestros Servicios</a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
