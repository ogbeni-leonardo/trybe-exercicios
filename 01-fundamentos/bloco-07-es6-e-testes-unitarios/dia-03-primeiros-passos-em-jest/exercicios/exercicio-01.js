function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

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
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate
};
