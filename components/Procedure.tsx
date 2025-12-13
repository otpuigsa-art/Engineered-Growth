import React from 'react';
import { Workflow } from 'lucide-react';

const Procedure: React.FC = () => {
  return (
    <section id="procedure" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Procedimiento Dinámico</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Un flujo de trabajo cíclico diseñado para minimizar el error humano y maximizar la rentabilidad algorítmica.</p>
        </div>

        <div className="relative">
          {/* Vertical Central Line (The Backbone) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0">
            {/* Flowing Light Effect on Line */}
            <div className="absolute inset-0 w-full h-full animate-flow-line opacity-70"></div>
          </div>

          {/* Step 1 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-20 mb-16 items-center">
            <div className="md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono mb-3 border border-blue-500/20">FASE 01</div>
              <h3 className="text-2xl text-white font-medium mb-2">Auditoría Profunda</h3>
              <p className="text-sm text-slate-400">Extracción de datos históricos. Identificamos dónde se rompe el funnel: ¿Es el click? ¿Es el carrito? ¿Es el checkout?</p>
            </div>
            
            {/* Central Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020205] border border-blue-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="order-3 md:order-2 pl-12 md:pl-0">
              <div className="glass-card p-5 rounded-xl border-l-2 border-l-blue-500 opacity-100">
                <div className="font-mono text-xs text-blue-300 mb-2">&gt; run_diagnostics.py</div>
                <div className="flex gap-1 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[80%] bg-blue-500"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Analyzing Pixels</span>
                  <span>80% Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-20 mb-16 items-center">
            <div className="md:text-right order-2 md:order-1 pl-12 md:pl-0 md:hidden block">
              {/* Mobile Text Placeholder */}
            </div>
            
            <div className="order-3 md:order-1 pl-12 md:pl-0 flex justify-end">
              <div className="glass-card p-5 rounded-xl border-r-2 border-r-violet-500 opacity-100 w-full md:w-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Hypothesis Generation</div>
                    <div className="text-[10px] text-slate-500">Creating A/B variants</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020205] border border-violet-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
            </div>

            <div className="pl-12 md:pl-0 order-2 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-mono mb-3 border border-violet-500/20">FASE 02</div>
              <h3 className="text-2xl text-white font-medium mb-2">Estrategia & Hipótesis</h3>
              <p className="text-sm text-slate-400">No adivinamos. Formulamos hipótesis matemáticas sobre qué creativos y ángulos venderán mejor, y preparamos el entorno de pruebas.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-20 mb-16 items-center">
            <div className="md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono mb-3 border border-cyan-500/20">FASE 03</div>
              <h3 className="text-2xl text-white font-medium mb-2">Ejecución Científica</h3>
              <p className="text-sm text-slate-400">Lanzamiento de campañas con estructura ISO. Nomenclaturas estrictas, exclusiones de audiencia y control de presupuesto milimétrico.</p>
            </div>
            
            {/* Central Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020205] border border-cyan-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <div className="absolute inset-0 rounded-full animate-pulse-ring border border-cyan-500/50"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="order-3 md:order-2 pl-12 md:pl-0">
              <div className="glass-card p-4 rounded-xl border border-cyan-500/30 opacity-100">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-cyan-900/20 rounded p-2">
                    <div className="text-[10px] text-cyan-300">Ads Live</div>
                    <div className="text-lg font-mono text-white">14</div>
                  </div>
                  <div className="bg-cyan-900/20 rounded p-2">
                    <div className="text-[10px] text-cyan-300">Spend</div>
                    <div className="text-lg font-mono text-white">$450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="order-3 md:order-1 pl-12 md:pl-0 flex justify-end">
              <div className="glass-card p-5 rounded-xl border-l-2 border-l-emerald-500 opacity-100 w-full md:w-auto">
                <div className="flex items-end gap-1 h-10 w-32">
                  <div className="w-1/4 h-[40%] bg-emerald-900/50 rounded-t"></div>
                  <div className="w-1/4 h-[60%] bg-emerald-800/50 rounded-t"></div>
                  <div className="w-1/4 h-[80%] bg-emerald-600/50 rounded-t"></div>
                  <div className="w-1/4 h-full bg-emerald-400 rounded-t shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                </div>
              </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020205] border border-emerald-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>

            <div className="pl-12 md:pl-0 order-2 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono mb-3 border border-emerald-500/20">FASE 04</div>
              <h3 className="text-2xl text-white font-medium mb-2">Optimización & Escala</h3>
              <p className="text-sm text-slate-400">Apagamos lo que pierde dinero. Inyectamos presupuesto a lo que tiene ROAS positivo. Repetimos el ciclo semanalmente.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Procedure;