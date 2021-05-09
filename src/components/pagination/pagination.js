import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../../styles/styledComponents';

const Pagination = ({ pageNumber, setPageNumber, setUrl, topic: page }) => {
  const handleClick = (e) => {
    let number = pageNumber;
    number =
      e.target.getAttribute('value') === '-' ? (number -= 1) : (number += 1);
    number = number <= 1 ? 1 : number; // prevents the number dropping below 1

    number = page === 'films' ? 1 : number;

    // janky fixes to stop page navigation
    /* improvement find the max page number from the entries number from the api call */

    if (page === 'people' && pageNumber === 9) number = 9;

    if (page === 'planets' && pageNumber === 6) number = 6;

    if (page === 'species' && pageNumber === 4) number = 4;

    if (page === 'vehicles' && pageNumber === 4) number = 4;

    if (page === 'starships' && pageNumber === 4) number = 4;

    setPageNumber(number);
    setUrl(`https://swapi.dev/api/${page}/?page=${number}`);
  };

  return (
    <SC.PaginationContainer>
      <div>
        <span
          onClick={handleClick}
          role="button"
          value="-"
          className={pageNumber === 1 ? 'disabled' : ''}
          onKeyPress={handleClick}
          tabIndex="0"
        >
          previous
        </span>
        <span>/</span>

        <span
          onClick={handleClick}
          role="button"
          onKeyPress={handleClick}
          tabIndex="0"
          value="+"
          className={
            page === 'films' ||
            (page === 'people' && pageNumber === 9) ||
            (page === 'planets' && pageNumber === 6) ||
            (page === 'species' && pageNumber === 4) ||
            (page === 'vehicles' && pageNumber === 4) ||
            (page === 'starships' && pageNumber === 4)
              ? 'disabled'
              : ''
          }
        >
          next
        </span>
      </div>
    </SC.PaginationContainer>
  );
};

export default Pagination;

Pagination.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
