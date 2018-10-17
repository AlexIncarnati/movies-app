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
				<p>Title {title}</p>
				<p>Genre {genres}</p>
				<p>Rating {vote_average}</p>
				<p>Popularity {popularity}</p>
				<p>Image {poster_path}</p>
				<img src={`${posterPath}`} alt={title} />
			</div>
		);
	} else {
		return null;
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
