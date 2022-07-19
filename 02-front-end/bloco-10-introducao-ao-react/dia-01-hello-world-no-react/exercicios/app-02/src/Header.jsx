import { Component } from 'react';

import style from './Header.module.css';

export default class Header extends Component {
  render() {
    return <h1 className={style.header}>Conteúdos de Front-End</h1>;
  }
}
