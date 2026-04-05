/**
 * CONTENT = Verdade única de textos
 *
 * Por que centralizar aqui?
 * 📝 Um único lugar para editar textos
 * 🌍 Suporte multi-idioma naturalmente
 * ♻️ Designer reutiliza strings = sem copiar-colar errado
 * 🎨 Componentes NÃO sabem idioma, apenas recebem dados
 *
 * ESTRUTURA:
 * landingContent.pt = tudo em português
 * landingContent.en = tudo em inglês
 *
 * FLUXO: Component → useLanguage() → landingContent[lang] → Renderiza
 */

import {
  Bilingual,
  Benefit,
  Credential,
  CTAButton,
} from "@/shared/types/common";

// Tipagem: Garante que PT e EN têm EXATAMENTE a mesma estrutura
interface LandingContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    badge: string;
    images: {
      main: string;
      alt: string;
    };
  };
  whatfor: {
    title: string;
    subtitle: string;
    benefits: Benefit[];
  };
  whois: {
    title: string;
    coreMessage: string;
    credentials: Credential[];
    image: {
      src: string;
      alt: string;
    };
    approach: string; // Como Carol trabalha
  };
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
    footer: string;
  };
}

export const landingContent: Bilingual<LandingContent> = {
  pt: {
    hero: {
      // Headlines de conversão: falam do BENEFÍCIO, não de Carol
      headline: "Descubra as respostas que você procura",
      subheadline:
        "Autoconhecimento profundo através do Tarot e Terapia Holística com 8 anos de experiência",
      cta: "Iniciar conversa no WhatsApp",
      badge: "✨ 8 anos ajudando pessoas a encontrar clareza",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Taróloga e Terapeuta Holística",
      },
    },

    whatfor: {
      title: "Para quem procura...",
      subtitle: "Se você se identifica com qualquer um desses desafios:",
      benefits: [
        {
          icon: "✨",
          title: "Clareza nas decisões",
          description:
            "Entender o que seu coração realmente quer em relacionamentos, carreira e propósito de vida",
        },
        {
          icon: "🔄",
          title: "Transformação pessoal",
          description:
            "Trabalhar os bloqueios emocionais que te travam e desbloqueiar seu potencial",
        },
        {
          icon: "💫",
          title: "Reconexão com a essência",
          description:
            "Lembrar quem você é de verdade, além das expectativas de outros",
        },
        {
          icon: "🌱",
          title: "Orientação espiritual",
          description:
            "Compreender o propósito e sincronicidades da sua vida agora",
        },
      ],
    },

    whois: {
      title: "Quem é Carol Calil",
      //核心 message: não é sobre Carol, é sobre o QUE ela oferece
      coreMessage:
        "Não vendo previsão pronta. Vendo CLAREZA — te ajudo a ver o que você già sabe mas não consegue enxergar.",
      credentials: [
        {
          icon: "🎓",
          text: "Graduada em Filosofia (UNIFESP) — entendo a profundidade do ser humano",
        },
        {
          icon: "🔮",
          text: "8 anos de experiência com Tarot — método próprio testado e consolidado",
        },
        {
          icon: "❤️",
          text: "Especialista em relacionamentos e identidade LGBTIQA+ — acolho todas as pessoas",
        },
        {
          icon: "⚡",
          text: "Reikiana e Auriculoterapeuta — trabalho corpo e energia integradamente",
        },
        {
          icon: "🌍",
          text: "Fluente em PT e ES — mãe, viajante, imersa em culturas e misticismo",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "Aplico Tarot como ferramenta de reflexão profunda, meditação guiada, respiração consciente e eneagrama para mapear seu comportamento. Cada sessão é personalizada ao que você precisa neste momento.",
    },

    cta: {
      primary: {
        label: "Agendar sessão pelo WhatsApp",
        href: "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0",
        variant: "primary",
        target: "_blank",
      },
      secondary: {
        label: "Conhecer método no Instagram",
        href: "https://www.instagram.com/tarologacalil/",
        variant: "secondary",
        target: "_blank",
      },
      footer:
        "Ou entre em contato direto por WhatsApp para conversar sobre sua situação",
    },
  },

  en: {
    hero: {
      headline: "Discover the answers you're searching for",
      subheadline:
        "Deep self-knowledge through Tarot and Holistic Therapy with 8 years of experience",
      cta: "Start conversation on WhatsApp",
      badge: "✨ 8 years helping people find clarity",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Tarot Reader and Holistic Therapist",
      },
    },

    whatfor: {
      title: "For those seeking...",
      subtitle: "If you identify with any of these challenges:",
      benefits: [
        {
          icon: "✨",
          title: "Clarity in decisions",
          description:
            "Understand what your heart truly wants in relationships, career and life purpose",
        },
        {
          icon: "🔄",
          title: "Personal transformation",
          description:
            "Work through emotional blocks that hold you back and unlock your potential",
        },
        {
          icon: "💫",
          title: "Reconnection with essence",
          description:
            "Remember who you truly are, beyond others' expectations",
        },
        {
          icon: "🌱",
          title: "Spiritual guidance",
          description:
            "Understand the purpose and synchronicities in your life right now",
        },
      ],
    },

    whois: {
      title: "Who is Carol Calil",
      coreMessage:
        "I don't sell ready-made predictions. I offer CLARITY — I help you see what you already know but can't perceive.",
      credentials: [
        {
          icon: "🎓",
          text: "Bachelor's degree in Philosophy (UNIFESP) — I understand human depth",
        },
        {
          icon: "🔮",
          text: "8 years of Tarot experience — tested and consolidated personal method",
        },
        {
          icon: "❤️",
          text: "Specialist in relationships and LGBTIQA+ identity — I welcome all people",
        },
        {
          icon: "⚡",
          text: "Reiki practitioner and Auriculotherapist — I work with body and energy",
        },
        {
          icon: "🌍",
          text: "Fluent in Portuguese and Spanish — mother, traveler, immersed in cultures",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "I use Tarot as a tool for deep reflection, guided meditation, conscious breathing and enneagram to map your behavior. Each session is personalized to what you need right now.",
    },

    cta: {
      primary: {
        label: "Book session on WhatsApp",
        href: "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0",
        variant: "primary",
        target: "_blank",
      },
      secondary: {
        label: "Learn method on Instagram",
        href: "https://www.instagram.com/tarologacalil/",
        variant: "secondary",
        target: "_blank",
      },
      footer: "Or contact directly via WhatsApp to discuss your situation",
    },
  },
};

/**
 * DIFERENÇAS DO ANTIGO CONTENT vs NOVO:
 *
 * ❌ ANTES: "Eu sou uma mulher fantástica..." (foco em Carol)
 * ✅ AGORA: "Descubra as respostas" (foco no cliente)
 *
 * ❌ ANTES: Listava todos os títulos (formação, reiki, yoga...)
 * ✅ AGORA: Benefício de cada credencial ("Por que importa pra você")
 *
 * ❌ ANTES: Textos longos e poéticos
 * ✅ AGORA: Textos concisos, focados em transformação
 *
 * ❌ ANTES: CTAs espalhadas em vários textos
 * ✅ AGORA: CTAs organizadas e claras
 */
