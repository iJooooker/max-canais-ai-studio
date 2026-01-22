import { Tv, Film, Smartphone, Wifi, CreditCard, MessageCircle, ShieldCheck, Trophy, Monitor, Clock, CheckCircle } from 'lucide-react';

// Links convertidos para visualização direta
// Se a imagem não carregar, o sistema usará automaticamente um logo desenhado como fallback.
export const LOGO_URL = "https://drive.google.com/uc?export=view&id=18gaX3A78fhDWjBsurVrGx_UgkxDUu2lr";
export const FAVICON_URL = "https://drive.google.com/uc?export=view&id=1QVDpASKZxOrdqO3ouGnrWgZXWswUGBT0";

// Configuração do WhatsApp
export const WHATSAPP_NUMBER = "5519999505223";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
// Link padrão (genérico)
export const WHATSAPP_LINK = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá, gostaria de saber sobre os canais")}`;

export const PHONE_NUMBER = "(19) 99950-5223";

export const BENEFITS = [
  {
    icon: Tv,
    title: "+1000 canais ao vivo",
    description: "Acesso a uma grade completa de canais abertos e fechados em alta definição."
  },
  {
    icon: Film,
    title: "Filmes e Séries",
    description: "Biblioteca atualizada constantemente com os últimos lançamentos do cinema e streamings."
  },
  {
    icon: Trophy,
    title: "Esportes e Lutas",
    description: "Assista ao seu time do coração, campeonatos internacionais e lutas ao vivo."
  },
  {
    icon: Smartphone,
    title: "Multi-dispositivos",
    description: "Compatível com Smart TV, Celular, TV Box, Firestick, Computador e Tablet."
  },
  {
    icon: ShieldCheck,
    title: "Sem fidelidade",
    description: "Cancele quando quiser, sem multas, sem contratos abusivos."
  },
  {
    icon: MessageCircle,
    title: "Suporte Rápido",
    description: "Atendimento ágil via WhatsApp para te ajudar sempre que precisar."
  }
];

export const TARGET_AUDIENCE = [
  {
    icon: CreditCard,
    text: "Para quem cansou de pagar faturas caras de TV a cabo."
  },
  {
    icon: Trophy,
    text: "Para apaixonados por futebol, lutas e esportes em geral."
  },
  {
    icon: Monitor,
    text: "Para quem busca praticidade e quer tudo em um só lugar."
  }
];

export const PRICING_PLANS = [
  {
    title: "Mensal",
    price: "35",
    period: "/mês",
    features: ["Acesso Imediato", "Todos os Canais", "Filmes e Séries", "Qualidade HD/FHD/4K", "Suporte Dedicado"],
    highlight: false,
    savings: null
  },
  {
    title: "Trimestral",
    price: "90",
    period: "/3 meses",
    features: ["Acesso Imediato", "Todos os Canais", "Filmes e Séries", "Qualidade HD/FHD/4K", "Suporte Prioritário"],
    highlight: true,
    savings: "Economize R$15"
  },
  {
    title: "Anual",
    price: "300",
    period: "/ano",
    features: ["Acesso Imediato", "Todos os Canais", "Filmes e Séries", "Qualidade HD/FHD/4K", "Suporte VIP"],
    highlight: false,
    savings: "Economize R$120"
  }
];

export const TESTIMONIALS = [
  {
    name: "João L.",
    role: "Cliente há 6 meses",
    text: "Assisto tudo com qualidade, sem travar. Recomendo demais, o atendimento é nota 10!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Mariana S.",
    role: "Cliente há 1 ano",
    text: "Cancelei minha TV a cabo e não me arrependo. Economia gigante e tenho muito mais opções.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Ricardo M.",
    role: "Cliente recente",
    text: "O teste grátis me convenceu. A imagem é perfeita e roda liso no meu Firestick.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
  }
];