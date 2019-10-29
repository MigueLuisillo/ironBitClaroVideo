import React from 'react';
import PropTypes from 'prop-types';

import styles from './Movie.module.css';

const Movie = ({ image, title, onClick, movieId }) => (
  <div className={styles.Movie} onClick={() => {onClick(movieId) }}>
    <img alt="Movie image" src={image} />
    <h1 className={styles.Title}>{title}</h1>
  </div>
);

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Movie;
