# EXERCÍCIOS

## EXERCÍCIO 01

Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.

A documentação para a API que vamos utilizar esta disponível nesse https://docs.coincap.io/.

Tente descobrir qual **url** vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).

1. Agora que temos a url vamos criar um arquivo JavaScript e dentro dele uma função para pegar o array com as moedas;
2. Crie também um arquivo HTML que deve conter uma tag para listar as crypto moedas;
3. Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06;
4. Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

## EXERCÍCIO 02 - BÔNUS

Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?

Para este exercício vamos utilizar a Currency API. Tente descobrir qual url retorna os dados necessários para este exercício, mas caso fique na dúvida pode consultar a informação abaixo:

```
baseUrl: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest
endpoint: /currencies/usd.min.json
```
