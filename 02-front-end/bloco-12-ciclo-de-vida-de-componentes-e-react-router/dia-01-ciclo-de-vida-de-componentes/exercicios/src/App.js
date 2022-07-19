import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.localStorageUpdate = this.localStorageUpdate.bind(this);

    this.state = {
      loading: true,
      dogImage: '',
      dogName: '',
      amITyping: false,
    };
  }

  fetchDog() {
    const API_URL = 'https://dog.ceo/api/breeds/image/random';
    this.setState({ loading: true, amITyping: false }, () => {
      fetch(API_URL)
        .then((data) => data.json())
        .then(({ message }) =>
          this.setState({ loading: false, dogImage: message, dogName: '' })
        )
        .catch(() => this.setState({ loading: true, dogImage: '', dogName: '' }));
    });
  }

  localStorageUpdate() {
    const { dogImage, dogName, amITyping } = this.state;

    if (dogImage.length > 0 && !amITyping) {
      const storedData = JSON.parse(localStorage.getItem('data'));
      
      const filterWithoutThisDog = storedData.filter(({ image }) => image !== dogImage);
      filterWithoutThisDog.push({ image: dogImage, name: dogName });

      localStorage.setItem('data', JSON.stringify(filterWithoutThisDog));
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify([]));
      this.fetchDog();
      return;
    }

    const localStorageData = JSON.parse(localStorage.getItem('data'));
    const LAST_INDEX = localStorageData.length - 1;

    this.setState({
      dogImage: localStorageData[LAST_INDEX].image,
      dogName: localStorageData[LAST_INDEX].name,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, { dogImage }) {
    if (dogImage.includes('terrier')) {
      this.setState({ loading: true });
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    const { dogImage, amITyping } = this.state;

    if (dogImage && !amITyping) {
      this.localStorageUpdate();

      const raca = dogImage.split('/')[4].toUpperCase();
      alert(`A raça do cachorro é ${raca}.`);
    }
  }

  render() {
    const { loading, dogImage, dogName } = this.state;

    return (
      <div className='App'>
        {loading ? <p>Loading...</p> : <img src={dogImage} alt='The dog' />}

          <div className="dogsName">
            <label htmlFor='name'>
              Dê um nome a este cachorro:
              {' '}
              <input
                id='name'
                type='text'
                value={dogName}
                onChange={({ target }) => this.setState({ dogName: target.value, amITyping: true })}
              />
            </label>

            <button
              type="button"
              onClick={ () => this.setState({ amITyping: false }, () => this.localStorageUpdate()) }
            >
              Salvar
            </button>
          </div>

        <button onClick={this.fetchDog} type='button'>
          Próximo
        </button>
      </div>
    );
  }
}

export default App;
