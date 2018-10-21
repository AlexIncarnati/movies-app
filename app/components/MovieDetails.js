import React, { Component } from 'react';
import Proptypes from 'prop-types';
import displayplaceholderImage from '../images/placeholder.png';

const MovieDetails = props => {
  const {
    movie: { vote_average, vote_count, title, poster_path, overview, release_date },
  } = props;

  console.log(props);
  const { detailsOpened, genres, toggleClass } = props;
  const movieDbImagePath = 'https://image.tmdb.org/t/p/w500/';
  const posterPath = poster_path ? `${movieDbImagePath}${poster_path}` : displayplaceholderImage;

  return (
    <div className={detailsOpened ? 'movie-details-overlay movie-details-overlay--opened' : 'movie-details-overlay'}>
      <div className="movie-details">
        <button
          type="button"
          className={detailsOpened ? 'close-overlay close-overlay--opened' : 'close-overlay'}
          onClick={toggleClass}
        >
          X
        </button>
        <div className="movie-details__image">
          <img src={posterPath} alt={title} />
        </div>
        <div className="movie-details__wrapper">
          <h2 className="movie-details__title">{title}</h2>
          <p className="movie-details__genre">
            <span>Genre</span> {genres}
          </p>
          <p className="movie-details__rating">
            <span>Rating</span> {vote_average}
          </p>
          <p className="movie-details__popularity">
            <span>Rated by</span> {vote_count} users
          </p>
          <p className="movie-details__popularity">
            <span>Description</span> {overview}
          </p>
          <p className="movie-details__popularity">
            <span>Release date</span> {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  genres: Proptypes.string,
};

export default MovieDetails;
