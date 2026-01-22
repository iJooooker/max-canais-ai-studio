import React from 'react';
import Button from './Button';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-brand-dark min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
            IMPORTANTE: A imagem deve estar localizada em public/banner-hero.png 
            O caminho começa com / para indicar a raiz pública.
        */}
        <img 
          src="/banner-hero.png?v=2" 
          alt="Família assistindo TV na sala" 
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        {/* Richer gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/30 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center md:text-left pt-20 md:pt-0">
        <div className="max-w-3xl">
          <div className="inline-block bg-brand-red/20 border border-brand-red/50 rounded-full px-4 py-1 mb-6 backdrop-blur-sm fade-up visible">
            <span className="text-brand-red font-bold text-sm tracking-wide uppercase">⚡ Oferta por tempo limitado</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl fade-up delay-100 visible">
            Chega de pagar caro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">para assistir!</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed fade-up delay-200 visible">
            Tenha acesso a canais ao vivo, filmes e séries direto do seu celular, Smart TV, Firestick, computador ou TV Box.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start fade-up delay-300 visible">
            <Button variant="primary" className="text-xl px-10 py-4">
              <PlayCircle className="w-6 h-6 mr-2" />
              Quero meu teste grátis
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Saiba mais
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-gray-400 fade-up delay-400 visible">
            * Teste grátis de 3 horas sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;