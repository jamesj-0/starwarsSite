import React from 'react';
import NavigationBar from './components/navigationBar/navigationBar';
import TopicPage from './components/topicPage/topicPage';
import useFetch from './hooks/requestHook/useFetchHook';
import MainContainer from './components/mainContainer/mainContainer';

const topicItems = [
  'People',
  'Planets',
  'Films',
  'Species',
  'Vehicles',
  'Starships',
];

function App() {
  const [url, setUrl] = React.useState('https://swapi.dev/api/films/?page=1');
  const [topic, setTopic] = React.useState('films');
  const [view, setView] = React.useState('browse');
  const [pageNumber, setPageNumber] = React.useState(1);
  const { state: response } = useFetch({
    inputObject: { endpoint: url, method: 'GET' },
  });

  return (
    <>
      <NavigationBar
        topicItems={topicItems}
        setTopic={setTopic}
        topic={topic}
        setView={setView}
        setUrl={setUrl}
        setPageNumber={setPageNumber}
      />
      {response.status === 'fetched' && response.data.data ? (
        <>
          {view === 'topic' && (
            <TopicPage
              topic={topic}
              data={response.data.data}
              setUrl={setUrl}
              setTopic={setTopic}
              setView={setView}
            />
          )}
          {view === 'browse' && (
            <MainContainer
              topic={topic}
              data={response.data.data}
              setUrl={setUrl}
              setTopic={setTopic}
              setView={setView}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
