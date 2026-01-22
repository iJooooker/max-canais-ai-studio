import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Planos', href: '#planos' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-2 border-b border-white/5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Increased Height */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group z-50 cursor-pointer hover:opacity-90 transition-opacity h-16"
        >
            <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-gray-200 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide hover:underline decoration-brand-red decoration-2 underline-offset-4 cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
            <Button variant="primary" className="!py-2 !px-6 !text-sm shadow-md">
                Teste Grátis
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden text-white p-2 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
        >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            {navLinks.map((link) => (
                <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer"
                >
                    {link.name}
                </a>
            ))}
            <Button variant="primary" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Solicitar Teste Grátis
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;