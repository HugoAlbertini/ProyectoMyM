import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Detect hoverable elements
    const handleOverInteractive = (e) => {
      const el = e.target;
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('gallery-item') ||
        el.classList.contains('service-card') ||
        el.classList.contains('sense-card')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    // Smooth circle follower animation
    const animate = () => {
      const speed = 0.12;
      circle.current.x += (mouse.current.x - circle.current.x) * speed;
      circle.current.y += (mouse.current.y - circle.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px)`;
      }

      animationId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOverInteractive);

    animationId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOverInteractive);
      cancelAnimationFrame(animationId.current);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? 'visible' : ''} ${clicking ? 'clicking' : ''} ${hovering ? 'hovering' : ''}`}
      />
      <div
        ref={circleRef}
        className={`cursor-circle ${visible ? 'visible' : ''} ${clicking ? 'clicking' : ''} ${hovering ? 'hovering' : ''}`}
      />
    </>
  );
};

export default CustomCursor;
