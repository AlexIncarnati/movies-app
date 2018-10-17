import React from 'react';
import Proptypes from 'prop-types';

const MovieItem = (props) => {
	const { vote_average, title, genre_ids, poster_path, popularity } = props.movie;
	const genresArray = props.genres;
	const genres = genresArray.join(', ');
	const movieDbImagePath = 'https://image.tmdb.org/t/p/w500/';
	let posterPath = poster_path ? `${movieDbImagePath}${poster_path}` : `${displayplaceholderImage}`;
	const visible = props.genresVisibles.every((item) => item === true);

	if (visible) {
		return (
			<div className="movie-item">
				<img src={`${posterPath}`} alt={title} />
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
};

MovieItem.propTypes = {
	title: Proptypes.string,
	vote_average: Proptypes.string,
	checked: Proptypes.bool,
	genre_ids: Proptypes.array,
	poster_path: Proptypes.string,
	popularity: Proptypes.number
};

export default MovieItem;
