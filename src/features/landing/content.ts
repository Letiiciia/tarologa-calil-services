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
        "Combinando Tarot, Meditação, Respiração, (técnicas de Terapia Holística), vou te guiar por um caminho único de autodescoberta." +
        "\n" +
        "Para pessoas que buscam clareza, equilíbrio emocional e novas perspectivas. Esta experiência foi feita para te guiar no caminho de se libertar de bloqueios emocionais, se conectar com sua verdadeira essência e alcançar o que sempre buscou",
      cta: "Quero começar minha jornada",
      secondaryCta: {
        label: "Quero conhecer o método",
        href: "https://wa.me/34639664590?text=Ol%C3%A1%20Carol!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20seu%20m%C3%A9todo%20antes%20de%20decidir.%20Pode%20me%20contar%20mais%3F",
      },
      badge: "✨ 8 anos guiando mulheres a encontrarem clareza emocional",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Taróloga e Terapeuta Holística",
      },
    },

    emotionalExperience: {
      title: "Uma experiência de transformação emocional",
      subtitle:
        "Embarque em uma jornada profunda de autoconhecimento e transformação emocional.",
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
          description:
            "Reconecte-se com a sabedoria do seu coração através da cura da criança interior, você descobrirá o que realmente deseja em áreas cruciais da sua vida.",
        },
        {
          icon: "🔄",
          title: "Transformação pessoal",
          description:
            "Liberte-se de bloqueios emocionais e desbloqueie seu verdadeiro potencial, permitindo um crescimento autêntico e profundo.",
        },
        {
          icon: "💫 ",
          title: "Reconexão com a essência",
          description:
            "Conecte-se com sua verdadeira essência, além das expectativas e influências externas. Lembre-se de quem você realmente é.",
        },
        {
          icon: "🌱",
          title: " Orientação espiritual",
          description:
            "Compreenda as sincronicidades e o propósito por trás de sua jornada atual, e aprenda a confiar no caminho que a vida está te convidando a seguir.",
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
          description:
            "Identificação de comportamentos repetitivos e ciclos emocionais",
        },
        {
          title: "Significação",
          description:
            "Escrita terapêutica guiada para ressignificar experiências",
        },
        {
          title: "Estratégia",
          description: "Ação prática e decisões com clareza",
        },
        {
          title: "Transformação",
          description:
            "Construção de uma nova identidade emocional e relacional",
        },
      ],
    },
    transformation: {
      title: "Não é sobre prever o futuro.",
      text: "É sobre entender seus padrões, organizar suas emoções e tomar decisões com consciência.",
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
        href: "https://wa.me/34639664590?text=Ol%C3%A1%20Carol!%20Vim%20pelo%20site%20e%20quero%20iniciar%20minha%20jornada.%20Gostaria%20de%20adquirir%20uma%20sess%C3%A3o%20com%20voc%C3%AA!",
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
    hero: {
      headline:
        "You are not confused.\nYou are just ignoring what you already know.",
      subheadline:
        "Embark on a deep journey of self-knowledge and personal transformation",
      supportingText:
        "Combining Tarot, Meditation, Breathing (Holistic Therapy techniques), I will guide you through a unique path of self-discovery." +
        "\n" +
        "For people seeking clarity, emotional balance and new perspectives. This experience was made to guide you on the path to freeing yourself from emotional blocks, connecting with your true essence and achieving what you have always sought",
      cta: "I want to start my journey",
      secondaryCta: {
        label: "I want to know the method",
        href: "https://wa.me/34639664590?text=Hi%20Carol!%20I%20came%20from%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20your%20method%20before%20deciding.%20Can%20you%20tell%20me%20more%3F",
      },
      badge: "✨ 8 years guiding women to find emotional clarity",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Tarot Reader and Holistic Therapist",
      },
    },

    emotionalExperience: {
      title: "An emotional transformation experience",
      subtitle:
        "Embark on a deep journey of self-knowledge and emotional transformation.",
      bodyText: [
        "Through Tarot, therapeutic writing, meditation, breathing and holistic therapy practices, you will be guided through a symbolic path of clarity, reconnection and emotional awakening.",
        "This experience was created for women who wish to free themselves from emotional patterns, recover their inner direction and reconnect with their true essence.",
      ],
    },

    journeyFor: {
      badge: "An experience of deep emotional transformation",
      title: "For those seeking true self-knowledge and transformation...",
      bodyText: [
        "If you identify with any of these challenges, this journey is for you. Let's talk and start your transformation.",
      ],
      cards: [
        {
          icon: "✨",
          title: "Clarity in decisions and inner child healing",
          description:
            "Reconnect with the wisdom of your heart through inner child healing — you will discover what you truly desire in crucial areas of your life.",
        },
        {
          icon: "🔄",
          title: "Personal transformation",
          description:
            "Free yourself from emotional blocks and unlock your true potential, allowing authentic and profound growth.",
        },
        {
          icon: "💫 ",
          title: "Reconnection with your essence",
          description:
            "Connect with your true essence, beyond external expectations and influences. Remember who you really are.",
        },
        {
          icon: "🌱",
          title: "Spiritual guidance",
          description:
            "Understand the synchronicities and the purpose behind your current journey, and learn to trust the path life is inviting you to follow.",
        },
      ],
    },

    whatfor: {
      title: "If you recognize yourself in this...",
      subtitle: "See if any of these phrases resonates with you.",
      benefits: [
        {
          icon: "🧠",
          title: "You already know what you need to do, but can't act",
          description:
            "The answer exists within you, but there is a lack of emotional structure to support the decision.",
        },
        {
          icon: "🌀",
          title: "You feel drained in relationships that don't evolve",
          description:
            "Confusing relationships consume your energy, your self-esteem and your presence.",
        },
        {
          icon: "🌙",
          title: "You got lost trying to be what others expect of you",
          description: "You adapted so much that you forgot your own desire.",
        },
        {
          icon: "✨",
          title: "You feel like you live without direction",
          description:
            "Even doing everything right, it still feels like something inside you is misaligned.",
        },
      ],
      closingLine: "If this struck a chord, this journey is for you.",
    },

    method: {
      title: "R.E.S.E.T. Emotional Method",
      intro:
        "A structured process to move out of emotional confusion and rebuild the way you relate.",
      steps: [
        {
          title: "Revelation",
          description: "Symbolic reading + emotional diagnosis",
        },
        {
          title: "Exposure of patterns",
          description: "Identifying repetitive behaviors and emotional cycles",
        },
        {
          title: "Signification",
          description: "Guided therapeutic writing to reframe experiences",
        },
        {
          title: "Strategy",
          description: "Practical action and decisions with clarity",
        },
        {
          title: "Transformation",
          description: "Building a new emotional and relational identity",
        },
      ],
    },

    transformation: {
      title: "It's not about predicting the future.",
      text: "It's about understanding your patterns, organizing your emotions, and making decisions with awareness.",
      bullets: [
        "Emotional clarity",
        "Awareness of your patterns",
        "Real direction to act",
        "Reconnection with your desire and identity",
      ],
    },

    whois: {
      title: "Specialist in feminine emotional and sexual unblocking.",
      coreMessage:
        "I don't sell predictions. I show you clearly what you already know — but haven't yet had the courage to face.",
      credentials: [
        {
          icon: "🎓",
          text: "Bachelor's degree in Philosophy from the Federal University of São Paulo.",
        },
        {
          icon: "🔮",
          text: "Tarot reader from Casa Maria Menina, with 9 years of experience and her own method.",
        },
        {
          icon: "❤️",
          text: "Coaching through the enneagram method in relationships and sexuality, with experience with the LGBTIQA+ community.",
        },
        {
          icon: "⚡",
          text: "Reiki practitioner, auriculotherapist, writer, dancer, yoga practitioner, artist, traveler, mother.",
        },
        {
          icon: "🌍",
          text: "This is my fourth year living in Europe, currently in Spain, in a very cultural and mystical city. I serve in Portuguese and Spanish.",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "I am a fantastic woman, because I let fantasy actively participate in my life. And it transforms every detail into something unique and precious. I truly love living, because life is the moment of consciousness. I feel alive when I dance, have deep and honest conversations, when I learn or teach something to my daughter or any other child; when I find solutions, answers and especially questions. When I write, read, cry, when I am moved by joy, when I interpret the tarot and consequently help people.",
    },

    cta: {
      headline:
        "You can keep ignoring it...\nor finally look at yourself with clarity.",
      subtext:
        "No pressure. No ready-made answers. Just a real space for you to see yourself.",
      primary: {
        label: "I want to start my journey",
        href: "https://wa.me/34639664590?text=Hi%20Carol!%20I%20came%20from%20your%20website%20and%20I%27d%20like%20to%20book%20a%20session%20with%20you!",
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
    hero: {
      headline: "No estás confundida.\nSolo estás ignorando lo que ya sabes.",
      subheadline:
        "Embarca en un viaje profundo de autoconocimiento y transformación personal",
      supportingText:
        "Combinando Tarot, Meditación, Respiración (técnicas de Terapia Holística), te guiaré por un camino único de autodescubrimiento." +
        "\n" +
        "Para personas que buscan claridad, equilibrio emocional y nuevas perspectivas. Esta experiencia fue creada para guiarte en el camino de liberarte de bloqueos emocionales, conectarte con tu verdadera esencia y alcanzar lo que siempre has buscado",
      cta: "Quiero comenzar mi viaje",
      secondaryCta: {
        label: "Quiero conocer el método",
        href: "https://wa.me/34639664590?text=%C2%A1Hola%20Carol!%20Vine%20desde%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20tu%20m%C3%A9todo%20antes%20de%20decidir.%20%C2%BFPuedes%20contarme%20m%C3%A1s%3F",
      },
      badge: "✨ 8 años guiando mujeres a encontrar claridad emocional",
      images: {
        main: "/assets/Ensaio_Profissional_Carol_Calil-1.jpg",
        alt: "Carol Calil - Tarotista y Terapeuta Holística",
      },
    },

    emotionalExperience: {
      title: "Una experiencia de transformación emocional",
      subtitle:
        "Embarca en un viaje profundo de autoconocimiento y transformación emocional.",
      bodyText: [
        "A través del Tarot, escritura terapéutica, meditación, respiración y prácticas de terapia holística, serás guiada por un camino simbólico de claridad, reconexión y despertar emocional.",
        "Esta experiencia fue creada para mujeres que desean liberarse de patrones emocionales, recuperar su dirección interna y reconectarse con su verdadera esencia.",
      ],
    },

    journeyFor: {
      badge: "Una experiencia de transformación emocional profunda",
      title:
        "Para quienes buscan autoconocimiento y transformación verdadera...",
      bodyText: [
        "Si te identificas con alguno de estos desafíos, este viaje es para ti. Hablemos y comencemos tu transformación.",
      ],
      cards: [
        {
          icon: "✨",
          title: "Claridad en las decisiones y sanación del niño interior",
          description:
            "Reconéctate con la sabiduría de tu corazón a través de la sanación del niño interior — descubrirás lo que realmente deseas en áreas cruciales de tu vida.",
        },
        {
          icon: "🔄",
          title: "Transformación personal",
          description:
            "Libérate de bloqueos emocionales y desbloquea tu verdadero potencial, permitiendo un crecimiento auténtico y profundo.",
        },
        {
          icon: "💫 ",
          title: "Reconexión con la esencia",
          description:
            "Conéctate con tu verdadera esencia, más allá de las expectativas e influencias externas. Recuerda quién realmente eres.",
        },
        {
          icon: "🌱",
          title: "Orientación espiritual",
          description:
            "Comprende las sincronicidades y el propósito detrás de tu viaje actual, y aprende a confiar en el camino que la vida te está invitando a seguir.",
        },
      ],
    },

    whatfor: {
      title: "Si te reconoces en esto...",
      subtitle: "Ve si alguna de estas frases resuena contigo.",
      benefits: [
        {
          icon: "🧠",
          title: "Ya sabes lo que necesitas hacer, pero no puedes actuar",
          description:
            "La respuesta existe dentro de ti, pero falta estructura emocional para sostener la decisión.",
        },
        {
          icon: "🌀",
          title: "Te sientes agotada en relaciones que no evolucionan",
          description:
            "Las relaciones confusas consumen tu energía, tu autoestima y tu presencia.",
        },
        {
          icon: "🌙",
          title: "Te perdiste intentando ser lo que esperan de ti",
          description: "Te adaptaste tanto que olvidaste tu propio deseo.",
        },
        {
          icon: "✨",
          title: "Sientes que vives sin dirección",
          description:
            "Aunque hagas todo bien, aún parece que algo dentro de ti está desalineado.",
        },
      ],
      closingLine: "Si esto te atravesó, este viaje es para ti.",
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
          description:
            "Identificación de comportamientos repetitivos y ciclos emocionales",
        },
        {
          title: "S — Significación",
          description:
            "Escritura terapéutica guiada para resignificar experiencias",
        },
        {
          title: "E — Estrategia",
          description: "Acción práctica y decisiones con claridad",
        },
        {
          title: "T — Transformación",
          description:
            "Construcción de una nueva identidad emocional y relacional",
        },
      ],
    },

    transformation: {
      title: "No se trata de predecir el futuro.",
      text: "Se trata de entender tus patrones, organizar tus emociones y tomar decisiones con conciencia.",
      bullets: [
        "Claridad emocional",
        "Conciencia de tus patrones",
        "Dirección real para actuar",
        "Reconexión con tu deseo e identidad",
      ],
    },

    whois: {
      title: "Especialista en desbloqueo emocional y sexual femenino.",
      coreMessage:
        "No vendo predicciones. Te muestro con claridad lo que ya sabes — pero aún no tuviste el valor de enfrentar.",
      credentials: [
        {
          icon: "🎓",
          text: "Graduada en Bachillerato y Licenciatura en Filosofía por la Universidad Federal de São Paulo.",
        },
        {
          icon: "🔮",
          text: "Tarotista de la casa Maria Menina, con 9 años de experiencia y método propio.",
        },
        {
          icon: "❤️",
          text: "Coaching por el método eneagrama en relaciones y sexualidad, con experiencia con el público LGBTIQA+.",
        },
        {
          icon: "⚡",
          text: "Reikiana, auriculoterapeuta, escritora, bailarina, yoguini, artista, viajera, madre.",
        },
        {
          icon: "🌍",
          text: "Este es mi cuarto año viviendo en Europa, actualmente vivo en España, en una ciudad muy cultural y mística. Atiendo en portugués y español.",
        },
      ],
      image: {
        src: "/assets/Ensaio_Profissional_Carol_Calil-2.jpg",
        alt: "Carol Calil",
      },
      approach:
        "Soy una mujer fantástica, porque dejo que la fantasía participe activamente en mi vida. Y ella transforma cada detalle en algo único y precioso. Amo verdaderamente vivir, porque la vida es el instante de la consciencia. Me siento viva cuando bailo, converso profunda y verdaderamente con alguien, cuando aprendo o enseño algo a mi hija o a cualquier otro niño; cuando encuentro salidas, respuestas y principalmente preguntas. Cuando escribo, leo, lloro, cuando me emociono de alegría, cuando interpreto el tarot y consecuentemente ayudo a personas.",
    },

    cta: {
      headline:
        "Puedes seguir ignorando esto...\no finalmente mirar hacia ti con claridad.",
      subtext:
        "Sin presión. Sin respuestas listas. Solo un espacio real para que te veas.",
      primary: {
        label: "Quiero comenzar mi viaje",
        href: "https://wa.me/34639664590?text=%C2%A1Hola%20Carol!%20Vine%20desde%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20adquirir%20una%20sesi%C3%B3n%20contigo!",
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
