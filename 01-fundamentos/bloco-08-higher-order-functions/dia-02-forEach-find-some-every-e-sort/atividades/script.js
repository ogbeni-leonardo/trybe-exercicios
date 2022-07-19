// 01
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// 02-01
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((item) => item % 3 === 0 && item % 5 === 0);
};

console.log(findDivisibleBy3And5());

// 02-02
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((item) => item.length === 5);
};

console.log(findNameWithFiveLetters());

// 02-03
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((item) => item.id === id);
}

console.log(findMusic('31031685'));

// 03-01
const namesToSome = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((item) => item === name);
};

console.log(hasName(namesToSome, 'Ana'));

// 03-02
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((item) => item.age >= minimumAge);
};

console.log(verifyAges(people, 18));

// 04-01
people.sort((a, b) => a.age - b.age);

console.log(people);

// 04-02
people.sort((a, b) => b.age - a.age);

console.log(people);
