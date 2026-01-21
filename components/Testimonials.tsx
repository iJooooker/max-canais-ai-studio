import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mais de <span className="text-brand-red">200 clientes</span> satisfeitos
          </h2>
          <p className="text-gray-600">Veja o que estão falando sobre a Max Canais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => {
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';
            return (
              <div key={index} className={`bg-gray-50 p-8 rounded-2xl relative hover:bg-white hover:shadow-lg transition-all duration-300 fade-up ${delayClass}`}>
                <Quote className="w-10 h-10 text-brand-red/10 absolute top-6 right-6" />
                <p className="text-gray-700 italic mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
                      {testimonial.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                     <p className="text-sm text-gray-500">{testimonial.role}</p>
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

export default Testimonials;