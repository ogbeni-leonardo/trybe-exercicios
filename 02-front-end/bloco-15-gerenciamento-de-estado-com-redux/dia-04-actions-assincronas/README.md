# EXERCÍCIOS

## EXERCÍCIO 1

Nesse exercício, utilizaremos [essa API](https://aws.random.cat/meow) para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma **action assíncrona** e na implementação do `thunk` na `store`. O `reducer`, assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos **_actions/index.js_** e **_store/index.js_**.

Nessa aplicação, temos dois componentes:

1.  `Gallery`: renderiza uma imagem a partir de uma _URL_ armazenada no estado global da aplicação;
2.  `Button`: renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a _URL_ no estado global por meio de uma `action` assíncrona.

Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da action assíncrona. Para isso:

1.  Instale as dependências necessárias para a aplicação: `redux`, `react-redux`, `redux-thunk`;
2.  Faça as implementações necessárias na `store`;
3.  No arquivo **_actions/index.js_**, desenvolva a action assíncrona necessária para a aplicação rodar adequadamente. Essa action assíncrona deverá fazer o uso de outras duas actions:

- `requestAPI`: para informar ao usuário que a informação solicitada está carregando;
- `getPicture`: para salvar no estado global da aplicação a _URL_ da imagem solicitada da API.
