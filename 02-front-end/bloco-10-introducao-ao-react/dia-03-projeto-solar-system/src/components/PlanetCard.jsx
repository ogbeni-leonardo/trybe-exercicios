import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p
          data-testid="planet-name"
          className={ styles.planetName }
        >
          {planetName}
        </p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ styles.planetImage }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
