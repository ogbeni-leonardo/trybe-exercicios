import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a App.js', () => {
  test('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });

  test('Verificando se o botão de adicionar tarefa exite no documento', () => {
    render(<App />);

    const addButton = screen.getByRole('button', { name: /adicionar/i });
    expect(addButton).toBeInTheDocument();
  });

  test('A tarefa digitada é salva ao pressionar o botão de adicionar', () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    const task = 'Minha tarefa';

    userEvent.type(inputTask, task);
    userEvent.click(addButton);

    expect(screen.getByText(task)).toBeInTheDocument();
  });
});
