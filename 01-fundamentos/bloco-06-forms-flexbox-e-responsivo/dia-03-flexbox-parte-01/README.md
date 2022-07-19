# ATIVIDADES DE FIXAÇÃO

## ATIVIDADE 01

Copie o código abaixo e realize os requisitos propostos:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Flex Flow</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div>
  </body>
</html>
```

1. Teste as possibilidades (**row**, **column**, **row-reverse** e **column-reverse**) para a propriedade **flex-direction**;
2. Teste as possibilidades (**wrap** e **nowrap**) para a propriedade **flex-wrap**;
3. Teste as possibilidades para a propriedade **flex-flow**.

## ATIVIDADE 02

1. Utilizando o código abaixo, teste as possibilidades (**center**, **flex-start**, **flex-end**, **space-around** e **space-between**) para a propriedade **justify-content**;

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Justify Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 20%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>
```

2. Utilizando o código abaixo, teste as possibilidades (**center**, **flex-start**, **flex-end**, **stretch** e **baseline**) para a propriedade **align-items**;

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Items</title>
    <style>
      .box-one {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 70px;
        min-height: 80px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-two {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-three {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 30px;
        margin: 10px 5px;
        min-height: 50px;
        text-align: center;
        width: 50px;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box-one">1</div>
      <div class="box-two">2</div>
      <div class="box-three">3</div>
    </div>
  </body>
</html>
```

3. Utilizando o código abaixo, teste as possibilidades (**center**, **flex-start**, **flex-end**, **stretch**, **space-around** e **space-between**) para a propriedade **align-content**.

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        /* ADICIONE AQUI SEUS TESTES */
        background-color: #0fa36b;
        display: flex;
        flex-wrap: wrap;
        height: 600px;
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
  </body>
</html>
```

# EXERCÍCIOS

## EXERCÍCIO 01

Aqui está um modelo de como o seu projeto pode se parecer no final:

![exemplo](./exercicios/images/exemplo.jpeg)

Lembre-se que você pode personalizar a sua página do jeito que preferir.

### REQUISITOS

1. Crie um cabeçalho para sua aplicação utilizando a tag `header`. Este cabeçalho deve possuir **_3 elementos_** e estes devem ser posicionados utilizando **flexbox**. O resultado deverá ser similar à estrutura da página de exemplo;
2. Implemente o conteúdo da primeira `section`. Esta seção deverá conter no mínimo **_um elemento_** de texto. Utilizando **flexbox**, faça o posicionamento de acordo com o exemplo;
3. Implemente o posicionamento da segunda `section`. Esta seção deverá conter no mínimo **_6 imagens_** e um título para cada uma delas. Sinta-se livre para usar a imaginação e selecionar as imagens que preferir, só não esqueça de seguir a estrutura de posicionamento proposta;
4. Por fim, faça o posicionamento do `footer`, este é o ultimo elemento necessário para que nossa aplicação fique completa. O rodapé deverá conter no mínimo **_2 elementos_**. Para o exemplo, foram adicionadas imagens que redirecionam o usuário para as redes sociais da Trybe.
