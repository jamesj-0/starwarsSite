import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Tests are running', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
