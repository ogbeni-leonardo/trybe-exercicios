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

// 01
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

console.log(
  `A primeira pessoa autora nascida no ano de 1947 é: ${authorBornIn1947()}`
);
console.log('--'.repeat(38));

// 02
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (nameBook === undefined || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

console.log(`O livro com o menor nome da lista é: ${smallerName()}`);
console.log('--'.repeat(38));

// 03
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

console.log('O primeiro livro cujo nome possui 26 caracteres é:\n');
console.log(getNamedBook());
console.log('--'.repeat(38));

// 04
function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
}

booksOrderedByReleaseYearDesc();

console.log('Aqui estão todos os livros ordenados em ordem decrescente...\n');
console.log(books);
console.log('--'.repeat(38));

// 05
function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    book.author.birthYear > 1900 && book.author.birthYear < 2001;
  });
}

console.log(
  `Todas as pessoas autoras nasceram no século XX? ${everyoneWasBornOnSecXX()}`
);
console.log('--'.repeat(38));

// 06
function someBookWasReleaseOnThe80s() {
  return books.some((book) => {
    return book.releaseYear > 1979 && book.releaseYear < 1990;
  });
}

console.log(
  `Algum livro foi lançado na década de 80? ${someBookWasReleaseOnThe80s()}`
);
console.log('--'.repeat(38));

// 07
function theSameBirthYear() {
  return !books.some((bookSomeOne) => {
    return books.some((bookSomeTwo) => {
      return (
        bookSomeOne.author.birthYear === bookSomeTwo.author.birthYear &&
        bookSomeOne.author.name !== bookSomeTwo.author.name
      );
    });
  });
}

console.log(
  `Todas as pessoas autoras nasceram em anos diferentes? ${theSameBirthYear()}`
);

console.log('--'.repeat(38));
