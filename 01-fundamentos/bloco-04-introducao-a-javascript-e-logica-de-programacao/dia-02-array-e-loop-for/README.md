# ATIVIDADES DE FIXAÇÃO

## ATIVIDADE 01

Obtenha o valor 'Serviços' do array `menu`:

```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
```

## ATIVIDADE 02

Procure o índice do valor 'Portfólio' do array `menu`:

```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);
```

## ATIVIDADE 03

Adicione o valor 'Contato' no final do array `menu`:

```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);
```

## ATIVIDADE 04

Utilize o `for` para imprimir os elementos da lista `groceryList` com o `console.log()`:

```
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
```

## ATIVIDADE 05

Utilize o `for/of` para imprimir os elementos da lista names com o `console.log()`:

```
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
```

# EXERCÍCIOS

## EXERCÍCIO 01

Iremos utilizar esse array para cumprir os requisitos de 1-7:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função _console.log()_;
2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

   - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

4. Com o mesmo código do requisito anterior, caso o valor final seja maior que 20, imprima a mensagem: 'valor maior que 20'. Caso não seja, imprima a mensagem: 'valor menor ou igual a 20';
5. Utilizando `for`, descubra qual o maior valor contido no array e imprima-o;
6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: 'nenhum valor ímpar encontrado';
7. Utilizando `for`, descubra qual o menor valor contido no array e imprima-o;
8. Utilizando `for`, crie um array que vá de 1 até 25 e imprima o resultado;
9. Utilizando o array criado no requisito anterior imprima o resultado da divisão de cada um dos elementos por 2.

## EXERCÍCIO 02

Tente entender o que está acontecendo no código abaixo:

```
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

Com base na leitura que fez, considere o array `numbers` abaixo e faça os exercícios:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Ordene o array `numbers` em ordem crescente e imprima seus valores;
2. Ordene o array `numbers` em ordem decrescente e imprima seus valores;
3. Agora crie um novo array a partir do array `numbers`, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array `numbers` multiplicado pelo seguinte.

   > Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o `for` e o método `push`.
