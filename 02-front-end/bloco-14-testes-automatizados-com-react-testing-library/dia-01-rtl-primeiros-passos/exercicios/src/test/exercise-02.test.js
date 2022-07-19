import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);

    const inputText = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByRole('button');

    listTodo.forEach((task) => {
      userEvent.type(inputText, task);
      userEvent.click(addButton);
    });

    listTodo.forEach((task) => {
      const taskItem = screen.getByText(task);
      expect(taskItem).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Minha tarefa" remTodo={ () => {} } />);

    const taskItem = screen.getByText(/minha tarefa/i);
    expect(taskItem).toBeInTheDocument();
  });
});
