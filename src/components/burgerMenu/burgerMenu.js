/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import './burgerMenu.css';

export default function BurgerMenu({ setNavOpen, navOpen }) {
  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <SC.MenuContainer id="container">
      <div
        onClick={handleClick}
        id="burger"
        className={navOpen ? 'active' : ''}
        role="button"
      >
        <div className="bun top" />
        <div className="bun bottom" />
      </div>
    </SC.MenuContainer>
  );
}

BurgerMenu.propTypes = {
  setNavOpen: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired,
};
