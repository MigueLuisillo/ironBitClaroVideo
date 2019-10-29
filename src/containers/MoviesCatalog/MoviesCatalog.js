import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from './MoviesCatalog.ducks';
import { splitMoviesInChunksOfSize } from '../../helpers/movies';
import MoviesList from './components/MoviesList';
import SearchMovie from './components/SearchMovie';
import history from '../../history';

class MoviesCatalog extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchMovie = this.onChangeSearchMovie.bind(this);
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  handleMovieDetail(movieId) {
    history.push(`/movie/${movieId}`);
  }

  onChangeSearchMovie(text) {
    const { filterMovies } = this.props;
    filterMovies(text);
  }

  render({ filteredMovies } = this.props) {
    return (
      <div>
        <SearchMovie onChange={this.onChangeSearchMovie} />
        {splitMoviesInChunksOfSize(filteredMovies, 10).map((moviesChunk) =>
          <MoviesList movies={moviesChunk} onMovieClick={this.handleMovieDetail} />
        )}
      </div>
    );
  }
}

MoviesCatalog.propTypes = {
  movies: PropTypes.array,
  fetchMovies: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ moviesCatalog }) => ({
  filteredMovies: moviesCatalog.filteredMovies,
  movies: moviesCatalog.movies,
});

export default connect(mapStateToProps, actions)(MoviesCatalog)
