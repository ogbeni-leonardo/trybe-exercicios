import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Cars from '../Cars';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('Testando o componente \'Cars\'', () => {
  it('Verifique se ao renderizar a página os carros são exibidos', () => {
    renderWithRedux(<Cars />);

    ['red car', 'blue car', 'yellow car'].forEach((car) => {
        const carImage = screen.getByAltText(car);
        expect(carImage).toBeInTheDocument();
    });    
  });

  it('Verifique se ao renderizar a página os botões de mover são mostrados', () => {
    renderWithRedux(<Cars />);

    const moveButtons = screen.getAllByRole('button', { name: 'move' });
    expect(moveButtons).toHaveLength(3);
  });

  it('Verifique se, ao clicar no botão de mover, a classe correspondente é encontrada', () => {
    renderWithRedux(<Cars />);

    const moveButtons = screen.getAllByRole('button', { name: 'move' });
    userEvent.click(moveButtons[1]);

    const blueCar = screen.getByAltText('blue car');
    expect(blueCar).toHaveClass('car-right');
  });
});
