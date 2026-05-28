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
  emotionalExperience: {
    title: string;
    subtitle: string;
    bodyText: string[];
  };
  journeyFor: {
    badge: string;
    title: string;
    bodyText: string[];
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
    closingLine?: string;
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
    approach: string; // Quem sou eu
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
        "Embarque em uma jornada profunda de autoconhecimento e transformação pessoal ",
      supportingText:
        "Combinando Tarot, Meditação, Respiração, (técnicas de Terapia Holística), vou te guiar por um caminho único de autodescoberta." + "\n" +
        "Para pessoas que buscam clareza, equilíbrio emocional e novas perspectivas. Esta experiência foi feita para te guiar no caminho de se libertar de bloqueios emocionais, se conectar com sua verdadeira essência e alcançar o que sempre buscou",
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

    emotionalExperience: {
      title: "Uma experiência de transformação emocional",
      subtitle: "Embarque em uma jornada profunda de autoconhecimento e transformação emocional.",
      bodyText: [
        "Através do Tarot, escrita terapêutica, meditação, respiração e práticas de terapia holística, você será guiada por um caminho simbólico de clareza, reconexão e despertar emocional.",
        "Essa experiência foi criada para mulheres que desejam se libertar de padrões emocionais, recuperar sua direção interna e se reconectar com sua verdadeira essência.",
      ],
    },

    journeyFor: {
      badge: "Uma experiência de transformação emocional profunda",
      title: "Para quem busca autoconhecimento e transformação verdadeira...",
      bodyText: [
        "Se você se identifica com algum desses desafios, esta jornada é para você. Vamos conversar e dar início à sua transformação.",
    
      
      ],
      cards: [
        {
          icon: "✨",
          title: "Clareza nas decisões e cura da criança interior",
          description: "Reconecte-se com a sabedoria do seu coração através da cura da criança interior, você descobrirá o que realmente deseja em áreas cruciais da sua vida, como relacionamentos, carreira e propósito",
        },
        {
          icon: "🔄",
          title: "Transformação pessoal",
          description: "Liberte-se de bloqueios emocionais e desbloqueie seu verdadeiro potencial, permitindo um crescimento autêntico e profundo",
        },
        {
          icon: "💫 ",
          title: "Reconexão com a essência",
          description: "Conecte-se com sua verdadeira essência, além das expectativas e influências externas. Lembre-se de quem você realmente é.",
        },
        {
          icon: "🌱",
          title: " Orientação espiritual",
          description: "Compreenda as sincronicidades e o propósito por trás de sua jornada atual, e aprenda a confiar no caminho que a vida está te convidando a seguir.",
        },
      ],
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
          text: "Graduada em Bacharel e Licenciatura em Filosofia, pela Universidade Federal de São Paulo.",
        },
        {
          icon: "🔮",
          text: "Taróloga, pela casa Maria Menina, com 9 anos de experiência e método próprio.",
        },
        {
          icon: "❤️",
          text: "Coaching, pelo método eneagrama, em relacionamentos e sexualidade com experiência com o público LGBTIQA+.",
        },
        {
          icon: "⚡",
          text: "Reikiana, auriculoterapeuta, escritora, dançarina, yoguini, artista, viajante, mãe.",
        },
        {
          icon: "🌍",
          text: "Este é meu quarto ano vivendo na Europa, neste momento vivo na Espanha, em uma cidade muito cultural e mística. Atendo em português e espanhol.",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "Eu sou uma mulher fantástica, pois deixo a fantasia participar ativamente da minha vida. E ela transforma todos os detalhes em algo único e precioso. Amo mesmo viver, até porque a vida é o instante da consciência. Me sinto viva quando danço, converso profunda e verdadeiramente com alguém, quando aprendo ou ensino algo para minha filha, ou qualquer outra criança; quando encontro saídas, respostas e principalmente perguntas. Quando escrevo, leio, choro, quando me emociono de alegria, quando interpreto o tarot e consequentemente ajudo pessoas.",
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

    emotionalExperience: {
      title: "An emotional transformation experience",
      subtitle: "Embark on a deep journey of self-knowledge and emotional transformation.",
      bodyText: [
        "Through Tarot, therapeutic writing, meditation, breathing and holistic therapy practices, you will be guided through a symbolic path of clarity, reconnection and emotional awakening.",
        "This experience was created for women who wish to free themselves from emotional patterns, recover their inner direction and reconnect with their true essence.",
      ],
    },

    journeyFor: {
      badge: "An experience of deep emotional transformation",
      title: "This journey was created for women who...",
      bodyText: [
        "You are a deep, sensitive woman who has already sought emotional support, but feel that something is still missing to achieve what you truly desire.",
        "Perhaps you have already tried to rationalize everything.\nPerhaps you have sought answers in relationships, spirituality, personal development or even other therapies.",
        "But there is a part of you that still asks for care, clarity and direction.",
        "This journey was created for women who are ready to stop surviving emotionally and start truly listening to themselves.",
      ],
      cards: [
        {
          icon: "🔮",
          title: "Symbolic Tarot",
          description: "Readings to reveal emotional patterns, blockages and inner pathways.",
        },
        {
          icon: "🧘",
          title: "Meditation and Breathing",
          description: "Guided practices to slow the mind and access your intuition.",
        },
        {
          icon: "✍️",
          title: "Writing Therapy & Story Therapy",
          description: "Narratives, symbols and therapeutic writing to reframe your story.",
        },
        {
          icon: "👭",
          title: "Group Journey",
          description: "Deep connection with other women in an intimate and welcoming environment.",
        },
      ],
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

    emotionalExperience: {
      title: "Una experiencia de transformación emocional",
      subtitle: "Embarca en un viaje profundo de autoconocimiento y transformación emocional.",
      bodyText: [
        "A través del Tarot, escritura terapéutica, meditación, respiración y prácticas de terapia holística, serás guiada por un camino simbólico de claridad, reconexión y despertar emocional.",
        "Esta experiencia fue creada para mujeres que desean liberarse de patrones emocionales, recuperar su dirección interna y reconectarse con su verdadera esencia.",
      ],
    },

    journeyFor: {
      badge: "Una experiencia de transformación emocional profunda",
      title: "Este viaje fue creado para mujeres que...",
      bodyText: [
        "Eres una mujer profunda, sensible, que ya ha buscado apoyo emocional, pero siente que algo aún falta para alcanzar lo que realmente deseas.",
        "Quizás ya hayas intentado racionalizarlo todo.\nQuizás hayas buscado respuestas en relaciones, espiritualidad, desarrollo personal o incluso otras terapias.",
        "Pero existe una parte de ti que aún pide acogida, claridad y dirección.",
        "Este viaje fue creado para mujeres que están listas para dejar de sobrevivir emocionalmente y comenzar a escucharse de verdad.",
      ],
      cards: [
        {
          icon: "🔮",
          title: "Tarot simbólico",
          description: "Lecturas para revelar patrones emocionales, bloqueos y caminos internos.",
        },
        {
          icon: "🧘",
          title: "Meditación y respiración",
          description: "Prácticas guiadas para desacelerar la mente y acceder a tu intuición.",
        },
        {
          icon: "✍️",
          title: "Escritoterapia y cuentoterapia",
          description: "Narrativas, símbolos y escritura terapéutica para resignificar tu historia.",
        },
        {
          icon: "👭",
          title: "Viaje en grupo",
          description: "Conexión profunda con otras mujeres en un ambiente íntimo y acogedor.",
        },
      ],
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

