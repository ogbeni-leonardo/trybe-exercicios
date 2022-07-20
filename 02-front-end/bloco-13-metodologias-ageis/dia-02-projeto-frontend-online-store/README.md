# PROJETO - FRONT-END ONLINE STORE

## O QUE DEVERÁ SER DESENVOLVIDO

Neste projeto você criará uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro **Kanban**, em um cenário próximo ao do mercado de trabalho.

A partir dessas demandas, teremos uma aplicação em que pessoas usuárias poderão:

- Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
- Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
- Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
- Simular a finalização da compra dos itens selecionados.

## REQUISITOS

### 1. Implemente o módulo de acesso à api do Mercado Livre

**PRIORIDADE 0**

Implemente um módulo que acessa a API do Mercado Livre:

- Utilize o arquivo **src/services/api.js** para acessar a API do Mercado Livre em sua aplicação;
- Utilize o módulo `fetch` para realizar as requisições;
- Você deve implementar as funções `getCategories` e `getProductsFromCategoryAndQuery` que estão no arquivo **src/services/api.js**:

  Essas funções devem realizar uma chamada para a API do Mercado Livre e retornar uma **_Promise_** com os dados de resultado.

- Sinta-se livre para criar novas funções neste arquivo, mas apenas as funções `getCategories` e `getProductsFromCategoryAndQuery` serão avaliadas.

#### O que será verificado:

- Implementa a função `getCategories`;
- Implementa a função `getProductsFromCategoryAndQuery`.

### 2. Crie uma página de listagem de produtos vazia

**PRIORIDADE 0**

A tela principal da plataforma é a de listagem de produtos, onde a pessoa usuária poderá buscar produtos para adicionar ao carrinho, além de filtrar suas buscas.

Crie o campo de busca da tela principal, que será utilizado para listar os produtos encontrados:

- Esta página deve ficar no path _"/"_, renderizável a partir do acesso ao componente `App`;
- Inicialmente a listagem de produtos deve estar vazia;
- Quando a lista estiver vazia, a página deve mostrar a mensagem _"Digite algum termo de pesquisa ou escolha uma categoria."_;
- Adicione o atributo **data-testid** com o valor _home-initial-message_ no elemento da mensagem.

#### O que será verificado:

- A raiz da aplicação, em `App`, renderiza com sucesso;
- A tela contém a mensagem pedida: _"Digite algum termo de pesquisa ou escolha uma categoria."_.

### 3. Crie a página do carrinho de compras

**PRIORIDADE 1**

A pessoa usuária poderá adicionar produtos em seu carrinho de compras, a partir da listagem dos produtos.

Crie uma tela que representará o carrinho de compras da aplicação. Além disso, na tela principal, crie um botão que redireciona à página do carrinho de compras. Inicialmente, o carrinho deve estar vazio.

Crie uma tela que represente o carrinho de compras:

- Quando não existirem produtos no carrinho de compras, a página deve exibir a mensagem _"Seu carrinho está vazio"_;
- Adicione o atributo **data-testid** com o valor _shopping-cart-empty-message_ no elemento da mensagem.

Na tela principal, crie um elemento que redirecione a pessoa usuária à página do carrinho de compras:

- O elemento deve estar visível na página inicial (listagem de produtos);
- Este elemento também deverá estar presente na página de detalhes de um produto, mas não se preocupe com isso neste momento, estará descrito em um requisito posterior;
- Adicione o atributo **data-testid** com o valor _shopping-cart-button_ no elemento que redireciona à pagina de carrinho de compras.

O elemento que faz o direcionamento para a página do carrinho é quem deve conter o **data-testid**. Se você fizer isso com um `Link`, por exemplo, é este quem deve conter o **data-testid**.

#### O que será verificado:

- A home deve ter o botão do carrinho de compras;
- Clicar no botão deve levar à página do carrinho vazio, com a mensagem _"Seu carrinho está vazio"_ nela.

### 4. Liste as categorias de produtos disponíveis via API na página principal

**PRIORIDADE 1**

A tela principal deve conter uma lista de categorias, que será utilizada para filtrar a busca por categoria. As categorias podem ser obtidas pela API do Mercado Livre. A requisição para essa API deve ser feita uma única vez, após o carregamento da tela.

Na tela principal, liste as categorias obtidas pela API do Mercado Livre:

- Adicione o atributo **data-testid** com o valor _category_ nos elementos que receberão o nome da categoria. **Atenção!** Caso você opte por utilizar **_radio buttons_** para realizar a listagem, as labels dos elementos que deverão receber o **data-testid**, e não se esqueça da propriedade **htmlFor**.

#### O que será verificado:

- Exibe as categorias retornadas pela API na página de listagem de produtos.

### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

**PRIORIDADE 1**

A alma da aplicação é a sua lógica de busca e listagem de produtos. Após digitar seus termos no `input` da tela principal e clicar no botão de busca, uma requisição deverá ser feita à API do Mercado Livre, tendo como parâmetros a frase digitada. Os produtos retornados pela API devem ser listados na tela.

Na tela principal, crie a listagem dos produtos recebidos pela API do Mercado Livre ao clicar no botão de busca:

- A tela principal deve possuir um elemento `input` com o atributo `data-testid="query-input"`;
- A tela principal deve possuir um elemento com o atributo `data-testid="query-button"` que, ao ser clicado, dispara a chamada para a API com o termo de busca pesquisado;
- Renderize na tela uma exibição resumida de todos os produtos retornados pela API, contendo o nome, a imagem e o preço de cada produto;
- Adicione o atributo `data-testid="product"` nos elementos que possuem os dados dos produtos;
- Caso a busca não retorne resultados, renderize na tela o texto _"Nenhum produto foi encontrado"_.

#### O que será verificado:

- Exibe todos os produtos retornados pela API, dado um determinado filtro.

### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

**PRIORIDADE 2**

Quando a pessoa usuária clicar em uma das categorias listadas na tela principal, a aplicação deverá listar todos os produtos encontrados daquela categoria.

- Ao clicar em uma das categorias listadas, faça uma requisição à API do Mercado Livre e renderize na tela uma exibição resumida de todos os produtos retornados dessa categoria, contendo o nome, a imagem e o preço de cada produto;
- Adicione o atributo `data-testid="product"` nos elementos que possuem os dados dos produtos.

#### O que será verificado:

- Exibe corretamente na página somente os produtos da categoria clicada.

### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

**PRIORIDADE 3**

Agora que a listagem dos produtos está criada, você deverá criar a página de detalhes de um produto.

Ao clicar no **card** de um produto, a pessoa usuária deve ser direcionada para uma página contendo o nome, uma imagem, o preço e a especificação técnica desse produto. Além disso, essa página deve ter um botão que, ao clicar, a pessoa usuária deve ser redirecionada para a página do carrinho de compras.

- Adicione o atributo `data-testid="product-detail-link"` no elemento que, ao ser clicado, enviará a pessoa usuária para a página de detalhes do produto. Você deve adicionar esse atributo para todos os produtos;
- A página de detalhes deve possuir o nome, a imagem, o preço e qualquer outra informação adicional do produto que você desejar;
- Adicione o atributo `data-testid="product-detail-name"` no elemento que, na tela de detalhes, possui o nome do produto.

#### O que será verificado:

- Clicar no **card** de um produto leva à página com seus detalhes;
- Exibe corretamente o nome do produto em sua página de detalhes.

### 8. Adicione produtos ao carrinho a partir da tela de listagem de produtos

**PRIORIDADE 3**

A pessoa usuária pode adicionar um produto ao carrinho de compras a partir da página principal contendo a listagem dos produtos.

Todos os produtos que foram adicionados ao carrinho devem aparecer na tela do _Carrinho de Compras_.

Na tela principal, crie um elemento em cada produto que, ao ser clicado, adiciona o produto ao carrinho de compras:

- Adicione o atributo `data-testid="product-add-to-cart"` no elemento que executa a ação de adicionar o produto ao carrinho de compras.

Na tela do _Carrinho de Compras_, renderize todos os produtos que foram adicionados ao carrinho:

- Os produtos na tela do _Carrinho de Compras_ devem possuir o nome, o preço e a quantidade;
- Adicione o atributo `data-testid="shopping-cart-product-name"` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos na tela do carrinho;
- Adicione o atributo `data-testid="shopping-cart-product-quantity"` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos na tela do carrinho.

#### O que será verificado:

- Adiciona um produto ao carrinho a partir da tela principal.

### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

**PRIORIDADE 3**

A partir da tela de detalhes de um produto, deve ser possível adicioná-lo ao carrinho de compras.

Na tela de detalhes de um produto, crie um elemento que adicione o produto ao carrinho:

- Adicione o atributo `data-testid="product-detail-add-to-cart"` no elemento que possui a ação de adicionar o produto ao carrinho de compras.

Na tela do carrinho de compras, renderize todos os produtos adicionados ao carrinho:

- Os produtos na tela do Carrinho de Compras devem possuir o nome, o preço e a quantidade;
- Adicione o atributo `data-testid="shopping-cart-product-name"` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos na tela do carrinho;
- Adicione o atributo `data-testid="shopping-cart-product-quantity"` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos na tela do carrinho.

#### O que será verificado:

- Adiciona um produto ao carrinho a partir da sua tela de detalhes.

### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

**PRIORIDADE 3**

Na tela do _Carrinho de Compras_ deve ser possível aumentar e/ou diminuir a quantidade do produto.

Na página do carrinho de compras, crie dois elementos que, ao serem clicados, diminuem ou aumentam a quantidade desse produto presente no carrinho:

- Adicione elementos na página do carrinho de compras para aumentar ou diminuir a quantidade de cada produto presente no carrinho;
- A quantidade mínima de um produto no carrinho deve ser 1;
- Adicione o atributo `data-testid="product-increase-quantity"` no elemento que aumenta a quantidade de um produto. Adicione esse atributo para todos os produtos;
- Adicione o atributo `data-testid="product-decrease-quantity"` no elemento que diminui a quantidade de um produto. Adicione esse atributo para todos os produtos;
- Você pode criar um elemento para remover um item do carrinho, mas isso não será avaliado nesse momento.

#### O que será verificado:

- Adiciona produtos ao carrinho e manipula suas quantidades.

### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

**PRIORIDADE 3**

Na tela de detalhes de um produto deve existir um formulário para adicionar avaliações sobre esse produto. Este formulário deve conter um campo para o e-mail da pessoa avaliadora, uma nota entre 1 e 5 e um campo para comentários sobre o produto. Além disso, deve possuir um botão para salvar a avaliação.

A lista de avaliações já realizadas deve persistir na tela de detalhes do produto caso a pessoa usuária saia e retorne posteriormente.

- Crie um `input` com o atributo `data-testid="product-detail-email"`, onde a pessoa usuária colocará o email;
- Crie 5 elementos contendo o atributo `data-testid="${index}-rating"`, com o `${index}` indo de 1 a 5, para a pessoa escolher qual nota dar ao produto. Neste formulário, os 5 elementos precisam ser renderizados na tela, independente da nota atribuída pela pessoa avaliadora;
- Adicione um campo de texto com o atributo `data-testid="product-detail-evaluation"` para a pessoa usuária escrever algo sobre o produto;
- Adicione um botão com o atributo `data-testid="submit-review-btn"` para a pessoa usuária enviar a avaliação.

Renderize as avaliações criadas a partir do formulário:

- Ao clicar no botão com o atributo `data-testid="submit-review-btn"`, as informações inseridas no formulário deverão ser renderizadas na tela de detalhes do produto, abaixo do formulário;
- As avaliações devem persistir na tela de detalhes do produto. Ou seja, se a pessoa usuária sair da tela e acessar novamente, as avaliações ainda devem estar sendo renderizadas na página.

#### O que será verificado:

- Avalia se é possível realizar uma avaliação na tela de detalhes de um produto;
- Avalia se a avaliação continua após recarregar a pagina de detalhes do produto.

### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

**PRIORIDADE 4**

Crie uma tela para a finalização da compra, que deve ser acessada a partir da tela do Carrinho de Compras. A tela deve conter um formulário para adicionar as informações do comprador. Neste momento não será avaliado o processo de finalização da compra, mas, se desejar, você pode implementar da forma que preferir!

Na tela do carrinho de compras, crie um elemento para finalizar a compra:

- Este elemento, ao ser clicado, deve redirecionar a pessoa usuária à página de _checkout_;
- Adicione o atributo `data-testid="checkout-products"` no elemento que leva a pessoa à página de _checkout_.

Na tela de _checkout_, crie um formulário para a pessoa usuária adicionar os seus dados pessoais. O formulário precisa possuir os seguintes campos:

- Nome Completo: este elemento deve possuir o atributo `data-testid="checkout-fullname"`;
- Email: este elemento deve possuir o atributo `data-testid="checkout-email"`;
- CPF: este elemento deve possuir o atributo `data-testid="checkout-cpf"`;
- Telefone: este elemento deve possuir o atributo `data-testid="checkout-phone"`;
- CEP: este elemento deve possuir o atributo `data-testid="checkout-cep"`;
- Endereço: este elemento deve possuir o atributo `data-testid="checkout-address"`.

#### O que será verificado:

- Avalia se é possível, a partir de um carrinho de compras com produtos, acessar a página de checkout com um formulário válido.

## Requisitos Bônus

### 13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

**PRIORIDADE 4**

Adicione junto ao elemento que redireciona à página do carrinho de compras, um número contendo a quantidade total de itens armazenados no carrinho. Esse número deve aparecer em todas as páginas em que esse elemento está presente.

- Esse elemento deve ser visível da página de listagem de produtos e da página de detalhes de produto;
- Adicione o atributo `data-testid="shopping-cart-size"` no elemento que contém a quantidade de produtos presente no carrinho;
- A quantidade a ser exibida é o número total de itens, ou seja, se a pessoa adiciona o produtoA 5 vezes e o produtoB 2 vezes, o valor a ser exibido é 7.

#### O que será verificado:

- Avalia se a quantidade de produtos no carrinho da tela de listagem de produtos é renderizada corretamente;
- Avalia se a quantidade de produtos no carrinho da tela de detalhes de produtos é renderizada corretamente.

### 14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque

**PRIORIDADE 4**

No tela do carrinho de compras já é possível aumentar ou diminuir a quantidade dos produtos. Agora você deve limitar a quantidade máxima que a pessoa usuária pode adicionar ao carrinho de acordo com a quantidade em estoque disponível de cada produto.

- Ao clicar no elemento q possui o atributo `data-testid="product-increase-quantity"` para aumentar a quantidade de um produto no carrinho, o valor não pode ser superior a sua quantidade disponível em estoque;

#### O que será verificado:

- Avalia se não é possível adicionar ao carrinho mais produtos do que o disponível em estoque.

### 15. Mostre quais produtos tem o frete grátis

**PRIORIDADE 4**

Alguns produtos possuem o frete grátis. Adicione essa informação nesses produtos, tanto na tela de listagem dos produtos quanto na tela de detalhes de um produto.

- Adicione um elemento que mostre essa informação para cada produto que possua frete grátis na tela de listagem de produtos;
- Essa informação pode ser adicionada também à tela de detalhes do produto, mas isso não será avaliado;
- Adicione o atributo `data-testid="free-shipping"` no elemento que apresenta essa informação para todos os produtos que possuam frete grátis;
- Para os produtos que não possuem frete grátis, você não precisa adicionar nenhum novo elemento.

#### O que será verificado:

- Exibe corretamente a informação de frete grátis dos produtos.
