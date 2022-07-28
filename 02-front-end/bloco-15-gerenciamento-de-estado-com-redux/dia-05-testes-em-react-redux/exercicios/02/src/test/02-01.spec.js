import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    listTodo.forEach((item) => {
      userEvent.type(inputTask, item);
      userEvent.click(addButton);
    });

    listTodo.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    listTodo.forEach((item) => {
      render(<Item content={ item } />);
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
