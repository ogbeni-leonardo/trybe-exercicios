# PROJETO - TRYUNFO

## O QUE DEVERÁ SER DESENVOLVIDO

Você deve desenvolver uma aplicação em React com manipulação de estados em classes. Essa aplicação simulará um jogo de **Super Trunfo**, desde a criação das cartas do seu baralho até a funcionalidade de jogar.

Na renderização das cartas, sua aplicação deverá possuir três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

O tema do seu baralho é **livre**, então explore a sua criatividade! Mas use seu bom senso para a criação do seu baralho.

## REQUISITOS

### 1. Crie o formulário que será usado para adicionar cartas ao baralho

- Crie um componente chamado `Form` dentro da pasta **src/components**;
- Renderize o componente `Form` dentro do componente principal `App`;
- Crie os seguintes itens dentro do componente `Form`:

  - Um campo do tipo **text** que contenha o atributo `data-testid="name-input"`. Este campo será usado para inserir o nome da carta;
  - Um campo do tipo **textarea** que contenha o atributo `data-testid="description-input"`. Este campo será usado para inserir a descrição da carta;
  - Um campo do tipo **number** que contenha o atributo `data-testid="attr1-input"`. Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho;
  - Um campo do tipo **number** que contenha o atributo `data-testid="attr2-input"`. Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho;
  - Um campo do tipo **number** que contenha o atributo `data-testid="attr3-input"`. Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho;
  - Um campo do tipo **text** que contenha o atributo `data-testid="image-input"`. Este campo será usado para inserir o caminho para imagem da carta.
  - Um campo do tipo **select** que contenha o atributo `data-testid="rare-input"`. Este campo será usado para inserir a raridade da carta e deverá ter as **options**: _normal_, _raro_ e _muito raro_ (é importante que as opções estejam nessa ordem);
  - Um campo do tipo **checkbox** que contenha o atributo `data-testid="trunfo-input"`. Este campo será usado para inserir se a carta é o Super Trunfo;
  - Um `button`que contenha o atributo `data-testid="save-button"` e que tenha o texto _"Salvar"_.

#### O que será verificado:

- Será validado se existe um `input` **texto** que possui o `data-testid="name-input"`;
- Será validado se existe um `input` **textarea** que possui o `data-testid="description-input"`;
- Será validado se existe um `input` **number** que possui o `data-testid="attr1-input"`;
- Será validado se existe um `input` **number** que possui o `data-testid="attr2-input"`;
- Será validado se existe um `input` **number** que possui o `data-testid="attr3-input"`;
- Será validado se existe um `input` **texto** que possui o `data-testid="image-input"`;
- Será validado se existe um `input` **select** que possui o `data-testid="rare-input"` com as `options`: `normal`, `raro` e `muito raro`, nesta ordem;
- Será validado se existe um `input` **checkbox** que possui o `data-testid="trunfo-input"`;
- Será validado se existe um botão que possui o `data-testid="save-button"`.

### 2. Adicione as props necessárias ao componente de formulário

- O componente `Form` deverá receber as seguintes **props**:

  - **cardName**, uma `string`;
  - **cardDescription**, uma `string`;
  - **cardAttr1**, uma `string`;
  - **cardAttr2**, uma `string`;
  - **cardAttr3**, uma `string`;
  - **cardImage**, uma `string`;
  - **cardRare**, uma `string`;
  - **cardTrunfo**, um `boolean`;
  - **hasTrunfo**, um `boolean`;
  - **isSaveButtonDisabled**, um `boolean`;
  - **onInputChange**, uma **_callback_**;
  - **onSaveButtonClick**, uma **_callback_**.

- As **props** do componente `Form` deverão ser utilizadas conforme o indicado abaixo:

  - **Campo _name-input_:** a propriedade **value** deve receber o valor da prop **cardName** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _description-input_:** a propriedade **value** deve receber o valor da prop **cardDescription** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _attr1-input_:** a propriedade **value** deve receber o valor da prop **cardAttr1** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _attr2-input_:** a propriedade **value** deve receber o valor da prop **cardAttr2** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _attr3-input_:** a propriedade **value** deve receber o valor da prop **cardAttr3** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _image-input_:** a propriedade **value** deve receber o valor da prop **cardImage** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _rare-input_:** a propriedade **value** deve receber o valor da prop **cardRare** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Campo _trunfo-input_:** a propriedade **checked** deve receber o valor da prop **cardTrunfo** e a prop **onChange** deve receber o valor da prop **onInputChange**;
  - **Botão _save-button_:** a propriedade **disabled** deve receber o valor da prop **isSaveButtonDisabled** e a prop **onClick** deve receber o valor da prop **onSaveButtonClick**.

#### O que será verificado:

- Será validado se o campo de nome recebe o valor da prop **cardName** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo de descrição recebe o valor da prop **cardDescription** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo do atributo 1 recebe o valor da prop **cardAttr1** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo do atributo 2 recebe o valor da prop **cardAttr2** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo do atributo 3 recebe o valor da prop **cardAttr3** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo de imagem recebe o valor da prop **cardImage** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo de raridade recebe o valor da prop **cardRare** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o campo de Super Trufo recebe o valor da prop **cardTrunfo** e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração;
- Será validado se o botão de salvar é habilitado se o valor da prop **isSaveButtonDisabled** for `false`;
- Será validado se o botão de salvar é desabilitado se o valor da prop **isSaveButtonDisabled** for `true`;
- Será validado se a callback `onSaveButtonClick` é chamada quando o botão é clicado.

### 3. Crie e renderize o componente Card com as props necessárias

- Crie um componente com o nome Card na pasta **src/components** e renderize-o no componente principal `App`. O componente `Card` deve receber as seguintes props:

  - **cardName**, uma `string`;
  - **cardDescription**, uma `string`;
  - **cardAttr1**, uma `string`;
  - **cardAttr2**, uma `string`;
  - **cardAttr3**, uma `string`;
  - **cardImage**, uma `string`;
  - **cardRare**, uma `string`;
  - **cardTrunfo**, um `boolean`.

- Renderize o componente `Card` dentro do componente principal `App`:

  - Exiba o valor da prop **cardName**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="name-card"`;
  - Exiba a imagem usando a tag HTML `img`, com o atributo **src** que tenha o valor da prop **cardImage** e o atributo **alt** com o valor da prop **cardName**. Essa imagem também deve ter o atributo `data-testid="image-card"`;
  - Exiba o valor da prop **cardDescription**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="description-card"`;
  - Exiba o valor da prop **cardAttr1**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr1-card"`;
  - Exiba o valor da prop **cardAttr2**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr2-card"`;
  - Exiba o valor da prop **cardAttr3**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr3-card"`;
  - Exiba o valor da prop **cardRare**. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="rare-card"`;
  - Exiba o texto _"Super Trunfo"_ somente quando o valor da prop **cardTrunfo** for `true`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="trunfo-card"`.

#### O que será verificado:

- Será validado se o elemento com `data-testid="name-card"` é exibido e possui o valor da prop **cardName**;
- Será validado se o elemento com `data-testid="image-card"` é exibido e possui o atributo **src** com o valor da prop **cardImage** e o atributo **alt** com o valor da prop **cardName**;
- Será validado se o elemento com `data-testid="description-card"` é exibido e possui o valor da prop **cardDescription**;
- Será validado se o elemento com `data-testid="attr1-card"` é exibido e possui o valor da prop **cardAttr1**;
- Será validado se o elemento com `data-testid="attr2-card"` é exibido e possui o valor da prop **cardAttr2**;
- Será validado se o elemento com `data-testid="attr3-card"` é exibido e possui o valor da prop **cardAttr3**;
- Será validado se o elemento com `data-testid="rare-card"` é exibido e possui o valor da prop **cardRare**;
- Será validado se o elemento com `data-testid="trunfo-card"` é exibido quando a prop **cardTrunfo** tiver o valor `true`;
- Será validado se o elemento com `data-testid="trunfo-card"` **não** é exibido quando a prop **cardTrunfo** tiver o valor `false`.

### 4. Crie o preview da carta que está sendo criada pelo formulário

Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações.
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos).

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

#### Informações técnicas:

- Ao digitar algo no campo com o `data-testid="name-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="name-card"`;
- Ao digitar algo no campo com o `data-testid="description-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="description-card"`;
- Ao digitar algo no campo com o `data-testid="image-input"` do formulário, o mesmo valor deverá ser passado para o componente `Card`, e ser usado no atributo **src** do elemento com o `data-testid="image-card"`;
- Ao digitar algo no campo com o `data-testid="attr1-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr1-card"`;
- Ao digitar algo no campo com o `data-testid="attr2-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr2-card"`;
- Ao digitar algo no campo com o `data-testid="attr3-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr3-card"`;
- Ao selecionar algum valor no `select` com o `data-testid="rare-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="rare-card"`;
- Quando o campo do tipo `checkbox` que possui o `data-testid="trunfo-input"` estiver **checked**, deverá ser renderizado no componente `Card` o texto _"Super Trunfo"_ dentro do elemento com o `data-testid="trunfo-card"`.

#### O que será verificado:

- Será validado se é renderizado no preview da carta o valor digitado no `input` Nome do formulário;
- Será validado se é renderizado no preview da carta o valor digitado no `input` Descrição do formulário;
- Será validado se é renderizado no preview da carta o valor digitado no `input` referente ao atributo 1 no formulário;
- Será validado se é renderizado no preview da carta o valor digitado no `input` referente ao atributo 2 no formulário;
- Será validado se é renderizado no preview da carta o valor digitado no `input` referente ao atributo 3 no formulário;
- Será validado se é renderizado no preview da carta o `data-testid="trunfo-card"` se o checkbox _"Super Trunfo"_ for selecionado.

### 5. Faça a validação do botão de Salvar no formulário

O botão que possui o atributo `data-testid="save-button"` só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:

- Os campos _Nome_, _Descrição_, _Imagem_ e _Raridade_ devem conter alguma informação;
- A soma dos valores dos 3 atributos (**attr1-input**, **attr2-input** e **attr3-input**) não pode ultrapassar o valor **210**;
- Cada um dos três atributos pode ter **no máximo 90 pontos cada**;
- Os atributos não podem receber valores negativos.

#### O que será verificado:

- Será validado se o botão _salvar_ está desabilitado quando a página é renderizada pela primeira vez.
- Será validado se o botão _salvar_ está desabilitado se o campo nome estiver vazio.
- Será validado se o botão _salvar_ está desabilitado se o campo imagem estiver vazio.
- Será validado se o botão _salvar_ está desabilitado se o campo descrição estiver vazio.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 1 for maior que 90.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 1 for menor que 0.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 2 for maior que 90.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 2 for menor que 0.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 3 for maior que 90.
- Será validado se o botão _salvar_ está desabilitado se o campo do atributo 3 for menor que 0.
- Será validado se o botão _salvar_ está desabilitado se a somatória dos campos de atributos for maior que 210.
- Será validado se o botão _salvar_ é habilitado ao preencher todos os campos do formulário corretamente.

### 6. Crie a função do botão salvar

Agora que o botão de _salvar_ já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.

- Ao clicar no botão que possui o atributo `data-testid="save-button"`, as informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação;
- Após salvar as informações, os inputs do formulário _Nome_, _Descrição_ e _Imagem_ e o conteúdo do preview da carta deverão ser limpos;
- Após salvar as informações, os três campos de atributos devem ter valor 0;
- Após salvar as informações, o campo _Raridade_ deve conter o valor _normal_.

#### O que será verificado:

- Será validado se os campos do formulário _Nome_, _Descrição_ e _Imagem_ são limpos após clicar em _salvar_;
- Será validado se o os três campos de atributos têm o valor _0_ após clicar em _salvar_;
- Será validado se o campo de _Raridade_ tem o valor _normal_ após clicar em _salvar_.

### 7. Crie a validação do Super Trunfo

Em um baralho de Super Trunfo pode existir apenas uma carta _Super Trunfo_. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho:

- Para que uma carta seja salva como _Super Trunfo_ é preciso que o `input` com o `data-testid="trunfo-input"` esteja **checked** na hora de salvar a carta. Por isso, a validação será feita nesse campo. Para fazer essa validação, você deve usar o prop **hasTrunfo** do componente `Form`;
- Caso já exista uma carta _Super Trunfo_ em seu baralho, o formulário de criação de carta não deverá exibir o _checkbox_ `data-testid="trunfo-input"`. No seu lugar deve ser renderizada a frase: _"Você já tem um Super Trunfo em seu baralho"_.

#### O que será verificado:

- Será validado se o **checkbox** do _Super Trunfo_ é renderizado ao carregar a página;
- Será validado se o texto _"Você já tem um Super Trunfo em seu baralho"_ é renderizado caso já exista uma carta _Super Trunfo_ no baralho.

### 8. Exiba a lista de cartas que estão salvas no estado

Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção!

- Renderize dentro do component `App` uma lista com todas as cartas que você tem no estado da aplicação;
- Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.

#### O que será verificado:

- Será validado se a carta é renderizada na página ao salvá-la.
- Será validado se a lista é atualizada automaticamente quando uma carta é adicionada.

### 9. Crie um botão para remover uma carta do baralho

- Criar em cada carta que está sendo renderizada do seu baralho um button com o texto _"Excluir"_ e o atributo `data-testid="delete-button"`.

  - A carta de _preview_ não pode ter esse botão;
  - Ao clicar neste botão, a carta deve ser excluída do seu baralho, ou seja, não deverá mais ser renderizada na página;
  - Se a carta excluída for uma carta _Super Trunfo_, o _checkbox_ do formulário deverá aparecer novamente, tornando possível a criação de uma nova carta _Super Trunfo_.

#### O que será verificado:

- Será validado se o botão `Excluir` é renderizado na tela apenas nas cartas adicionadas ao baralho;
- Será validado se ao adicionar uma carta e excluí-la em seguida, a carta não é renderizada;
- Será validado se ao adicionar duas cartas e excluir uma em seguida, a carta não é renderizada;
- Será validado se ao excluir uma carta _Super Trunfo_, o _checkbox_ no formulário é renderizado novamente.

## Requisitos bônus

Sua aplicação terá três filtros de listagem de cartas: filtro por _nome_, por _raridade_ e por _Super Trunfo_. Os filtros _nome_ e _raridade_ são acumulativos. O filtro _Super Trunfo_ funciona de forma independente.

### 10. Crie o filtro pelo nome da carta

Para filtro do nome, você deverá criar um campo do tipo _text_ e adicionar o atributo `data-testid="name-filter"`:

- Este campo deve ser renderizado sempre, mesmo se não existirem cartas salvas no baralho;
- Ao digitar neste campo, deve ser renderizado na página apenas as cartas que contenham no _nome_ o texto digitado.

#### O que será verificado:

- Será validado se o campo de filtro por nome renderiza na tela;
- Será validado se apenas as cartas correspondentes aparecem após o filtro;
- Será validado se não renderiza nenhuma carta se não houver nome correspondente.

## 11. Crie o filtro por raridade da carta

Para filtrar por raridade, você deverá criar um campo do tipo `select` e adicionar o atributo `data-testid="rare-filter"`:

- Este `select` deve possuir as seguintes `options`:

  - _todas_;
  - _normal_;
  - _raro_;
  - _muito raro_.

- Por padrão, a opção _todas_ já deverá estar selecionada;
- Ao selecionar uma das opções, apenas as cartas que possuem a raridade especificada deverão ser renderizadas. Caso esteja selecionada _todas_, não deve ter filtro de raridade aplicado na lista;
- Se o campo do filtro _Nome_ estiver preenchido, os dois filtros (por nome e por raridade) devem funcionar em conjunto.

#### O que será verificado:

- Será validado se o campo de filtro por raridade renderiza na tela;
- Será validado se somente as cartas com raridade _normal_ são exibidas após o filtro;
- Será validado se somente as cartas com raridade _raro_ são exibidas após o filtro;
- Será validado se somente as cartas com raridade _muito raro_ são exibidas após o filtro;
- Será validado se todas as cartas são exibidas quando o filtro de raridade está com a opção _todas_ selecionada;
- Será validado se não renderiza nenhuma carta se não houver raridade correspondente.

## 12. Crie o filtro de Super Trunfo

Para filtrar por _Super Trunfo_, você deverá criar um campo do tipo _checkbox_ com a `label` _Super Trunfo_ e o atributo `data-testid="trunfo-filter"`:

- Ao selecionar este _checkbox_, apenas a carta **Super Trunfo** deverá ser renderizada;
- Enquanto o _checkbox_ estiver com o atributo **checked**, ou seja, se estiver selecionado, os inputs dos filtros por nome e por raridade deverão ficar com o atributo **disabled**;
- Se o _checkbox_ não estiver selecionado, as cartas devem ser renderizadas normalmente, seguindo apenas as regras dos filtros anteriores.

#### O que será verificado:

- Será validado se somente a carta de super trunfo é exibida quando esse filtro é selecionado.
