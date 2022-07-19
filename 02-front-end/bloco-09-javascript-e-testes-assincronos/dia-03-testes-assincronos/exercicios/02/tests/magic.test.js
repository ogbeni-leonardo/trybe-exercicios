const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () =>
  favoriteCards.splice(4, favoriteCards.length - 4);

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => retrievesFavoriteCards());

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');

    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toBe(
      'Beacon of Immortality'
    );

    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    const favoriteCardsNames = favoriteCards.map((card) => card.name);
    expect(favoriteCardsNames).toEqual([
      "Ancestor's Chosen",
      'Angel of Mercy',
      'Aven Cloudchaser',
      'Ballista Squad',
    ]);
  });
});
