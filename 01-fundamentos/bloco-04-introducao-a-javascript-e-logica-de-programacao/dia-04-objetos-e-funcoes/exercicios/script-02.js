// 02-01 A PALAVRA OU FRASE É UM PALINDROMO?
function stringReversa(string) {
  return string.split("").reverse().join("");
}

function palindromo(string) {
  if (string === stringReversa(string)) return true;
  return false;
}

// 02-02 - QUAL O MAIOR VALOR DENTRO DE UM ARRAY DE NÚMEROS?
function maiorValor(array) {
  let maior;
  for (let number of array) {
    if (maior === undefined || number > maior) maior = number;
  }
  return array.indexOf(maior);
}

// 02-03 - QUAL O MENOR VALOR DENTRO DE UM ARRAY DE NÚMEROS?
function menorValor(array) {
  let menor;
  for (let number of array) {
    if (menor === undefined || number < menor) menor = number;
  }
  return array.indexOf(menor);
}

// 02-04 - QUAL O MAIOR NOME DE UM ARRAY DE STRINGS?
function maiorNome(array) {
  let nome;
  for (let name of array) {
    if (nome === undefined || name.length > nome.length) nome = name;
  }
  return nome;
}

// 02-05 QUANTAS VEZES UM NÚMERO REPETE DENTRO DO ARRAY?
function quantasRepeticoes(array) {
  // Função que verifica quantas vezes cada número aparece no array
  let object = {};
  for (let number of array) {
    if (number in object) object[number] += 1;
    else object[number] = 1;
  }
  //  Exemplo: {'1': 2, '3': 4}
  return object;
}

function maisRepetido(object) {
  // Função que verifica qual o número do objeto retornado pela função acima mais se repete
  let numero;
  let repeticoes;
  for (let key in object) {
    if (
      (numero === undefined && repeticoes == undefined) ||
      object[key] > repeticoes
    ) {
      numero = parseInt(key, 10);
      repeticoes = parseInt(key, 10);
    }
  }
  return numero;
}

// 02-06 - QUAL A SOMA DE TODOS OS NÚMEROS DE 1 ATÉ O NÚMERO INFORMADO?
function somatorio(number) {
  let total = 0;
  for (let index = 1; index <= number; index += 1) {
    total += index;
  }
  return total;
}

// 02-07 - A FRASE OU PALAVRA TERMINA COM ESTE VALOR?
function terminaCom(word, ending) {
  return word.endsWith(ending);
}
