import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import TopicCard from './topicCard';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/2/', (req, res, ctx) =>
    res(ctx.json({ name: 'C-3PO' })),
  ),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test('Topic Card renders', async () => {
  /* arrange */
  const setTopic = jest.fn();
  const setUrl = jest.fn();
  const setView = jest.fn();
  const topic = 'people';

  const url = 'https://swapi.dev/api/people/2/';

  /* act */
  render(
    <TopicCard
      url={url}
      setUrl={setUrl}
      setTopic={setTopic}
      topic={topic}
      setView={setView}
    />,
  );

  const card = await waitFor(() => screen.getByText(/C-3PO/i));

  /* assert */
  expect(card).toBeInTheDocument();
});
