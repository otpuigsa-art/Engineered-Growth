import React from 'react';
import { 
  BarChart2, 
  Facebook, 
  Instagram, 
  ShoppingBag, 
  PlayCircle, 
  Check, 
  ShoppingCart,
  Database,
  Code,
  TrendingUp,
  Target,
  Zap,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        
        {/* Left Column: Content */}
        <div className="max-w-2xl relative z-20 text-center lg:text-left mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[10px] font-medium uppercase tracking-wider mb-6 md:mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Data-Driven Performance
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-6">
            Ingeniería de Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">para E-commerce</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed mb-8 font-light mx-auto lg:mx-0 drop-shadow-md lg:drop-shadow-none">
             Transforma la incertidumbre en un sistema predecible. Aplico principios de ingeniería y Data Science a tus campañas de Meta Ads para escalar la facturación con precisión matemática.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-center"
            >
              Empezar Auditoría Gratis
            </a>
            <a 
              href="#procedure" 
              onClick={(e) => scrollToSection(e, '#procedure')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-white border border-white/10 hover:bg-white/5 font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <PlayCircle className="w-4 h-4" />
              Ver Procedimiento
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Setup en 48h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Sin permanencia</span>
            </div>
          </div>
        </div>

        {/* Right Column: Orbit Visual */}
        <div className="relative flex items-center justify-center perspective-1000 z-10 mt-8 lg:mt-0">
          
          {/* Adjusted scale to 0.55 on mobile to prevent cutoff and overcrowding */}
          <div className="transform scale-[0.55] md:scale-100 relative flex items-center justify-center w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
            {/* Radial Gradient Background for Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-violet-900/20 via-transparent to-transparent opacity-50 blur-3xl"></div>

            {/* Central Hub */}
            <div className="relative z-20 w-24 h-24 bg-[#0A0A0F] border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.3)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                <BarChart2 className="w-7 h-7" />
              </div>
              {/* Radar Sweep Effect */}
              <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-transparent via-violet-500/5 to-transparent rounded-full animate-spin [mask-image:conic-gradient(from_0deg,transparent_0_340deg,black_360deg)] opacity-30 pointer-events-none"></div>
            </div>

            {/* Orbit Ring 1 (Inner) - Fast */}
            <div className="absolute border border-white/5 rounded-full w-[280px] h-[280px] animate-orbit">
              {/* Facebook */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#0A0A0F] border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)] animate-counter-spin">
                <Facebook className="w-4 h-4" />
              </div>
              {/* Instagram */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#0A0A0F] border border-pink-500/30 rounded-full flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-counter-spin">
                <Instagram className="w-4 h-4" />
              </div>
              {/* Data/Database */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-9 h-9 bg-[#0A0A0F] border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-counter-spin">
                <Database className="w-4 h-4" />
              </div>
            </div>

            {/* Orbit Ring 2 (Middle) - Medium */}
            <div className="absolute border border-white/5 rounded-full w-[440px] h-[440px] animate-orbit-reverse opacity-80">
              {/* Code/Dev */}
              <div className="absolute top-[15%] right-[15%] w-10 h-10 bg-[#0A0A0F] border border-white/10 rounded-full flex items-center justify-center text-slate-300 animate-counter-spin-reverse hover:scale-110 transition-transform cursor-crosshair hover:border-violet-400 hover:text-violet-400">
                <Code className="w-5 h-5" />
              </div>
              {/* Shopping/Ecom */}
              <div className="absolute bottom-[15%] left-[15%] w-10 h-10 bg-[#0A0A0F] border border-white/10 rounded-full flex items-center justify-center text-cyan-400 animate-counter-spin-reverse">
                <ShoppingBag className="w-5 h-5" />
              </div>
              {/* Target/Audience */}
              <div className="absolute top-[15%] left-[15%] w-10 h-10 bg-[#0A0A0F] border border-white/10 rounded-full flex items-center justify-center text-orange-400 animate-counter-spin-reverse">
                <Target className="w-5 h-5" />
              </div>
               {/* Trending/ROAS */}
               <div className="absolute bottom-[15%] right-[15%] w-10 h-10 bg-[#0A0A0F] border border-white/10 rounded-full flex items-center justify-center text-green-400 animate-counter-spin-reverse">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            {/* Orbit Ring 3 (Outer) - Slow */}
            <div className="absolute border border-white/5 rounded-full w-[600px] h-[600px] animate-orbit opacity-60">
              {/* Automation/Zap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0A0A0F] border border-white/5 rounded-full flex items-center justify-center text-yellow-400 animate-counter-spin">
                <Zap className="w-4 h-4" />
              </div>
              {/* CPU/Algo */}
              <div className="absolute bottom-1/4 right-[5%] w-8 h-8 bg-[#0A0A0F] border border-white/5 rounded-full flex items-center justify-center text-violet-400 animate-counter-spin">
                <Cpu className="w-4 h-4" />
              </div>
              {/* Layers/Structure */}
              <div className="absolute top-1/3 left-[2%] w-8 h-8 bg-[#0A0A0F] border border-white/5 rounded-full flex items-center justify-center text-indigo-400 animate-counter-spin">
                <Layers className="w-4 h-4" />
              </div>
               {/* Globe/Scale */}
               <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-8 h-8 bg-[#0A0A0F] border border-white/5 rounded-full flex items-center justify-center text-blue-400 animate-counter-spin">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            
            {/* Notification Pop-up */}
            <div className="absolute bottom-10 right-0 md:right-10 glass-card p-4 rounded-xl items-center gap-3 animate-float w-64 border-l-4 border-l-green-500 z-30 shadow-2xl scale-90 md:scale-100 origin-bottom-right hidden lg:flex">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-2 h-2 text-black" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Sofía M.</p>
                <p className="text-[10px] text-slate-400">hace 21 seg</p>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                  <span>+ 152,40 €</span>
                  <span className="text-green-600">VENTA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;