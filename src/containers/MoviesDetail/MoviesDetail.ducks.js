/* eslint no-use-before-define: 0 */
import axios from 'axios';
import { apiBaseUrl } from '../../config/api';

// Actions
const FETCH_MOVIES_DETAIL = 'cv/FETCH_MOVIES_DETAIL';
const FETCH_MOVIES_DETAIL_FAIL = 'cv/FETCH_MOVIES_DETAIL_FAIL';
const FETCH_MOVIES_DETAIL_SUCCESS = 'cv/FETCH_MOVIES_DETAIL_SUCCESS';

const initialState = {
  moviesDetail: {media: {originaltitle:'Loading'}},
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_DETAIL_SUCCESS: {
      const { moviesDetail } = action.payload;
      return {
        moviesDetail,
      };
    }
    default: return state;
  }
};

// Action Creators

const fetchMoviesDetail = (payload) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_DETAIL, payload });
  const { id } = payload;
  const response = await axios.get(`${apiBaseUrl}/services/content/data?device_id=web&device_category=web&device_model=web&device_type=%20web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS%20=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`);
  dispatch(fetchMoviesDetailSuccess({ moviesDetail: response.data.response.group.common }));
};
const fetchMoviesDetailSuccess = (payload) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_DETAIL_SUCCESS, payload });
};
const fetchMoviesDetailFail = (payload) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_DETAIL_FAIL, payload });
};

export default reducer;
export {
  // Actions
  FETCH_MOVIES_DETAIL,
  FETCH_MOVIES_DETAIL_FAIL,
  FETCH_MOVIES_DETAIL_SUCCESS,

  // Action Creators
  fetchMoviesDetail,
  fetchMoviesDetailFail,
  fetchMoviesDetailSuccess,
};
