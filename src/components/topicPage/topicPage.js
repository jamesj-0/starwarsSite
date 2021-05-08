/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';

import { data, sortTopicData } from '../../utils/utilsFunctions';

import TopicCard from '../topicCard/topicCard';

export default function TopicPage({
  topic,
  data: apiResponse,
  setUrl,
  setTopic,
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

  const sortRows = (value, label) => {
    const finalArr = [];
    let columns = [];

    value?.forEach((url, i) => {
      columns.push(
        <TopicCard
          setUrl={setUrl}
          key={`card-${(value, i)}`}
          url={url}
          setTopic={setTopic}
          topic={label}
        />,
      );

      if ((i + 1) % 3 === 0) {
        finalArr.push(
          <SC.CardRow key={`cardRow-${url}-${label}`}>{columns}</SC.CardRow>,
        );
        columns = [];
      }
    });
    if (finalArr.length > 0 && columns.length > 0) {
      finalArr.push(
        <SC.CardRow key={`cardRow-${value}-${label}`}>{columns}</SC.CardRow>,
      );
    }

    return finalArr.length > 0 ? finalArr : <SC.CardRow>{columns}</SC.CardRow>;
  };

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
        {cardData.map(({ label, value }) => {
          if (typeof value === 'string') {
            return (
              <div key={`container-${value}-${label}`}>
                <h3 className="card-data-title">{label}</h3>
                <SC.CardRow>
                  <TopicCard
                    setUrl={setUrl}
                    url={value}
                    setTopic={setTopic}
                    topic={label}
                  />
                </SC.CardRow>
                <SC.StyledLineBreak />
              </div>
            );
          }
          if (typeof value === 'object') {
            return (
              <div key={`container-${value}-${label}`}>
                <h3 className="card-data-title">{label}</h3>
                {sortRows(value, label)}
                <SC.StyledLineBreak />
              </div>
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
  data: PropTypes.objectOf(PropTypes.object),
  setUrl: PropTypes.func.isRequired,
  setTopic: PropTypes.func.isRequired,
};

TopicPage.defaultProps = {
  data: null,
};
