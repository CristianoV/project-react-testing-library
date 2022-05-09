import React from 'react';
import { screen } from '@testing-library/react';
import RenderWitchRouter from '../components/renderWitchRouter';
import App from '../App';

test('testando a renderização do app', () => {
  RenderWitchRouter(<App />);
  const teste = screen.getByRole('link', {
    name: /about/i,
  });
  expect(teste).toBeInTheDocument();

  const test1 = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  expect(test1).toBeInTheDocument();

  const test2 = screen.getByRole('link', {
    name: /home/i,
  });
  expect(test2).toBeInTheDocument();
});
