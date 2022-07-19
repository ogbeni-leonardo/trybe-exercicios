// 01
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'laranja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'goiaba', 'mamão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// 02-01
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allData = {
  ...user,
  ...jobInfos,
}

const { 
  name, 
  age, 
  nationality,
  profession,
  squad,
  squadInitials,
 } = allData;

// 02-02
console.log(`Hi, my name is ${name}. I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

// 03-01
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, funcao] = saudacoes;

funcao(saudacao);

// 03-02
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// 03-03
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[...numerosPares] = numerosPares.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // [6, 8, 10, 12];

// 04
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// 05
const getPosition = (latitude, longitude) => ({ latitude, longitude });

console.log(getPosition(-19.8157, -43.9542));

// 06
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));