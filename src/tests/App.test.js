import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWitchRouter';
import App from '../App';

test('testando a renderização do app', () => {
  renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', {
    name: /about/i,
  });
  expect(linkAbout).toBeInTheDocument();

  const linkFavorites = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  expect(linkFavorites).toBeInTheDocument();

  const linkHome = screen.getByRole('link', {
    name: /home/i,
  });
  expect(linkHome).toBeInTheDocument();
});
