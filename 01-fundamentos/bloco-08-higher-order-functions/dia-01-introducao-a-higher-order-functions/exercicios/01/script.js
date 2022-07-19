// 01
const person = (name) => ({
  name,
  email: `${name.split(' ').join('_').toLowerCase()}@trybe.com`,
});

const newEmployees = (callback) => ({
  id1: callback('Pedro Guerra'),
  id2: callback('Luiza Drumond'),
  id3: callback('Carla Paiva'),
});

console.log(newEmployees(person));

// 02
const haveYouSort = (numberOfPerson, randomNumber) => {
  return true ? numberOfPerson === randomNumber : false;
};

const checkToWin = (number, callback) => {
  const randomNumber = Math.round(Math.random() * 4 + 1);
  if (callback(number, randomNumber)) return 'Parabéns você ganhou!';
  return 'Tente novamente!';
};

console.log(checkToWin(3, haveYouSort));

// 03
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (resolution, answer) => {
  if (!answer || answer === 'N.A') return 0;
  if (answer === resolution) return 1;
  if (answer !== resolution) return -0.5;
};

const approve = (resolution, answers, callback) => {
  let points = 0;
  for (let index = 0; index < resolution.length; index += 1) {
    const value = callback(resolution[index], answers[index]);
    if (!(value < 1 && points === 0)) {
      points += value;
    }
  }
  return points;
};

console.log(approve(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
