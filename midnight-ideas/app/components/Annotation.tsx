"use client";
import { useState } from 'react';

const Annotation = ({ text, children }: { text: string, children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-electric-pink text-white text-sm rounded-lg shadow-lg w-max">
          {text}
        </div>
      )}
    </div>
  );
};

export default Annotation;
