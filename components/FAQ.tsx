import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Como funciona o teste grátis?",
    answer: "É muito simples! Basta clicar em qualquer botão de 'Teste Grátis' aqui no site. Você será redirecionado para o nosso WhatsApp, onde nossa equipe liberará um acesso imediato por 3 horas para você conhecer nossa qualidade, sem compromisso e sem precisar cadastrar cartão de crédito."
  },
  {
    question: "Em quais dispositivos posso assistir?",
    answer: "O MAX CANAIS é compatível com praticamente todos os dispositivos: Smart TVs (Samsung, LG, Android TV), TV Box, Firestick, Chromecast, Celulares (Android e iPhone), Tablets e Computadores via navegador ou aplicativo."
  },
  {
    question: "Preciso de antenas ou instalação técnica?",
    answer: "Não! Todo o nosso sistema funciona 100% via internet. Você não precisa de antenas, cabos coaxiais ou visitas de técnicos. Basta ter o aplicativo instalado e uma conexão com a internet."
  },
  {
    question: "Qual a velocidade de internet recomendada?",
    answer: "Para uma experiência estável, recomendamos no mínimo 10 Mega para canais em qualidade SD/HD. Para conteúdos em Full HD e 4K, sugerimos uma conexão acima de 30 Mega."
  },
  {
    question: "Existe fidelidade ou multa de cancelamento?",
    answer: "Nenhuma! Prezamos pela sua liberdade. Nossos planos são pré-pagos (Mensal, Trimestral ou Anual). Se decidir não continuar, basta não renovar a assinatura. Sem multas, sem contratos abusivos e sem letras miúdas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 fade-up">
          <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-brand-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o melhor serviço de streaming do Brasil.
          </p>
        </div>

        <div className="space-y-4 fade-up delay-200">
          {FAQ_ITEMS.map((item, index) => {
             const isOpen = openIndex === index;
             
             return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-red/30 shadow-lg' : 'border-gray-200 hover:border-brand-red/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-red' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-red" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;