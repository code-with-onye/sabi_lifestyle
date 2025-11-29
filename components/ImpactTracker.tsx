import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MetricType } from '../types';

const data = [
  { name: 'Jan', kwh: 120, money: 18, co2: 0.05 },
  { name: 'Feb', kwh: 110, money: 16.5, co2: 0.045 },
  { name: 'Mar', kwh: 90, money: 13.5, co2: 0.038 },
  { name: 'Apr', kwh: 85, money: 12.75, co2: 0.035 },
  { name: 'May', kwh: 70, money: 10.5, co2: 0.029 },
  { name: 'Jun', kwh: 65, money: 9.75, co2: 0.027 },
];

export const ImpactTracker: React.FC = () => {
  const [metric, setMetric] = useState<MetricType>('kwh');
  const [totalSaved, setTotalSaved] = useState(45); // Animated simplified

  const getMetricLabel = () => {
    switch (metric) {
      case 'kwh': return 'kWh Saved';
      case 'money': return '$ Saved';
      case 'co2': return 'Tons CO2 Reduced';
    }
  };

  const getMetricValue = (item: any) => item[metric];
  
  const handleToggle = (newMetric: MetricType) => {
    setMetric(newMetric);
    // Simulate re-calculation
    setTotalSaved(Math.floor(Math.random() * 50) + 20);
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-tech-dark text-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-16">
        {/* Controls Side */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-8">
            <span className="text-electric-cyan mr-4">/03</span>Impact Tracker
          </h2>
          <p className="text-gray-400 mb-10 font-mono text-sm">
            Select metric to visualize efficiency gains. Real-time projection based on Sabi implementation.
          </p>

          <div className="flex flex-col gap-4">
            {(['kwh', 'money', 'co2'] as MetricType[]).map((m) => (
              <button
                key={m}
                onClick={() => handleToggle(m)}
                data-interactive="true"
                className={`
                  flex items-center justify-between p-4 border transition-all duration-300
                  ${metric === m 
                    ? 'border-electric-cyan bg-electric-cyan/10 text-electric-cyan' 
                    : 'border-white/10 text-gray-500 hover:border-white/30'}
                `}
              >
                <span className="uppercase font-bold tracking-wider">{m === 'money' ? 'Cost' : m}</span>
                <div className={`w-2 h-2 rounded-full ${metric === m ? 'bg-electric-cyan shadow-[0_0_10px_#00FFCC]' : 'bg-gray-700'}`}></div>
              </button>
            ))}
          </div>

          <div className="mt-12 p-6 border border-white/10 bg-black/20">
            <h4 className="text-xs font-mono text-gray-400 uppercase mb-2">Total Efficiency Gain</h4>
            <div className="text-6xl font-digital text-electric-cyan drop-shadow-[0_0_8px_rgba(0,255,204,0.6)]">
              {metric === 'money' ? '$' : ''}{totalSaved}{metric === 'kwh' ? 'kw' : ''}{metric === 'co2' ? 't' : ''}
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Chart Side */}
        <div className="lg:w-2/3 h-[500px] w-full bg-black/20 border border-white/5 p-4 md:p-8 rounded-sm">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  stroke="#4B5563" 
                  tick={{fill: '#9CA3AF', fontFamily: 'Space Mono', fontSize: 12}} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#4B5563" 
                  tick={{fill: '#9CA3AF', fontFamily: 'Space Mono', fontSize: 12}}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{backgroundColor: '#001A33', borderColor: '#00FFCC', color: '#FFF'}}
                  itemStyle={{color: '#00FFCC', fontFamily: 'Space Mono'}}
                  labelStyle={{color: '#FFF', fontFamily: 'Space Mono', fontWeight: 'bold'}}
                />
                <Bar dataKey={metric} animationDuration={1000}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#00FFCC" className="hover:opacity-80 transition-opacity" />
                  ))}
                </Bar>
             </BarChart>
           </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
