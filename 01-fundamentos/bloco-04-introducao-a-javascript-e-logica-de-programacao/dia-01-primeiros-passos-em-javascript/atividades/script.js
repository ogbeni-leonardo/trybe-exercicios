// 01
const myName = "Leonardo";
const birthCity = "Pedro Velho";
let birthYear = 1999;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity = "Arês"; // O erro acontece porque é uma constante e não pode ser alterada

// 02
const base = 5;
const height = 8;

const area = base * height;
console.log(area);

const perimeter = 2 * (base + height);
console.log(perimeter);

// 03
const value = 60;

if (value >= 80) {
  console.log("Parabéns, você foi aprovado(a)!");
} else if (value < 80 && value >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovado(a)!");
}

// 04
const currentHour = 22;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir.";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado.";
}

console.log(message);

// 05
let weekDay = "sábado";

if (weekDay === "sábado" || weekDay === "domingo") {
  console.log("FINALMENTE, descanso merecido UHUUL!");
} else {
  console.log("Oba, mais um dia de aprendizado na Trybe!!!");
}

// 06
let result = "aprovado";

switch (result) {
  case "aprovado":
    console.log("Parabéns, você foi aprovado(a)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;
  case "reprovado":
    console.log("Você foi reprovado(a)!");
    break;
  default:
    console.log("Não se aplica.");
}
