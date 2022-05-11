import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWitchRouter';
import App from '../App';

describe('testando a pokedex', () => {
  test('testando a quantidade de botões por tipos de Pokemons', () => {
    renderWithRouter(<App />);
    const testeId = screen.queryAllByTestId('pokemon-type-button');
    const testeLength = 7;
    expect(testeId).toHaveLength(testeLength);
  });

  test('testando se cada botão tem o texto do tipo do pokemon ', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('button', {
      name: /electric/i,
    })).toHaveTextContent(/electric/i);

    expect(screen.getByRole('button', {
      name: /fire/i,
    })).toHaveTextContent(/fire/i);

    expect(screen.getByRole('button', {
      name: /bug/i,
    })).toHaveTextContent(/bug/i);

    expect(screen.getByRole('button', {
      name: /poison/i,
    })).toHaveTextContent(/poison/i);

    expect(screen.getByRole('button', {
      name: /psychic/i,
    })).toHaveTextContent(/psychic/i);

    expect(screen.getByRole('button', {
      name: /normal/i,
    })).toHaveTextContent(/normal/i);

    expect(screen.getByRole('button', {
      name: /dragon/i,
    })).toHaveTextContent(/dragon/i);
  });

  test('testa se os filtros funcionam', () => {
    renderWithRouter(<App />);
    const atributes = ['Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon'];
    atributes.forEach((atribute) => {
      const buttonAtribute = screen.getByRole('button', {
        name: atribute,
      });
      expect(buttonAtribute).toHaveTextContent(atribute);
      userEvent.click(buttonAtribute);
      const atributePokemon = screen.queryByTestId('pokemon-type');
      // console.log(atributePokemon);
      expect(atributePokemon).toHaveTextContent(atribute);
    });

    const buttonAllPokemons = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(buttonAllPokemons);
  });
});
