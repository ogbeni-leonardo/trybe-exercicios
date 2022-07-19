// Desafio 11
function repeatNumber(array) {
  let object = {};
  for (let number of array) {
    if (number in object) object[number] += 1;
    else object[number] = 1;
  }
  return object;
}

function validNumber(number) {
  if (number <= 9 && number >= 0) return true;
  return false;
}

function formatPhoneNumber(array) {
  let phoneNumber = `(${array[0]}${array[1]}) `;
  for (let index = 2; index < array.length; index += 1) {
    phoneNumber += array[index];
    if (index === 6) phoneNumber += '-';
  }
  return phoneNumber;
}

function generatePhoneNumber(array) {
  // Se o tamanho for diferente de 11
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  // Se algum número se repete mais de 2 vezes ou se ele não for válido
  let numbersRepetition = repeatNumber(array);
  for (let key in numbersRepetition) {
    if (numbersRepetition[key] > 2 || validNumber(parseInt(key, 10)) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Retornando o número já formatado
  return formatPhoneNumber(array);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) return true;
  return false;
}

// Desafio 13
function hydrate(string) {
  let list = string.split(' ');
  let counter = 0;
  for (let word of list) {
    if (parseInt(word, 10)) {
      counter += parseInt(word, 10);
    }
  }
  return `${counter} ${(counter > 1) ? 'copos' : 'copo'} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
