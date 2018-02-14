// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MoviesShow';

const MoviesPage = ({ match, movies }) => {
  return (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>
  )
}
// when the link gets clicked /movies/:id from MoviesList.js
// it triggers the <Route path /> component, and loads up the MovieShow component

// when the route is exactly match.url, (in this case 3000/movies)
// render Please select... etc.etc...
// one of the props that I assume gets inherited from react-redux via
// is called match:
// it shows the exact true url you're on if you go match.url

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
