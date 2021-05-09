import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';
import './burgerMenu.css';

const BurgerMenu = ({ setNavOpen, navOpen }) => {
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
        tabIndex="0"
        onKeyPress={handleClick}
      >
        <div className="bun top" />
        <div className="bun bottom" />
      </div>
    </SC.MenuContainer>
  );
};
export default BurgerMenu;

BurgerMenu.propTypes = {
  setNavOpen: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired,
};
