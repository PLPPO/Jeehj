"use client";
import { useState, useEffect } from 'react';

const MadModeToggle = () => {
  const [isMad, setIsMad] = useState(false);

  useEffect(() => {
    if (isMad) {
      document.body.classList.add('mad-mode');
    } else {
      document.body.classList.remove('mad-mode');
    }
  }, [isMad]);

  return (
    <div className="fixed top-24 right-6 z-50">
      <button
        onClick={() => setIsMad(!isMad)}
        className="bg-electric-pink text-white px-4 py-2 rounded-lg font-orbitron font-bold"
      >
        {isMad ? 'Disable Mad Mode' : 'Enable Mad Mode'}
      </button>
    </div>
  );
};

export default MadModeToggle;
