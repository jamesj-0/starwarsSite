import React from 'react';
// import * as SC from './styles/styledComponents';
// import NavigationBar from './components/navigationBar/navigationBar';
// import TopicCard from './components/topicCard/topicCard';
import TopicPage from './components/topicPage/topicPage';

// const topicItems = ['People', 'Planets', 'Films'];

function App() {
  // return <NavigationBar topicItems={topicItems} />;
  // return <TopicCard url="http://swapi.dev/api/people/1/" />;
  return <TopicPage topic="people" />;
}

export default App;
