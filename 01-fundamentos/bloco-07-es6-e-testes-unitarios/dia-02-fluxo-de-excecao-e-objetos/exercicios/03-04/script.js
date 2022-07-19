const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionarTurno(objeto, chave, valor) {
  objeto[chave] = valor;
}

function todasChaves(object) {
  return Object.keys(object);
}

function tamanhoObjeto(object) {
  return Object.keys(object).length;
}

function todosValores(object) {
  return Object.values(object);
}

adicionarTurno(lesson2, 'turno', 'noite');

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function somaTotalDeAlunos(objeto) {
  const values = todosValores(objeto);
  const sum = values.reduce((acc, cur) => acc + cur.numeroEstudantes, 0);
  return sum;
}

function valorChave(object, index) {
  return todosValores(object)[index];
}

function chaveValorExiste(object, key, value) {
  if (!object[key] || object[key] !== value) return false;
  return true;
}

// 04

function totalDeMatematicos(object) {
  let counter = 0;
  for (let key in object) {
    const arrayDeValores = Object.values(object[key]);
    if (arrayDeValores.includes('Matemática')) {
      counter += arrayDeValores[1];
    }
  }
  return counter;
}

function relatorio(object, name) {
  let materias = [];
  let alunos = 0;
  for (let key in object) {
    const arrayDeValores = Object.values(object[key]);
    if (arrayDeValores.includes(name)) {
      materias.push(arrayDeValores[0]);
      alunos += arrayDeValores[1];
    }
  }
  const field = {
    professor: name,
    aulas: materias,
    estudantes: alunos
  }
  return field;
}
