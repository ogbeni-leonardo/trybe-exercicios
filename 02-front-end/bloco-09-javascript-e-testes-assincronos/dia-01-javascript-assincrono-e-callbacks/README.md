# ATIVIDADES DE FIXAÇÃO

## ATIVIDADE 01

#### 1. Adicione uma callback como parâmetro da função `getUser`

No código abaixo você tem a função `getUser`, que define um objeto com os dados de uma pessoa. Complete a função `getUser` de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:

- Insira o retorno da função `getUser`;
- Complete a chamada da função `getUser` de modo que o retorno seja: `'Hello! My name is Ivan Ivanovich'`;
- Complete a chamada da função `getUser` de modo que o retorno seja: `'Ivan is Russian'`.

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
```

#### 2. Passe, como parâmetro e como retorno, uma callback para a função `getUser`

No código abaixo você tem a função `getUser` modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função `getUser` de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:

- Insira uma callback como parâmetro da função `getUser`;
- Retorne a callback passada como parâmetro na função `getUser`.

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
```

## ATIVIDADE 02

#### 1. Adicione uma callback e trate o erro retornado

A função `getCountry` abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.

- Adicione um segundo parâmetro, que deve ser uma callback, na função `getCountry`;
- Retorne essa callback na função `getCountry` de forma que trate a mensagem de erro.

```
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
```

# EXERCÍCIOS

## EXERCÍCIO 01

Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
```

## EXERCÍCIO 02

Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
```

## EXERCÍCIO 03

A função `getPlanet` abaixo imprime o planeta Marte de forma síncrona. Modifique `getPlanet`, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
```

## EXERCÍCIO 04

Suponha que você precise simular uma mensagem enviada do robô **Curiosity** de Marte para a Terra. O **Curiosity** envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função `sendMarsTemperature`, que imprime a temperatura em Marte.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
```

## EXERCÍCIO 05

Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô **Curiosity** o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função `sendMarsTemperature` uma callback que contenha as ações a serem tomadas em cima da temperatura.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
```

## EXERCÍCIO 06

Por fim, o robô **Curiosity** tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função `sendMarsTemperature` uma outra callback que contenha as ações a serem tomadas em caso de falha.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```

## EXERCÍCIO 07

Escreva um teste que verifique a chamada da callback de uma função `uppercase`, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos-positivos em testes assíncronos.

```
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
```

## EXERCÍCIO 08

Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do **Professor Carvalho**, você é informado de que existem três pokémons disponíveis: **Bulbasaur**, **Charmander** e **Squirtle**. Complete a chamada da função `getPokemonDetails` de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do **Professor Carvalho** apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

```
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails();

module.exports = {
  getPokemonDetails,
};
```

## EXERCÍCIO 09

A fim de evitar que futuros treinadores sejam prejudicados, o **Professor Carvalho** pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo **.test.js** ou **.spec.js** e copie o código abaixo. Complete os testes para a função `getPokemonDetails` de acordo com as especificações.

```
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});
```

## EXERCÍCIO 10

Para este exercício, tente adivinhar a saída dos `console.log` dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do `beforeEach` e do `afterEach`.

```
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```
