// 01
console.log('-'.repeat(50));

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);
}

console.log('Transformando a matriz em um array...\n');
console.log(flatten());
console.log('-'.repeat(50));

// 02
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function reduceNames() {
  return books.reduce((acc, curr) => {
    acc += `${curr.author.name}`;
    if (books.indexOf(curr) === books.length - 1) acc += '.';
    else acc += ', ';
    return acc;
  }, '');
}

console.log('Nome de todas as pessoas autoras...\n');
console.log(reduceNames());
console.log('-'.repeat(50));

// 03
function averageAge() {
  return parseInt(
    books.reduce((acc, curr) => {
      acc += curr.releaseYear - curr.author.birthYear;
      return acc;
    }, 0) / books.length,
    10
  );
}

console.log(
  'Média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados...\n'
);
console.log(averageAge());
console.log('-'.repeat(50));

// 04
function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if (acc.name.length < curr.name.length) acc = curr;
    return acc;
  });
}

console.log('O livro com o maior nome...\n');
console.log(longestNamedBook());
console.log('-'.repeat(50));

// 05
const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    acc += curr.split('').reduce((newAcc, newCurr) => {
      if (newCurr.toLowerCase() === 'a') newAcc += 1;
      return newAcc;
    }, 0);
    return acc;
  }, 0);
}

console.log(
  'Quantas vezes que aparece a letra "a" maiúscula ou minúscula...\n'
);
console.log(containsA());
console.log('-'.repeat(50));

// 06
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  return students.map((student, index, array) => {
    const media = (
      grades[index].reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) / grades[index].length
    ).toFixed(1);
    return { name: student, average: media };
  });
}

console.log(
  'Um array com itens no formato { name: nome do aluno, average: media das notas }...\n'
);
console.log(studentAverage());
console.log('-'.repeat(50));
