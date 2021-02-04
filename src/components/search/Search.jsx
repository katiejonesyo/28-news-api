import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <form style={{ 
        textAlign: 'center'
        }}>
        <input onChange={handleSearch} placeholder='Search..'/>
      </form>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};



