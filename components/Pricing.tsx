import React from 'react';
import { PRICING_PLANS } from '../constants';
import Button from './Button';
import { Check, ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white scroll-mt-20" id="planos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-lg text-gray-600">
            Preços acessíveis e sem surpresas no final do mês.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-16">
          {PRICING_PLANS.map((plan, index) => {
             const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';
             return (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 fade-up ${delayClass}
                  ${plan.highlight 
                    ? 'border-brand-red shadow-2xl scale-105 z-10' 
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Mais Popular
                  </div>
                )}
                {plan.savings && (
                   <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                     {plan.savings}
                   </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-sm text-gray-500 font-medium">R$</span>
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.highlight ? 'primary' : 'outline'} 
                  fullWidth 
                  className={plan.highlight ? 'shadow-red-500/40' : '!text-gray-900 !border-gray-300 hover:!border-brand-red hover:!text-brand-red'}
                >
                  Assinar Agora
                </Button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Teste grátis de 3h incluso
                </p>
              </div>
            );
          })}
        </div>

        {/* Guarantee Badge */}
        <div className="max-w-3xl mx-auto fade-up delay-300">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="bg-white p-4 rounded-full shadow-sm">
                <ShieldCheck className="w-10 h-10 text-green-600" />
             </div>
             <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Garantia de 7 Dias</h4>
                <p className="text-gray-600">
                  Assine sem medo! Se você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro. Sem letras miúdas.
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;