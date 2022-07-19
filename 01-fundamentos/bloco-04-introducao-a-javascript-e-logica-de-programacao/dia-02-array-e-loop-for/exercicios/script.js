let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 01-01
for (number of numbers) {
  console.log(number);
}

// 01-02

let sum = 0;

for (number of numbers) {
  sum += number;
}

console.log(sum);

// 01-03
let mean = sum / numbers.length;

console.log(mean);

// 01-04
if (mean > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

// 01-05
let bigger = 0;

for (number of numbers) {
  if (number > bigger) {
    bigger = number;
  }
}

console.log(bigger);

// 01-06
let odd = [];

for (number of numbers) {
  if (number % 2 === 1) {
    odd.push(number);
  }
}

if (odd.length > 0) {
  console.log(
    "Foram encontrados " +
      odd.length +
      " números ímpares. Eles são: " +
      odd +
      "."
  );
} else {
  console.log("Nenhum valor ímpar encontrado.");
}

// 01-07
let smaller = bigger;

for (number of numbers) {
  if (number < smaller) {
    smaller = number;
  }
}

console.log(smaller);

// 01-08
let array = [];

for (let counter = 1; counter <= 25; counter += 1) {
  array.push(counter);
}

console.log(array);

// 01-09
for (number of array) {
  console.log(number + " / 2 = " + number / 2);
}

// 02-01
let nossaLista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let frente = 1; frente < nossaLista.length; frente += 1) {
  for (let tras = 0; tras < frente; tras += 1) {
    let posicaoFrente = nossaLista[frente];
    let posicaoAnterior = nossaLista[tras];

    if (posicaoFrente < posicaoAnterior) {
      nossaLista[tras] = posicaoFrente;
      nossaLista[frente] = posicaoAnterior;
    }
  }
}

console.log(nossaLista);

// 02-02
console.log(nossaLista.reverse());

// 02-03
let novaLista = nossaLista;

for (let index = 0; index < novaLista.length; index += 1) {
  if (novaLista.length - 1 > index) {
    novaLista[index] *= novaLista[index + 1];
  } else {
    novaLista[index] *= 2;
  }
}

console.log(novaLista);
