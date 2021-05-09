import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './navigationBar';

test('Navbar renders', () => {
  /* arrange */
  const topicItems = [
    'People',
    'Planets',
    'Films',
    'Species',
    'Vehicles',
    'Starships',
  ];

  const setTopic = jest.fn();
  const setUrl = jest.fn();
  const setView = jest.fn();
  const setPageNumber = jest.fn();

  const topic = 'films';

  /* act */
  const { getByText } = render(
    <NavigationBar
      topicItems={topicItems}
      setTopic={setTopic}
      topic={topic}
      setView={setView}
      setUrl={setUrl}
      setPageNumber={setPageNumber}
    />,
  );

  /* assert */
  const browseText = getByText(/browse/i);
  expect(browseText).toBeInTheDocument();
});

test('Navbar renders a list of topicItems', () => {
  /* arrange */
  const topicItems = [
    'People',
    'Planets',
    'Films',
    'Species',
    'Vehicles',
    'Starships',
  ];

  const setTopic = jest.fn();
  const setUrl = jest.fn();
  const setView = jest.fn();
  const setPageNumber = jest.fn();

  const topic = 'films';

  /* act */
  const { getByText } = render(
    <NavigationBar
      topicItems={topicItems}
      setTopic={setTopic}
      topic={topic}
      setView={setView}
      setUrl={setUrl}
      setPageNumber={setPageNumber}
    />,
  );

  /* assert */
  const listItemSpecies = getByText(/Species/i);
  const listItemPeople = getByText(/People/i);
  const listItemFilms = getByText(/Films/i);
  const listItemPlanets = getByText(/Planets/i);

  expect(listItemSpecies).toBeInTheDocument();
  expect(listItemPeople).toBeInTheDocument();
  expect(listItemFilms).toBeInTheDocument();
  expect(listItemPlanets).toBeInTheDocument();
});
