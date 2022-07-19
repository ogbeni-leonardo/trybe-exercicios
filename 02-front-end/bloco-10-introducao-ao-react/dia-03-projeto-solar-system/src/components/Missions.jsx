import React, { Component } from 'react';
import missions from '../data/missions';

import Title from './Title';
import MissionsCard from './MissionCard';
import styles from './Missions.module.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className={ styles.missions }>
          { missions.map(({ name, year, country, destination }, index) => (
            <MissionsCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          )) }
        </div>
      </div>
    );
  }
}
