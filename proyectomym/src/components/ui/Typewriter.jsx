import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 60, startDelay = 0, className = '', cursorColor = 'var(--gold)' }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, delay);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [text, delay, startDelay]);

  return (
    <span className={className} style={{ position: 'relative', display: 'inline' }}>
      {displayText}
      {showCursor && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '0.85em',
            background: cursorColor,
            marginLeft: '3px',
            verticalAlign: 'text-bottom',
            animation: isComplete ? 'cursorBlink 1s step-end infinite' : 'none',
            opacity: 1,
          }}
        />
      )}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
