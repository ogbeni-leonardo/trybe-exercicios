const { uppercase } = require('./exercicio-07');

describe('Testa se a função uppercase funciona corretamente', () => {
  it('Verifica se a função foi definida', () => {
    expect(typeof uppercase).toBe('function');
  });

  it("Verifica se passando a palavra 'amor' é retornado 'AMOR'", (done) => {
    uppercase('amor', (message) => {
      try {
        expect(message).toBe('AMOR');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
