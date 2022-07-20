# PROJETO - TRYBETUNES

## O QUE DEVERÁ SER DESENVOLVIDO

Neste projeto você irá criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

- Fazer login;
- Pesquisar por uma banda ou artista;
- Listar os álbuns disponíveis dessa banda ou artista;
- Visualizar as músicas de um álbum selecionado;
- Reproduzir uma prévia das músicas deste álbum;
- Favoritar e desfavoritar músicas;
- Ver a lista de músicas favoritas;
- Ver o perfil da pessoa logada;
- Editar o perfil da pessoa logada.

## REQUISITOS

### 1. Crie as rotas necessárias para a aplicação

Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta **src/pages**, conforme o indicado abaixo:

- A rota _"/"_ deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;
- A rota _"/search"_ deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;
- A rota _"/album/:id"_ deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;
- A rota _"/favorites"_ deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;
- A rota _"/profile"_ deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;
- A rota _"/profile/edit"_ deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;
- Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`.

#### O que será verificado:

- A rota _"/"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-login"_;
- A rota _"/search"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-search"_;
- A rota _"/album/:id"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-album"_;
- A rota _"/favorites"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-favorites"_;
- A rota _"/profile"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-profile"_;
- A rota _"/profile/edit"_ é uma rota existente e que renderiza um componente com o **data-testid** com valor _"page-profile-edit"_;
- Existe uma página para rotas não mapeadas e que renderiza um componente com o **data-testid** com valor _"page-not-found"_.

### 2. Crie um formulário para identificação

Dentro do componente `Login`, que é renderizado na rota _"/"_, crie um formulário para que a pessoa usuária se identifique com um nome:

- Você deve criar um campo para que a pessoa usuária insira seu nome. Este campo deverá ter o atributo `data-testid="login-name-input"`;
- Crie um botão com o texto _"Entrar"_. Este botão deverá ter o atributo `data-testid="login-submit-button"`;
- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres;
- Ao clicar no botão _Entrar_, utilize a função `createUser` da `userAPI` para salvar o nome digitado. A função `createUser` espera receber como argumento um objeto com as informações da pessoa:

```
createUser({ name: 'Nome digitado' });
```

- Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto _"Carregando..."_ deve aparecer na tela;
- Após a informação ter sido salva, faça um redirect para a rota _"/search"_.

#### O que será verificado:

- Ao navegar para a rota _"/"_, o `input` e o botão especificados estão presentes;
- O botão só é habilitado se o `input` de nome tiver 3 ou mais caracteres;
- Ao clicar no botão habilitado, a função `createUser` da `userAPI` é chamada;
- Ao clicar no botão, a mensagem _"Carregando..."_ é exibida e após a resposta da API acontece o redirecionamento para a rota _"/search"_.

### 3. Crie um componente de cabeçalho

Crie um componente chamado Header, dentro da pasta **src/components**:

- Crie esse componente com a tag `header` envolvendo todo seu conteúdo e com o atributo `data-testid="header-component"`;
- Renderize o componente de cabeçalho nas páginas das rotas _"/search"_, _"/album/:id"_, _"/favorites"_, _"/profile"_ e _"/profile/edit"_;
- Utilize a função `getUser` da `userAPI` para recuperar o nome da pessoa logada e exiba essa informação na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="header-user-name"`;
- Enquanto estiver aguardando a resposta da `getUser`, exiba apenas a mensagem de _"Carregando..."_.

#### O que será verificado:

- O componente `Header` é renderizado na página _"/search"_;
- O componente `Header` é renderizado na página _"/album/:id"_;
- O componente `Header` é renderizado na página _"/favorites"_;
- O componente `Header` é renderizado na página _"/profile"_;
- O componente `Header` é renderizado na página _"/profile/edit"_;
- A função `getUser` é chamada ao renderizar o componente;
- A mensagem de _"Carregando..."_ é exibida ao renderizar o componente e é removida após o retorno da API;
- O nome da pessoa usuária está presente na tela após o retorno da API.

### 4. Crie os links de navegação no cabeçalho

**Crie o link que redireciona para a página de pesquisa:**

- O link que redireciona para a página de pesquisa deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-search"`.

**Crie o link que redireciona para a página de músicas favoritas:**

- O link que redireciona para a página de músicas favoritas deve estar dentro do componente `Header` e possuir o atributo `data-testid="link-to-favorites"`.

**Crie o link que redireciona para a página de exibição de perfil:**

- O link que redireciona para a página de exibição de perfil deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-profile"`.

#### O que será verificado:

- Os links de navegação são exibidos na página de pesquisa;
- A navegação entre a página de pesquisa e a página de músicas favoritas ocorre corretamente;
- A navegação entre a página de pesquisa e a página de exibição do perfil ocorre corretamente;
- Os links de navegação são exibidos na página do álbum;
- A navegação entre a página do álbum e a página de pesquisa ocorre corretamente;
- A navegação entre a página do álbum e a página de músicas favoritas ocorre corretamente;
- A navegação entre a página do álbum e a página de exibição do perfil ocorre corretamente;
- Os links de navegação são exibidos na página de músicas favoritas;
- A navegação entre a página de músicas favoritas e a página de pesquisa ocorre corretamente;
- A navegação entre a página de músicas favoritas e a página de exibição perfil ocorre corretamente;
- Os links de navegação são exibidos na página de exibição do perfil;
- A navegação entre a página de exibição do perfil e a página de pesquisa ocorre corretamente;
- A navegação entre a página de exibição do perfil e a página de músicas favoritas ocorre corretamente;
- Os links de navegação são exibidos na página de edição do perfil;
- A navegação entre a página de edição do perfil e a página de pesquisa ocorre corretamente;
- A navegação entre a página de edição do perfil e a página de músicas favoritas ocorre corretamente;
- A navegação entre a página de edição do perfil e a página de exibição do perfil ocorre corretamente.

### 5. Crie o formulário para pesquisar artistas

Este formulário deve conter um `input` e um botão para que seja possível pesquisar os álbuns de uma banda ou artista.

Crie o formulário dentro do componente `Search`, que é renderizado na rota _"/search"_:

- Crie um campo para pessoa digitar o nome da banda ou artista a ser pesquisada. Esse campo deve ter o atributo `data-testid="search-artist-input"`;
- Crie um botão com o texto _"Pesquisar"_. Esse botão deve ter o atributo `data-testid="search-artist-button"`;
- O botão só deve estar habilitado caso o nome do artista tenha 2 ou mais caracteres.

#### O que será verificado:

- Ao navegar para a rota _"/search"_, o `input` e o botão estão presentes na tela;
- O botão está habilitado somente se o `input` de nome tiver 2 ou mais caracteres.

### 6. Faça a requisição para pesquisar artistas

Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbuns da banda ou artista pesquisada.

- Ao clicar no botão de _Pesquisar_, limpe o valor do `input` e faça uma requisição utilizando a função do arquivo **searchAlbumsAPIs.js**:

- Enquanto aguarda a resposta da API, esconda o `input` e o botão de pesquisa e exiba a mensagem _"Carregando..."_ na tela;
- Após receber a resposta da requisição exibir na tela o texto `Resultado de álbuns de: <artista>`, onde `<artista>` é o nome que foi digitado no `input`;
- Liste os álbuns retornados. A API irá retorna um **_array_** de objetos. Cada objeto terá a seguinte estrutura:
- Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um **_array_** vazio. Nesse caso, a mensagem _"Nenhum álbum foi encontrado"_ deverá ser exibida;
- Ao listar os álbuns, crie um link em cada card para redirecionar para a página do álbum. Este link deve ter o atributo `` data-testid={`link-to-album-${collectionId}`} ``. Onde **collectionId** é o valor da propriedade de cada álbum;
- Este link deve redirecionar para a rota _"/album/:id"_, onde _:id_ é o valor da propriedade **collectionId** de cada álbum da lista recebida pela API.

#### O que será verificado:

- Ao clicar em `pesquisar`, a requisição é feita usando a `searchAlbumsAPI`;
- Ao clicar no botão, o texto `Resultado de álbuns de: <artista>` aparece na tela;
- Ao receber o retorno da API, os álbuns são listados na tela;
- Caso a API não retorne nenhum álbum, a mensagem _"Nenhum álbum foi encontrado"_ é exibida;
- Existe um link para cada álbum listado que redirecione para a rota _"/album/:id"_.

### 7. Crie a lista de músicas do álbum selecionado

Crie a lista dentro do componente `Album`, que é renderizado na rota _"/album/:id"_.

- Ao entrar na página, faça uma requisição utilizando a função `getMusics` do arquivo **musicsAPI.js**. Lembre-se que essa função espera receber uma **_string_** com o id do álbum;
- Exiba o nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="artist-name"`;
- Exiba o nome do álbum e nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="album-name"`;
- Liste todas as músicas do álbum na tela. Para isso, crie um componente chamado `MusicCard` que deverá exibir o nome da música (propriedade **trackName** no objeto recebido pela API) e um player para tocar o preview da música (propriedade `previewUrl` no objeto recebido pela API);
- Para tocar o preview, você deve usar a tag `audio` do próprio HTML. Lembre-se de colocar o atributo `data-testid="audio-component"` na tag `audio` de cada música listada.

#### O que será verificado:

- Se o serviço de `musicsAPI` está sendo chamado;
- Se o nome da banda ou artista e o nome do álbum são exibidos;
- Se todas músicas retornadas pela API são listadas.

### 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas

- No componente `MusicCard`, crie um `input` do tipo _checkbox_ para marcar as músicas favoritas:

  - Esse `input` deve conter uma `label` com o texto _"Favorita"_ e deve possuir o atributo `` data-testid={`checkbox-music-${trackId}`} ``, onde **trackId** é a propriedade **trackId** do objeto recebido pela API.

- Para adicionar uma música a lista de favoritas, utilize a função `addSong` da `favoriteSongsAPI`. Você deve passar para essa função um objeto no mesmo formato que você recebe da API `getMusics`:

  - Enquanto aguarda o retorno da função `addSong`, renderize a mensagem de `Carregando...`.

#### O que será verificado:

- Existe um _checkbox_ para cada música da lista;
- A função `addSong` é chamada quando algum _checkbox_ é clicado;
- A mensagem _"Carregando..."_ é exibida após clicar no _checkbox_ e removida depois do retorno da API.

### 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum

Ao entrar na página com a lista de músicas de um álbum, na rota _"/album/:id"_, as músicas que já foram favoritadas anteriormente devem estar com o _checkbox_ marcado.

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas;
- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_;
- A lista recebida pela função `getFavoriteSongs` deve ser salva no estado da sua aplicação;
- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o _checkbox_ marcado como **checked**.

#### O que será verificado:

- A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;
- Ao entrar na página, o número de checkboxes marcados como **checked** é correspondente ao número de músicas que já foram favoritadas.

### 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música

Após adicionar uma música na lista de favoritas usando a função `addSong`, faça uma requisição usando a função `getFavoriteSongs` para atualizar a lista de músicas favoritas.

- Ao favoritar uma música, aguarde o retorno da função `addSong` e utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas;
- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_.
- Atualize o estado da aplicação com o valor recebido pelo retorno da função `getFavoriteSongs`;
- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o _checkbox_ marcado como **checked**.

#### O que será verificado:

- A requisição para `getFavoriteSongs` é feita após favoritar uma música;
- O número de checkboxes marcados como **checked** aumenta quando um _checkbox_ é clicado.

### 11. Crie o mecanismo para remover músicas na lista de músicas favoritas

Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. Para isso você deve usar a função `removeSong` da `favoriteSongsAPI`. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função `addSong`.

- Enquanto aguarda o retorno da função `removeSong`, renderize a mensagem de _"Carregando..."_.

#### O que será verificado:

- A função `removeSong` é chamada quando algum checkbox que já esteja marcado é clicado;
- A mensagem _"Carregando..."_ é exibida após clicar no checkbox e removida depois do retorno da API;
- O número de checkboxes marcados como **checked** diminui quando um checkbox marcado é clicado.

## Requisitos bônus

### 12. Crie a lista de músicas favoritas

Crie a lista dentro do componente `Favorites`, que é renderizado na rota _"/favorites"_.

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas;
- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_;
- Após receber o retorno da função `getFavoriteSongs`, utilize o componente `MusicCard` para renderizar a lista de músicas favoritas;
- Nesta página deve ser possível desfavoritar as músicas. Para isso utilize a função `removeSong` da `favoriteSongsAPI`;
- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_;
- Após remover a música, atualize a lista usando a função `getFavoriteSongs`. Lembre-se de exibir a mensagem _"Carregando..."_ enquanto aguarda o retorno da API.

#### O que será verificado:

- A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;
- É exibida a lista de músicas favoritas;
- A lista de músicas favoritas é atualizada ao remover uma música da lista.

### 13. Crie a exibição de perfil

Crie a exibição do perfil dentro do componente `Profile`, que é renderizado na rota _"/profile"_.

- Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada;
- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_;
- Após receber o retorno da `getUser`, exiba o nome, o email, a descrição e a imagem da pessoa logada;
- Para exibir a imagem, use a tag HTML `img` com o atributo `data-testid="profile-image"`;
- Crie um link que redirecione para a página de edição de perfil (rota _"/profile/edit"_). Este link deve ter o texto _"Editar perfil"_.

#### O que será verificado:

- A API `getUser` é usada para recuperar as informações da pessoa logada;
- As informações da pessoa logada são exibidas na tela;
- Foi criado um link para a rota de edição de perfil com o texto _"Editar perfil"_;
- Ao clicar no link _Editar perfil_, a navegação acontece corretamente.

### 14. Crie o formulário de edição de perfil

Crie o formulário de edição de perfil dentro do componente `ProfileEdit`, que é renderizado na rota _"/profile/edit"_.

- Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada;

  - Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_.

- Após receber as informações da pessoa logada, renderize um formulário já preenchido com os seguintes campos:

  - Um campo para alterar o nome da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-name"`;
  - Um campo para alterar o email da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-email"`;
  - Um campo para alterar a descrição da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-description"`;
  - Um campo para alterar a foto da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-image"`;
  - Um botão para salvar as informações alteradas. Este botão precisa ter o atributo `data-testid="edit-button-save"`;
  - Para poder habilitar o botão de enviar, todos os campos precisam estar preenchidos (não podem estar vazios):

    - O campo de email, além de não estar vazio também precisa verificar que o email tem um formato válido, ou seja, deve seguir o padrão _"test@test.com"_;
    - O botão de salvar as informações só deve ser habilitado quando todos os campos estiverem válidos, ou seja, todos campos preenchidos e o campo de email com um valor em formato válido;
    - Quando o botão estiver habilitado, utilize a função updateUser da `userAPI` para atualizar as informações da pessoa usuária. Essa API espera receber um objeto no seguinte formato:

      ```
        {
          name: '',
          email: '',
          image: '',
          description: '',
        }
      ```

- Enquanto aguarda a resposta da API, exiba a mensagem _"Carregando..."_;
- Ao finalizar o processo de edição, redirecione a pessoa logada para a página de exibição de perfil (rota _"/profile"_).

#### O que será verificado:

- É feita a requisição para `getUser` para recuperar as informações da pessoa logada;
- O formulário é renderizado já preenchido com as informações da pessoa logada;
- É possível alterar os valores dos campos;
- O botão _salvar_ é habilitado somente se todos os campos estiverem válidos;
- As informações são enviadas usando a API `updateUser`;
- Após salvar as informações a pessoa é redirecionada para a página de exibição de perfil.
