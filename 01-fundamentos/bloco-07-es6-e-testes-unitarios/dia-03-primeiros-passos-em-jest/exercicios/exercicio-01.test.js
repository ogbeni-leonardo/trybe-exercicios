const { sum, myRemove, myFizzBuzz,
  encode, decode, techList, hydrate } = require('./exercicio-01');

describe('A função sum() deve:', () => {
  it('Retornar 9 se sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9)
  });

  it('Retornar 0 se sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0)
  });

  it('Retornar erro se sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it('Verificar se a mensagem de erro é igual a "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers')
  });
})

describe('A função myRemove() deve:', () => {
  it('Retorne [1, 2, 4] se myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('Não retornar [1, 2, 3, 4] se myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Retornar [1, 2, 3, 4] se myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('A função myFizzBuzz() deve:', () => {
  it('Retornar "fizzbuzz" se myFizzBuzz(30)', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  it('Retornar "fizz" se myFizzBuzz(27)', () => {
    expect(myFizzBuzz(27)).toBe('fizz');
  });

  it('Retornar "buzz" se myFizzBuzz(65)', () => {
    expect(myFizzBuzz(65)).toBe('buzz');
  });

  it('Retornar 19 se myFizzBuzz(19)', () => {
    expect(myFizzBuzz(19)).toBe(19);
  });

  it('Retornar false se myFizzBuzz("a")', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
})

describe('A função encode() deve:', () => {
  it('Existir', () => {
    expect(typeof encode).toBe('function');
  });

  it('Retornar "1 2 3 4 5" se encode("a e i o u")', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });

  it('Retornar "4l1, m5nd4!" se encode("ola, mundo!")', () => {
    expect(encode('ola, mundo!')).toBe('4l1, m5nd4!');
  });

  it('Verificar se o tamanho da string final é o mesmo da original', () => {
    const toEncode = 'ola, mundo!';
    expect(encode(toEncode)).toHaveLength(toEncode.length);
  });
})

describe('A função decode() deve:', () => {
  it('Existir', () => {
    expect(typeof decode).toBe('function');
  });

  it('Retornar "a e i o u" se decode("1 2 3 4 5")', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Retornar "ola, mundo!" se encode("4l1, m5nd4!")', () => {
    expect(decode('4l1, m5nd4!')).toBe('ola, mundo!');
  });

  it('Verificar se o tamanho da string final é o mesmo da original', () => {
    const toDecode = '4l1, m5nd4!';
    expect(decode(toDecode)).toHaveLength(toDecode.length);
  });
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });

  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
