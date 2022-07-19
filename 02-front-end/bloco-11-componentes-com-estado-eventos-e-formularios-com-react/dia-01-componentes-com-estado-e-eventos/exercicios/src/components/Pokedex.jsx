import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import Button from './Button';
import styles from './Pokedex.module.css';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      currentIndex: 0,
      pokemonTypes: Array.from(new Set(data.map(({ type }) => type))),
      filteredPokemons: [...data],
      nextButtonDisabled: false,
    };
  }

  nextPokemon = ({ length }) => {
    const { currentIndex } = this.state;
    let newIndex;

    if (currentIndex < length - 1) newIndex = currentIndex + 1;
    else if (currentIndex === length - 1) newIndex = 0;

    this.setState({ currentIndex: newIndex });
  };

  filterPokemon = (filter) => {
    const { data } = this. props;

    const filteredPokemons = data.filter((pokemon) => (
      pokemon.type === filter || filter === 'All'
    ));

    this.setState({
      currentIndex: 0,
      filteredPokemons,
      nextButtonDisabled: filteredPokemons.length === 1,
    });
  };

  render() {
    const {
      currentIndex,
      pokemonTypes,
      filteredPokemons,
      nextButtonDisabled,
    } = this.state;

    return (
      <div className={styles.container}>
        { filteredPokemons
          .filter((_pokemon, index) => index === currentIndex)
          .map((pokemon) => (
            <Pokemon key={ pokemon.id } data={ pokemon } />
        )) }

        <div>
          <Button func={() => this.filterPokemon('All')}>
            All
          </Button>

          { pokemonTypes.map((type, index) => (
              <Button
                key={ index }
                func={() => this.filterPokemon(type)}
              >
                { type }
              </Button>
          )) }

          <Button 
            func={() => this.nextPokemon(filteredPokemons)}
            disabled={ nextButtonDisabled }
          >
            Próximo
          </Button>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  data: PropTypes.array.isRequired,
};
