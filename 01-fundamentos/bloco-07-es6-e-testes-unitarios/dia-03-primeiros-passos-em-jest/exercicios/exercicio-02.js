// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialty: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialty: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialty: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialty: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialty: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialty: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let object;
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if (professionalBoard[index]['id'] === id) {
      object = professionalBoard[index];
    }
  }
  if (!object) throw new Error('ID não identificada');
  if (!object[detail]) throw new Error('Informação indisponível');
  return object[detail];
};

module.exports = searchEmployee;
