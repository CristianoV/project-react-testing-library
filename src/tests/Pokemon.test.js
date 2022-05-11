import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWitchRouter';
import App from '../App';
import Data from '../data';

describe('testando o component Pokemon', () => {
  test('testando se os icones dos pokemons', () => {
    renderWithRouter(<App />);
    Data.forEach((pokemon) => {
      const pokemonName = new RegExp(pokemon.name, 'i');
      const testeImage = screen.getByRole('img', {
        name: pokemonName,
      });
      expect(testeImage).toBeInTheDocument();
      expect(testeImage).toHaveAttribute('src', pokemon.image);

      const atributePokemon = screen.queryByTestId('pokemon-type');
      expect(atributePokemon).toHaveTextContent(pokemon.type);

      const buttonNext = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(buttonNext);
    });
  });
  test('testando pokemons favoritados', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(details);
    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkbox);
    const home = screen.getByRole('link', {
      name: /home/i,
    });
    userEvent.click(home);
    const star = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
