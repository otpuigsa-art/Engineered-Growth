import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  // CONFIGURACIÓN: Reemplaza esto con tu ID de Formspree cuando crees la cuenta
  const FORMSPREE_ID = "xgvgrzrr"; 

  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    budget: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData(prev => ({ ...prev, budget: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', website: '', email: '', budget: '' }); // Limpiar formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none blur-[100px]"></div>

      <div className="max-w-lg mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-violet-500/30">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Auditoría de Viabilidad</h2>
          <p className="text-slate-400 text-sm">Analicemos si tu proyecto es apto para ingeniería de crecimiento. Sin compromiso.</p>
        </div>

        {status === 'success' ? (
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 text-center animate-float">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">¡Solicitud Enviada!</h3>
            <p className="text-slate-400 text-sm mb-6">
              He recibido tus datos correctamente. Analizaré la viabilidad de tu proyecto y te responderé en menos de 24 horas laborables.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl backdrop-blur-xl"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-2">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none placeholder:text-slate-700" 
                  placeholder="Tu nombre" 
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-2">Web</label>
                <input 
                  type="text" 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none placeholder:text-slate-700" 
                  placeholder="tutienda.com" 
                  disabled={status === 'submitting'}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none placeholder:text-slate-700" 
                placeholder="nombre@empresa.com" 
                required
                disabled={status === 'submitting'}
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-2">Inversión Mensual</label>
              <div className="grid grid-cols-3 gap-2">
                {["< 1k", "1k - 5k", "> 5k"].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="budget" 
                      value={option} 
                      checked={formData.budget === option}
                      onChange={handleChange}
                      className="peer sr-only" 
                      disabled={status === 'submitting'}
                      required
                    />
                    <div className="text-xs text-center p-2 rounded-lg border border-white/10 text-slate-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-500 peer-disabled:opacity-50">
                      {option.replace('<', '< ').replace('>', '> ')}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {status === 'error' && (
              <div className="text-xs text-red-400 bg-red-500/10 p-2 rounded border border-red-500/20 text-center">
                Hubo un error al enviar. Por favor inténtalo de nuevo.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-white text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;