import React, { Component } from 'react';
import pokemons from '../data';

export default class PokemonDetails extends Component {
  getPokemonById = (id) => {
    return pokemons.find((pokemon) => pokemon.id  === parseInt(id, 10));
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const pokemon = this.getPokemonById(id);

    return (
      <div>
        <p>{ pokemon.name }</p>
        <p>{ pokemon.type }</p>
        <p>{ pokemon.averageWeight.value }{' '}{ pokemon.averageWeight.measurementUnit }</p>
        <p>{ pokemon.summary }</p>
        { pokemon.foundAt.map((map, index) => (
          <div key={ index }>
            <p>{ map.location }</p>
            <img src={ map.map } alt={ map.location } />
          </div>
        )) }
      </div>
    );
  }
}

