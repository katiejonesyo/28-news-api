import React from 'react';
import Search from '../search/Search';
import PropTypes from 'prop-types';

const Header = ({ handleSearch }) => {
  return (
    <header
      style={{
        height: '120px',
        border: '3px solid black',
        color: 'white',
        background: 'black',
        fontFamily: 'fantasy',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Search Articles</h1>
      <Search handleSearch={handleSearch} />
    </header>

  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Header;


