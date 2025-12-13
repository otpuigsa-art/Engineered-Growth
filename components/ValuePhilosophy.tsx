import React from 'react';
import { Target, GitBranch, Cpu } from 'lucide-react';

const ValuePhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-24 relative border-t border-white/5 bg-[#020205]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-6 border border-violet-500/20">
            <Cpu className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight font-display">
            El marketing es una ciencia,<br />
            <span className="text-slate-600">no un juego de azar.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Mi background en ingeniería mecánica me impide ver el marketing como "magia". Para mí, tu e-commerce es un sistema termodinámico: input (dinero), proceso (funnel) y output (ventas).
          </p>
        </div>

        {/* Grid Section - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: Mentalidad de Ingeniero (Large - 7 cols) */}
          <div className="md:col-span-7 glass-card bg-[#050508] rounded-3xl p-8 md:p-12 relative overflow-hidden">
             {/* Static Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-30"></div>
             
             {/* Static Graph */}
             <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20 pointer-events-none">
                <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]" viewBox="0 0 400 150" preserveAspectRatio="none">
                   <defs>
                     <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                       <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                   <path d="M0 150 L0 100 Q 50 90 100 120 T 200 80 T 300 100 T 400 40 V 150 Z" fill="url(#graphGradient)" />
                   <path d="M0 100 Q 50 90 100 120 T 200 80 T 300 100 T 400 40" fill="none" stroke="#a78bfa" strokeWidth="2" />
                </svg>
             </div>
             
             {/* Icon */}
             <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 flex items-center justify-center text-violet-400 mb-8 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
               <GitBranch className="w-8 h-8" />
             </div>
             
             <h3 className="text-3xl font-medium text-white mb-4 relative z-10 tracking-tight">Mentalidad de Ingeniero</h3>
             <p className="text-slate-400 leading-relaxed relative z-10 text-lg max-w-md">
               No "creo" que un anuncio vaya a funcionar. Lo testeo, mido la varianza, calculo la significancia estadística y escalo. Sin emociones, solo datos.
             </p>
          </div>

          {/* Card 2: Stats (Small - 5 cols) */}
          <div className="md:col-span-5 glass-card bg-[#050508] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50"></div>
             
             <div className="flex flex-col gap-12 relative z-10 px-4">
               <div>
                 <div className="text-5xl md:text-7xl font-semibold text-white mb-2 tracking-tighter">5+</div>
                 <div className="flex items-center gap-3">
                   <div className="h-px w-8 bg-blue-500"></div>
                   <div className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">Años de Experiencia</div>
                 </div>
               </div>
               
               <div>
                 <div className="text-5xl md:text-7xl font-semibold text-white mb-2 tracking-tighter">€3M+</div>
                 <div className="flex items-center gap-3">
                   <div className="h-px w-8 bg-blue-500"></div>
                   <div className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">Gestionados en Ads</div>
                 </div>
               </div>
             </div>
          </div>

          {/* Card 3: Full Funnel (Small - 5 cols) */}
          <div className="md:col-span-5 glass-card bg-[#050508] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[320px]">
             {/* Static Radar Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-10 pointer-events-none">
                <div className="absolute inset-0 border border-cyan-500 rounded-full"></div>
                <div className="absolute inset-0 border border-cyan-500 rounded-full scale-75"></div>
             </div>
             
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 relative z-10 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]">
               <Target className="w-8 h-8" />
             </div>
             
             <div className="relative z-10">
                <h3 className="text-2xl font-medium text-white mb-3">Enfoque Full-Funnel</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-sm mx-auto">
                  No sirve de nada traer tráfico barato si tu web pierde agua. Analizo desde el anuncio hasta el email post-compra.
                </p>
             </div>
          </div>

          {/* Card 4: Code (Large - 7 cols) */}
          <div className="md:col-span-7 glass-card bg-[#0A0A0F] rounded-3xl p-0 overflow-hidden relative flex flex-col min-h-[320px]">
             {/* Top Bar */}
             <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500">strategy_v1.js</div>
             </div>
             
             <div className="p-6 md:p-8 font-mono text-xs md:text-sm text-slate-300 relative flex-grow overflow-hidden">
                {/* Scanline Effect - Always Visible but Static opacity */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-400/50 shadow-[0_0_20px_rgba(52,211,153,0.8)] z-20 animate-scan pointer-events-none opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent z-10 animate-scan pointer-events-none opacity-30" style={{ height: '50px' }}></div>

                <div className="relative z-0 opacity-100">
                   <div className="flex">
                      <div className="flex flex-col text-slate-700 select-none mr-4 text-right">
                         <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                      </div>
                      <pre className="flex-1 overflow-x-auto"><code>
<span className="text-violet-400">const</span> <span className="text-yellow-200">growthFormula</span> = (<span className="text-cyan-300">&#123; traffic, conversion, ltv &#125;</span>) =&gt; &#123;{'\n'}
  <span className="text-violet-400">if</span> (!traffic || !conversion) <span className="text-violet-400">return</span> <span className="text-emerald-400">"Fix Fundamentals"</span>;{'\n'}
  <span className="text-slate-500">// Iterative testing process</span>{'\n'}
  <span className="text-violet-400">while</span> (costPerAcquisition &lt; targetCPA) &#123;{'\n'}
    <span className="text-blue-300">scaleBudget</span>(<span className="text-orange-400">1.2</span>);{'\n'}
    <span className="text-blue-300">optimizeCreatives</span>();{'\n'}
  &#125;{'\n'}
  <span className="text-violet-400">return</span> <span className="text-emerald-400">"Profitability"</span>;{'\n'}
&#125;
                      </code></pre>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuePhilosophy;