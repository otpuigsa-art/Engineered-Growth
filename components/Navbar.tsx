import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Always navigate to home first logic
    onNavigate('home');

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Small timeout to allow the home view to render if we were on legal page
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Increased to top-10 for better notch/island clearance on mobile */}
      <div className="fixed top-10 sm:top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-2 py-2 flex items-center justify-between gap-1 shadow-2xl shadow-violet-900/10 backdrop-blur-md max-w-full sm:max-w-fit relative z-50">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'top')}
              className="px-4 py-2 rounded-full text-xs font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              Engineered<span className="text-slate-500">Growth</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-0.5">
            <div className="h-4 w-px bg-white/10 mx-1"></div>
            <a 
              href="#procedure" 
              onClick={(e) => scrollToSection(e, '#procedure')}
              className="px-3 py-2 rounded-full text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Método
            </a>
            <a 
              href="#philosophy" 
              onClick={(e) => scrollToSection(e, '#philosophy')}
              className="px-3 py-2 rounded-full text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Filosofía
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              className="px-3 py-2 rounded-full text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Servicios
            </a>
            <a 
              href="#cases" 
              onClick={(e) => scrollToSection(e, '#cases')}
              className="px-3 py-2 rounded-full text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Casos
            </a>
          </div>

          <div className="flex items-center gap-2">
             {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 rounded-full hover:bg-white/5 text-slate-300 transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:block ml-1 bg-white text-black hover:bg-slate-200 px-5 py-2 rounded-full text-xs font-semibold transition-all"
            >
              Auditoría
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#020205]/95 backdrop-blur-xl pt-28 px-6 transition-all duration-300 sm:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-4 text-center">
          <a 
            href="#procedure" 
            onClick={(e) => scrollToSection(e, '#procedure')}
            className="text-lg font-medium text-slate-300 py-4 border-b border-white/5 hover:text-white"
          >
            Método
          </a>
          <a 
            href="#philosophy" 
            onClick={(e) => scrollToSection(e, '#philosophy')}
            className="text-lg font-medium text-slate-300 py-4 border-b border-white/5 hover:text-white"
          >
            Filosofía
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, '#services')}
            className="text-lg font-medium text-slate-300 py-4 border-b border-white/5 hover:text-white"
          >
            Servicios
          </a>
          <a 
            href="#cases" 
            onClick={(e) => scrollToSection(e, '#cases')}
            className="text-lg font-medium text-slate-300 py-4 border-b border-white/5 hover:text-white"
          >
            Casos de Éxito
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="mt-4 bg-white text-black font-semibold py-4 rounded-xl"
          >
            Solicitar Auditoría
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;