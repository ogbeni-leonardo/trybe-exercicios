import React, { Component } from 'react';

class App extends Component  {
  constructor() {
    super();

    this.state = {
      user: {},
      success: false,
    }
  }

  componentDidMount() {
    const API_URL = 'https://api.randomuser.me/';
    fetch(API_URL)
      .then((data) => data.json()) 
      .then(({ results }) => this.setState({ user: results[0], success: true }))
      .catch(() => this.setState({ success: false }));
  }

  shouldComponentUpdate(_nextProps, { user: { dob } }) {
    if(dob.age < 50) {
      console.log('Menos de 50');
      return true;
    }
    return false;
  }
  
  render() {
    const {
      user: {
        name,
        email,
        picture,
        dob,
      },
      success,
    } = this.state;

    return(
      <>
        { success ? (
          <div>
            <img src={ picture.large } alt={ name.first } />
            <p>Nome: { name.first } { name.last }</p>
            <p>E-mail: { email }</p>
            <p>Idade: { dob.age } anos</p>
          </div>
        ) : 'Carregando...' }
      </>
    )
  }
}

export default App;
