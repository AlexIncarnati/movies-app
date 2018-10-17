import React from 'react';
import Proptypes from 'prop-types';

const FilterItem = (props) => {
	const genre = props.genre.name;
	const genreId = props.genre.id;
	const checked = props.genre.visible;

	return (
		<div>
			<input
				type="checkbox"
				defaultValue={genre}
				name={genre}
				id={genreId}
				defaultChecked={checked}
				onClick={props.handleChangeFilter}
			/>
			<label htmlFor={genre}> {genre}</label>
		</div>
	);
};

FilterItem.propTypes = {
	genre: Proptypes.object,
	genreId: Proptypes.string,
	checked: Proptypes.bool
};

export default FilterItem;
