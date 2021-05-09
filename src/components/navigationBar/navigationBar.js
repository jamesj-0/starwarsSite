import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from '../burgerMenu/burgerMenu';
import * as SC from '../../styles/styledComponents';

const NavigationBar = ({
  topicItems,
  setView,
  setUrl,
  setTopic,
  topic: currentTopic,
  setPageNumber,
}) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const clickHandler = (e) => {
    const page = e.target.getAttribute('value');
    setTopic(page);
    setUrl(`https://swapi.dev/api/${page}/?page=1`);
    setPageNumber(1);
    setView('browse');
  };

  return (
    <SC.NavigationBar>
      <BurgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      <SC.NavigationList open={navOpen}>
        <p>browse</p>
        {topicItems.map((topic) => (
          <div
            onClick={clickHandler}
            key={`listItem-container-${topic}`}
            value={topic.toLowerCase()}
            onKeyPress={clickHandler}
            role="button"
            tabIndex="0"
          >
            <SC.HighlightedSpan
              key={`listItem-highlighted-${topic}`}
              highlighted={topic.toLowerCase() === currentTopic}
            />
            <SC.NavigationItem
              highlighted={topic.toLowerCase() === currentTopic}
              key={`listItem-text-${topic}`}
              value={topic.toLowerCase()}
            >
              {topic}
            </SC.NavigationItem>
          </div>
        ))}
      </SC.NavigationList>
    </SC.NavigationBar>
  );
};
export default NavigationBar;

NavigationBar.propTypes = {
  topicItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  setView: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  setTopic: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
};
