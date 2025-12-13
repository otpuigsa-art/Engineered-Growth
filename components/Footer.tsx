import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-600 font-mono">Engineered Growth © 2024</p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="mailto:hola@engineeredgrowth.io" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;