import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  return (
    <img 
      src="/logo-max.png" 
      alt="MAX CANAIS"
      className={`object-contain ${variant === 'footer' ? 'h-24' : 'h-full'} ${className}`}
      loading="eager"
      onError={(e) => {
        // Se falhar, tenta o link direto do Google Drive como última opção
        e.currentTarget.src = "https://lh3.googleusercontent.com/d/18gaX3A78fhDWjBsurVrGx_UgkxDUu2lr";
      }}
    />
  );
};

export default Logo;