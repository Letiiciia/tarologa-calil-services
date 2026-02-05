export interface Card {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  image: string;
  meaning: {
    pt: string;
    en: string;
  };
  deck: "tarot" | "cigano" | "oracle";
}

export const deckInfo = {
  pt: {
    title: "Tarôs Utilizados",
    description: `Atuo principalmente com o Tarot clássico (composto por 78 cartas – 22 arcanos maiores, 56 arcanos menores), Baralho Cigano clássico (36 cartas) e oráculos (na terminologia mercantil, que podem ser baralhos simples com diferentes temas e composição de cartas, ex: O oráculo da Deusa, Tarot do Osho, etc).

Ou seja, por ser capaz de ler qualquer tipo de deck utilizo todos ao meu favor de acordo com a necessidade da situação e a energia de cada consulente. Cruzo as linhas, isso significa que em um jogo posso utilizar o Tarot clássico e o Baralho Cigano no mesmo tema ou pergunta para ser mais cirúrgica e assertiva na condução e comunicação das soluções apresentadas.`,
    videoTitle: "Entenda mais sobre o Baralho",
    videoUrl: "https://www.youtube.com/embed/wCK0ou5bnDo",
  },
  en: {
    title: "Tarot Decks Used",
    description: `I work primarily with the classic Tarot (composed of 78 cards – 22 major arcana, 56 minor arcana), classic Gypsy Deck (36 cards), and oracles (in commercial terminology, which can be simple decks with different themes and card compositions, e.g.: The Goddess Oracle, Osho Tarot, etc).

That is, being able to read any type of deck, I use them all to my advantage according to the needs of the situation and the energy of each client. I cross the lines, which means that in a reading I can use the classic Tarot and the Gypsy Deck on the same theme or question to be more surgical and assertive in conducting and communicating the presented solutions.`,
    videoTitle: "Learn More About the Deck",
    videoUrl: "https://www.youtube.com/embed/wCK0ou5bnDo",
  },
};

export const cards: Card[] = [
  {
    id: "3-copas",
    name: {
      pt: "3 de Copas",
      en: "3 of Cups",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `Chegou o momento de celebrar!!! 🎉✨🥂

Desfrute este momento, há tempo para tudo e este especificamente é um dos mais prazerosos.

Compartilhe a alegria com quem você verdadeiramente ama e com quem merece seu amor, ou apenas comunique a ti mesma/o o quanto foi importante tudo o que você passou até chegar nesta fase e sinta a delícia da conquista. Seu coração está cheio de alegria e isto te faz bem para além do corpo e espírito (o que não é pouco), te motiva para seguir o caminho que você realmente deve traçar.

Mesmo que seja um ganho pequeno, celebre com todas suas forças, pois é na energia que reluz que a beleza da verdade aparece.

Se sente justamente o contrário, a indicação é que você aprenda a celebrar e agradecer os pequenos momentos e ganhos da sua vida, assim, naturalmente as coisas vão melhorando até o ponto de êxtase e celebração máxima.

Boa sorte, lindo afeto. 💜`,
      en: `Time to celebrate!!! 🎉✨🥂

Enjoy this moment, there is time for everything and this one is specifically one of the most pleasurable.

Share the joy with those you truly love and who deserve your love, or simply communicate to yourself how important everything you went through to reach this stage was and feel the delight of achievement. Your heart is full of joy and this does you good beyond body and spirit (which is not little), it motivates you to follow the path you really should take.

Even if it's a small gain, celebrate with all your strength, because it is in the shining energy that the beauty of truth appears.

If you feel just the opposite, the indication is that you learn to celebrate and be grateful for the small moments and gains in your life, thus, naturally things improve to the point of ecstasy and maximum celebration.

Good luck, beautiful affection. 💜`,
    },
  },
  {
    id: "3-copas-2",
    name: {
      pt: "3 de Copas",
      en: "3 of Cups",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `Chegou o momento de celebrar!!! 🎉✨🥂

Desfrute este momento, há tempo para tudo e este especificamente é um dos mais prazerosos.

Compartilhe a alegria com quem você verdadeiramente ama e com quem merece seu amor, ou apenas comunique a ti mesma/o o quanto foi importante tudo o que você passou até chegar nesta fase e sinta a delícia da conquista. Seu coração está cheio de alegria e isto te faz bem para além do corpo e espírito (o que não é pouco), te motiva para seguir o caminho que você realmente deve traçar.

Mesmo que seja um ganho pequeno, celebre com todas suas forças, pois é na energia que reluz que a beleza da verdade aparece.

Se sente justamente o contrário, a indicação é que você aprenda a celebrar e agradecer os pequenos momentos e ganhos da sua vida, assim, naturalmente as coisas vão melhorando até o ponto de êxtase e celebração máxima.

Boa sorte, lindo afeto. 💜`,
      en: `Time to celebrate!!! 🎉✨🥂

Enjoy this moment, there is time for everything and this one is specifically one of the most pleasurable.

Share the joy with those you truly love and who deserve your love, or simply communicate to yourself how important everything you went through to reach this stage was and feel the delight of achievement. Your heart is full of joy and this does you good beyond body and spirit (which is not little), it motivates you to follow the path you really should take.

Even if it's a small gain, celebrate with all your strength, because it is in the shining energy that the beauty of truth appears.

If you feel just the opposite, the indication is that you learn to celebrate and be grateful for the small moments and gains in your life, thus, naturally things improve to the point of ecstasy and maximum celebration.

Good luck, beautiful affection. 💜`,
    },
  },
  {
    id: "3-copas-3",
    name: {
      pt: "3 de Copas",
      en: "3 of Cups",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `Chegou o momento de celebrar!!! 🎉✨🥂

Desfrute este momento, há tempo para tudo e este especificamente é um dos mais prazerosos.

Compartilhe a alegria com quem você verdadeiramente ama e com quem merece seu amor, ou apenas comunique a ti mesma/o o quanto foi importante tudo o que você passou até chegar nesta fase e sinta a delícia da conquista. Seu coração está cheio de alegria e isto te faz bem para além do corpo e espírito (o que não é pouco), te motiva para seguir o caminho que você realmente deve traçar.

Mesmo que seja um ganho pequeno, celebre com todas suas forças, pois é na energia que reluz que a beleza da verdade aparece.

Se sente justamente o contrário, a indicação é que você aprenda a celebrar e agradecer os pequenos momentos e ganhos da sua vida, assim, naturalmente as coisas vão melhorando até o ponto de êxtase e celebração máxima.

Boa sorte, lindo afeto. 💜`,
      en: `Time to celebrate!!! 🎉✨🥂

Enjoy this moment, there is time for everything and this one is specifically one of the most pleasurable.

Share the joy with those you truly love and who deserve your love, or simply communicate to yourself how important everything you went through to reach this stage was and feel the delight of achievement. Your heart is full of joy and this does you good beyond body and spirit (which is not little), it motivates you to follow the path you really should take.

Even if it's a small gain, celebrate with all your strength, because it is in the shining energy that the beauty of truth appears.

If you feel just the opposite, the indication is that you learn to celebrate and be grateful for the small moments and gains in your life, thus, naturally things improve to the point of ecstasy and maximum celebration.

Good luck, beautiful affection. 💜`,
    },
  },
  // Add more cards here as they are defined
  // Template for additional cards:
  // {
  //   id: "card-id",
  //   name: {
  //     pt: "Nome em Português",
  //     en: "English Name",
  //   },
  //   image: "/assets/cards/card-image.jpg",
  //   deck: "tarot" | "cigano" | "oracle",
  //   meaning: {
  //     pt: "Significado detalhado em português...",
  //     en: "Detailed meaning in English...",
  //   },
  // },
];

// Helper function to get a random card
export const getRandomCard = (): Card => {
  return cards[Math.floor(Math.random() * cards.length)];
};

// Helper function to shuffle cards
export const shuffleCards = (cardsArray: Card[]): Card[] => {
  const shuffled = [...cardsArray];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
