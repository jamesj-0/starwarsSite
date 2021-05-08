import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import useFetch from '../../hooks/requestHook/useFetchHook';

export default function TopicCard({ url }) {
  const { state: response } = useFetch({
    inputObject: { endpoint: url, method: 'GET' },
  });
  return (
    <SC.TopicCard>
      {response.status === 'fetched' && (
        <>
          <p>{response.data.data.name}</p>
          <span />
        </>
      )}
    </SC.TopicCard>
  );
}

TopicCard.propTypes = {
  url: PropTypes.string.isRequired,
};
