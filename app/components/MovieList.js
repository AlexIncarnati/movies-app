import React from 'react';
import Proptypes from 'prop-types';
import MovieItem from './MovieItem';

const MovieList = props => {
  // Restructure data by returning an array of objects with only the properties we need
  let { movies } = props;
  movies = movies.map(movie => {
    const movieItem = movie;
    const { vote_average, title, genre_ids, poster_path, popularity } = movieItem;
    return {
      vote_average,
      title,
      genre_ids,
      poster_path,
      popularity,
    };
  });

  movies = movies.sort((a, b) => b.popularity - a.popularity);

  const { genres } = props;

  // Map array by genre ids only
  const genresList = movies.map(movie => movie.genre_ids);
  // Clone array
  const genresVisibles = JSON.parse(JSON.stringify(genresList));
  // Replace all genreIds with genreNames into other array
  genresVisibles.forEach((movieIdArray, index) => {
    movieIdArray.forEach((movieIdItem, i) => {
      genres.forEach(genresItem => {
        if (movieIdItem === genresItem.id) {
          // Use splice to replace genre id with genre visibility
          genresVisibles[index].splice(i, 1, genresItem.visible);
        }
      });
    });
  });
  // console.log(genresList, genresVisibles);

  // Clone array
  const genresId = JSON.parse(JSON.stringify(genresList));
  // Replace all genreIds with genreNames into other array
  genresId.forEach((movieIdArray, index) => {
    movieIdArray.forEach((movieIdItem, i) => {
      genres.forEach(genresItem => {
        if (movieIdItem === genresItem.id) {
          // Use splice to replace genre id with matching genre name
          genresId[index].splice(i, 1, genresItem.name);
        }
      });
    });
  });

  const genresValues = genresId;

  return (
    <ul className="movie-list">
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} genres={genresValues[index]} genresVisibles={genresVisibles[index]} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: Proptypes.array,
};

export default MovieList;
