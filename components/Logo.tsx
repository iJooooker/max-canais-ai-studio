import React, { useState } from 'react';
import { LOGO_URL } from '../constants';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  const [imageError, setImageError] = useState(false);

  // Tenta carregar a imagem externa primeiro.
  // Se falhar (erro de link), exibe o SVG recriado abaixo.
  if (LOGO_URL && !imageError) {
      return (
          <img 
              src={LOGO_URL}
              alt="MAX CANAIS"
              className={`object-contain ${variant === 'footer' ? 'h-24' : 'h-full'} ${className}`}
              onError={(e) => {
                  setImageError(true);
              }}
          />
      );
  }

  // Fallback: Réplica Vetorizada (SVG) idêntica à imagem original
  return (
    <div className={`flex items-center gap-2 select-none ${className} ${variant === 'footer' ? 'flex-col' : 'flex-row'}`}>
      {/* Icon Graphic */}
      <div className={`${variant === 'footer' ? 'w-24 h-20' : 'w-16 h-12'} flex items-center justify-center relative`}>
        <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible drop-shadow-md">
          <defs>
            {/* Gradiente Prateado para o Anel */}
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="40%" stopColor="#9ca3af" />
              <stop offset="60%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
            
            {/* Gradiente Vermelho 3D para o Play */}
            <linearGradient id="red3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>

            {/* Brilho do Play */}
            <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Anel Orbital (Parte de trás) */}
          <path 
            d="M 10 55 Q 50 85 90 55" 
            fill="none" 
            stroke="url(#silverGradient)" 
            strokeWidth="5" 
            strokeLinecap="round"
            className="drop-shadow-sm"
          />
          {/* Brilho no anel */}
           <path 
            d="M 12 56 Q 50 82 88 56" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            opacity="0.6"
          />

          {/* Ondas de Sinal (Wi-Fi) - Topo Direito */}
          <path d="M 65 15 Q 80 15 90 25" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 72 8 Q 92 8 102 18" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />

          {/* Triângulo Play Principal (Corpo Vermelho) */}
          <path 
            d="M 35 20 L 75 45 L 35 70 Z" 
            fill="url(#red3D)" 
            stroke="#7f1d1d" 
            strokeWidth="0.5"
            strokeLinejoin="round"
            className="drop-shadow-lg"
          />
          
          {/* Triângulo Interno (Efeito de furo/profundidade) */}
          <path 
            d="M 45 35 L 60 45 L 45 55 Z" 
            fill="#7f1d1d" 
            opacity="0.3"
          />
          
          {/* Reflexo Glossy no topo do triângulo */}
          <path 
             d="M 35 20 L 60 35 L 35 45 Z" 
             fill="url(#gloss)"
          />

          {/* Anel Orbital (Parte da frente - sutil para dar efeito 3D de passar por baixo) */}
           <path 
            d="M 10 55 Q 20 60 30 62" 
            fill="none" 
            stroke="url(#silverGradient)" 
            strokeWidth="5" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Texto do Logo */}
      <div className={`flex flex-col justify-center leading-none ${variant === 'footer' ? 'items-center mt-2' : ''}`}>
        <div className="flex items-center tracking-tight">
          <span 
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-500 drop-shadow-sm"
            style={{ fontSize: variant === 'footer' ? '1.8rem' : '1.5rem' }}
          >
            MAX
          </span>
          <span 
            className="font-extrabold text-brand-red ml-1 drop-shadow-md"
            style={{ fontSize: variant === 'footer' ? '1.8rem' : '1.5rem' }}
          >
            CANAIS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;