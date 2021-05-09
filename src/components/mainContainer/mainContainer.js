import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import Pagination from '../pagination/pagination';

import CardRow from '../cardRow/cardRow';

const MainContainer = ({
  topic,
  data: apiResponse,
  setUrl,
  setTopic,
  setView,
  pageNumber,
  setPageNumber,
}) => (
  <SC.TopicPage>
    <SC.TopicInfo>
      <SC.MainText>StarWars DB</SC.MainText>
    </SC.TopicInfo>
    <SC.StyledLineBreak />
    <div>
      <div key={`container-${apiResponse?.results}-${topic}`}>
        <h3 className="card-data-title">{topic}</h3>
        {CardRow({
          value: apiResponse?.results?.map(({ url }) => url),
          label: topic,
          setUrl,
          setTopic,
          setView,
          numberOfColumns: 3,
        })}
        <SC.StyledLineBreak />
      </div>
      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        setUrl={setUrl}
        topic={topic}
      />
    </div>
  </SC.TopicPage>
);

export default MainContainer;

MainContainer.propTypes = {
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
  setPageNumber: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
