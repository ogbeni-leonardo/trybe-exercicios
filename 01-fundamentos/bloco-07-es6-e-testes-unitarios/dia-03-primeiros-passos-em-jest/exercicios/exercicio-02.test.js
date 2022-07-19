const searchEmployee = require('./exercicio-02');

describe('A função searchEmployee() deve:', () => {
  it('Retornar "Ana" se searchEmployee("8579-6", "firstName")', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
  });

  it('Retornar um erro caso seja uma ID inválida', () => {
    expect(() => searchEmployee('0000-2', 'firstName')).toThrow('ID não identificada')
  });

  it('Retornar um erro caso a informação não existir', () => {
    expect(() => searchEmployee('4678-2', 'favoriteColor')).toThrow('Informação indisponível')
  })
})
