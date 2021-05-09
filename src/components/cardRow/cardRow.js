import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import TopicCard from '../topicCard/topicCard';
import sortRows from '../../utils/sortRows';

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
