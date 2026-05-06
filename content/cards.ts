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
    id: "diabo",
    name: {
      pt: "Diabo",
      en: "Devil",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `Este arcano maior chega para te trazer a intensidade dos prazeres da vida. Seja da paixão, da luxúria, da bohemia, dos prazeres carnais, incluindo o dinheiro. Se sua pergunta foi relacionada a dinheiro ou negócio, esta carta traz uma mensagem muito positiva, as energias estão bastante favoráveis neste meio, basta saber como agir da melhor forma. Cuida-te, porque a intensidade não pode virar tropeço, você tem que ter consciência sobre ela e não deixá-la te dominar, afinal esse é o segredo do sucesso. A intensidade não tem que ser bloqueada ou reprimida, ela tem que ser canalizada. Se você precisa de orientação para saber como canalizá-la ou tem qualquer outra dúvida, agende uma consulta e saia mais leve e com soluções assertivas. Estamos entusiasmados e com os braços bem abertos para te acolher E se sua vida te parece morna e sem graça, não te traia, não minta para ti (lado negativo deste arcano), equilibre-se fazendo aquilo que você gosta, seja ler um livro, jogar xadrez ou pintar um pano de prato, lembre-se que os prazeres da vida não são os mesmos para todos e quiçá você precise explorar novos ares para descobrir novas sensações ou para recordar das antigas com um sabor atualizado. Desfrute!`,
      en: `This Major Arcana arrives to bring you the intensity of life’s pleasures.

Whether it is passion, desire, bohemian moments, physical pleasures, or even money. If your question was related to finances or business, this card brings a very positive message: the energies are quite favorable in this area—you just need to know how to act in the best way.

Take care, because intensity cannot become a stumbling block. You must be aware of it and not let it dominate you, after all, that is the secret to success. Intensity should not be blocked or repressed; it must be channeled.

If you need guidance on how to channel this energy, or if you have any other questions, schedule a consultation and leave feeling lighter and with clear, assertive solutions. We are enthusiastic and with open arms to welcome you.

And if your life seems lukewarm and without excitement, do not betray yourself or lie to yourself (the negative side of this arcana). Find balance by doing what you enjoy—whether it’s reading a book, playing chess, or painting a kitchen cloth. Remember that life’s pleasures are not the same for everyone, and perhaps you need to explore new paths to discover new sensations, or to revisit old ones with a renewed flavor.

Enjoy!`,
    },
  },
  {
    id: "a-morte",
    name: {
      pt: "a morte",
      en: "the death",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `A morte chega sorrateiramente trazendo transformação.
Uma parte sua muda de forma, mas mantém a essência. É por isso que também a chamam de carta do renascimento: você morre para nascer melhor e mais forte. Pode simbolizar o corte de relações ou situações que te faziam mal ou que já não te serviam, por já tê-las superado. Maravilha. Sinal de evolução. Observe e seja consciente do seu mérito — e, se conseguir identificar qual ele é, melhor ainda.

Este arcano sopra como o vento que limpa o campo depois da tempestade.
Algo em você já sabe o que terminou — mesmo que o coração ainda esteja aprendendo a soltar.

Se a sua pergunta envolve amor, trabalho ou uma fase da vida que parece suspensa, esta carta confirma: o ciclo se cumpriu. Resistir prolonga a dor. Aceitar abre o portal.

Há dignidade em reconhecer que você cresceu.
Há coragem em não caber mais no que antes servia.

Mas cuidado com o medo do vazio. O vazio não é ausência — é solo fértil aguardando novas sementes.

Se você precisa compreender o que está sendo encerrado e como atravessar essa transição com mais consciência e serenidade, agende uma consulta. Podemos olhar juntos para esse renascimento e encontrar clareza no meio da mudança.

Confie: toda transformação verdadeira honra quem você foi — e prepara quem você está se tornando.`,
      en: `Death arrives quietly, bringing transformation.
A part of you changes form, but keeps its essence. That is why it is also called the card of rebirth: you die in order to be born better and stronger. It can symbolize the ending of relationships or situations that were harming you, or that no longer served you because you had already outgrown them. Wonderful. A sign of evolution. Observe this and be conscious of your own merit — and if you can identify exactly what it is, even better.

This arcana blows like the wind that clears the field after the storm.
Something within you already knows what has ended — even if your heart is still learning how to let go.

If your question involves love, work, or a phase of life that feels suspended, this card confirms: the cycle has been completed. Resisting only prolongs the pain. Acceptance opens the gateway.

There is dignity in recognizing that you have grown.
There is courage in no longer fitting into what once worked for you.

But be careful of the fear of emptiness. Emptiness is not absence — it is fertile ground waiting for new seeds.

If you need to understand what is coming to an end and how to move through this transition with more awareness and serenity, schedule a consultation. We can look together at this rebirth and find clarity in the midst of change.

Trust: every true transformation honors who you have been — and prepares who you are becoming.`,
    },
  },
  {
    id: "o-carro",
    name: {
      pt: "o carro",
      en: "the chariot",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `O Carro é símbolo da decisão de avançar, consequência da evolução pessoal e espiritual da sua vida.
É a alma que para de hesitar e segura firme as rédeas do próprio destino.

Se sua pergunta fala de metas, mudanças ou decisões, esta carta anuncia movimento rumo ao sucesso. Há força, há direção, há vitória possível — mas ela nasce do alinhamento interno.

Você não pode puxar para dois lados ao mesmo tempo.
É preciso escolher.

Cuidado apenas com a pressa que ignora o sentir. Conquistar não é atropelar — é conduzir.

Se você precisa de clareza para saber qual caminho seguir ou como agir sem se perder de si, agende uma consulta. Juntos podemos alinhar suas forças para que seu avanço seja inteiro.

Você não está perdido(a). Você já está assumindo o comando da sua vida`,
      en: `The Chariot is the symbol of the decision to move forward, a consequence of your personal and spiritual evolution in life.
It is the soul that stops hesitating and firmly holds the reins of its own destiny.

If your question is about goals, changes, or decisions, this card announces movement toward success. There is strength, there is direction, and there is possible victory — but it comes from inner alignment.

You cannot pull in two directions at the same time.
A choice must be made.

Just be careful with haste that ignores your inner feelings. Achieving something is not about rushing over everything — it is about guiding and steering.

If you need clarity about which path to follow or how to act without losing yourself along the way, schedule a consultation. Together we can align your strengths so that your progress becomes complete and purposeful.

You are not lost.
You are already taking command of your own life.`,
    },
  },
  {
    id: "o-carro",
    name: {
      pt: "o carro",
      en: "the chariot",
    },
    image: "/assets/3Copas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `O Carro é símbolo da decisão de avançar, consequência da evolução pessoal e espiritual da sua vida.
É a alma que para de hesitar e segura firme as rédeas do próprio destino.

Se sua pergunta fala de metas, mudanças ou decisões, esta carta anuncia movimento rumo ao sucesso. Há força, há direção, há vitória possível — mas ela nasce do alinhamento interno.

Você não pode puxar para dois lados ao mesmo tempo.
É preciso escolher.

Cuidado apenas com a pressa que ignora o sentir. Conquistar não é atropelar — é conduzir.

Se você precisa de clareza para saber qual caminho seguir ou como agir sem se perder de si, agende uma consulta. Juntos podemos alinhar suas forças para que seu avanço seja inteiro.

Você não está perdido(a). Você já está assumindo o comando da sua vida`,
      en: `The Chariot is the symbol of the decision to move forward, a consequence of your personal and spiritual evolution in life.
It is the soul that stops hesitating and firmly holds the reins of its own destiny.

If your question is about goals, changes, or decisions, this card announces movement toward success. There is strength, there is direction, and there is possible victory — but it comes from inner alignment.

You cannot pull in two directions at the same time.
A choice must be made.

Just be careful with haste that ignores your inner feelings. Achieving something is not about rushing over everything — it is about guiding and steering.

If you need clarity about which path to follow or how to act without losing yourself along the way, schedule a consultation. Together we can align your strengths so that your progress becomes complete and purposeful.

You are not lost.
You are already taking command of your own life.`,
    },
  },
  {
    id: "rei-de-paus",
    name: {
      pt: "Rei de Paus",
      en: "King of Wands",
    },
    image: "/assets/ReiDePaus.jpeg",
    deck: "tarot",
    meaning: {
      pt: `O Rei de Paus é fogo consciente.
Não é chama descontrolada — é fogueira que aquece e orienta.

Ele fala de liderança natural, de visão ampla, de alguém que sabe onde quer chegar. Se sua pergunta envolve trabalho, projetos ou reconhecimento, há potência e expansão no horizonte.

No amor, indica presença marcante, desejo, magnetismo.
Mas lembre-se: autoridade verdadeira não precisa impor — ela inspira.

Este é um chamado para assumir seu lugar com confiança e maturidade.

Se você sente que pode ir além, mas ainda não sabe como direcionar seu poder, agende uma consulta. Vamos organizar sua força para que ela se torne realização concreta.

Você está alumiada pelo fogo, aproveite para brilhar!!!`,
      en: `The King of Wands is conscious fire.
It is not an uncontrolled flame — it is a fire that warms and guides.

It speaks of natural leadership, of broad vision, of someone who knows where they want to go. If your question involves work, projects, or recognition, there is strength and expansion on the horizon.

In love, it indicates a striking presence, desire, magnetism.
But remember: true authority doesn't need to impose — it inspires.

This is a call to assume your place with confidence and maturity.

If you feel you can go further but don't yet know how to direct your power, schedule a consultation. We will organize your strength so it becomes concrete achievement.

You are illuminated by fire, take the opportunity to shine!!!`,
    },
  },
  {
    id: "4-de-ouros",
    name: {
      pt: "4 de Ouros",
      en: "4 of Pentacles",
    },
    image: "/assets/4DeOuros.jpeg",
    deck: "tarot",
    meaning: {
      pt: `O 4 de Ouros fala de estrutura.
Fala de alguém que está aprendendo a construir base, chão, segurança.

Se sua questão está relacionada com sua vida financeira, esta carta é um sinal bonito: você está conseguindo se organizar, se estruturar, criar estabilidade. Talvez ainda não seja abundância exuberante — mas é solidez. E solidez é riqueza silenciosa.

Você começa a entender o valor do que conquista.
Você começa a proteger o que é seu.
Você começa a construir com consciência.

Se a sua pergunta foi sobre a vida afetiva, algo também está se estruturando. Pode ser um vínculo que começa a ganhar forma mais concreta, seu desejo de estabilidade emocional ou sua capacidade de se posicionar com mais firmeza. Você está em momento de construção. E construção é o que sustenta.

Mas atenção: segurança não precisa virar rigidez.
Prosperar também é confiar no fluxo.
Amar também é permitir que o outro respire.

Se você deseja fortalecer sua vida financeira com mais estratégia ou compreender como criar estabilidade emocional, agende uma consulta. Podemos olhar com profundidade para aquilo que você está edificando.

Você está construindo algo real.
Honre cada tijolo.✨`,
      en: `The 4 of Pentacles speaks of structure.
It speaks of someone who is learning to build a foundation, solid ground, security.

If your question is related to your financial life, this card is a beautiful sign: you are managing to organize yourself, structure yourself, create stability. Perhaps it's not yet exuberant abundance — but it is solidity. And solidity is quiet wealth.

You are beginning to understand the value of what you achieve.
You are beginning to protect what is yours.
You are beginning to build with awareness.

If your question was about your emotional life, something is also taking shape. It could be a bond that is beginning to take more concrete form, your desire for emotional stability, or your ability to position yourself more firmly. You are in a moment of construction. And construction is what sustains.

But be careful: security doesn't need to become rigidity.
Prospering also means trusting the flow.
Loving also means allowing the other to breathe.

If you want to strengthen your financial life with more strategy or understand how to create emotional stability, schedule a consultation. We can look deeply at what you are building.

You are building something real.
Honor each brick.✨`,
    },
  },
  {
    id: "artemis",
    name: {
      pt: "Ártemis",
      en: "Artemis",
    },
    image: "/assets/Artemis.jpeg",
    deck: "oracle",
    meaning: {
      pt: `Ártemis surge como a mulher que caminha sozinha pela floresta — inteira, selvagem e soberana.
Ela é independência, foco e instinto apurado. É a deusa que protege seus limites e honra sua própria verdade.

Se sua pergunta envolve amor, esta carta fala sobre autonomia emocional. Talvez seja momento de se recolher, fortalecer-se ou lembrar que você não precisa se diminuir para ser escolhida. Ou ela aparece justamente por você ter a consciência de honrar sua individualidade. Ártemis não implora presença — ela é presença.

No trabalho e nos projetos, indica foco, disciplina e estratégia silenciosa. Você sabe onde quer chegar. Agora é confiar na própria mira.

Mas cuidado para que independência não vire isolamento.
Ser forte não significa não precisar de ninguém.
Discernimento é diferente de frieza.

Se você sente que precisa reafirmar seus limites ou quer entender como equilibrar autonomia e abertura, agende uma consulta. Podemos olhar juntas(os) para sua força interior e direcioná-la com consciência.

Você é a deusa que caminha livre. 🏹🌿✨`,
      en: `Artemis emerges as the woman who walks alone through the forest — whole, wild and sovereign.
She is independence, focus and refined instinct. She is the goddess who protects your boundaries and honors your own truth.

If your question involves love, this card speaks about emotional autonomy. Perhaps it is time to withdraw, strengthen yourself, or remember that you don't need to diminish yourself to be chosen. Or she appears precisely because you are aware of honoring your individuality. Artemis does not beg for presence — she is presence.

In work and projects, it indicates focus, discipline and silent strategy. You know where you want to go. Now it is about trusting your own aim.

But be careful that independence does not become isolation.
Being strong does not mean you don't need anyone.
Discernment is different from coldness.

If you feel you need to reaffirm your boundaries or want to understand how to balance autonomy and openness, schedule a consultation. We can look together at your inner strength and direct it with awareness.

You are the goddess who walks free. 🏹🌿✨`,
    },
  },
  {
    id: "durga",
    name: {
      pt: "Durga",
      en: "Durga",
    },
    image: "/assets/Durga.jpeg",
    deck: "oracle",
    meaning: {
      pt: `Durga chega montada em seu leão, com múltiplos braços e serenidade no olhar.
Ela é a força que protege, a coragem que enfrenta e a energia que remove obstáculos.

Se sua pergunta envolve desafios, conflitos ou situações que parecem maiores que você, esta carta é um lembrete poderoso: há força suficiente dentro de você para atravessar isso.

Durga não age com raiva descontrolada — ela age com firmeza consciente.
Ela luta apenas o necessário.
Ela protege o que é sagrado.

No amor, pode indicar a necessidade de se posicionar, defender seus limites ou romper padrões que enfraquecem sua autoestima.
No trabalho, fala de determinação e superação.

Mas atenção: lutar contra tudo o tempo todo, cansa.
Força também é saber quando descansar a espada.

Se você precisa de clareza para enfrentar uma situação com equilíbrio e estratégia emocional, agende uma consulta. Vamos organizar sua coragem para que ela se torne solução, não desgaste.

Você é mais forte do que imagina — e mais sábia do que pensa.`,
      en: `Durga arrives mounted on her lion, with multiple arms and serenity in her gaze.
She is the force that protects, the courage that confronts, and the energy that removes obstacles.

If your question involves challenges, conflicts, or situations that seem bigger than you, this card is a powerful reminder: there is enough strength within you to get through this.

Durga does not act with uncontrolled anger — she acts with conscious firmness.
She fights only what is necessary.
She protects what is sacred.

In love, it may indicate the need to position yourself, defend your boundaries, or break patterns that weaken your self-esteem.
At work, it speaks of determination and overcoming.

But be careful: fighting against everything all the time is exhausting.
Strength is also knowing when to rest your sword.

If you need clarity to face a situation with balance and emotional strategy, schedule a consultation. We will organize your courage so it becomes a solution, not exhaustion.

You are stronger than you imagine — and wiser than you think.`,
    },
  },
  {
    id: "cavaleiro-de-espadas",
    name: {
      pt: "Cavaleiro de Espadas",
      en: "Knight of Swords",
    },
    image: "/assets/CavaleiroDEspadas.jpeg",
    deck: "tarot",
    meaning: {
      pt: `O Cavaleiro de Espadas chega com velocidade mental e comunicativa.
Ele chega rápido, com ideias afiadas e verdades que não pedem licença.

Se sua pergunta envolve comunicação, decisões ou conflitos, esta carta fala de movimento mental intenso. Pode haver conversas importantes, revelações, posicionamentos.

Mas cuidado para que a pressa não vire ferida.
Palavras são lâminas — podem abrir caminhos ou cortar vínculos.

Há coragem aqui. Há lucidez.
Só é preciso unir razão e sensibilidade.

Se você quer clareza antes de agir ou precisa entender como se posicionar com firmeza sem perder elegância, agende uma consulta. Podemos transformar impulso em estratégia.

Use sua mente como luz, não como tempestade, corte pensamentos negativos e que não agregam valor para sua comunicação interna, comunique primeiro para ti o quão maravilhosa(o) você é!`,
      en: `The Knight of Swords arrives with mental and communicative speed.
He arrives quickly, with sharp ideas and truths that don't ask permission.

If your question involves communication, decisions, or conflicts, this card speaks of intense mental movement. There may be important conversations, revelations, positionings.

But be careful that haste doesn't become a wound.
Words are blades — they can open paths or cut bonds.

There is courage here. There is clarity.
It is only necessary to unite reason and sensitivity.

If you want clarity before acting or need to understand how to position yourself firmly without losing elegance, schedule a consultation. We can transform impulse into strategy.

Use your mind as light, not as a storm. Cut out negative thoughts that don't add value to your inner communication. First communicate to yourself how wonderful you are!`,
    },
  },
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
