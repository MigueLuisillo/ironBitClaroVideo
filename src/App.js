import React from 'react';
import { Router, Route } from 'react-router-dom';
import MoviesCatalog from './containers/MoviesCatalog';
import MoviesDetail from './containers/MoviesDetail';
import history from './history';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={MoviesCatalog} />
        <Route exact path="/movie/:id" component={MoviesDetail} />
      </div>
    </Router>
  );
}

export default App;
