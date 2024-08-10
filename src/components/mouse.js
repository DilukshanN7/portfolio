import React, { useState, useRef, useEffect } from 'react';
import './mouse.css';

const Mouse = () => {
  const [isInteracting, setIsInteracting] = useState(false);
  const mouseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;
      setIsInteracting(interacting);

      const x = e.clientX;
      const y = e.clientY;

      const xx = x - 5;
      const yy = y - 5;

      const keyframes = {
        transform: `translate(${xx}px, ${yy}px) scale(${interacting ? 8 : 1})`
      };

      mouseRef.current.animate(keyframes, { 
        duration: 800,
        fill: 'forwards'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleMouseMove);


    return () => window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('wheel', handleMouseMove);
  }, []);

  return (
    <div ref={mouseRef} className='trailer'>
      {isInteracting && (
        <img className='arrow' width={5} src='arrow-pointing-to-up-svgrepo-com.svg' alt='Arrow' />
      )}
    </div>
  );
};

export default Mouse;
