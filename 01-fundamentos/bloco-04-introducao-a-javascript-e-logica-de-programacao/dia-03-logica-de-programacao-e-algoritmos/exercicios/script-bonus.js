// 05
console.log("------ Exercício 05 ------");

let n = 5;

for (let counter = 0; counter < n; counter += 1) {
  console.log(`${"*".repeat(n)}`);
}

// 06
console.log("------ Exercício 06 ------");

for (let counter = 1; counter <= n; counter += 1) {
  console.log(`${"*".repeat(counter)}`);
}

// 07
console.log("------ Exercício 07 ------");
for (let counter = n - 1; counter >= 0; counter -= 1) {
  console.log(`${" ".repeat(counter)}${"*".repeat(n - counter)}`);
}

// 08
console.log("------ Exercício 08 ------");
n = 7;
let center = (n + 1) / 2;
let whiteSpace = center - 1;
let numeroAsteriscos = n % 2 === 0 ? 2 : 1;

for (let counter = 1; counter < n; counter += 1) {
  console.log(`${" ".repeat(whiteSpace)}${"*".repeat(numeroAsteriscos)}`);

  numeroAsteriscos += 2;
  whiteSpace -= 1;
  if (numeroAsteriscos > n) break;
}

// 09
console.log("------ Exercício 09 ------");
n = 11;
center = (n + 1) / 2;
whiteSpace = center - 1;
numeroAsteriscos = 1;

for (let counter = 1; counter < n; counter += 1) {
  let asteriscoLinha = " ".repeat(whiteSpace);

  if (numeroAsteriscos < n) {
    for (
      let counterText = 1;
      counterText <= numeroAsteriscos;
      counterText += 1
    ) {
      if (counterText === 1 || counterText === numeroAsteriscos) {
        asteriscoLinha += "*";
      } else {
        asteriscoLinha += " ";
      }
    }
  } else {
    asteriscoLinha = "*".repeat(n);
  }

  console.log(asteriscoLinha);

  numeroAsteriscos += 2;
  whiteSpace -= 1;

  if (numeroAsteriscos > n) break;
}

// 10
console.log("------ Exercício 10 ------");
const ePrimo = 17;
let counter = 0;

for (let index = 1; index <= ePrimo; index += 1) {
  if (ePrimo % index === 0) counter += 1;
}

if (counter > 2) console.log("O número " + ePrimo + " não é primo");
else console.log("O número " + ePrimo + " é primo");
