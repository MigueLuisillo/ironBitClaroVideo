import { combineReducers } from 'redux';

// ducks pattern
import moviesCatalog from '../containers/MoviesCatalog/MoviesCatalog.ducks';
import moviesDetail from '../containers/MoviesDetail/MoviesDetail.ducks';


export default combineReducers({
  moviesCatalog,
  moviesDetail,
});
