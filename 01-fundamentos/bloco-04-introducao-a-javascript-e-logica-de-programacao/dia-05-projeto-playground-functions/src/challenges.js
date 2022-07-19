// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let bigger;
  let repeat;

  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (index === 0 || number > bigger) {
      bigger = number;
      repeat = 1;
    } else if (number === bigger) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Calculando a disntância do rato e dos gatos com um valor absoluto (sem negativos)
  let distance1 = Math.abs(mouse - cat1); // -1
  let distance2 = Math.abs(mouse - cat2); // -1

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function divisivelPor(dividendo, divisor) {
  if (dividendo % divisor === 0) return true;
  return false;
}

function message(number) {
  if (divisivelPor(number, 3) && divisivelPor(number, 5)) return 'fizzBuzz';
  if (divisivelPor(number, 3)) return 'fizz';
  if (divisivelPor(number, 5)) return 'buzz';
  return 'bug!';
}

function fizzBuzz(array) {
  let resultado = [];
  for (let number of array) {
    resultado.push(message(number));
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let charChange = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let text = '';
  for (let letter of string) {
    if (letter in charChange) {
      text += charChange[letter];
    } else {
      text += letter;
    }
  }
  return text;
}

function decode(string) {
  let numberChange = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let text = '';
  for (let letter of string) {
    if (letter in numberChange) {
      text += numberChange[letter];
    } else {
      text += letter;
    }
  }
  return text;
}

// Desafio 10
function techList(array, username) {
  let list = array.sort();
  let objects = [];
  if (array.length > 0) {
    for (let skill of list) {
      objects.push(
        { tech: skill, name: username },
      );
    }
    return objects;
  }
  return 'Vazio!';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
