# EXERCÍCIOS

Nos exercícios de hoje, será usada uma API que retorna cartas do jogo de Magic: The Gathering. Então se prepare, jovem, pois neste dia, uma carta será comprada do Grimório e outras serão escolhidas como as favoritas. Está com mana suficiente para esta aventura?

Mas, antes de se aventurar nos exercícios, saiba que você encontrará imports no caminho. Os imports/requires são declarações de arquivos que possuem funções externas ao arquivo atual. Em algum momento, você pode precisar usar uma função ou variável que está declarada em outro arquivo, e, para resolver esse problema, é só importar esse arquivo ou apenas a função/variável desejada dentro do arquivo que você está desenvolvendo, isso faz parte do dia a dia de uma pessoa desenvolvedora. Nada complicado, certo? Hoje será necessário fazer alguns imports para a realização do exercício, mas não tenha medo, pois os arquivos já vão vir importados para você!

## Exercício 1

### Antes de começar

- Todas as funções já estão implementadas, você precisará se preocupar apenas em testá-las;
- Vamos usar o `fetchSimulator` como uma biblioteca Javascript, portanto, não se preocupe em entender a estrutura dessa função, você aprenderá a implementar esse tipo de função futuramente no curso;
- Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

**Dicas**:

- Leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js`. Isso te ajudará a implementar os testes;
- A função `getMagicCard` com o argumento que vamos usar durante esse exercício, _'130550'_, vai retornar o seguinte objeto:

```
{
  name: "Ancestor's Chosen",
  manaCost: "{5}{W}{W}",
  types: [ "Creature" ],
  subtypes: [ "Human", "Cleric" ],
  rarity: "Uncommon",
}
```

### Agora mão na massa

1 - Complete a sintaxe do `async/await`. Abra o arquivo **tests/magic.test.js**, nele você encontrará a estrutura inicial dos testes já montada. Essa estrutura no entanto está incompleta e precisa de ajustes para funcionar corretamente;

2 - Implemente um teste que verifique se a propriedade **name** possui valor _Ancestor's Chosen_;

3 - Implemente um teste que verifique se `getMagicCard` é uma função;

4 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento _'130550'_, a função `fetch` foi chamada;

5 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento _'130550'_, a função `fetch` foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550";

6 - Implemente um teste que verifique se o retorno da função `getMagicCard` é igual ao objeto `card`;

7 - Implemente um teste que verifica se, ao chamar a função `getMagicCard` com o argumento _'idDesconhecido'_, retorna um erro com a mensagem: `'Id is not found!'`;

**_Dica_**: Na função `fetchSimulator`, está sendo usado o método `Promise.reject()`, que retorna uma promise que não foi resolvida. Para retornar um erro quando isso acontecer, usamos o `new Error('mensagem de erro')` dentro do `Promise.reject()`, que vai criar um erro que a mensagem vai ser o que está escrito dentro dos parênteses. Por isso você deve testar usando o `new Error()`.

## Exercício 2

### Antes de começar

- A função `saveFavoriteMagicCard`, além de realizar a chamada a API, ela também modifica o arquivo `favoriteCards`, adicionando um novo card a cada execução.
- Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

**Dica**: leia e entenda cada parte da implementação da função `saveFavoriteMagicCard` que está no arquivo `magic.js.` Isso te ajudará a implementar os testes.

### Agora mão na massa

Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você pode verificar a sua estrutura no arquivo `favoriteCards.js`. Utilizaremos este arquivo para os próximos passos.

1 - Implemente um teste que verifique que após a execução da função `saveFavoriteMagicCard`, `favoriteCards` passa a possuir `length === 5`;

2 - Dentro do mesmo `it`, implemente um teste que verifique que na última posição do array `favoriteCards` existe um card com o a propriedade **name** e valor _'Beacon of Immortality'_;

3 - Ainda no mesmo `it`, chame a função `saveFavoriteMagicCard` com o argumento _'130554'_ e verifique se `favoriteCards` passa a possuir `length === 6`;

Para os próximos exercícios, descomente o teste dentro do escopo do segundo `it`.

4 - Após descomentar o teste dentro do segundo `it`, rode os testes;

Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função `saveFavoriteMagicCard` modificou o arquivo `favoriteCards` no escopo do `it` anterior. Desta maneira, para o Jest, o array `favoriteCards` não possui quatro cards, mas sim, seis.

5 - Implemente a função `retrievesFavoriteCards` com uma lógica capaz de restaurar o array `favoriteCards`, depois chame essa função dentro do método `afterEach` para os testes poderem passar.

## Bônus

- Este exercício será feito na mesma branch do exercício anterior;
- Este exercício deve ser realizado após a implementação da função `afterEach`;
- Implemente o teste solicitado dentro do escopo do segundo `it`.

1 - Utilizando a função `map`, crie um array contendo apenas a propriedade **name** de todos os cards presentes no deck original, ou seja, no `favoriteCards`. Este array deve conter quatro nomes e deve ser salvo em uma nova variável;
2 - Implemente um teste que verifique que o array que você obteve com o `map` do exercício anterior contém a seguinte estrutura e valores:

```
["Ancestor's Chosen", 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
```
