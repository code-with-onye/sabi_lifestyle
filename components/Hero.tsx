import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const headlineText = "Knowledge is Your Lowest Energy Bill.";
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(headlineText.slice(0, index + 1));
      index++;
      if (index === headlineText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 relative overflow-hidden border-b border-tech-blue/10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 relative">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-tech-blue/20 rounded-full text-xs font-mono uppercase tracking-widest text-tech-blue/70">
          <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
          System Status: Online
        </div>
        <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight mb-8">
          {displayText}
          <span className="animate-pulse text-electric-cyan">_</span>
        </h1>
        <p className="text-lg md:text-xl text-tech-blue/80 max-w-lg mb-10 leading-relaxed">
          Sabi Lifestyle is the efficiency engine. We transform confusion into clarity, making energy saving a measurable, high-performance lifestyle choice.
        </p>
        <button 
          data-interactive="true"
          className="group relative px-8 py-4 bg-tech-blue text-white font-mono font-bold uppercase tracking-wider overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-tech-blue transition-colors duration-300">Initialize Audit</span>
          <div className="absolute inset-0 bg-electric-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        </button>
      </div>

      {/* Circuit Visualization */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative mt-12 md:mt-0 flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-square">
          {/* Abstract Boiler/Appliance SVG */}
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#004D99" />
                <stop offset="100%" stopColor="#00FFCC" />
              </linearGradient>
            </defs>
            
            {/* Base Structure */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
            
            {/* Rotating Outer Ring */}
            <g className="animate-[spin_10s_linear_infinite]">
              <circle cx="200" cy="200" r="160" fill="none" stroke="#004D99" strokeWidth="2" strokeDasharray="20 40" opacity="0.3" />
            </g>

            {/* Inefficient Path (lights up) */}
            <path 
              d="M 200 80 L 200 140 L 260 200 L 200 260 L 140 200 L 200 140" 
              fill="none" 
              stroke="#00FFCC" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[pulse_3s_ease-in-out_infinite]"
              filter="drop-shadow(0 0 5px #00FFCC)"
            />

            {/* Core */}
            <circle cx="200" cy="200" r="10" fill="#004D99" />
            
            {/* Data particles */}
            <circle cx="200" cy="80" r="4" fill="#00FFCC">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
             <circle cx="260" cy="200" r="4" fill="#00FFCC">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </circle>
             <circle cx="140" cy="200" r="4" fill="#00FFCC">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Floating Label */}
          <div className="absolute top-1/4 right-0 bg-white border border-electric-cyan px-3 py-1 shadow-lg">
             <div className="text-[10px] font-mono text-tech-blue uppercase">Inefficiency Detected</div>
          </div>
        </div>
      </div>
    </section>
  );
};
