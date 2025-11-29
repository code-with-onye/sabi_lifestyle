import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('[data-interactive="true"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[100] mix-blend-exclusion flex items-center justify-center transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      {/* Horizontal Line */}
      <div className="absolute w-8 h-[1px] bg-electric-cyan" />
      {/* Vertical Line */}
      <div className="absolute h-8 w-[1px] bg-electric-cyan" />
      {/* Center Dot */}
      <div className={`w-1 h-1 bg-electric-cyan rounded-full ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Outer Ring on Hover */}
      <div className={`absolute w-12 h-12 border border-electric-cyan rounded-full transition-all duration-300 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
    </div>
  );
};
