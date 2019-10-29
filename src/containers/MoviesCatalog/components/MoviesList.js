import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import styles from './MovieList.module.css';
import Movie from './Movie';

const MoviesList = ({ movies, onMovieClick }) => (
  <Slider arrows={false} infinite speed={500} slidesToShow={2} slidesToScroll={2}>
    {movies.map((movie, i) => (
      <div key={i} className={styles.container}>
        <Movie title={movie.title} image={movie.image_small} onClick={onMovieClick} movieId={movie.id} />
      </div>
    ))}
  </Slider>
);

MoviesList.propTypes = {
  movies: PropTypes.array,
  onMovieClick: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};

export default MoviesList;
