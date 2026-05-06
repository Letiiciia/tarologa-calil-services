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
    supportingText: string;
    cta: string;
    secondaryCta: {
      label: string;
      href: string;
    };
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
    closingLine: string;
  };
  method: {
    title: string;
    intro: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  transformation: {
    title: string;
    text: string;
    bullets: string[];
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
    headline: string;
    subtext: string;
    primary: CTAButton;
    secondary?: CTAButton;
  };
}

export const landingContent: Bilingual<LandingContent> = {
  pt: {
    hero: {
      // Headlines de conversão: falam do BENEFÍCIO, não de Carol
      headline: "Você não está confusa.\nVocê só está ignorando o que já sabe.",
      subheadline:
        "Reconecte-se com sua clareza emocional e com o seu poder feminino através da Jornada de Consciência com Contoterapia Oracular.",
      supportingText:
        "Uma experiência com Tarot, escrita terapêutica e leitura simbólica para te ajudar a enxergar o que você já sente — com clareza.",
      cta: "Quero começar minha jornada",
      secondaryCta: {
        label: "Conhecer o método",
        href: "#metodo",
      },
      badge: "✨ 8 anos guiando mulheres a encontrarem clareza emocional",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Taróloga e Terapeuta Holística",
      },
    },

    whatfor: {
      title: "Se você se reconhece nisso...",
      subtitle: "Veja se alguma dessas frases ressoa com você.",
      benefits: [
        {
          icon: "🧠",
          title: "Você já sabe o que precisa fazer, mas não consegue agir",
          description:
            "A resposta existe dentro de você, mas falta estrutura emocional para sustentar a decisão.",
        },
        {
          icon: "🌀",
          title: "Você se sente drenada em relações que não evoluem",
          description:
            "Relações confusas consomem sua energia, sua autoestima e sua presença.",
        },
        {
          icon: "🌙",
          title: "Você se perdeu tentando ser o que esperam de você",
          description:
            "Você se adaptou tanto que esqueceu do seu próprio desejo.",
        },
        {
          icon: "✨",
          title: "Você sente que vive sem direção",
          description:
            "Mesmo fazendo tudo certo, ainda parece que algo dentro de você está desalinhado.",
        },
      ],
      closingLine: "Se isso te atravessou, essa jornada é para você.",
    },
    method: {
      title: "Método R.E.S.E.T. Emocional",
      intro:
        "Um processo estruturado para sair da confusão emocional e reconstruir sua forma de se relacionar.",
      steps: [
        {
          title: "Revelação",
          description: "Leitura simbólica + diagnóstico emocional",
        },
        {
          title: "Exposição de padrões",
          description: "Identificação de comportamentos repetitivos e ciclos emocionais",
        },
        {
          title: "Significação",
          description: "Escrita terapêutica guiada para ressignificar experiências",
        },
        {
          title: "Estratégia",
          description: "Ação prática e decisões com clareza",
        },
        {
          title: "Transformação",
          description: "Construção de uma nova identidade emocional e relacional",
        },
      ],
    },
    transformation: {
      title: "Não é sobre prever o futuro.",
      text:
        "É sobre entender seus padrões, organizar suas emoções e tomar decisões com consciência.",
      bullets: [
        "Clareza emocional",
        "Consciência dos seus padrões",
        "Direção real para agir",
        "Reconexão com seu desejo e identidade",
      ],
    },

    whois: {
      title: "Especialista em desbloqueio emocional e sexual feminino.",
      //核心 message: não é sobre Carol, é sobre o QUE ela oferece
      coreMessage:
        "Eu não vendo previsão. Eu te mostro com clareza o que você já sabe — mas ainda não teve coragem de encarar.",
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
      headline:
        "Você pode continuar ignorando isso...\nou finalmente olhar para si com clareza.",
      subtext:
        "Sem pressão. Sem respostas prontas. Apenas um espaço real para você se enxergar.",
      primary: {
        label: "Quero começar minha jornada",
        href: "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0",
        variant: "primary",
        target: "_blank",
      },
      secondary: {
        label: "Falar com Carol no Instagram",
        href: "https://www.instagram.com/tarologacalil/",
        variant: "secondary",
        target: "_blank",
      },
    },
  },

  en: {
    // TODO: update English translations for the new landing copy
    hero: {
      headline: "Discover the answers you're searching for",
      subheadline:
        "Deep self-knowledge through Tarot and Holistic Therapy with 8 years of experience",
      supportingText:
        "An experience with Tarot, therapeutic writing and symbolic reading to help you see what you already feel — with clarity.",
      cta: "Start conversation on WhatsApp",
      secondaryCta: {
        label: "Learn the method",
        href: "#metodo",
      },
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
      closingLine: "If this resonates, it's time to talk",
    },

    method: {
      title: "R.E.S.E.T. Emotional Method",
      intro:
        "A structured process to move out of emotional confusion and rebuild the way you relate.",
      steps: [
        {
          title: "R — Revelation",
          description: "Symbolic reading + emotional diagnosis",
        },
        {
          title: "E — Exposure of patterns",
          description: "Identifying repetitive behaviors and emotional cycles",
        },
        {
          title: "S — Signification",
          description: "Guided therapeutic writing to reframe experiences",
        },
        {
          title: "E — Strategy",
          description: "Practical action and decisions with clarity",
        },
        {
          title: "T — Transformation",
          description: "Building a new emotional and relational identity",
        },
      ],
    },

    transformation: {
      title: "It's not about predicting the future.",
      text:
        "It's about understanding your patterns, organizing your emotions, and making decisions with awareness.",
      bullets: [
        "Emotional clarity",
        "Awareness of your patterns",
        "Real direction to act",
        "Reconnection with your desire and identity",
      ],
    },

    whois: {
      title: "Emotional and sexual empowerment specialist",
      coreMessage:
        "I don't sell ready-made predictions. I show you with clarity what you already know — but haven't yet had the courage to face.",
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
      headline:
        "You can keep ignoring it...\nor finally look at yourself with clarity.",
      subtext:
        "No pressure. No ready-made answers. Just a real space for you to see yourself.",
      primary: {
        label: "Book session on WhatsApp",
        href: "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0",
        variant: "primary",
        target: "_blank",
      },
      secondary: {
        label: "Talk to Carol on Instagram",
        href: "https://www.instagram.com/tarologacalil/",
        variant: "secondary",
        target: "_blank",
      },
    },
  },

  es: {
    // TODO: actualizar traducciones en español para el nuevo copy de landing
    hero: {
      headline: "Descubre las respuestas que buscas",
      subheadline:
        "Autoconocimiento profundo a través del Tarot y la Terapia Holística con 8 años de experiencia",
      supportingText:
        "Una experiencia con Tarot, escritura terapéutica y lectura simbólica para ayudarte a ver lo que ya sientes — con claridad.",
      cta: "Iniciar conversación en WhatsApp",
      secondaryCta: {
        label: "Conocer el método",
        href: "#metodo",
      },
      badge: "✨ 8 años ayudando a personas a encontrar claridad",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Tarotista y Terapeuta Holística",
      },
    },

    whatfor: {
      title: "Para quienes buscan...",
      subtitle: "Si te identificas con alguno de estos desafíos:",
      benefits: [
        {
          icon: "✨",
          title: "Claridad en decisiones",
          description:
            "Entiende lo que tu corazón realmente quiere en relaciones, carrera y propósito de vida",
        },
        {
          icon: "🔄",
          title: "Transformación personal",
          description:
            "Trabaja los bloqueos emocionales que te detienen y desbloquea tu potencial",
        },
        {
          icon: "💫",
          title: "Reconexión con la esencia",
          description:
            "Recuerda quién eres realmente, más allá de las expectativas de otros",
        },
        {
          icon: "🌱",
          title: "Orientación espiritual",
          description:
            "Comprende el propósito y las sincronicidades de tu vida ahora mismo",
        },
      ],
      closingLine: "Si esto resuena contigo, es hora de hablar",
    },

    method: {
      title: "Método R.E.S.E.T. Emocional",
      intro:
        "Un proceso estructurado para salir de la confusión emocional y reconstruir tu forma de relacionarte.",
      steps: [
        {
          title: "R — Revelación",
          description: "Lectura simbólica + diagnóstico emocional",
        },
        {
          title: "E — Exposición de patrones",
          description: "Identificación de comportamientos repetitivos y ciclos emocionales",
        },
        {
          title: "S — Significación",
          description: "Escritura terapéutica guiada para resignificar experiencias",
        },
        {
          title: "E — Estrategia",
          description: "Acción práctica y decisiones con claridad",
        },
        {
          title: "T — Transformación",
          description: "Construcción de una nueva identidad emocional y relacional",
        },
      ],
    },

    transformation: {
      title: "No se trata de predecir el futuro.",
      text:
        "Se trata de entender tus patrones, organizar tus emociones y tomar decisiones con conciencia.",
      bullets: [
        "Claridad emocional",
        "Conciencia de tus patrones",
        "Dirección real para actuar",
        "Reconexión con tu deseo e identidad",
      ],
    },

    whois: {
      title: "Especialista en desbloqueo emocional y sexual femenino",
      coreMessage:
        "No vendo predicciones listas. Te muestro con claridad lo que ya sabes — pero aún no tuviste el coraje de enfrentar.",
      credentials: [
        {
          icon: "🎓",
          text: "Licenciada en Filosofía (UNIFESP) — entiendo la profundidad humana",
        },
        {
          icon: "🔮",
          text: "8 años de experiencia con Tarot — método propio probado y consolidado",
        },
        {
          icon: "❤️",
          text: "Especialista en relaciones e identidad LGBTIQA+ — recibo a todas las personas",
        },
        {
          icon: "⚡",
          text: "Reikiana y Auriculoterapeuta — trabajo cuerpo y energía integradamente",
        },
        {
          icon: "🌍",
          text: "Fluida en portugués y español — madre, viajera, inmersa en culturas",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "Utilizo el Tarot como herramienta de reflexión profunda, meditación guiada, respiración consciente y eneagrama para mapear tu comportamiento. Cada sesión se personaliza a lo que necesitas ahora.",
    },

    cta: {
      headline:
        "Puedes seguir ignorando esto...\no finalmente mirar hacia ti con claridad.",
      subtext:
        "Sin presión. Sin respuestas listas. Solo un espacio real para que te veas.",
      primary: {
        label: "Quiero comenzar mi jornada",
        href: "https://api.whatsapp.com/message/AWE5FVFPURUMK1?autoload=1&app_absent=0",
        variant: "primary",
        target: "_blank",
      },
      secondary: {
        label: "Hablar con Carol en Instagram",
        href: "https://www.instagram.com/tarologacalil/",
        variant: "secondary",
        target: "_blank",
      },
    },
  },
};

