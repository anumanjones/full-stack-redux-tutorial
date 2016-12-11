function addMovie(currentState, movie) {
  return currentState.update('movies', movies => movies.push(movie));
}
