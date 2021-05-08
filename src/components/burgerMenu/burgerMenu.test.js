import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BurgerMenu from './burgerMenu';

describe('Hello world test', () => {
  test('Tests run in this component', () => {
    expect(3).toBe(3);
  });
});

test('Burger menu renders', () => {
  /* arrange */
  const setNavOpen = () => {};
  const navOpen = false;

  /* act */
  const { getByRole } = render(
    <BurgerMenu setNavOpen={setNavOpen} navOpen={navOpen} />,
  );

  /* assert */
  const burgerButton = getByRole(/button/i);
  expect(burgerButton).toBeInTheDocument();
});

test('Burger menu sets state', () => {
  /* arrange */
  const mockCallBack = jest.fn();
  const navOpen = false;

  /* act */
  const { getByRole } = render(
    <BurgerMenu setNavOpen={mockCallBack} navOpen={navOpen} />,
  );

  /* assert */
  fireEvent.click(getByRole(/button/i));
  expect(mockCallBack).toHaveBeenCalledTimes(1);
});
