import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWitchRouter';
import App from '../App';

test('testando os pokemons favoritos', () => {
  renderWithRouter(<App />);
  const linkFavorites = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  expect(linkFavorites).toBeInTheDocument();
  userEvent.click(linkFavorites);
  const notFound = screen.getByText(/no favorite pokemon found/i);
  expect(notFound).toBeInTheDocument();
});
