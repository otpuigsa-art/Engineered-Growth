import React from 'react';
import { ShoppingBag, Facebook, Mail } from 'lucide-react';

const LogoCloud: React.FC = () => {
  return (
    <section className="py-8 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20">
        
        {/* Shopify */}
        <div className="flex items-center gap-2 font-semibold text-lg cursor-default group transition-colors duration-300">
          <ShoppingBag className="w-5 h-5 text-slate-500 group-hover:text-[#95BF47] transition-colors duration-300" /> 
          <span className="text-slate-500 group-hover:text-white transition-colors duration-300">Shopify</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 font-semibold text-lg cursor-default group transition-colors duration-300">
          <Facebook className="w-5 h-5 text-slate-500 group-hover:text-[#1877F2] transition-colors duration-300" /> 
          <span className="text-slate-500 group-hover:text-white transition-colors duration-300">Meta Ads</span>
        </div>

        {/* Klaviyo */}
        <div className="flex items-center gap-2 font-semibold text-lg cursor-default group transition-colors duration-300">
          <Mail className="w-5 h-5 text-slate-500 group-hover:text-[#FF6E6E] transition-colors duration-300" /> 
          <span className="text-slate-500 group-hover:text-white transition-colors duration-300">Klaviyo</span>
        </div>

      </div>
    </section>
  );
};

export default LogoCloud;