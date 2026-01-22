import React from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section id="para-voce" className="py-24 bg-brand-gray text-white relative overflow-hidden scroll-mt-20">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-red/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 fade-up">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 group">
               {/* Imagem fixa de família feliz assistindo TV */}
               <img 
                 src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" 
                 alt="Família feliz assistindo TV na sala" 
                 className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-8">
                 <p className="text-white font-bold text-xl drop-shadow-lg">Entretenimento sem limites</p>
               </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 fade-up delay-100">
              O <span className="text-brand-red">MAX CANAIS</span> é para você?
            </h2>
            
            <div className="space-y-6">
              {TARGET_AUDIENCE.map((item, index) => {
                const Icon = item.icon;
                const delayClass = index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400';
                
                return (
                  <div key={index} className={`flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors fade-up ${delayClass}`}>
                    <div className="bg-brand-red rounded-full p-2 mt-1 shadow-lg shadow-red-900/50">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl font-medium text-gray-100">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;