import React from 'react';
import Proptypes from 'prop-types';
import displayplaceholderImage from '../images/placeholder.png';

const MovieItem = props => {
  const {
    movie: { vote_average, title, poster_path, popularity },
  } = props;
  const { movie } = props;
  let { genres, genresVisibles } = props;
  genres = genres.join(', ');
  const movieDbImagePath = 'https://image.tmdb.org/t/p/w500/';
  const posterPath = poster_path ? `${movieDbImagePath}${poster_path}` : displayplaceholderImage;
  genresVisibles = genresVisibles.every(item => item === true);

  if (genresVisibles) {
    return (
      <div className="movie-item">
        <img src={posterPath} alt={title} />
        <div className="movie-item__wrapper">
          <h5 className="movie-item__title">{title}</h5>
          <p className="movie-item__genre">
            <span>Genre</span> {genres}
          </p>
          <p className="movie-item__rating">
            <span>Rating</span> {vote_average}
          </p>
          <p className="movie-item__popularity">
            <span>Popularity</span> {popularity}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

MovieItem.propTypes = {
  movie: Proptypes.object,
  genres: Proptypes.array,
  genresVisibles: Proptypes.array,
};

export default MovieItem;
