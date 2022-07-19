import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return <h2 className={ styles.title }>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
