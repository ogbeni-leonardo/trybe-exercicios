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

  test('Verificando se existe um botão para adicionar uma tarefa', () => {
    render(<App />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/adicionar/i);
  });

  test('Ao ser clicado no botão "Adicionar" a tarefa deve ser salva', () => {
    render(<App />);

    const task = 'minha tarefa';

    const inputText = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    userEvent.type(inputText, task);
    userEvent.click(button);

    const saved = screen.getByText(task);
    expect(saved).toBeInTheDocument();
    expect(inputText).toHaveValue('');
  });
});
