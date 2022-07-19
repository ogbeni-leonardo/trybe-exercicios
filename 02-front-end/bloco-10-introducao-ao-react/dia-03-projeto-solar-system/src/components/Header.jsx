import React, { Component } from 'react';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={ style.headerTitle }>Sistema Solar</h1>
      </header>
    );
  }
}
