import React from 'react';

import { render } from '@testing-library/react';

import TopicCard from './topicCard';

describe('Hello world test', () => {
  test('Tests run in this component', () => {
    expect(3).toBe(3);
  });
});

test('Burger menu renders', () => {
  /* arrange */

  /* act */
  const { getByText } = render(<TopicCard titleText="Robot" />);

  /* assert */
  const topicCard = getByText(/Robot/i);
  expect(topicCard).toBeInTheDocument();
});
