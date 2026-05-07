import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    const hideTimer = setTimeout(() => setHidden(true), 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${loaded ? 'preloader--done' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <h1 className="preloader-logo">
            <span className="preloader-letter preloader-letter--1">M</span>
            <span className="preloader-amp">&</span>
            <span className="preloader-letter preloader-letter--2">M</span>
          </h1>
          <p className="preloader-sub">by Ecléctica</p>
        </div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
        <p className="preloader-tagline">Creamos momentos que perduran</p>
      </div>
      {/* Curtain Effect */}
      <div className="preloader-curtain preloader-curtain--left"></div>
      <div className="preloader-curtain preloader-curtain--right"></div>
    </div>
  );
};

export default Preloader;
