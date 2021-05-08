import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import useFetch from '../../hooks/requestHook/useFetchHook';

export default function TopicCard({ url, setUrl, setTopic, topic }) {
  const { state: response } = useFetch({
    inputObject: { endpoint: url, method: 'GET' },
  });

  const handleClick = () => {
    setTopic(
      topic === 'characters' || topic === 'residents' || topic === 'pilots'
        ? 'people'
        : topic,
    );
    setUrl(url);
  };

  return (
    <SC.TopicCard onClick={handleClick}>
      {response.status === 'fetched' && (
        <>
          <p>{response.data.data.name || response.data.data.title}</p>
          <span />
        </>
      )}
    </SC.TopicCard>
  );
}

TopicCard.propTypes = {
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
};
