// 01
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

// 02
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

// 03
menu.push("Contato");

console.log(menu);

// 04
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

// 05
let names = ["João", "Maria", "Antônio", "Margarida"];

for (item of names) {
  console.log(item);
}
