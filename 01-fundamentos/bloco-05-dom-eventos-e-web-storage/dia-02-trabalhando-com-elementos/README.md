# ATIVIDADES DE FIXAÇÃO

## ATIVIDADE 01

Adicione o código abaixo a um documento HTML e adicione uma tag _script_. Você deverá cumprir os requisitos usando somente _JavaScript_.

```
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

1. Acesse o elemento _elementoOndeVoceEsta_;
2. Acesse _pai_ a partir de _elementoOndeVoceEsta_ e adicione uma **color** a ele;
3. Acesse o _primeiroFilhoDoFilho_ e adicione um texto a ele;
4. Acesse o _primeiroFilho_ a partir de _pai_;
5. Agora acesse o _primeiroFilho_ a partir de _elementoOndeVoceEsta_;
6. Agora acesse o texto "Atenção!" a partir de _elementoOndeVoceEsta_;
7. Agora acesse o _terceiroFilho_ a partir de _elementoOndeVoceEsta_;
8. Agora acesse o _terceiroFilho_ a partir de _pai_.

## ATIVIDADE 02

Utilizando o mesmo arquivo da atividade anterior, faça o seguinte:

1. Crie um irmão para _elementoOndeVoceEsta_;
2. Crie um filho para _elementoOndeVoceEsta_;
3. Crie um filho para _primeiroFilhoDoFilho_;
4. A partir desse filho criado, acesse _terceiroFilho_.

## ATIVIDADE 03

Utilizando o mesmo arquivo da atividade anterior, faça o seguinte:

- Remova todos os elementos filhos de _paiDoPai_ exceto _pai_, _elementoOndeVoceEsta_ e _primeiroFilhoDoFilho_.

# EXERCÍCIOS

## EXERCÍCIO 01

Crie um documento HTML e copie o código abaixo:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags `script`.

1. Adicione a tag `h1` com o texto "Exercício 5.2 - JavaScript DOM" como filho da tag `body`;
2. Adicione a tag `main` com a classe _main-content_ como filho da tag `body`;
3. Adicione a tag `section` com a classe _center-content_ como filho da tag `main` criada no passo 2;
4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
5. Adicione a tag `section` com a classe _left-content_ como filho da tag `main` criada no passo 2;
6. Adicione a tag `section` com a classe _right-content_ como filho da tag `main` criada no passo 2;
7. Adicione uma imagem com **src** configurado para o valor _https://picsum.photos/200_ e classe _small-image_. Esse elemento deve ser filho do `section` criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso (ou seja, "um", "dois", "três", ...) como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
9. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

10. Adicione a classe _title_ na tag `h1` criada;
11. Adicione a classe _description_ nas 3 tags `h3` criadas;
12. Remova a `section` criado no passo 5 (aquele que possui a classe _left-content_). Utilize a função `.removeChild()`;
13. Centralize a `section` criado no passo 6 (aquele que possui a classe _right-content_);
    > Dica: para centralizar, basta configurar o `margin-right: auto` da `section`.
14. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe _center-content_) para a cor verde;
15. Remova os dois últimos elementos ("nove" e "dez") da lista criada no passo 8.
