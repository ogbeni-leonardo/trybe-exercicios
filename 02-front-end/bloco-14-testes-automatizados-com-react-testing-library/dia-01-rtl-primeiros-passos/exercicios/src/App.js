import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.remTodo = this.remTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  remTodo(todo) {
    this.setState((state) => ({
      listTodo: state.listTodo.filter((todoItem) => todoItem !== todo),
    }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } remTodo={ this.remTodo } />
            </li>
          )) }
        </ul>
      </main>
    );
  }
}
export default App;
