import React from 'react';
// import * as SC from './styles/styledComponents';
import NavigationBar from './components/navigationBar/navigationBar';
// import TopicCard from './components/topicCard/topicCard';
import TopicPage from './components/topicPage/topicPage';
import useFetch from './hooks/requestHook/useFetchHook';

const topicItems = ['People', 'Planets', 'Films'];

function App() {
  const [url, setUrl] = React.useState('https://swapi.dev/api/films/3/');
  const [topic, setTopic] = React.useState('films');
  const { state: response } = useFetch({
    inputObject: { endpoint: url, method: 'GET' },
  });

  return (
    <>
      <NavigationBar topicItems={topicItems} />
      {response.status === 'fetched' && response.data.data ? (
        <TopicPage
          topic={topic}
          data={response.data.data}
          setUrl={setUrl}
          setTopic={setTopic}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default App;
