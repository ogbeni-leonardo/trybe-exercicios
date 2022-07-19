import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';

import Header from './components/Header';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFount from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ () => <Pokedex data={ pokemons } /> } />
        <Route 
          exact
          path="/pokemons/:id"
          render={ (props) => <PokemonDetails { ...props } data={ pokemons } /> }
        />
        <Route exact path="/about" component={ About } />
        <Route path="*" component={ NotFount } />
      </Switch>
    </Router>
  );
}

export default App;
