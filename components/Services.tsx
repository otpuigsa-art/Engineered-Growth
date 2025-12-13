import React from 'react';
import { Search, Activity, Rocket, Zap, Database, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#020205] relative border-t border-white/5 overflow-hidden">
      {/* Background Elements - Subtle Moving Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[10px] font-mono mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ALL-IN-ONE ECOSYSTEM
          </div>
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 leading-tight">
            Un sistema unificado.<br />
            <span className="text-slate-500">Sin piezas sueltas.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
            No vendo horas ni tareas aisladas. Implemento una infraestructura completa de ingeniería de crecimiento donde cada componente alimenta al siguiente. Es un ciclo cerrado de optimización.
          </p>
        </div>

        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent z-0"></div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1: Diagnóstico (Violet Style) */}
          <div className="relative">
             <div className="absolute -inset-0.5 bg-gradient-to-b from-violet-600 to-indigo-900 rounded-3xl opacity-20 blur-md"></div>
             
             <div className="relative h-full bg-[#050508] border border-violet-500/20 rounded-3xl p-8 flex flex-col overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.05)]">
                
                {/* Top Neon Light Source */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-70 shadow-[0_0_15px_rgba(139,92,246,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-violet-500/10 to-transparent opacity-50 pointer-events-none"></div>

                {/* Floating Status Badge */}
                <div className="absolute top-6 right-6 z-20 animate-float" style={{ animationDuration: '6s' }}>
                  <div className="flex items-center gap-2 px-2 py-1 rounded border border-violet-500/20 bg-violet-950/30 backdrop-blur-sm text-[9px] font-mono text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                    <Database className="w-3 h-3" />
                    <span>DATA_INTEGRITY</span>
                  </div>
                </div>

                <div className="mb-10 relative">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 relative z-10">
                    <Search className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Diagnóstico & Infraestructura</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10 font-light">
                  Antes de invertir un euro, construimos los cimientos. Auditoría de fugas en el funnel y configuración de CAPI para una medición sin pérdidas de data.
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 space-y-3 relative z-10">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_5px_rgba(139,92,246,0.8)]"></div> Tracking Server-Side
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_5px_rgba(139,92,246,0.8)]"></div> Auditoría UX/UI
                  </div>
                </div>
             </div>
          </div>

          {/* Card 2: Gestión (Cyan Style) */}
          <div className="relative">
             <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-blue-900 rounded-3xl opacity-20 blur-md"></div>
             
             <div className="relative h-full bg-[#050508] border border-cyan-500/20 rounded-3xl p-8 flex flex-col overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.05)]">
                
                {/* Top Neon Light Source */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50 pointer-events-none"></div>

                {/* Floating Status Badge */}
                <div className="absolute top-6 right-6 z-20 animate-float" style={{ animationDuration: '5s' }}>
                  <div className="flex items-center gap-2 px-2 py-1 rounded border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-sm text-[9px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    SYSTEM_CORE
                  </div>
                </div>

                <div className="mb-10 relative">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 relative z-10">
                    <Activity className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Gestión Científica</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10 font-light">
                  El motor del sistema. Ejecución diaria basada en estadística, no en intuición. Media Buying avanzado para maximizar el ROAS de forma predecible.
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 space-y-3 relative z-10">
                   <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div> A/B Testing Diario
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div> Reporting en Tiempo Real
                  </div>
                </div>
             </div>
          </div>

          {/* Card 3: Escalado (Emerald Style) */}
          <div className="relative">
             <div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500 to-teal-900 rounded-3xl opacity-20 blur-md"></div>
             
             <div className="relative h-full bg-[#050508] border border-emerald-500/20 rounded-3xl p-8 flex flex-col overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                
                {/* Top Neon Light Source */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-50 pointer-events-none"></div>

                {/* Floating Status Badge */}
                <div className="absolute top-6 right-6 z-20 animate-float" style={{ animationDuration: '7s' }}>
                  <div className="flex items-center gap-2 px-2 py-1 rounded border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-sm text-[9px] font-mono text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <BarChart3 className="w-3 h-3" />
                    <span>GROWTH_MODE</span>
                  </div>
                </div>

                <div className="mb-10 relative">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 relative z-10">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Escalado Creativo</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10 font-light">
                  Combustible infinito. Producción y testeo masivo de nuevos ángulos y ofertas para vencer la fatiga de anuncios y escalar verticalmente.
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 space-y-3 relative z-10">
                   <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div> Iteración de Ángulos
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div> Optimización de Ofertas
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;