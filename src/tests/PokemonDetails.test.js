import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWitchRouter';
import App from '../App';

test('', () => {
  renderWithRouter(<App />);
  const details = screen.getByRole('link', {
    name: /more details/i,
  });
  userEvent.click(details);
  const locationHeading = screen.getByRole('heading', {
    name: /game locations of pikachu/i,
  });
  expect(locationHeading).toBeInTheDocument();

  const imageLocation = screen.getAllByRole('img', { name: /Pikachu location/i });
  expect(imageLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imageLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('', () => {
  renderWithRouter(<App />);
  const details = screen.getByRole('link', {
    name: /more details/i,
  });
  userEvent.click(details);
  const summary = screen.getByRole('heading', {
    name: /summary/i,
  });
  expect(summary).toBeInTheDocument();

  const summaryText = screen.getByText(
    /this intelligent pokémon roasts hard berries with electricity/i,
  );
  expect(summaryText).toBeInTheDocument();

  const favorite = screen.getByText(/pokémon favoritado\?/i);
  expect(favorite).toBeInTheDocument();

  const pikachuDetails = screen.getByRole('heading', {
    name: /pikachu details/i,
  });
  expect(pikachuDetails).toBeInTheDocument();
});
