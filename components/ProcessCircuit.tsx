import React, { useEffect, useRef, useState } from 'react';

const steps = [
  { title: "Assess", desc: "We map your current consumption via smart meter analysis." },
  { title: "Learn", desc: "Identify inefficiency hotspots using our detection algorithm." },
  { title: "Apply", desc: "Implement targeted micro-adjustments to hardware and habits." },
  { title: "Save", desc: "Measure the delta. Watch your savings count up in real-time." },
];

export const ProcessCircuit: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        
        // Calculate how much of the section has been scrolled through
        // Start drawing when section top hits middle of screen
        const start = windowHeight / 2;
        const progress = Math.min(1, Math.max(0, (start - rect.top) / (totalHeight * 0.8)));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 bg-clinical-white relative">
      <div className="mb-20 text-center">
         <h2 className="text-3xl md:text-5xl font-mono font-bold text-tech-blue">
          <span className="text-electric-cyan mr-4">/04</span>The Circuit
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The SVG Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 z-0 h-full">
           <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
             <path 
                d="M 2 0 V 1000" 
                stroke="#E5E7EB" 
                strokeWidth="2" 
                fill="none" 
             />
             <path 
                d="M 2 0 V 1000" 
                stroke="#00FFCC" 
                strokeWidth="4" 
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset={1000 - (scrollProgress * 1000)}
                className="transition-all duration-100 ease-linear"
             />
           </svg>
        </div>

        <div className="flex flex-col gap-24 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
              {/* Timeline Point */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-clinical-white border-2 border-tech-blue z-20 flex items-center justify-center">
                <div className={`w-2 h-2 bg-electric-cyan rounded-full transition-opacity duration-300 ${scrollProgress > (index + 0.1) / steps.length ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div 
                  className={`
                    p-6 border-l-2 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-2' : 'md:border-l-2'} 
                    border-tech-blue/20 transition-all duration-700 transform
                    ${scrollProgress > index / steps.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  <h3 className="text-2xl font-mono font-bold text-tech-blue mb-2">0{index + 1}. {step.title}</h3>
                  <p className="text-gray-600 font-sans">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
