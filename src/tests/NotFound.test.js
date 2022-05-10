import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWitchRouter';
import App from '../App';

test('', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/xablau');
  const notFound = screen.getByRole('heading', {
    name: /page requested not found/i,
  });
  expect(notFound).toBeInTheDocument();

  const notFoundImage = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i,
  });
  expect(notFoundImage).toBeInTheDocument();
  expect(notFoundImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
