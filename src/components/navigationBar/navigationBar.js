/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from '../burgerMenu/burgerMenu';
import * as SC from '../../styles/styledComponents';

export default function NavigationBar({ topicItems }) {
  const [page, setPage] = React.useState('planets');
  const [navOpen, setNavOpen] = React.useState(false);

  const clickHandler = (e) => setPage(e.target.getAttribute('value'));

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
          >
            <SC.HighlightedSpan
              key={`listItem-highlighted-${topic}`}
              highlighted={topic.toLowerCase() === page}
            />
            <SC.NavigationItem
              highlighted={topic.toLowerCase() === page}
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
}

NavigationBar.propTypes = {
  topicItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
