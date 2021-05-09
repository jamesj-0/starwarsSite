import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import Pagination from '../pagination/pagination';

import CardRow from '../cardRow/cardRow';

export default function MainContainer({
  topic,
  data: apiResponse,
  setUrl,
  setTopic,
  setView,
  pageNumber,
  setPageNumber,
}) {
  return (
    <SC.TopicPage>
      <SC.TopicInfo>
        <h3>StarWars DB</h3>
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
}

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
