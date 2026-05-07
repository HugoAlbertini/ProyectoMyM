import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800);
    const hideTimer = setTimeout(() => setHidden(true), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${loaded ? 'preloader--done' : ''}`}>
      <div className="preloader-content">
        <h1 className="preloader-logo">M<span>&</span>M</h1>
        <p className="preloader-sub">by Ecléctica</p>
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
