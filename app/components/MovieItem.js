import React, { Component } from 'react';
import Proptypes from 'prop-types';
import displayplaceholderImage from '../images/placeholder.png';
import MovieDetails from './MovieDetails';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsOpened: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  stopBodyScroll(detailsOpened) {
    if (!('ontouchstart' in window && window.screen.availWidth < 768)) {
      this.detailsOpened = this.state;
      if (!detailsOpened) {
        document.body.classList.add('stop-scroll');
      } else {
        document.body.classList.remove('stop-scroll');
      }
    }
  }

  toggleClass() {
    const { detailsOpened } = this.state;
    this.setState({ detailsOpened: !detailsOpened }, () => this.stopBodyScroll(detailsOpened));
  }

  render() {
    const { movie } = this.props;
    const {
      movie: { vote_average, title, poster_path, popularity },
    } = this.props;
    let { genres, genresVisibles } = this.props;
    genres = genres.join(', ');
    const movieDbImagePath = 'https://image.tmdb.org/t/p/w500/';
    const posterPath = poster_path ? `${movieDbImagePath}${poster_path}` : displayplaceholderImage;
    genresVisibles = genresVisibles.every(item => item === true);
    const { detailsOpened } = this.state;

    if (genresVisibles) {
      return (
        <div className="movie-item">
          <MovieDetails
            className={detailsOpened ? 'movie-details movie-details--opened' : 'movie-details'}
            movie={movie}
            genres={genres}
            detailsOpened={detailsOpened}
            toggleClass={this.toggleClass}
          />
          <button type="button" className="movie-details-link" onClick={this.toggleClass}>
            <img src={posterPath} alt={title} />
          </button>
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
  }
}

MovieItem.propTypes = {
  movie: Proptypes.object,
  genres: Proptypes.array,
  genresVisibles: Proptypes.array,
};

export default MovieItem;
