import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Pokemon.module.css';

export default class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.data;

    return (
      <div className={styles.pokemonGroup}>
        <div className={styles.pokemonInfo}>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {`${value}${measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};
