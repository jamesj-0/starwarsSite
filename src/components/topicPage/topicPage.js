/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';

import { data, sortTopicData } from '../../utils/utilsFunctions';

import CardRow from '../cardRow/cardRow';

export default function TopicPage({
  topic,
  data: apiResponse,
  setUrl,
  setTopic,
  setView,
}) {
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
        <h3>{apiResponse?.[data?.informationKeys?.[topic]?.[0]]}</h3>
        <ul>
          {topicData.slice(1, topicData.length).map((attribute) => (
            <span key={`row-${attribute.label}`}>
              <li key={`label-${attribute.label}`}>{attribute.label}</li>
              <li key={`value-${attribute.label}`}>{attribute.value}</li>
            </span>
          ))}
        </ul>
      </SC.TopicInfo>
      <SC.StyledLineBreak />
      <div>
        {cardData.map(({ label, value }) => (
          <div key={`container-${value}-${label}`}>
            <h3 className="card-data-title">{label}</h3>
            {CardRow({
              value,
              label,
              setUrl,
              setTopic,
              setView,
              numberOfColumns: 4,
            })}
            <SC.StyledLineBreak />
          </div>
        ))}
      </div>
    </SC.TopicPage>
  );
}

TopicPage.propTypes = {
  topic: PropTypes.string.isRequired,
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object,
    ]),
  ).isRequired,
  setUrl: PropTypes.func.isRequired,
  setTopic: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};
