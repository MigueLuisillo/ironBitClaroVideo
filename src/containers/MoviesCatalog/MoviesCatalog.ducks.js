/* eslint no-use-before-define: 0 */
import axios from 'axios';
import { apiBaseUrl } from '../../config/api';

// Actions
const FETCH_MOVIES = 'cv/FETCH_MOVIES';
const FETCH_MOVIES_FAIL = 'cv/FETCH_MOVIES_FAIL';
const FETCH_MOVIES_SUCCESS = 'cv/FETCH_MOVIES_SUCCESS';
const FILTER_MOVIES = 'cv/FILTER_MOVIES';
const FILTER_MOVIES_SUCCESS = 'cv/FILTER_MOVIES_SUCCESS';

const initialState = {
  movies: [],
  filteredMovies: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS: {
      const { movies } = action.payload;
      return {
        ...state,
        movies,
        filteredMovies: movies,
      };
    }
    case FILTER_MOVIES_SUCCESS: {
      const { filteredMovies } = action.payload;
      return {
        ...state,
        filteredMovies,
      };
    }
    default: return state;
  }
};

// Action Creators

const filterMovies = (payload) => async (dispatch, getState) => {
  dispatch({ type: FILTER_MOVIES, payload });
  const { movies } = getState().moviesCatalog;
  const filteredMovies = movies.filter((movie) => movie.title.includes(payload));
  if (filteredMovies.length > 0) {
    dispatch(filterMoviesSuccess({ filteredMovies }));
  }
};

const fetchMovies = (payload) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES, payload });
  const response = await axios.get(`${apiBaseUrl}/services//content//list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52`);
  dispatch(fetchMoviesSuccess({ movies: response.data.response.groups, filteredMovies: response.data.response.groups }));
};
const fetchMoviesSuccess = (payload) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_SUCCESS, payload });
};
const filterMoviesSuccess = (payload) => (dispatch) => {
  dispatch({ type: FILTER_MOVIES_SUCCESS, payload });
};
const fetchMoviesFail = (payload) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_FAIL, payload });
};

export default reducer;
export {
  // Actions
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  FILTER_MOVIES,

  // Action Creators
  fetchMovies,
  fetchMoviesFail,
  fetchMoviesSuccess,
  filterMovies,
};
