// 01
const factorial = (number, sort = false) => {
  let total = 1;
  const items = [];
  for (let counter = 1; counter <= number; counter += 1) {
    total *= counter;
    items.push(counter);
  }
  return `${number}! = ${
    sort ? items.join(' * ') : items.reverse().join(' * ')
  } = ${total}`;
};

console.log(factorial(4, true));

// 02
const longestWord = (phrase) => {
  let string = phrase
    .split(' ')
    .reduce((acc, word) => (acc.length < word.length ? word : acc));
  return string;
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);

// 04
const replaceXString = (string) =>
  'Tryber x aqui!'.split('x').join(`${string}`);

const skills = ['Python', 'HTML', 'JavaScript', 'CSS', 'Git'];

const concatItems = (string) => {
  return `${string} Minhas cinco principais habilidades são: ${skills
    .sort()
    .join('; ')} #goTrybe.`;
};

console.log(concatItems(replaceXString('Bebeto')));
