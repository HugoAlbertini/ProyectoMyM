import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextReveal = ({ text, className = '', as: Tag = 'h2', style = {} }) => {
  const containerRef = useRef(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.4'],
  });

  return (
    <Tag ref={containerRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </Tag>
  );
};

const Word = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        display: 'inline-block',
        marginRight: '0.3em',
        willChange: 'opacity, transform',
      }}
    >
      {word}
    </motion.span>
  );
};

export default TextReveal;
