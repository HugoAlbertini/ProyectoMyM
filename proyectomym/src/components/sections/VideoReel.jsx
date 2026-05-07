import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import './VideoReel.css';

const VideoReel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="section-padding video-section">
      <div className="container">
        <motion.div
          className="video-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label section-label--center">Nuestro Trabajo</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Cada evento,<br />una historia única
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Viví la experiencia a través de nuestros eventos más memorables.
          </p>
        </motion.div>

        <motion.div
          className="video-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Golden decorative frame */}
          <div className="video-frame-accent video-frame-accent--tl" />
          <div className="video-frame-accent video-frame-accent--br" />

          <div className="video-wrapper">
            <motion.div className="video-parallax-bg" style={{ y }}>
              {/* Placeholder: Replace with real video */}
              <video
                ref={videoRef}
                className="video-player"
                loop
                muted
                playsInline
                poster={`${import.meta.env.BASE_URL}gallery-celebration.png`}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {/* When you have a real video, add the source here:
                <source src="/reel-mym.mp4" type="video/mp4" /> */}
              </video>
            </motion.div>

            <div 
              className={`video-overlay ${isPlaying ? 'playing' : ''}`} 
              onClick={togglePlay}
              role="button"
              tabIndex={0}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  togglePlay();
                }
              }}
            >
              <div className="video-play-btn">
                {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '3px' }} />}
              </div>
              {!isPlaying && (
                <span className="video-play-label">Reproducir Reel</span>
              )}
            </div>
          </div>

          {/* Shimmer border */}
          <div className="video-shimmer" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoReel;
