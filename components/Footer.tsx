import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-600 font-mono">Engineered Growth © 2024</p>
        
        <div className="flex gap-6 text-xs text-slate-500">
          <button 
            onClick={() => onNavigate('legal')}
            className="hover:text-white transition-colors"
          >
            Aviso Legal
          </button>
          <button 
            onClick={() => onNavigate('privacy')}
            className="hover:text-white transition-colors"
          >
            Política de Privacidad
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;