// 01-01
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda, " + info.personagem);

// 01-02
info.recorrente = "Sim";

// 01-03
for (let key in info) {
  console.log(key);
}

// 01-04
for (let key in info) {
  console.log(info[key]);
}

// 01-05
let newInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in info) {
  if (key === "recorrente" && info[key] === newInfo[key]) {
    console.log("Ambos recorrentes!");
    continue;
  }
  console.log(info[key] + " e " + newInfo[key]);
}

// 01-06
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    "'" +
    leitor.livrosFavoritos[0].titulo +
    "'."
);

// 01-07
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

// 01-08
console.table(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`
);
