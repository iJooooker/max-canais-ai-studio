import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
           <h2 className="text-2xl font-bold text-white mb-2">MAX CANAIS</h2>
           <p className="text-sm">O melhor do entretenimento no seu dispositivo.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
             <MessageCircle className="w-5 h-5" />
             <span>Suporte: {PHONE_NUMBER}</span>
           </a>
        </div>

        <div className="text-sm border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} MAX CANAIS. Todos os direitos reservados.</p>
          <p className="mt-2">Sem fidelidade. Cancele quando quiser.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;