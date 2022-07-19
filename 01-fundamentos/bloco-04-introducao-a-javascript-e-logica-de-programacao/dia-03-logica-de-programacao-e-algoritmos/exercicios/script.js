// 01
let factorial = 10;

let numbers = [];

for (let counter = 1; counter <= factorial; counter += 1) {
  numbers.unshift(counter);
}

let total = 1;

for (number of numbers) {
  total *= number;
}

console.log(total);

// 02
let word = "leonardo araújo";
let array = [];

for (letter of word) {
  array.unshift(letter);
}

word = "";

for (letter of array) {
  word += letter;
}

console.log(word);

// 03
let langs = ["java", "javascript", "python", "html", "css"];

let counter = 0;
let bigger = "";

for (language of langs) {
  if (language.length > counter) {
    bigger = language;
    counter = language.length;
  }
}

console.log(bigger);

// 04
let current = 50;

let prime = [];

for (let index = 1; index <= current; index += 1) {
  let itsPrime = [];
  for (let newIndex = 1; newIndex <= index; newIndex += 1) {
    if (index % newIndex === 0) {
      itsPrime.push(newIndex);
      if (itsPrime.length > 2) {
        break;
      }

      if (index === newIndex) {
        prime.push(index);
      }
    }
  }
}

console.log(
  `Dentre 1-${number}, o maior número primo é o ${prime[prime.length - 1]}.`
);
