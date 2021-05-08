import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';

import { data, sortTopicData } from '../../utils/utilsFunctions';

import TopicCard from '../topicCard/topicCard';

const apiResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
  films: [],
  species: [],
  starships: [
    'http://swapi.dev/api/starships/12/',
    'http://swapi.dev/api/starships/22/',
  ],
  vehicles: [
    'http://swapi.dev/api/vehicles/14/',
    'http://swapi.dev/api/vehicles/30/',
  ],
};

export default function TopicPage({ topic }) {
  const topicData = sortTopicData({
    input: apiResponse,
    topic,
    keyIdentifier: 'informationKeys',
  });

  const cardData = sortTopicData({
    input: apiResponse,
    topic,
    keyIdentifier: 'linkKeys',
  });

  return (
    <SC.TopicPage>
      <SC.TopicInfo>
        <h3>{apiResponse[data.informationKeys[topic][0]]}</h3>
        <ul>
          {topicData.slice(1, topicData.length).map((attribute) => (
            <span key={`row-${attribute.value}`}>
              <li key={`label-${attribute.label}`}>{attribute.label}</li>
              <li key={`value-${attribute.value}`}>{attribute.value}</li>
            </span>
          ))}
        </ul>
      </SC.TopicInfo>
      <SC.StyledLineBreak />
      <div>
        {cardData.map(({ label, value }) => {
          if (typeof value === 'string') {
            return (
              <>
                <h3>{label}</h3>
                <SC.CardRow>
                  <TopicCard url={value} />
                </SC.CardRow>
                <SC.StyledLineBreak />
              </>
            );
          }
          if (typeof value === 'object') {
            return (
              <>
                <h3>{label}</h3>
                <SC.CardRow>
                  {value.map((url) => (
                    <TopicCard url={url} />
                  ))}
                </SC.CardRow>
                <SC.StyledLineBreak />
              </>
            );
          }
          return null;
        })}
      </div>
    </SC.TopicPage>
  );
}

TopicPage.propTypes = {
  topic: PropTypes.string.isRequired,
};
