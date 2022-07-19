require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  test('Se a função getMagicCard foi definida', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  test("Se o retorno da função com o parâmetro '130550' possui a propriedade name com o valor 'Ancestor's Chosen'", async () => {
    const response = await getMagicCard('130550');
    expect(response.name).toBe("Ancestor's Chosen");
  });

  test("Se a função fetch é chamada quando a função getMagicCard for chamada com o argumento '130550'", async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(
      'https://api.magicthegathering.io/v1/cards/130550'
    );
  });

  test('Se o retorno da função getMagicCard é igual ao objeto card', async () => {
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  });

  test("Se a função getMagicCard chamada com o argumento 'idDesconhecido' retorna um erro com a mensagem 'Id is not found!'", async () => {
    expect(await getMagicCard('idDesconhecido')).toEqual(
      new Error('Id is not found!')
    );
  });
});
