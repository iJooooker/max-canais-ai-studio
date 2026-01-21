import React from 'react';
import { Check, X, AlertCircle, ArrowRight } from 'lucide-react';

const COMPETITORS = [
  { name: 'Netflix', price: 55.90 },
  { name: 'Star+', price: 32.90 },
  { name: 'HBO Max', price: 27.90 },
  { name: 'Globoplay', price: 24.90 },
  { name: 'Premiere', price: 24.90 },
  { name: 'Disney+', price: 24.90 },
  { name: 'SKY / TV Paga', price: 24.90 },
  { name: 'Paramount+', price: 19.90 },
  { name: 'Telecine', price: 19.90 },
  { name: 'Prime Video', price: 14.90 },
];

const CostComparison: React.FC = () => {
  const totalCompetitors = COMPETITORS.reduce((acc, curr) => acc + curr.price, 0);
  const maxCanaisPrice = 35.00; // Using the Monthly plan as base
  const monthlySavings = totalCompetitors - maxCanaisPrice;
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-brand-red text-sm font-bold uppercase tracking-wider mb-4">
            <AlertCircle className="w-4 h-4" />
            Pare de rasgar dinheiro
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare e veja a <span className="text-brand-red">economia</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Por que pagar por vários serviços separados se você pode ter tudo em um só lugar?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* O Jeito Caro (Traditional) */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-200 opacity-90 hover:opacity-100 transition-opacity fade-up delay-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
            <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-red-500" /> Assinando Separado
            </h3>
            
            <ul className="space-y-3 mb-8">
              {COMPETITORS.map((service, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0">
                  <span className="text-gray-600 font-medium">{service.name}</span>
                  <span className="text-gray-900">R$ {service.price.toFixed(2).replace('.', ',')}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-100 rounded-xl p-4 mt-auto">
              <div className="flex justify-between items-end">
                <span className="text-gray-500 font-medium">Total Mensal</span>
                <span className="text-3xl font-bold text-gray-900 line-through decoration-red-500 decoration-2">
                  R$ {totalCompetitors.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-right text-xs text-red-500 font-bold mt-1">Valor alto e com conteúdo fragmentado</p>
            </div>
          </div>

          {/* Arrow Indicator (Desktop) */}
          <div className="hidden lg:flex items-center justify-center text-gray-300 fade-up delay-200">
            <ArrowRight className="w-12 h-12" />
          </div>

          {/* O Jeito Inteligente (MAX CANAIS) */}
          <div className="flex-1 bg-brand-dark text-white rounded-3xl p-8 shadow-2xl shadow-red-900/20 border border-brand-red/30 transform scale-100 lg:scale-105 z-10 fade-up delay-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-orange-500"></div>
            
            <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-slow">
              MELHOR ESCOLHA
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="w-8 h-8 text-green-400" /> MAX CANAIS
            </h3>

            <div className="space-y-6 mb-8">
               <div className="flex items-start gap-4">
                 <div className="bg-white/10 p-2 rounded-lg">
                   <Check className="w-5 h-5 text-green-400" />
                 </div>
                 <div>
                   <p className="font-bold text-lg">Todos os Streamings</p>
                   <p className="text-sm text-gray-400">Netflix, HBO, Disney, Prime e mais inclusos.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="bg-white/10 p-2 rounded-lg">
                   <Check className="w-5 h-5 text-green-400" />
                 </div>
                 <div>
                   <p className="font-bold text-lg">+1000 Canais Ao Vivo</p>
                   <p className="text-sm text-gray-400">Esportes, Notícias, Filmes e Infantis.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="bg-white/10 p-2 rounded-lg">
                   <Check className="w-5 h-5 text-green-400" />
                 </div>
                 <div>
                   <p className="font-bold text-lg">Sem Fidelidade</p>
                   <p className="text-sm text-gray-400">Liberdade total para você.</p>
                 </div>
               </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-end">
                <span className="text-gray-300 font-medium">Total Mensal</span>
                <span className="text-5xl font-extrabold text-white tracking-tight">
                  <span className="text-lg font-normal text-gray-400 mr-1">R$</span>
                  {maxCanaisPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-right text-xs text-green-400 font-bold mt-2">Acesso completo e ilimitado</p>
            </div>
          </div>
        </div>

        {/* Annual Savings Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-green-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl transform hover:scale-[1.02] transition-transform duration-300 fade-up delay-400 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
          
          <h4 className="text-xl md:text-2xl font-medium mb-2 opacity-90 relative z-10">Economia Anual Estimada</h4>
          <p className="text-4xl md:text-6xl font-extrabold tracking-tight relative z-10 drop-shadow-sm">
            R$ {annualSavings.toFixed(2).replace('.', ',')}
          </p>
          <p className="mt-4 text-sm md:text-base bg-black/20 inline-block px-4 py-1 rounded-full relative z-10">
            Dinheiro que sobra no seu bolso todo ano! 💰
          </p>
        </div>

      </div>
    </section>
  );
};

export default CostComparison;