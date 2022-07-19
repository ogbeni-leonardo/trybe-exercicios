const { getPokemonDetails } = require('./exercicio-08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const searchPokemon = (pokemon) => pokemon.name === 'Pikachu';

    getPokemonDetails(searchPokemon, (notExists, _message) => {
      try {
        expect(notExists.message).toBe(
          'Não temos esse pokémon para você :('
        );
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const searchPokemon = (pokemon) => pokemon.name === 'Squirtle';

    getPokemonDetails(searchPokemon, (_error, message) => {
      try {
        expect(message).toBe(
          'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'
        );
        done();
      } catch (error) {
        done(error)
      }
    });
  });
});
