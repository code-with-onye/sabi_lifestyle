import React, { useState } from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, name: "Sarah J.", role: "Architect", quote: "Precise. The data doesn't lie. My bill dropped 18% in month one." },
  { id: 2, name: "Davide R.", role: "Developer", quote: "Finally, an energy guide that treats me like an engineer, not a child." },
  { id: 3, name: "Elena M.", role: "Eco-Lead", quote: "The visualization of phantom loads was my lightbulb moment." },
  { id: 4, name: "Marcus T.", role: "Homeowner", quote: "Sabi turned my utility closet into a command center." },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-clinical-white overflow-hidden relative">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-mono font-bold text-tech-blue">
          <span className="text-electric-cyan mr-4">/05</span>Switched On
        </h2>
      </div>

      <div className="relative h-[600px] flex items-center justify-center perspective-1000">
        {/* The Sabi Core */}
        <div className="absolute w-4 h-4 bg-electric-cyan rounded-full shadow-[0_0_30px_#00FFCC] z-20 animate-pulse" />
        <div className="absolute w-32 h-32 border border-tech-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-64 h-64 border border-tech-blue/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

        {/* Orbiting Cards Container */}
        <div className="absolute w-full h-full animate-[orbit_30s_linear_infinite] pointer-events-none">
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            return (
              <div 
                key={t.id}
                className="absolute top-1/2 left-1/2 w-80"
                style={{
                  transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`, // Counter-rotate to keep text upright
                }}
              >
                <div className="bg-white p-6 shadow-xl border-t-4 border-tech-blue transform hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-none">
                  <p className="font-mono text-sm text-tech-blue mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs text-tech-blue">
                       {t.name.charAt(0)}
                     </div>
                     <div>
                       <p className="font-bold text-xs uppercase tracking-wider">{t.name}</p>
                       <p className="text-[10px] text-gray-500 font-mono">{t.role}</p>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
