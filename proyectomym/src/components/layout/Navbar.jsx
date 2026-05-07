import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = ['about', 'services', 'achievements', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <div className="nav-logo">
          <a href="#" onClick={() => setActiveSection('')}>M&M <span>by Ecléctica</span></a>
        </div>
        
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMobileOpen(false)}>Quiénes Somos</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMobileOpen(false)}>Servicios</a>
          <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => setMobileOpen(false)}>Logros</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="#contact" className="btn-gold" onClick={() => setMobileOpen(false)}>Contacto</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
