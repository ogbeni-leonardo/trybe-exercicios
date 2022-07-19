import { Component } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import styles from './Pokedex.module.css';

export default class Pokedex extends Component {
  render() {
    return (
      <div className={ styles.container }>
        {this.props.data.map((pokemon) => <Pokemon key={pokemon.id} data={pokemon} />)}
      </div>
    );
  }
}

Pokedex.propTypes = {
  data: PropTypes.array.isRequired,
};
