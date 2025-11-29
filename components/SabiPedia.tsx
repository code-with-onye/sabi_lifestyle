import React, { useState } from 'react';
import { Zap, Thermometer, Moon, Monitor, Wind, Droplet } from 'lucide-react';
import { TipCard } from '../types';

const cards: (TipCard & { icon: React.FC<any> })[] = [
  { title: "Phantom Loads", description: "Devices consume 10% of energy while 'off'. Unplug or strip-switch.", category: "Hardware", icon: Zap },
  { title: "Thermal Inertia", description: "Heating strategy: Keep distinct zones. Don't heat empty space.", category: "Heating", icon: Thermometer },
  { title: "Sleep Mode Optimization", description: "Calibrate devices to sleep after 5 mins inactivity. Save 150kWh/yr.", category: "Habits", icon: Moon },
  { title: "Lumen Efficiency", description: "Switch to LEDs. 80% less heat, 100% more light clarity.", category: "Lighting", icon: Monitor },
  { title: "Airflow Dynamics", description: "Clean filters improve AC efficiency by 15%. Remove the friction.", category: "Maintenance", icon: Wind },
  { title: "Cold Wash Logic", description: "90% of washer energy goes to heating water. Wash cold, save hot.", category: "Water", icon: Droplet },
];

export const SabiPedia: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-clinical-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-mono font-bold text-tech-blue mb-4">
          <span className="text-electric-cyan mr-4">/02</span>Sabi-Pedia
        </h2>
        <p className="max-w-xl text-tech-blue/70">
          Accessing the efficiency database. Hover to retrieve data modules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<TipCard & { icon: React.FC<any> }> = ({ title, description, category, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative group p-8 border border-tech-blue/10 min-h-[280px] flex flex-col justify-between transition-all duration-300
        ${isHovered ? 'bg-tech-blue text-white translate-y-[-4px]' : 'bg-white text-tech-blue'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-interactive="true"
    >
      {/* Flicker Effect Overlay */}
      <div className={`absolute inset-0 bg-electric-cyan pointer-events-none mix-blend-overlay opacity-0 ${isHovered ? 'animate-[flicker_0.1s_ease-in-out_2]' : ''}`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <Icon className={`w-8 h-8 ${isHovered ? 'text-electric-cyan' : 'text-tech-blue'}`} />
          <span className={`text-xs font-mono uppercase border px-2 py-1 ${isHovered ? 'border-electric-cyan text-electric-cyan' : 'border-tech-blue/30 text-tech-blue/50'}`}>
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold font-mono mb-4">{title}</h3>
        <p className={`text-sm leading-relaxed ${isHovered ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 pt-6 mt-auto border-t border-dashed border-current/20">
        <span className={`text-xs font-mono ${isHovered ? 'text-electric-cyan' : 'text-tech-blue/50'}`}>
           {isHovered ? '>> DATA RETRIEVED' : '>> ACCESS DATA'}
        </span>
      </div>
    </div>
  );
};
