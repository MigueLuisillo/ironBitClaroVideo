import React from 'react';
import PropTypes from 'prop-types';

const SearchMovie = ({ onChange }) => (
  <div>
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

SearchMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};

SearchMovie.defaultProps = {

};

export default SearchMovie;
