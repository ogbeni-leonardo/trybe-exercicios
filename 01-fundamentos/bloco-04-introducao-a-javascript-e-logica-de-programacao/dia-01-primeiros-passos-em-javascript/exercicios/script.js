// 01
const a = 5;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 02
const one = 17;
const two = 12;

if (one > two) {
  console.log("O primeiro número é o maior!");
} else {
  console.log("O segundo número é o maior!");
}

// 03
const three = 21;

if (one > two && one > three) {
  console.log("O primeiro número é o maior!");
} else if (two > one && two > three) {
  console.log("O segundo número é o maior!");
} else {
  console.log("O terceiro número é o maior!");
}

// 04
const result = three - two;

if (result > 0) {
  console.log("positive");
} else if (result === 0) {
  console.log("zero");
} else {
  console.log("negative");
}

// 05
const x = 45;
const y = 60;
const z = 76;

console.log(x + y + z === 180 ? "true" : "false");

// 06
let piece = "RoOk";

console.log(
  piece.toLowerCase() === "rook"
    ? "It may move any number of squares horizontally or vertically without jumping."
    : "Error!"
);

// 07
let percent = 2;

if (percent >= 90) {
  console.log("A sua nota foi A!");
} else if (percent >= 80) {
  console.log("A sua nota foi B!");
} else if (percent >= 70) {
  console.log("A sua nota foi C!");
} else if (percent >= 60) {
  console.log("A sua nota foi D!");
} else if (percent >= 50) {
  console.log("A sua nota foi E!");
} else if (percent < 50 && percent > 0) {
  console.log("A sua nota foi F!");
} else {
  console.log("Error!");
}

// 08
const numberOne = 3;
const numberTwo = 6;
const numberThree = 9;

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
  console.log("true");
}

// 09
if (numberOne % 2 === 1 || numberTwo % 2 === 1 || numberThree % 2 === 1) {
  console.log("true");
}

// 10
const price = 132.99;
const value = 159.99;

const profit = value - price;

if (price > 0 && value > 0) {
  console.log(
    "Ao vender mil desse desse produto você obteve um lucro de R$" +
      (profit * 1000).toFixed(2) +
      ". Considere o fato de que 20% do custo inicial do produto era de impostos. Assim, foram gastos com impostos um total de R$" +
      (price * 0.2 * 1000).toFixed(2) +
      "."
  );
} else {
  console.log("Error!");
}

// 11
let salary = 3000;

if (salary <= 1556.94) {
  salary -= salary * 0.08;
} else if (salary >= 1556.95 && salary <= 2594.92) {
  salary -= salary * 0.09;
} else if (salary >= 2594.93 && salary <= 5189.82) {
  salary -= salary * 0.11;
} else if (salary > 5189.82) {
  salary -= 570.88;
}

console.log(
  "O valor líquido do seu salário sendo descontado o INSS é de R$" +
    salary.toFixed(2)
);

let message = "";

if (salary <= 1903.98) {
  message = "Você está isento de imposto de renda!";
} else if (salary >= 1903.99 && salary <= 2826.65) {
  salary -= salary * 0.075;
  salary += 142.8;
} else if (salary >= 2826.66 && salary <= 3751.05) {
  salary -= salary * 0.15;
  salary += 354.8;
} else if (salary >= 3751.06 && salary <= 4664.68) {
  salary -= salary * 0.225;
  salary += 636.13;
} else if (salary > 4664.68) {
  salary -= salary * 0.275;
  salary += 869.36;
}

if (message.length > 0) {
  console.log(message);
} else {
  console.log(
    "Deduzindo o imposto de renda você terá o valor total de R$" + salary
  );
}
