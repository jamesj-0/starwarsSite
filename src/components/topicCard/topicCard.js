import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import useFetch from '../../hooks/requestHook/useFetchHook';

export default function TopicCard({ url, setUrl, setTopic, topic, setView }) {
  const { state: response } = useFetch({
    inputObject: { endpoint: url, method: 'GET' },
  });

  const handleClick = () => {
    let pageTopic = topic;
    if (topic === 'characters' || topic === 'residents' || topic === 'pilots') {
      pageTopic = 'people';
    }
    if (topic === 'homeworld') {
      pageTopic = 'planets';
    }

    setTopic(pageTopic);
    setUrl(url);
    setView('topic');
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
  setView: PropTypes.func.isRequired,
};
