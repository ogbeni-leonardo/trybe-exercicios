# EXERCÍCIOS

# EXERCÍCIO 01

Vamos construir um estado gerenciado pelo Redux e vamos realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux. O código inicial será disponibilizado a seguir:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      button {
        height: 50px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>Color: <span id="value">white</span></p>
      <button id="previous">Previous color</button>
      <button id="next">Next color</button>
    </div>
    <script>
      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
    </script>
  </body>
</html>
```

1. Crie uma store para a nossa aplicação;
2. Crie um **_reducer_**, implementando um `switch` retornando apenas o estado inicial como **default**. Não se esqueça de colocar o **_reducer_** como parâmetro para o `createStore`, feito na etapa anterior;
3. Incremente o `switch` criado no exercício anterior com os cases _NEXT_COLOR_ e _PREVIOUS_COLOR_. Essas **_actions_** devem alterar o valor index guardado no _INITIAL_STATE_. Atente-se aos limites de tamanho do **_array_**, as posições devem iniciar em 0 e não podem exceder a numeração do último item do **_array_**;
4. Crie **_eventListeners_** que escutam os cliques de cada botão, o _Previous color_ e o _Next color_, e realizam um `dispatch` com as respectivas **_actions_**.
5. Faça o `subscribe` da store, alterando o **innerHTML** da tag com **id** _value_ para a cor atual e o **style** do elemento com **id** container. Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida;
6. Crie um botão com o texto _'Random color'_, um **_eventListener_** e uma **_action_** no **_reducer_** adicionando uma cor aleatória ao **_array_** `colors` guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela. Para facilitar, segue uma função que gera cores aleatórias:

```
function createColor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    const random = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        color += oneChar[random()];
    }
    return color;
}
```

As cores criadas randomicamente devem ser armazenadas no array. Dessa forma, com os botões de Next color e Previous color, poderemos trafegar entre as cores padrões e as randômicas. Utilize o spread operator para adicionar cada cor randômica.

## EXERCÍCIO 02

Vamos fazer uma aplicação que combina dois **_reducers_**: um para o tema (light mode e dark mode) e outro para o status do usuário (online e offline). Um botão deverá mudar o tema e outro botão deverá mudar o status. O código inicial está disponibilizado a seguir:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Trybe</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.js"></script>
    <style>
      body {
        color: white;
        background-color: #333;
        font-family: sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status">Offline</span></p>
      <button id="toggle-theme">Light Mode</button>
      <button id="toggle-status">Ficar Online</button>
    </div>
    <script>
      const THEME_INITIAL_STATE = {
        theme: 'dark',
      };

      const themeReducer = (state = THEME_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const STATUS_INITIAL_STATE = {
        status: 'offline',
      };

      const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const themeButton = document.getElementById('toggle-theme');
      const statusButton = document.getElementById('toggle-status');

      themeButton.addEventListener('click', () => {
        // coloque o código aqui.
      });

      statusButton.addEventListener('click', () => {
        // coloque o código aqui.
      });
    </script>
  </body>
</html>
```

1. Combine os **_reducers_** existentes com a função `combineReducers` e salve-o em uma constante;
2. Crie uma **_store_** com a combinação dos **_reducers_**;
3. Adicione um case dentro do `switch` de cada um dos **_reducers_** para alterar os estados _theme_ e _status_. O objetivo do `themeReducer` é alternar o theme entre 'light' e 'dark'. O objetivo do `statusReducer` é alternar o status entre 'offline' e 'online';
4. Faça o `dispatch` de cada uma das actions ao clicar nos respectivos botões;
5. Adicione um `store.subscribe()` para atualizar as seguintes informações na página:

- Se o tema for light, o `body` deverá possuir uma cor de fundo escura e uma letra clara;
- Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura;
- Se o status for online, o status deverá possuir o texto _'Online'_. Se o status for offline, o status deverá possuir o texto _'Offline'_;
- Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.
