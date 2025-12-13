import React from 'react';
import { Shield, FileText, ArrowLeft } from 'lucide-react';

interface LegalProps {
  type: 'legal' | 'privacy';
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ type, onBack }) => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-[#020205] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              {type === 'legal' ? <FileText className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-white">
              {type === 'legal' ? 'Aviso Legal' : 'Política de Privacidad'}
            </h1>
          </div>

          <div className="prose prose-invert prose-slate max-w-none text-slate-400 font-light">
            {type === 'legal' ? (
              <>
                <h3 className="text-white font-medium text-lg mt-6 mb-3">1. Datos Identificativos</h3>
                <p>
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos:
                </p>
                <p className="pl-4 border-l-2 border-white/10">
                  <strong>Titular:</strong> Ot Puig Sanchez<br/>
                  <strong>CIF/NIF:</strong> 39542643P<br/>
                  <strong>Domicilio:</strong> Carrer Vilar 1, Castellbell i el Vilar 08296<br/>
                  <strong>Email:</strong> ot.puigsa@gmail.com
                </p>

                <h3 className="text-white font-medium text-lg mt-8 mb-3">2. Propiedad Intelectual</h3>
                <p>
                  El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor del titular del sitio web.
                </p>

                <h3 className="text-white font-medium text-lg mt-8 mb-3">3. Exclusión de Garantías y Responsabilidad</h3>
                <p>
                  El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-white font-medium text-lg mt-6 mb-3">1. Responsable del Tratamiento</h3>
                <p>
                  Sus datos personales serán tratados por Ot Puig Sanchez, con domicilio en Carrer Vilar 1, Castellbell i el Vilar 08296.
                </p>

                <h3 className="text-white font-medium text-lg mt-8 mb-3">2. Finalidad</h3>
                <p>
                  En Engineered Growth tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten y facilitar a los interesados ofertas de productos y servicios de su interés.
                </p>

                <h3 className="text-white font-medium text-lg mt-8 mb-3">3. Legitimación</h3>
                <p>
                  La base legal para el tratamiento de sus datos es el consentimiento. Para contactar o realizar comentarios en esta web se requiere el consentimiento con esta política de privacidad.
                </p>

                <h3 className="text-white font-medium text-lg mt-8 mb-3">4. Derechos</h3>
                <p>
                  Cualquier persona tiene derecho a obtener confirmación sobre si en Engineered Growth estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;