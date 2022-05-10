import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWitchRouter';
import App from '../App';

test('testando a renderização do app', () => {
  renderWithRouter(<App />);
  const aboutButton = screen.getByRole('link', {
    name: /about/i,
  });
  expect(aboutButton).toBeInTheDocument();
  userEvent.click(aboutButton);

  const heading = screen.getByRole('heading', {
    name: /about pokédex/i,
  });
  expect(heading).toBeInTheDocument();

  const image = screen.getByRole('img', {
    name: /pokédex/i,
  });
  expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
