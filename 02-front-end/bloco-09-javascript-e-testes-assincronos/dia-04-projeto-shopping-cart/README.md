# PROJETO - SHOPPING CART

## O QUE DEVERÁ SER DESENVOLVIDO

Você vai desenvolver **carrinho de compras** totalmente dinâmico! Para isso, vai consumir dados diretamente de uma **API!** Isso mesmo! Da sigla em inglês _*Application Programming Interface*_, uma **API** é um ponto de contato na internet com determinado serviço e nesse projeto você vai utilizar a **API** do Mercado Livre para buscar produtos à venda.

E não para por aí...

Você já aprendeu sobre a importância de ter uma mentalidade orientada a testes, não é mesmo? E também já sabe como a implementação de testes contribui para a escrita de códigos mais confiáveis e com boa performance. Nesse projeto você vai ter a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development) que te ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta!

Ao finalizar o projeto, ele deve ter o comportamento parecido com o gif abaixo:

![exemplo](./exemplo.gif)

## REQUISITOS

**Atenção:** Ao criar novas funções para resolver os requisitos, faça as implementações **sempre** dentro do arquivo `script.js`.

### 1. (TDD) Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`

Implemente os testes necessários na função `fetchProducts`. O arquivo para implementar o teste já está criado, se chama `fetchProducts.test.js` e se encontra dentro da pasta `tests`.

**Você deve testar:**

- Teste se `fetchProducts` é uma função;
- Execute a função `fetchProducts` com o argumento `'computador'` e teste se `fetch` foi chamada;
- Teste se, ao chamar a função `fetchProducts` com o argumento `'computador'`, a função `fetch` utiliza o endpoint `'https://api.mercadolibre.com/sites/MLB/search?q=computador'`;
- Teste se o retorno da função `fetchProducts` com o argumento `'computador'` é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo;
- Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

**Atenção:** Você deve implementar todos os testes acima, independente do que for suficiente para a cobertura de testes.

#### O que será testado:

Será avaliado se os testes implementados atingem no mínimo 25% da cobertura total e 100% da função `fetchProducts`.

## 2. Crie uma listagem de produtos

Utilize a função `fetchProducts` para criar uma listagem de produtos através da API do Mercado Livre. O arquivo da função `fetchProducts` já está criado e se encontra dentro da pasta **helpers** e está importado dentro do arquivo HTML.

- Implemente a função `fetchProducts` para retornar a listagem de produtos;
- Utilize o **endpoint** `'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY'`, onde:

  - O valor de `'$QUERY'` deve ser **obrigatoriamente** o termo `'computador'`;
  - O retorno de produtos se encontra no array `results`.

- Utilize a função `createProductItemElement()` para criar os componentes HTML referentes a um produto:

  - Adicione cada elemento retornado da função `createProductItemElement(product)` como filho do elemento `<section class="items">`.

**Obs:** Utilize as variáveis fornecidas no código, elas devem se referir aos seguintes campos:

- **sku**: é o campo **id** retornado pela API;
- **name**: é o campo **title** retornado pela API;
- **image**: é o campo **thumbnail** retornado pela API.

Para executar sua função `fetchProducts` basta chamar no seu arquivo `script.js`;

#### O que será testado:

O elemento com classe _".item"_ deve ser cada item da lista de produtos.

## 3. (TDD) Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`

Implemente os testes necessários na função `fetchItem`.

**Você deve testar:**

- Teste se `fetchItem` é uma função;
- Execute a função `fetchItem` com o argumento do _item 'MLB1615760527'_ e teste se `fetch` foi chamada;
- Teste se, ao chamar a função `fetchItem` com o argumento do item _'MLB1615760527'_, a função `fetch` utiliza o **endpoint** `'https://api.mercadolibre.com/items/MLB1615760527'`;
- Teste se o retorno da função `fetchItem` com o argumento do _item 'MLB1615760527'_ é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo;
- Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

#### O que será testado:

Será avaliado se os testes implementados atingem no mínimo 50% da cobertura total e 100% da função `fetchItem`.

## 4. Adicione o produto ao carrinho de compras

Implemente a função `fetchItems` para retornar dados de um produto e adicioná-lo ao carrinho.

Cada produto na página HTML possui um botão com o nome _"Adicionar ao carrinho"_ e, ao clicar nesse botão, você deve realizar uma requisição que vai retornar todos os detalhes de um produto.

- Implemente a função `fetchItems` para fazer a requisição dos detalhes de apenas **um** produto;
- Utilize o **endpoint** `'https://api.mercadolibre.com/items/$ItemID'`, onde `'$ItemID'` é o **id** do produto a ser buscado;
- Utilize a função `createCartItemElement()` para criar os componentes HTML referentes a um item do carrinho;
- Adicione o elemento retornado da função `createCartItemElement(product)` como filho do elemento `<ol class="cart__items">`.

**Obs:** **salePrice** é o campo **price** retornado pela API.

#### O que será testado:

O elemento com classe _".cart\_\_items"_ deve adicionar o item escolhido, apresentando corretamente suas informações de id, título e preço.

## 5. Remova o item do carrinho de compras ao clicar nele

Ao clicar em um dos itens do carrinho de compras, esse item deve ser removido da lista. Para isso:

- Utilize a função `cartItemClickListener(event)` para implementar a lógica necessária para remover o item do carrinho.

#### O que será testado:

Remova o item do carrinho de compras ao clicar nele;

## 6. (TDD) Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`

Implemente os testes necessários na função `saveCartItems`. O arquivo para implementar o teste já está criado, se chama **saveCartItems.test.js** e se encontra dentro da pasta **tests**.

**Atenção:** Não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

**Você deve testar:**

- Teste se, ao executar `saveCartItems` com o argumento `'<ol><li>Item</li></ol>'`, o método `localStorage.setItem` é chamado;
- Teste se, ao executar `saveCartItems` com o argumento `'<ol><li>Item</li></ol>'`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro `'cartItems'` e o segundo sendo o valor passado como argumento para `saveCartItems`.

**Atenção:** Você deve implementar todos os testes acima, independente do que for suficiente para a cobertura de testes.

#### O que será testado:

Será avaliado se os testes implementados atingem no mínimo 75% da cobertura total e 100% da função `saveCartItems`.

## 7. (TDD) Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`

Implemente os testes necessários na função `getSavedCartItems`. O arquivo para implementar o teste já está criado, se chama **getSavedCartItems.test.js** e se encontra dentro da pasta **tests**.

**Atenção:** Não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

**O que você testar:**

- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;
- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.

**Atenção:** Você deve implementar todos os testes acima, independente do que for suficiente para a cobertura de testes.

#### O que será testado:

Será avaliado se os testes implementados atingem 100% da cobertura total e 100% da função `getSavedCartItems`.

## 8. Carregue o carrinho de compras ao iniciar a página

Salve os itens adicionados no carrinho de compras no `localStorage`.

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do `localStorage`. Para que isso funcione, os itens do carrinho de compras devem ser salvos no `localStorage`, ou seja, a adição e remoção de um produto devem ser abordadas para que a lista esteja sempre atualizada.

Para isso, você terá de implementar as funções `saveCartItems` e `getSavedCartItems` que já estão criadas com o nome `saveCartItems.js` e `getSavedCartItems.js`, respectivamente, dentro da pasta `helpers`.

- Implemente a função `saveCartItems` que deve possuir a lógica para apenas adicionar o item no `localStorage` em uma chave chamada `cartItems`;
- Implemente a função `getSavedCartItems` que deve possuir a lógica para apenas retornar o item do `localStorage`.

A função `saveCartItems` não deve recuperar os itens do `localStorage`. A função `getSavedCartItems` não deve adicionar um item no `localStorage`.

#### O que será testado:

A página ao ser atualizada deve permanecer com todos os itens do carrinho adicionados anteriormente.

## 9. Calcule o valor total dos itens do carrinho de compras

O elemento com o valor total dos produtos deve possuir a classe _"total-price"_.

Cada vez que o carrinho de compras é modificado, será necessário calcular o valor total dos produtos e apresentá-los na página principal do projeto. Para isso:

- Implemente uma lógica para somar todos os produtos do carrinho;
- Crie um elemento com a classe _"total-price_" e adicione o texto com o valor total dos produtos.

#### O que será testado:

Calcule o valor total dos itens do carrinho de compras de forma assíncrona;

## 10. Limpe o carrinho de compras

Implemente a lógica no botão _"Esvaziar carrinho"_ para limpar o carrinho de compras.

O botão para esvaziar o carrinho já está implementado, mas ele ainda não cumpre seu objetivo. Para isso:

- Certifique-se que o botão possui obrigatoriamente a classe _"empty-cart_";
- Implemente a lógica para remover todos os itens do carrinho de compras.

#### O que será testado:

Verifica o botão para limpar carrinho de compras;

## 11. Adicione um texto de _"carregando_" durante uma requisição à API

Adicione um elemento com o texto _"carregando..."_ durante a requisição à API.

Uma requisição à API gasta um certo tempo e durante esse processo a pessoa que está utilizando a página não tem como saber se a requisição deu certo ou não. Por isso, normalmente é utilizada alguma forma para mostrar que a requisição ainda está em andamento. Para isso:

- Crie um elemento que contenha o texto _"carregando..."_, que deve ser exibido em algum lugar da página;
- Adicione a classe _"loading"_ ao elemento que possui o texto _"carregando..."_;
- Exiba esse elemento apenas durante a requisição à API.

#### O que será testado:

Verifica se adiciona um texto de "carregando" durante uma requisição à API.
