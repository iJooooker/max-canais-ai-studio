import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', fullWidth = false }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-red hover:bg-red-700 text-white focus:ring-red-500 shadow-red-500/30",
    secondary: "bg-white text-brand-red hover:bg-gray-100 focus:ring-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark focus:ring-white"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;