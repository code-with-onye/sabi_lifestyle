import React from 'react';
import { Hero } from './components/Hero';
import { SabiPedia } from './components/SabiPedia';
import { ImpactTracker } from './components/ImpactTracker';
import { ProcessCircuit } from './components/ProcessCircuit';
import { Testimonials } from './components/Testimonials';
import { CustomCursor } from './components/CustomCursor';
import { GeminiAdvisor } from './components/GeminiAdvisor';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-electric-cyan selection:text-tech-blue">
      {/* Global Custom Cursor */}
      <CustomCursor />
      
      {/* Header/Nav (Minimalist) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference pointer-events-none">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-mono font-bold text-xl tracking-tighter">
            SABI<span className="text-electric-cyan">_</span>
          </div>
          <nav className="hidden md:flex gap-8 pointer-events-auto">
            <button className="text-white font-mono text-xs uppercase tracking-widest hover:text-electric-cyan transition-colors" data-interactive="true">Method</button>
            <button className="text-white font-mono text-xs uppercase tracking-widest hover:text-electric-cyan transition-colors" data-interactive="true">Data</button>
            <button className="text-white font-mono text-xs uppercase tracking-widest hover:text-electric-cyan transition-colors" data-interactive="true">Engine</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <SabiPedia />
        <ImpactTracker />
        <ProcessCircuit />
        <GeminiAdvisor />
        <Testimonials />
      </main>

      <footer className="bg-tech-dark text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
           <div className="font-mono text-sm text-gray-500">
             © 2024 Sabi Lifestyle. All Systems Nominal.
           </div>
           <div className="mt-4 md:mt-0 flex gap-4">
             <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
             <span className="text-xs font-mono text-electric-cyan">Efficiency Engine Running</span>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
