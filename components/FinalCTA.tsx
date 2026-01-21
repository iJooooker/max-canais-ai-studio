import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-red to-red-800 text-white text-center relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-up">
          Ative seu teste grátis agora mesmo!
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto fade-up delay-100">
          Não perca mais tempo pagando caro. Venha para a Max Canais e tenha o melhor conteúdo.
        </p>
        <div className="fade-up delay-200">
          <Button variant="secondary" className="px-12 py-4 text-xl shadow-xl hover:shadow-2xl hover:scale-105">
            Quero experimentar grátis
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/70 fade-up delay-300">
          Acesso liberado em poucos minutos via WhatsApp
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;