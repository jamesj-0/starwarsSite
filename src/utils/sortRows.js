import React from 'react';
import TopicCard from '../components/topicCard/topicCard';
import * as SC from '../styles/styledComponents';

const sortRows = ({
  value,
  label,
  setUrl,
  setTopic,
  setView,
  numberOfColumns,
}) => {
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
        setView={setView}
      />,
    );

    if ((i + 1) % numberOfColumns === 0) {
      finalArr.push(
        <SC.CardRow data-testid="cardRow" key={`cardRow-${url}-${label}`}>
          {columns}
        </SC.CardRow>,
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

export default sortRows;
