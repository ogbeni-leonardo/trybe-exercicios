# PROJETO - ZOO FUNCTIONS

## O QUE DEVERÁ SER DESENVOLVIDO

Você vai ser responsável por desenvolver funções que buscam informações sobre os animais do zoológico como: espécie e local de origem. Além disso, você também vai buscar dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico.

## REQUISITOS

### 1. Implemente a função `getSpeciesByIds`

Busque as espécies dos animais por meio de um **id** e retorne um array contendo todos os animais dessa espécie.

- Faça com que a função `getSpeciesByIds` possa receber vários parâmetros;
- Retorne um array vazio se a função não receber um **id**;
- Retorne as seguintes informações do arquivo **data**:

  - Se a função receber apenas um **id**, retorne a espécie do animal referente a este **id**;
  - Se a função receber vários **ids**, retorne todas as espécies referente a esses **ids**.

#### O que será testado:

- Caso receba nenhum parâmetro, é necessário retornar um array vazio;
- Ao receber como parâmetro um único **id**, retorna um array com a espécie referente a esse **id**;
- Ao receber mais de um **id**, retorna um array com as espécies referentes aos **ids**.

### 2. Implemente a função `getAnimalsOlderThan`

Ao receber uma **espécie** e uma **idade** como parâmetro, retorne se todos os animais dessa espécie possuem essa idade ou são mais velhos.

- Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

  - Os animais devem ter essa idade ou serem mais velhos.

- Retorne um valor booleano.

#### O que será testado:

- Ao passar o nome de uma **espécie** e uma **idade**, testa se todos os animais desta espécie possuem a idade mínima especificada.

### 3. Implemente a função `getEmployeeByName`

Busque as pessoas colaboradoras pelo primeiro ou último nome delas.

- Retorne um objeto vazio caso a função não receba parâmetros;
- Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:

```
{
  id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  firstName: 'Nigel',
  lastName: 'Nelson',
  managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
  responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
}
```

#### O que será testado:

- Sem parâmetros, deve retornar um objeto vazio;
- Quando informado o primeiro nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora;
- Quando informado o último nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora.

### 4. Implemente a função `getRelatedEmployees`

Verifique se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:

1.  `isManager` que será responsável por verificar se uma pessoa colaboradora é gerente:

- Retorne `true` se o **id** passado for de uma pessoa gerente;
- Retorne `false` se o **id** passado não for de uma pessoa gerente.

2.  `getRelatedEmployees` que retorna as pessoas lideradas pela gerência:

- Utilize a função `isManager` para verificar se a pessoa é gerente ou não e faça as seguintes verificações:

  - Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

    Exemplo de output:

    ```
    ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
    ```

  - Caso a pessoa não seja gerente, dispare um erro com a mensagem: `O id inserido não é de uma pessoa colaboradora gerente!`.

#### O que será testado:

- Retorna `true` se o **id** passado for de uma pessoa gerente;
- Retorna `false` se o **id** passado não for de uma pessoa gerente;
- Se o **id** passado for da pessoa gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
- Se o **id** passado não for da pessoa gerente, dispara um erro com a mensagem: `O id inserido não é de uma pessoa colaboradora gerente!`.

### 5. Implemente a função `countAnimals`

Contabilize a quantidade de espécies de animais residentes no zoológico.

A função `countAnimals` é responsável por contar a quantidade e animais que residem no zoológico.

- Retorne a quantidade de animais residentes por espécie, caso a função não receba parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

  ```
  {
    lions: 4,
    // [...]
  }
  ```

- Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

  - ao receber o argumento `{ specie: 'penguins' }`, retorna apenas a quantidade (número) de pinguins que residem no zoológico;
  - ao passar o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

#### O que será testado:

- Sem parâmetros, retorna todas as espécies e a quantidade de residentes de cada uma;
- Recebendo como parâmetro um objeto com a chave **specie**, retorna a quantidade de animais daquela espécie;
- Recebendo como parâmetro um objeto com a chave **specie** e **sex**, retorna a quantidade de animais daquela espécie, no sexo selecionado.

### 6. Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`

Implemente os testes da função `handlerElephants` para obter ao menos 80% de cobertura.

Essa função retorna informações referentes aos elefantes conforme o argumento passado:

| Argumento      | Informação                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| `count`        | retorna a quantidade de elefantes                                             |
| `names`        | retorna um array com a relação dos nomes de todos os elefantes                |
| `averageAge`   | retorna a média de idade dos elefantes                                        |
| `location`     | retorna a localização dos elefantes dentro do Zoológico                       |
| `popularity`   | retorna a popularidade dos elefantes                                          |
| `availability` | retorna um array com a relação de dias em que é possível visitar os elefantes |

- Implemente os testes nos arquivos da pasta **test** que está na raiz do projeto;
- A função `handlerElephants` já está implementada, sendo necessário apenas criar os testes;
- A função é **case sensitive**;
- Use o comando `npm test handlerElephants` para verificar se seus testes estão passando;
- Use o comando `npm run test:coverage` para testar a cobertura.

**Dicas do que você pode testar:**

- Para o argumento `count` deve retornar o número inteiro 4;
- Para o argumento `names` deve retornar um array de nomes que possui o nome 'Jefferson';
- Para o argumento `averageAge` deve retornar um número próximo a 10.5.

### 7. Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`

Implemente os testes da função `handlerElephants` para obter ao menos 90% de cobertura.

**Dicas do que você pode testar:**

- Para o argumento **location** deve retornar a string 'NW';
- Para o argumento **popularity** deve retornar um número igual ou maior a 5;
- Para o argumento **availability** deve retornar um array de dias da semana que não contém 'Monday';
- Não passando argumentos a função deve retornar `undefined`.

### 8. Implemente a função `calculateEntry`

Calcule o valor total da entrada dos visitantes do zoológico.

O valor das entradas do zoológico é calculado a partir da faixa etária, onde:

- **child**: são pessoas menores** de 18 anos;
- **adult**: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;
- **senior**: são pessoas com idade maior ou igual a 50 anos.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de `countEntrants` e `calculateEntry`.

As duas funções recebem um array no seguinte formato:

```
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```

1. `countEntrants` será responsável por calcular a quantidade de visitantes por faixa etária:

  - Ela recebe um array e deve retornar um **objeto**. Para isso:

    - Realize a soma da quantidade de visitantes por faixa etária;
    - Retorne um objeto em um formato como esse: `{ child: 3, adult: 2, senior: 1 }`.

2. `calculateEntry` será responsável por somar o valor da entrada das pessoas no zoológico:

  - Ela recebe um array e deve retornar a soma **total** dos valores do ingresso. Para isso:

    - Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;
    - Utilize a função `countEntrants` para ter a quantidade total de pessoas por faixa etária;
    - Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.

**Exemplo de uso da função `calculateEntry`:**

**Entrada:**

```
calculateEntry(entrants);
```

**Saída:**

```
187.94
```

#### O que será testado:

Na função `countEntrants`:

- Ao receber um array de visitantes, retorna um objeto com a contagem.

Na função `calculateEntry`:

- Retorna 0 se nenhum argumento for passado;
- Retorna 0 se um objeto vazio for passado;
- Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;
- Ao receber um array com 1 pessoa adulta retorna o valor correto;
- Ao receber um array com 1 pessoa mais velha retorna o valor correto;
- Ao receber um array com 1 criança retorna o valor correto;
- Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto.

### 9. Implemente a função `getSchedule`

Crie um cronograma com os horários de visita disponíveis para cada espécie de animal.

As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.

- Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: `[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

- Retorne todos os horários disponíveis para cada dia da semana caso a função:

  - não receba parâmetro;
  - o parâmetro passado para a função não seja um animal ou um dia.

  Para isso:

  - Crie um objeto e adicione todos os dias da semana como chave;
  - Os valores de cada dia da semana deve ser um objeto, possuindo as chaves `officeHour` e `exhibition`:

    - `officeHour` deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;
    - `exhibition` deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

  O retorno deve ser parecido com esse:

  ```
  {
    Tuesday: { // Dia da semana
      officeHour: 'Open from 8am until 6pm', // n
      exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
    },
    // [...]
  }
  ```

- Retorne os animais disponíveis no dia, caso o parâmetro da função seja apenas um dia da semana.

#### O que será testado:

- Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição;
- Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
- Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis.

### 10. Implemente a função `getOldestFromFirstSpecies`

Encontre o animal mais velho de uma espécie que é gerenciado por uma pessoa colaboradora.

A função recebe um parâmetro **id** referente à pessoa colaboradora e a partir desse **id**:

- Encontre a pessoa colaboradora que possui o **id** passado por parâmetro;
- Encontre a primeira espécie de animal que a pessoa colaboradora é responsável;
- Encontre o animal mais velho daquela espécie;
- Retorne um array com as informações do animal mais velho daquela espécie.

#### O que será testado:

- Passado o **id** de uma pessoa colaboradora, encontra a primeira espécie de animal gerenciado por essa pessoa, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

### 11. Implemente a função `getEmployeesCoverage`

Busque as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.

A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:

- **name**: o nome ou o sobrenome da pessoa a ser buscada;
- **id**: o id da pessoa a ser buscada.

E deve retornar um objeto no seguinte formato:

```
{
	id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
	fullName: "Sharonda Spry", // nome completo: firstName + lastName
	species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
	locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

Para isso:

- Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade **name**:

  - a propriedade **name** pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras.

- Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade **id**;
- Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;
- Lance um erro caso o **id** seja inválido.

**Exemplos de uso da função `getEmployeesCoverage`:**

Caso o parâmetro seja um objeto com **nome** e **id**, retorne as informações da pessoa colaboradora:

**Entrada:**

```
getEmployeesCoverage({ name: 'Sharonda' }); // name recebe o primeiro nome como parâmetro ou
getEmployeesCoverage({ name: 'Spry' }); // name recebe o último nome como parâmetro ou
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro
```

**Saída:**

```
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": ["otters", "frogs"],
  "locations": ["SE", "SW"]
}
```

Caso a função não receba parâmetros, retorne um array com a informação de todas as pessoas colaboradoras:

**Entrada:**

```
getEmployeesCoverage();
```

**Saída:**

```
[
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  //[...]
];
```

Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora `Error` da biblioteca padrão do JavaScript com a mensagem 'Informações inválidas'. Exemplo:

```
throw new Error('Informações inválidas');
```

#### O que será testado:

- Se o objeto de opções tiver a propriedade **name**, retorna somente a pessoa correspondente;
- A propriedade name do objeto de opções também funciona usando o segundo nome;
- Se o objeto de opções tiver a propriedade **id**, retorna somente a pessoa correspondente;
- Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas colaboradoras;
- Caso não haja nenhuma pessoa com o **name** ou **id** especificados deverá ser lançado um erro.

### 12. Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`

Implemente os testes da função `getOpeningHours` para obter ao menos 85% de cobertura.

Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

- Implemente os testes nos arquivos da pasta **test** que está na raiz do projeto;
- A função `getOpeningHours` já está implementada, sendo necessário apenas criar os testes;
- Use o comando `npm test getOpeningHours` para verificar se seus testes estão passando;
- Use o comando `npm run test:coverage` para testar a cobertura;
- O nome do dia da semana passado como argumento tem que ser em inglês;
- O horário precisa ter a seguinte formatação 'XX:XX-XM';
- As horas serão validadas na nomenclatura 'AM' e 'PM';
- A função não faz diferenciação entre maiúsculas e minúsculas.

**Dicas do que você pode testar:**

- Teste não passando argumentos. Deverá retornar o objeto:

```
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

- Para os argumentos _Monday_ e _09:00-AM_ deve retornar a string `'The zoo is closed'`;
- Para os argumentos _Tuesday_ e _09:00-AM_ deve retornar a string `'The zoo is open'`;
- Para os argumentos _Wednesday_ e _09:00-PM_ deve retornar a string `'The zoo is closed'`.

### 13. Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`

Implemente os testes da função `getOpeningHours` para obter 95% de cobertura.

**Dicas do que você pode testar:**

- Para os argumentos _Thu_ e _09:00-AM_ deve lançar uma exceção com a mensagem: `'The day must be valid. Example: Monday'`
- Para os argumentos _Friday_ e _09:00-ZM_ deve lançar uma exceção com a mensagem: `'The abbreviation must be "AM" or "PM"'`;
- Para os argumentos _Saturday_ e _C9:00-AM_ deve lançar uma exceção com a mensagem: `'The hour should represent a number'`;
- Para os argumentos _Sunday_ e _09:c0-AM_ deve lançar uma exceção com a mensagem: `'The minutes should represent a number'`.

### 14. Implemente a função `getAnimalMap`

Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.

A função `getAnimalMap` é responsável por categorizar os animais por localização, além de filtrá-los por região, nome e sexo a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies:

```
  {
    NE: [ /* dados aqui */],
    NW: [/* dados aqui */],
    SE: [/* dados aqui */],
    SW: [/* dados aqui */],
  }
```

Os parâmetros da função podem ser:

- `includeNames: true` que retorna o nome dos animais no seguinte formato:

  ```
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
  ```

- `sorted: true` que retorna o nome dos animais por ordem alfabética no seguinte formato:

  ```
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  // [...]
  ```

- `sex: male` ou `sex: female` retorna o nome dos animais que são machos ou fêmeas no seguinte formato:

  ```
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
  ```

Se o parâmetro for `{ sex: male }`, retorne apenas o nome dos animais machos e se o parâmetro for `{ sex: female }` retorne apenas o nome dos animais fêmeas.

Caso a função não receba parâmetro, as espécies dos animais devem ser categorizadas por localização e deve retornar um objeto no seguinte formato:

  ```
  {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  }
  ```

Para isso:

- Retorne a espécie de todos os animais categorizados por localização caso a função:

  - não receba parâmetro;
  - não receba o parâmetro `{includesName: true}` e receba apenas o parâmetro `{sex: female}`;
  - não receba o parâmetro `{includesName: true}` e receba apenas o parâmetro `{sex: female, sorted: true}`.

- Retorne a espécie e o nome dos animais caso a função receba apenas o parâmetro `{includesName: true}`;
- Retorne a espécie e o nome dos animais em ordem alfabética caso a função receba o parâmetro `{includesName: true, sorted: true}`;
- Retorne a espécie e o nome dos animais filtrado por sexo:

  - Retorne a espécie e o nome dos animais fêmeas, caso o parâmetro da função seja `{includesName: true, sex: female}`;
  - Retorne a espécie e o nome dos animais machos, caso o parâmetro da função seja `{includesName: true, sex: male}`.

- Retorne a espécie e o nome dos animais filtrado por sexo e por ordem alfabética:

  - Retorne a espécie e o nome dos animais fêmeas em ordem alfabética, caso o parâmetro da função seja `{includesName: true, sex: female, sorted: true}`;
  - Retorne a espécie e o nome dos animais machos em ordem alfabética, caso o parâmetro da função seja `{includesName: true, sex: male, sorted: true}`.

#### O que será testado:

- Sem parâmetros, retorna animais categorizados por localização;
- Sem a opção **includeNames** especificada, retorna animais categorizados por localização;
- Com a opção `includeNames: true` especificada, retorna nomes de animais;
- Com a opção `sorted: true` especificada, retorna nomes de animais ordenados;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sorted: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados.

### BÔNUS

### 15. Obtenha 100% de cobertura de testes na função `handlerElephants`

Implemente os testes da função `handlerElephants` para obter 100% de cobertura.

**Dicas do que você pode testar:**

- Passando por argumento um objeto vazio `({})` deve retornar a string `'Parâmetro inválido, é necessário uma string'`;
- Passada uma string que não contempla uma funcionalidade deve retornar `null`.

### 16. Obtenha ao menos 100% de cobertura de testes na função `getOpeningHours`

Implemente os testes da função `getOpeningHours` para obter 100% de cobertura.

**Dicas do que você pode testar:**

- Para os argumentos _Monday_ e _13:00-AM_ deve lançar uma exceção com a mensagem: `'The hour must be between 0 and 12'`;
- Para os argumentos _Tuesday_ e _09:60-AM_ deve lançar uma exceção com a mensagem: `'The minutes must be between 0 and 59'`.
