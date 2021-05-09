import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import TopicCard from '../topicCard/topicCard';

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

const CardRow = ({
  value,
  label,
  setUrl,
  setTopic,
  setView,
  numberOfColumns,
}) => {
  if (typeof value === 'string') {
    return (
      <SC.CardRow>
        <TopicCard
          setUrl={setUrl}
          url={value}
          setTopic={setTopic}
          topic={label}
          setView={setView}
        />
      </SC.CardRow>
    );
  }
  if (typeof value === 'object') {
    return sortRows({
      value,
      label,
      setUrl,
      setTopic,
      setView,
      numberOfColumns,
    });
  }
  return null;
};

CardRow.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setUrl: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  setView: PropTypes.func.isRequired,
};

export default CardRow;
