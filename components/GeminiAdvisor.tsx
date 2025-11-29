import React, { useState } from 'react';
import { generateEfficiencyAdvice } from '../services/geminiService';
import { Cpu, Send, Loader2, Terminal } from 'lucide-react';

export const GeminiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const result = await generateEfficiencyAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-tech-blue text-white relative">
       <div className="max-w-4xl mx-auto">
         <div className="border border-electric-cyan/30 bg-tech-dark/50 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-electric-cyan/10 border border-electric-cyan rounded-sm flex items-center justify-center">
                  <Cpu className="text-electric-cyan w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-mono font-bold">The Efficiency Engine</h2>
                  <p className="text-xs font-mono text-electric-cyan uppercase tracking-widest">AI-Powered Consultant</p>
                </div>
              </div>

              <form onSubmit={handleAsk} className="mb-8">
                <div className="flex gap-0 relative">
                  <div className="absolute left-4 top-4 text-electric-cyan font-mono">{'>'}</div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your energy problem (e.g. 'My heating bill is too high in winter')"
                    className="w-full bg-black/40 border border-white/20 p-4 pl-10 font-mono text-sm focus:outline-none focus:border-electric-cyan transition-colors text-white placeholder-gray-500"
                    data-interactive="true"
                  />
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-electric-cyan text-tech-dark px-8 font-bold font-mono hover:bg-white transition-colors disabled:opacity-50"
                    data-interactive="true"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
                  </button>
                </div>
              </form>

              {response && (
                <div className="bg-black/40 border border-electric-cyan/20 p-6 font-mono text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-2 mb-4 text-electric-cyan text-xs uppercase border-b border-white/10 pb-2">
                    <Terminal className="w-4 h-4" />
                    Output Stream
                  </div>
                  <div className="whitespace-pre-line text-gray-300">
                    {response}
                  </div>
                </div>
              )}
            </div>
         </div>
       </div>
    </section>
  );
};
