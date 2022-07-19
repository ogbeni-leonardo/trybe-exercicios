import { Component } from 'react';

import style from './Content.module.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

export default class Content extends Component {
  render() {
    return (
      <>
        {conteudos.map(({ conteudo, bloco, status }, index) => (
          <p key={index} className={style.card}>
            <span>O conteúdo é: </span>
            {conteudo}
            <br />
            <span>Status: </span>
            {status}
            <br />
            <span>Bloco: </span>
            {bloco}
            <br />
          </p>
        ))}
      </>
    );
  }
}
