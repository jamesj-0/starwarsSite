import React from 'react';
import * as SC from '../../styles/styledComponents';

export default function BurgerMenu() {
  return (
    <SC.MenuContainer id="container">
      <div id="burger">
        <div className="bun top" />
        <div className="bun bottom" />
      </div>
    </SC.MenuContainer>
  );
}
