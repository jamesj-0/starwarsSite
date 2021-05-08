import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';

export default function TopicCard({ titleText }) {
  return (
    <SC.TopicCard>
      <p>{titleText}</p>
      <span />
    </SC.TopicCard>
  );
}

TopicCard.propTypes = {
  titleText: PropTypes.string.isRequired,
};
