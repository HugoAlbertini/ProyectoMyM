import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let images = Array.from(document.images);
    let loadedImagesCount = 0;
    const totalImages = images.length;
    let fallbackTimer;

    // If there are no images, just run a quick fake loader
    if (totalImages === 0) {
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          finishLoading();
        }
      }, 50);
      return () => clearInterval(interval);
    }

    const imageLoaded = () => {
      loadedImagesCount++;
      const currentProgress = Math.floor((loadedImagesCount / totalImages) * 100);
      setProgress(currentProgress);

      if (loadedImagesCount === totalImages) {
        finishLoading();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded); // Count errors so we don't stall
      }
    });

    // Fallback just in case some images hang indefinitely
    fallbackTimer = setTimeout(() => {
      setProgress(100);
      finishLoading();
    }, 5000);

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
      clearTimeout(fallbackTimer);
    };
  }, []);

  const finishLoading = () => {
    // Add a slight delay at 100% before triggering the exit animation
    setTimeout(() => setLoaded(true), 400);
    setTimeout(() => setHidden(true), 1200); // 800ms for CSS transition
  };

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
        
        <div className="preloader-progress-wrapper">
          <span className="preloader-progress-text">{progress}%</span>
          <div className="preloader-bar">
            <div 
              className="preloader-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <p className="preloader-tagline">Cargando experiencia inmersiva</p>
      </div>
      
      {/* Curtain Effect */}
      <div className="preloader-curtain preloader-curtain--left"></div>
      <div className="preloader-curtain preloader-curtain--right"></div>
    </div>
  );
};

export default Preloader;
