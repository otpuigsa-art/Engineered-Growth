import React from 'react';
import { ArrowUpRight, TrendingUp, DollarSign, Users, Activity, Lock } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-20 md:py-32 bg-[#020205] relative border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[10px] font-mono mb-6 backdrop-blur-md">
              <Activity className="w-3 h-3 text-cyan-400" />
              PROVEN RESULTS
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
              La evidencia empírica.<br />
              <span className="text-slate-500">Resultados auditables.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-light">
              Selección de proyectos donde la aplicación del método científico transformó la cuenta de resultados.
            </p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-4xl font-mono text-white mb-1">€3.2M+</div>
             <div className="text-xs text-slate-500 font-mono tracking-widest uppercase">Revenue Generado 2023</div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Case 1: Fashion (Emerald - Scaling) */}
          <div className="relative rounded-3xl bg-[#050508] border border-white/10 overflow-hidden">
            
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                 <div className="flex flex-col">
                    <span className="text-xs font-mono text-emerald-400 mb-2">ECOMMERCE / FASHION</span>
                    <h3 className="text-xl text-white font-medium">Brand de Streetwear</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>

              {/* Problem/Solution Mini-Terminal */}
              <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/5 font-mono text-[10px] text-slate-400 space-y-2 relative overflow-hidden">
                <div className="flex gap-2">
                   <span className="text-red-400">PROBLEM:</span>
                   <span>CPA insostenible al escalar &gt;3k/mes.</span>
                </div>
                <div className="flex gap-2">
                   <span className="text-emerald-400">SOL:</span>
                   <span>Estructura de testeo ABO + CBO consolidada.</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">ROAS</div>
                    <div className="text-2xl font-mono text-white flex items-center gap-2">
                       3.8x
                       <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1 rounded">+45%</span>
                    </div>
                 </div>
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Revenue</div>
                    <div className="text-2xl font-mono text-white">
                       125k
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Case 2: Tech (Cyan - Efficiency) */}
          <div className="relative rounded-3xl bg-[#050508] border border-white/10 overflow-hidden">

            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                 <div className="flex flex-col">
                    <span className="text-xs font-mono text-cyan-400 mb-2">SAAS / B2B</span>
                    <h3 className="text-xl text-white font-medium">Software FinTech</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
                    <Users className="w-5 h-5" />
                 </div>
              </div>

               {/* Problem/Solution Mini-Terminal */}
              <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/5 font-mono text-[10px] text-slate-400 space-y-2 relative overflow-hidden">
                <div className="flex gap-2">
                   <span className="text-red-400">PROBLEM:</span>
                   <span>Leads de baja calidad. Tasa de cierre &lt; 2%.</span>
                </div>
                <div className="flex gap-2">
                   <span className="text-cyan-400">SOL:</span>
                   <span>Filtrado pre-click y optimización de evento offline (CAPI).</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">CPL</div>
                    <div className="text-2xl font-mono text-white flex items-center gap-2">
                       €18
                       <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1 rounded">-32%</span>
                    </div>
                 </div>
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Quality</div>
                    <div className="text-2xl font-mono text-white">
                       8.5<span className="text-sm text-slate-500">/10</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Case 3: Home (Violet - Restructuring) */}
          <div className="relative rounded-3xl bg-[#050508] border border-white/10 overflow-hidden">

            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                 <div className="flex flex-col">
                    <span className="text-xs font-mono text-violet-400 mb-2">ECOMMERCE / HIGH TICKET</span>
                    <h3 className="text-xl text-white font-medium">Mobiliario de Diseño</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20 text-violet-400">
                    <Lock className="w-5 h-5" />
                 </div>
              </div>

               {/* Problem/Solution Mini-Terminal */}
              <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/5 font-mono text-[10px] text-slate-400 space-y-2 relative overflow-hidden">
                <div className="flex gap-2">
                   <span className="text-red-400">PROBLEM:</span>
                   <span>Estancamiento en ventas y fatiga creativa.</span>
                </div>
                <div className="flex gap-2">
                   <span className="text-violet-400">SOL:</span>
                   <span>Iteración masiva de ángulos de venta (UGC vs Studio).</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">AOV</div>
                    <div className="text-2xl font-mono text-white flex items-center gap-2">
                       €450
                       <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1 rounded">+15%</span>
                    </div>
                 </div>
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Profits</div>
                    <div className="text-2xl font-mono text-white">
                       +22%
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;