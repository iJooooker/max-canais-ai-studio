import React, { useState, useEffect } from 'react';
import { CheckCircle, Tv, Zap, Star } from 'lucide-react';

const NAMES_MASC = ['José', 'João', 'Antônio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Mateus', 'André', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];
const NAMES_FEM = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];

const ACTIONS = [
  { text: "ativou o teste grátis de 3h", icon: Zap },
  { text: "assinou o Plano Mensal", icon: CheckCircle },
  { text: "assinou o Plano Trimestral", icon: Star },
  { text: "assinou o Plano Anual", icon: Star },
  { text: "está assistindo Futebol ao vivo", icon: Tv },
  { text: "acabou de renovar a assinatura", icon: CheckCircle },
];

const SocialProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: '', action: ACTIONS[0] });

  const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

  const generateNotification = () => {
    const isMasc = Math.random() > 0.3; // 70% chance masc, just based on list size provided
    const name = isMasc ? getRandomItem(NAMES_MASC) : getRandomItem(NAMES_FEM);
    const action = getRandomItem(ACTIONS);
    
    setData({ name, action });
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      generateNotification();
      
      // Recursive loop with random intervals
      const loop = () => {
        const minTime = 8000; // 8 seconds
        const maxTime = 20000; // 20 seconds
        const randomInterval = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
        
        setTimeout(() => {
          generateNotification();
          loop();
        }, randomInterval);
      };
      
      loop();
    }, 4000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const Icon = data.action.icon;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-40 transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-brand-dark/95 backdrop-blur-md border-l-4 border-brand-red text-white px-4 py-3 rounded-r-lg shadow-2xl flex items-center gap-3 max-w-[300px] md:max-w-sm">
        <div className="bg-brand-red/20 p-2 rounded-full flex-shrink-0">
          <Icon className="w-5 h-5 text-brand-red" />
        </div>
        <div>
          <p className="text-sm font-medium leading-tight">
            <span className="font-bold text-white">{data.name}</span> {data.action.text}
          </p>
          <p className="text-xs text-gray-400 mt-1">Agora mesmo</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;