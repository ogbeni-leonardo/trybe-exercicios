// 03-01
function tradutorRomano(value) {
  let object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return object[value];
}

function valorRomano(string) {
  let caractereAnterior;
  let total = 0;
  for (let char of string.split("")) {
    if (caractereAnterior === undefined) caractereAnterior = char;
    total += tradutorRomano(char);
    if (tradutorRomano(char) > tradutorRomano(caractereAnterior)) {
      total -= tradutorRomano(caractereAnterior) * 2;
    }
    caractereAnterior = char;
  }
  return total;
}

// 03-02
function arrayOfNumbers(vectors) {
  let pares = [];
  for (let vector of vectors) {
    for (let number of vector) {
      if (number % 2 === 0) pares.push(number);
    }
  }
  return pares;
}

// 03-03
const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function repeticaoDeFrutas(array) {
  let object = {};
  for (let fruit of array) {
    if (fruit in object) object[fruit] += 1;
    else object[fruit] = 1;
  }
  return object;
}

function relatorioDaCesta(object) {
  let texto = "Sua cesta possui: ";
  for (let key in object) {
    texto += `${object[key]} ${key}${object[key] > 1 ? "s" : ""}, `;
  }
  return texto;
}

// 03-04
let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

let ultimoMorador = moradores["blocoDois"][1];

console.log(
  `O morador do bloco 2 de nome ${ultimoMorador.nome} ${ultimoMorador.sobrenome} mora no ${ultimoMorador.andar}° andar, apartamento ${ultimoMorador.apartamento}.`
);

// 03-05
for (let key in moradores) {
  console.log(`${"-".repeat(10)} Moradores do ${key} ${"-".repeat(10)}`);
  for (let group of moradores[key]) {
    console.log(`${group.nome} ${group.sobrenome}`);
  }
  console.log("");
}
