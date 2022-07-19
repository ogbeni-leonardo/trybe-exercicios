# ATIVIDADES DE FIXAÇÃO

## ATIVIDADE 01

Vamos treinar os momentos de cada método do **React lifecycle!** Nossa aplicação React para mostrar perfis e contatos do GitHub está com métodos do ciclo de vida incompletos e você deverá preenchê-los para ela voltar a funcionar.

Para isso você receberá trechos de código e dicas sobre qual é o método responsável pela execução do código, e qual o componente que precisará desse código.

1. Primeiro, vamos criar a nossa aplicação React!

```
npx create-react-app lifecycleapp
cd lifecycleapp
npm install
npm start
```

2. Agora, crie ou substitua os arquivos abaixo:

- **src/App.js**

```
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    // 💡 me preencha!
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    // 💡 está faltando algo aqui!
  }
}

export default App;
```

- **src/App.css**

```
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css';

.card {
  background-color: aliceblue;
  border-radius: 25px !important;
  max-height: 200px;
  padding: 10px;
  text-align: center;
  width: 30vw;
  max-width: 250px;
}


.c-button {
  margin-top: 10px;
}

.c-img {
  max-width: 100px;
}

.card-list {
  margin-top: 20px;
  width: 100vw;
}

.central {
  height: 10vh;
}

.connections-blue {
  background-color: lightblue;
}

.connections-coral {
  background-color: lightcoral;
}


.counter {
  margin: 15px 0;
  text-align: center;
}

.git {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  height: 40vh;
  margin: 10px;
}

.git-connections {
  align-items: center;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
}

.gitNetwork {
  background-color: lavender;
  height: 100vh;
  width: 100vw;
}

.form {
  text-align: center;
  width: 90%;
}

.myPicture {
  border: 4px solid white;
  border-radius: 100%;
  width: 200px;
}

img {
  border-radius: 25px !important;
}

input {
  min-width: 150px !important;
  max-width: 250px;
}

p {
  text-align: center;
}

span {
  color: #710ece;
  font-size: x-large;
  font-weight: 600;
}
```

- **src/components/Connections.js**

```
import React from 'react';

class Connections extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      list: [],
      counter: 0,
      background: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.contactAdder = this.contactAdder.bind(this);
    this.changeToBlue = this.changeToBlue.bind(this);
    this.changeToCoral = this.changeToCoral.bind(this);
  }

  shouldComponentUpdate(_nextProps, { list }) {
    // 💡 o que será que vai aqui?
  }

  componentDidUpdate(_prevProps, prevState) {
    // 💡 tá meio vazio esse método, não?
  }

  handleChange({ target: { value } }) {
    this.setState({
      user: value,
    });
  }

  async handleClick() {
    const { user, list, counter } = this.state;
    const url = `https://api.github.com/users/${user}`;
    const isUserAbsent = !list.some((contact) => contact.login === user);

    try {
      const apiResponse = await fetch(url);
      const profileObject = await apiResponse.json();

      if (profileObject.login && isUserAbsent) {
        this.setState({
          list: [...list, profileObject],
          counter: counter + 1,
        });
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeToBlue() {
    this.setState({ background: 'connections-blue' });
  }

  changeToCoral() {
    this.setState({ background: 'connections-coral' });
  }

  removeContact(loginToRemove) {
    const { list, counter } = this.state;
    const updatedList = list.filter(({ login }) => login !== loginToRemove);

    this.setState({
      list: updatedList,
      counter: counter - 1,
    });
  }

  contactAdder(counter) {
    return (
      <div className="counter">
        <div>
          <h5>Quantidade de contatos:</h5>
          <span>{ counter }</span>
        </div>
        <div className="form">
          <form className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={ this.handleChange }
              placeholder="Adicione seu contato famoso"
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    );
  }

  contactList(list) {
    return (
      <div className="card-list d-flex flex-row justify-content-around">
        { list.map((api) => (
          <div className="card d-flex align-items-center" key={ api.name }>
            <h5>{ api.name }</h5>
            <img className="c-img" src={ api.avatar_url } alt="Avatar" width="50%" />
            <button
              className="c-button btn btn-danger w-25 align-self-center"
              data-login={ api.login }
              type="button"
              onClick={ () => this.removeContact(api.login) }
            >
              X
            </button>
          </div>))}
      </div>
    );
  }

  render() {
    const { list, counter, background } = this.state;

    return (
      <div className={ `git-connections ${background}` }>
        { this.contactAdder(counter) }
        { this.contactList(list) }
      </div>
    );
  }
}

export default Connections;
```

- **src/components/Profile.js**

```
import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
    };

    this.changeDataJson = this.changeDataJson.bind(this);
  }

  async componentDidMount() {
    // 💡 não se esqueça de mim!
  }

  componentWillUnmount() {
    // 💡 eu também quero um código!
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio } = '', api } = this.state;

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}

export default Profile;
```

### Preparado? Aqui vão as dicas!

- **src/App.js**

_*O método que você procura é o primeiro método a ser executado. Ele é executado uma única vez quando o componente é inicializado e guarda os estados iniciais do componente. Recebe props como argumento e é onde conectamos as funções ao componente (bind).*_

```
super();

this.state = {
  showProfile: true,
};

this.changeProfile = this.changeProfile.bind(this);
```

_*Não use o setState dentro do render(), isso pode ocasionar loops infinitos, porque o método render é chamado quando o state é atualizado, então ao colocar o setState dentro do render, ele irá atualizar o state e chamar o render, atualizar o state novamente e chamar o render e por aí vai, o método render deve ser puro. Uma função pura é aquela que ela não pode ser alterada, independente do que entra nela ela deve permanecer igual. Se você quer inicializar variáveis assim que a página for montada, utilize o componentDidMount()*_

```
const { showProfile } = this.state;
return (
  <div className="gitNetwork d-flex flex-column justify-content-center">
    { showProfile ? <Profile /> : null }
    <div className="central d-flex justify-content-center">
      <button
        className="btn btn-dark align-self-center"
        type="button"
        onClick={ this.changeProfile }
      >
        Mostrar / Ocultar Perfil
      </button>
    </div>
    <Connections />
  </div>
);
```

- **src/components/Profile.js**

_*O método que você busca é executado assim que o componente for montado e estiver pronto na tela. Caso precise fazer uma requisição a alguma API, esse método é um bom lugar para guardar tal requisição. O React permite o uso do setState nesse método.*_

```
const myUser = ''; //Preencha myUser com o seu user do GitHub.
try {
  const url = `https://api.github.com/users/${myUser}`;
  const response = await fetch(url)
  const dataJson = await response.json()
  this.setState({ api: dataJson})
} catch (error) {
  console.log(error)
}
```

- **src/components/Connections.js**

_*Método executado sempre que ocorrer alguma atualização. Comumente utilizado para atualizar o DOM de acordo com as alterações de estado ou props, e é um método que também pode ser utilizado para requisições à API. Recebe como parâmetros prevProps, prevState e snapshot, sendo os mais utilizados os dois primeiros.*_

```
const { list } = this.state;

if (prevState.list.length < list.length) {
this.changeToBlue();
// Ao adicionar um contato, a div ficará azul.
} else if (prevState.list.length > list.length) {
this.changeToCoral();
// Ao deletar um contato, a div ficará coral.
}
```

- **src/components/Profile.js**

_*Aqui você busca o método executado no momento anterior a completa desmontagem, destruição, do componente. Qualquer limpeza pode ser realizada neste método, seja cancelar a chamada de uma API, limpar localStorage ou parar a atualização de algum timer. Não se deve utilizar o setState nesse método, uma vez que o componente será destruído e, portanto, não ocorrerá uma nova atualização de estado nesse componente.*_

```
alert('Você ocultou seu perfil');
```

- **src/components/Connections.js**

_*O método aqui é muito útil quando você não quer que a sua atualização de estado ou props gere uma nova renderização. Ele, portanto, é executado antes do método componentDidUpdate. O componentDidUpdate não será chamado se esse método retornar false. Recebe como parâmetros nextProps e nextState.*_

```
const maxContactsNumber = 3;

return list.length <= maxContactsNumber;
// A quantidade de contatos não pode ser maior que 3, portanto se a lista é maior que 3, ele deverá retornar false e impedir a atualização.
```

Agora que você terminou a sua aplicação, você deve verificar que tudo está funcionando de acordo com o planejado. Para isso, selecionamos esta lista de celebridades do mundo da tecnologia que possuem um perfil no GitHub, para serem incluídos e incluídas na sua lista VIP de contatos:

- Sandi Metz (skmetz) - Desenvolvedora de software e autora, especialista em código orientado a objetos em Ruby on Rails;
- Anders Hejlsberg (ahejlsberg) - Desenvolvedor do Delphi e Turbo Pascal;
- Brendan Gregg (brendangregg) - Engenheiro de núcleo e desempenho da Netflix;
- Guido van Rossum (gvanrossum) - Autor da linguagem de programação Python;
- Yukihiro Matsumoto (matz) - Criador da linguagem de programação Ruby,
- Brendan Eich (BrendanEich) - Criador da linguagem de programação JavaScript;
- Markus Persson (xNotch) - Fundador da Mojang Studios e criador do jogo Minecraft;
- Natalie Weizenbaum (nex3) - principal desenvolvedora e designer líder do Sass.

### Verifique

1. Os dados do seu perfil GitHub foram exibidos ao iniciar a aplicação?
2. É possível exibir ou ocultar os dados do seu perfil?
3. É possível adicionar um contato na sua lista de contatos?
4. Ao adicionar o contato, o background mudou para um tom azulado?
5. É possível excluir um contato na sua lista de contatos?
6. Ao excluir o contato, o background mudou para um tom alaranjado?
7. O contador de contatos funciona perfeitamente?

## ATIVIDADE 02

Nesta atividade, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.

A api utilizada será a **_randomuser_** no endereço _'https://api.randomuser.me/'_ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome `results`.

Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api **_randomuser_**. Utilize o método componentDidMount.

Enquanto os dados não são entregues, deve ser renderizada uma div com o conteúdo _'Carregando...'_

Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.

Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método `shouldComponentUpdate`.

# EXERCÍCIOS

## EXERCÍCIO 01

Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Use a API [dog.ceo](https://dog.ceo/dog-api/).

Observe a estrutura de dados que a API retorna:

```
  {
    "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
  }
```

- Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
- Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
- Deve existir um botão que, para cada clique, busque mais um cachorro.

## EXERCÍCIO 02

Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

- A cada tentativa de atualização do componente, verifique se o campo **message** tem a palavra _'terrier'_. Se sim, não atualize o componente. Pesquise pelo método `includes`;
- Guarde a url da última imagem gerada no localStorage após cada atualização;
- Após a atualização do componente, exiba um `alert` com a raça do cachorro (verifique o campo **message**).

## BÔNUS

Com o código do ultimo exercício, implemente:

- A cada foto que for baixada, através de um input, permita que quem usa dê um nome ao cachorro;
- Crie um botão que guarde o resultado, juntamente com o nome dado ao cachorro, em um array;
- Guarde o array no `localStorage` a cada atualização, e não mais a url da última imagem gerada;
- A cada inicialização da aplicação, verifique se existem dados prévios guardados no `localStorage`. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exiba a última imagem guardada.
