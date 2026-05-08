import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true); // Default to muted for best UX
  const [audioCtx, setAudioCtx] = useState(null);

  // Initialize AudioContext on first interaction if not muted
  useEffect(() => {
    if (!isMuted && !audioCtx) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioCtx(ctx);
    }
  }, [isMuted, audioCtx]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const playHover = useCallback(() => {
    // Hover sound removed per user request
    return;
  }, []);

  const playClick = useCallback(() => {
    if (isMuted || !audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  }, [isMuted, audioCtx]);

  const playTransition = useCallback(() => {
    if (isMuted || !audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.4);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.2);
    gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  }, [isMuted, audioCtx]);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playTransition }}>
      {children}
    </SoundContext.Provider>
  );
};
