import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a <span className="text-brand-red">MAX CANAIS</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra porque somos a escolha número 1 de quem quer qualidade e economia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            // Calculate delay based on index
            const delayClass = index === 0 ? '' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : 'delay-500';
            
            return (
              <div 
                key={index} 
                className={`group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-up ${delayClass}`}
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;