import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  useEffect(() => {
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleOverInteractive = (e) => {
      const el = e.target;
      
      // Check for data-cursor text
      const cursorTarget = el.closest('[data-cursor]');
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor'));
        setHovering(true);
        return;
      } else {
        setCursorText('');
      }

      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('gallery-item') ||
        el.classList.contains('service-card') ||
        el.classList.contains('sense-card') ||
        el.closest('.magnetic-btn')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

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

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  const hasTextClass = cursorText ? 'has-text' : '';

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? 'visible' : ''} ${clicking ? 'clicking' : ''} ${hovering ? 'hovering' : ''} ${hasTextClass}`}
      />
      <div
        ref={circleRef}
        className={`cursor-circle ${visible ? 'visible' : ''} ${clicking ? 'clicking' : ''} ${hovering ? 'hovering' : ''} ${hasTextClass}`}
      >
        <span className="cursor-text">{cursorText}</span>
      </div>
    </>
  );
};

export default CustomCursor;
