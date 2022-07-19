// 01
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`
);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`
);

console.log(
  `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`
);

// 02
let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let name in names) {
  console.log("Olá, " + names[name]);
}

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let id in car) {
  console.log(id + ": " + car[id]);
}
