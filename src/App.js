import React from 'react';
// import * as SC from './styles/styledComponents';
import NavigationBar from './components/navigationBar/navigationBar';

const topicItems = ['People', 'Planets', 'Films'];

function App() {
  return <NavigationBar topicItems={topicItems} />;
}

export default App;
