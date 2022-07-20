# PROJETO - REACT TESTING LIBRARY

## O QUE DEVERÁ SER DESENVOLVIDO

- Nesse projeto você escreverá testes para uma aplicação React que já está criada e configurada, utilizando **Jest** e a biblioteca **React Testing Library**.

- A aplicação contém uma implementação completa de todos os requisitos da Pokédex. Seu trabalho será, para cada requisito listado, escrever testes que garantam sua corretude. Cuidado com testes falsos positivos. Falsos positivos serão desconsiderados na avaliação.

## REQUISITOS

### 1. Teste o componente App

- Teste se o topo da aplicação contém um conjunto fixo de links de navegação:

  - O primeiro link deve possuir o texto _"Home"_;
  - O segundo link deve possuir o texto _"About"_;
  - O terceiro link deve possuir o texto _"Favorite Pokémons"_.

- Teste se a aplicação é redirecionada para a página inicial, na URL _"/"_ ao clicar no link _Home_ da barra de navegação;
- Teste se a aplicação é redirecionada para a página de _About_, na URL _"/about"_, ao clicar no link _About_ da barra de navegação;
- Teste se a aplicação é redirecionada para a página de _Pokémons Favoritados_, na URL _"/favorites"_, ao clicar no link _Favorite Pokémons_ da barra de navegação;
- Teste se a aplicação é redirecionada para a página _Not Found_ ao entrar em uma URL desconhecida.

#### O que será verificado:

- Será avaliado se o arquivo teste **App.test.js** contempla 100% dos casos de uso criados pelo Stryker.

### 2. Teste o componente About

- Teste se a página contém as informações sobre a Pokédex;
- Teste se a página contém um heading `h2` com o texto _"About Pokédex"_;
- Teste se a página contém dois parágrafos com texto sobre a Pokédex;
- Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

#### O que será verificado:

- Será avaliado se o arquivo teste **About.test.js** contempla 100% dos casos de uso criados pelo Stryker.

### 3. Teste o componente FavoritePokemons

- Teste se é exibida na tela a mensagem _"No favorite pokemon found"_, caso a pessoa não tenha pokémons favoritos;
- Teste se são exibidos todos os cards de pokémons favoritados.

#### O que será verificado:

- Será avaliado se o arquivo teste **FavoritePokemons.test.js** contempla 100% dos casos de uso criados pelo Stryker.

### 4. Teste o componente NotFound

- Teste se a página contém um heading `h2` com o texto `Page requested not found 😭`;
- Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

#### O que será verificado:

- Será avaliado se o arquivo teste **NotFound.test.js** contempla 100% dos casos de uso criados pelo Stryker.

### 5. Teste o componente Pokedex

- Teste se a página contém um heading `h2` com o texto _"Encountered pokémons"_;
- Teste se é exibido o próximo pokémon da lista quando o botão _Próximo pokémon_ é clicado:

  - O botão deve conter o texto _"Próximo pokémon"_;
  - Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;
  - O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último pokémon da lista.

- Teste se é mostrado apenas um pokémon por vez;
- Teste se a Pokédex tem os botões de filtro:

  - Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição;
  - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
  - O texto do botão deve corresponder ao **`**nome do tipo**`**, ex. _Psychic_;
  - O botão _All_ precisa estar sempre visível.

- Teste se a Pokédex contém um botão para resetar o filtro:

  - O texto do botão deve ser _All_;
  - A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão _All_ for clicado;
  - Ao carregar a página, o filtro selecionado deverá ser _All_.

#### O que será verificado:

- Será avaliado se o arquivo teste **Pokedex.test.js** contempla 100% dos casos de uso criados pelo Stryker.

### 6. Teste o componente Pokemon

- Teste se é renderizado um card com as informações de determinado pokémon:

  - O nome correto do pokémon deve ser mostrado na tela;
  - O tipo correto do pokémon deve ser mostrado na tela;
  - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>` onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;
  - A imagem do pokémon deve ser exibida. Ela deve conter um atributo **src** com a URL da imagem e um atributo **alt** com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.

- Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;
- Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;
- Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;
- Teste se existe um ícone de estrela nos pokémons favoritados:

  - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;
  - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon exibido.

#### O que será verificado:

- Será avaliado se o arquivo teste `Pokemon.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 7. Teste o componente PokemonDetails

- Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:

  - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;
  - **Não** deve existir o link de navegação para os detalhes do pokémon selecionado;
  - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;
  - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado.

- Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:

  - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do pokémon exibido;
  - Todas as localizações do pokémon devem ser mostradas na seção de detalhes;
  - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;
  - A imagem da localização deve ter um atributo `src` com a URL da localização;
  - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.

- Teste se o usuário pode favoritar um pokémon através da página de detalhes:

  - A página deve exibir um `checkbox` que permite favoritar o pokémon;
  - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o pokémon da lista de favoritos;
  - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.

#### O que será verificado:

- Será avaliado se o arquivo teste `PokemonDetails.test.js` contempla 100% dos casos de uso criados pelo Stryker.
