import { render } from '@testing-library/react';
import CardRow from './cardRow';

test('Card row renders', async () => {
  /* arrange */

  const setTopic = jest.fn();
  const setUrl = jest.fn();
  const setView = jest.fn();
  const numberOfColumns = 3;
  const value = ['people/1/', 'people/1/', 'people/1/'];
  const label = 'Films';

  /* act */
  const { getByTestId } = render(
    CardRow({ value, label, setUrl, setTopic, setView, numberOfColumns }),
  );

  /* assert */
  const cardRow = getByTestId(/cardRow/i);
  expect(cardRow).toBeInTheDocument();
});
