import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Graphic */}
      <div className="relative w-12 h-10 flex items-center justify-center">
        <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-md overflow-visible">
          <defs>
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#4B5563" />
            </linearGradient>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#E50914" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Orbit/Ring (Silver Swish) */}
          <path 
            d="M 10 70 Q 60 110 110 70" 
            fill="none" 
            stroke="url(#metalGradient)" 
            strokeWidth="4" 
            strokeLinecap="round"
            className="drop-shadow-sm"
          />
           <path 
            d="M 15 72 Q 60 105 105 72" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            opacity="0.5"
            strokeLinecap="round"
          />

          {/* Signal Waves (Top Right) */}
          <path d="M 75 15 Q 95 15 105 30" stroke="#E50914" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 85 5 Q 115 5 125 25" stroke="#E50914" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />

          {/* Play Button (Triangle) */}
          <path 
            d="M 30 20 L 90 55 L 30 90 Z" 
            fill="url(#redGradient)" 
            stroke="#991b1b" 
            strokeWidth="1"
            className="drop-shadow-lg"
          />
          
          {/* Internal Play Triangle (Hollow/Detail effect) */}
          <path 
            d="M 45 40 L 70 55 L 45 70 Z" 
            fill="white" 
            opacity="0.9"
            className="drop-shadow-sm"
          />
        </svg>
      </div>

      {/* Text Logo */}
      <div className={`flex flex-col justify-center leading-none ${variant === 'footer' ? 'items-center md:items-start' : ''}`}>
        <div className="flex items-center tracking-tighter">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 drop-shadow-sm filter">
            MAX
          </span>
          <span className="text-2xl font-extrabold text-brand-red ml-1 drop-shadow-md">
            CANAIS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;