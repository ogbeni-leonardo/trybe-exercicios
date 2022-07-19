const NORMAL = 'normal';
const RARE = 'raro';
const LEGEND = 'muito raro';

const defaultCards = [
  {
    cardName: 'Amazo',
    cardDescription: 'Androide capaz de copiar as habilidades de qualquer herói.',
    cardAttr1: '90',
    cardAttr2: '100',
    cardAttr3: '100',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/20-amazo.jpg',
    cardRare: LEGEND,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Ant-Man',
    cardDescription: `Capacidade de diminuir de tamanho, mas pode manter seu peso e
     forças normais, além de pode comunicar-se com as formigas através de ondas mentais
     emitidas de seu capacete e fazer com que obedeçam suas ordens.`,
    cardAttr1: '32',
    cardAttr2: '32',
    cardAttr3: '28',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/30-ant-man.jpg',
    cardRare: NORMAL,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Anti-Venom',
    cardDescription: `Pode drenar os poderes de qualquer herói ou vilão apenas com
     um único toque.`,
    cardAttr1: '96',
    cardAttr2: '84',
    cardAttr3: '90',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/34-anti-venom.jpg',
    cardRare: LEGEND,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Batman',
    cardDescription: `Playboy de dia e super-herói à noite, é um ótimo detetive,
      e dono de uma inteligência incrível, além de ser um ótimo atleta. Foi
      treinado em todas as formas de combate físico e também é mestre em fugas
      e disfarces.`,
    cardAttr1: '47',
    cardAttr2: '100',
    cardAttr3: '50',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg',
    cardRare: NORMAL,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Beyonder',
    cardDescription: `Pode facilmente mudar os estados da matéria. Dotado de força
      sobre-humana de tal forma que é potencialmente incalculável. Usando sua
      habilidade de manipular a realidade, ele pode regenerar danos causados ao seu
      corpo por simplesmente querer que ele se repare.`,
    cardAttr1: '100',
    cardAttr2: '84',
    cardAttr3: '100',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/80-beyonder.jpg',
    cardRare: LEGEND,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Black Canary',
    cardDescription: `É capaz de gerar um grito supersônico, podendo causar
      diversos danos e atordoar inimigos. Ela possui um grau incrível de 
      controle sobre suas cordas vocais. Isso lhe permite imitar sons e 
      gerar qualquer som que ela deseja.`,
    cardAttr1: '52',
    cardAttr2: '80',
    cardAttr3: '20',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/97-black-canary.jpg',
    cardRare: NORMAL,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Black Cat',
    cardDescription: `É uma lutadora perigosa, ágil, veloz e extremamente precisa.
      Além disso, sua astúcia e capacidade de ser furtiva a tornam uma excelente
      ladra e verdadeira especialista em roubos ousados.`,
    cardAttr1: '23',
    cardAttr2: '70',
    cardAttr3: '10',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/99-black-cat.jpg',
    cardRare: NORMAL,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Black Flash',
    cardDescription: `Dentre suas habilidades estão: super velocidade,
      durabilidade sobre-humana, faseamento, viagem dimensional e um toque fatal.`,
    cardAttr1: '100',
    cardAttr2: '30',
    cardAttr3: '80',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/100-black-flash.jpg',
    cardRare: RARE,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Captain Marvel',
    cardDescription: `Dentre suas habilidades estão: absorção e manipulação
      de energia, voo, resistência e regeneração e precognição.`,
    cardAttr1: '100',
    cardAttr2: '90',
    cardAttr3: '95',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/157-captain-marvel.jpg',
    cardRare: LEGEND,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Darth Vader',
    cardDescription: `Ele possui uma fúria concentrada, lança seu sabre de luz
      contra os inimigos e pode erguer, causar dano e derrubar inimigos usando a força.`,
    cardAttr1: '100',
    cardAttr2: '100',
    cardAttr3: '35',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/208-darth-vader.jpg',
    cardRare: RARE,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Flash',
    cardDescription: `Seu poder consiste em supervelocidade. Isso o concede
      outras habilidades como: invulnerabilidade, reflexos aprimorados e 
      intangibilidade.`,
    cardAttr1: '100',
    cardAttr2: '32',
    cardAttr3: '60',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/266-flash-iii.jpg',
    cardRare: RARE,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Gamora',
    cardDescription: `Por conta de sua fisiologia ela possui atributos aumentados,
      como força, velocidade, agilidade, durabilidade, destreza e um fator de cura
      avançado.`,
    cardAttr1: '53',
    cardAttr2: '100',
    cardAttr3: '85',
    cardImage: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/275-gamora.jpg',
    cardRare: RARE,
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

/* const defaultCards = []; */

export default defaultCards;
