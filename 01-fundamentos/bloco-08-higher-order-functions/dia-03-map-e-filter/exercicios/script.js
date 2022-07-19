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

console.log('-'.repeat(50));

// 01
function formattedBookNames() {
  return books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
}

console.log(
  'O array de strings deve vir no formato "NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA"...\n'
);
console.log(formattedBookNames());
console.log('-'.repeat(50));

// 02
function nameAndAge() {
  return books
    .map((book) => ({
      name: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    }))
    .sort((a, b) => a.age - b.age);
}

console.log(
  'O array de objetos deve vir no formato { name: AUTOR, age: IDADE_DO_AUTOR_NO_LANÇAMENTO_DO_LIVRO }...\n'
);
console.log(nameAndAge());
console.log('-'.repeat(50));

// 03
function fantasyOrScienceFiction() {
  return books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia';
  });
}

console.log(
  'Um array com todos os objetos que possuem gênero ficção científica ou fantasia...\n'
);
console.log(fantasyOrScienceFiction());
console.log('-'.repeat(50));

// 04
function oldBooksOrdered() {
  return books
    .filter((book) => {
      return 2022 - book.releaseYear > 60;
    })
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(
  'Um array ordenado pelos livros com mais de 60 anos de publicação ordenado pelo livro mais velho...\n'
);
console.log(oldBooksOrdered());
console.log('-'.repeat(50));

// 05
function fantasyOrScienceFictionAuthors() {
  return fantasyOrScienceFiction()
    .map((book) => book.author.name)
    .sort();
}

console.log(
  'Um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia...\n'
);
console.log(fantasyOrScienceFictionAuthors());
console.log('-'.repeat(50));

// 06
function oldBooks() {
  return oldBooksOrdered().map((book) => book.name);
}

console.log(
  'Crie um array com o nome de todos os livros com mais de 60 anos de publicação...\n'
);
console.log(oldBooks());
console.log('-'.repeat(50));

function authorWith3DotsOnName() {
  return books.filter((book) => {
    const author = book.author.name.split(' ');
    return author[0].length < 3 && author[1].length < 3 && author[2].length < 3;
  })[0].name;
}

console.log(
  'Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais...\n'
);
console.log(authorWith3DotsOnName());
console.log('-'.repeat(50));
