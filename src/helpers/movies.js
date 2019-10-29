/* eslint-disable import/prefer-default-export */

export const splitMoviesInChunksOfSize = (movies, chunkSize) => {
  if (!movies.length) {
    return [];
  }
  return [
    movies.slice(0, chunkSize),
    ...splitMoviesInChunksOfSize(movies.slice(chunkSize), chunkSize),
  ];
};
