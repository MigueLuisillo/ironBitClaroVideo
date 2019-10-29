import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../history';
import styles from './MoviesDetail.module.css';

import * as actions from './MoviesDetail.ducks';

class MoviesDetail extends Component {
  componentDidMount() {
    const { fetchMoviesDetail, match } = this.props;
    fetchMoviesDetail(match.params);
  }

  render({ moviesDetail } = this.props) {
    return (
      <div>
        <div className={styles.goBack}>
          <button onClick={() => {  history.goBack(); }} >Regresar</button>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.movieTitle}>{moviesDetail.title}</h1>
        </div>
        <div styles={styles.detailWrapper}>
          <img className={styles.movieImage} alt="movieImage" src={moviesDetail.image_medium} />
          <p className={styles.movieDescription}>{moviesDetail.large_description}</p>
        </div>
      </div>
    );
  }
}

MoviesDetail.propTypes = {
  moviesDetail: PropTypes.object.isRequired,
  fetchMoviesDetail: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ moviesDetail }) => ({
  moviesDetail: moviesDetail.moviesDetail,
});

export default withRouter(connect(mapStateToProps, actions)(MoviesDetail));
