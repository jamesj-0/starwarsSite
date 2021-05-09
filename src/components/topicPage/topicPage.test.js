import React from 'react';
import { render } from '@testing-library/react';

import TopicPage from './topicPage';

test('Topic Page renders', async () => {
  /* arrange */
  const responseDataMock = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
  };

  const setTopic = jest.fn();
  const setUrl = jest.fn();
  const setView = jest.fn();

  const topic = 'people';

  /* act */
  const { getByText } = render(
    <TopicPage
      topic={topic}
      data={responseDataMock}
      setUrl={setUrl}
      setTopic={setTopic}
      setView={setView}
    />,
  );

  /* assert */
  const name = getByText(/Luke Skywalker/i);
  const height = getByText(/172/i);
  const mass = getByText(/77/i);
  const hairColor = getByText(/blond/i);
  expect(name).toBeInTheDocument();
  expect(height).toBeInTheDocument();
  expect(mass).toBeInTheDocument();
  expect(hairColor).toBeInTheDocument();
});
