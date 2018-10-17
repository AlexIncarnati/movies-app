import React from 'react';
import Proptypes from 'prop-types';

const FilterItem = (props) => {
	const genre = props.genre.name;
	const genreId = props.genre.id;
	const checked = props.genre.visible;

	return (
		<div className="filter-genres__item pretty p-default p-curve p-thick p-smooth">
			<input
				type="checkbox"
				className="filter-genres__checkbox"
				defaultValue={genre}
				name={genre}
				id={genreId}
				defaultChecked={checked}
				onClick={props.handleChangeFilter}
			/>
			<div className="state p-danger-o">
				<label htmlFor={genre} className="filter-genres__checkbox-label">
					{genre}
				</label>
			</div>
		</div>
	);
};

FilterItem.propTypes = {
	genre: Proptypes.object,
	genreId: Proptypes.string,
	checked: Proptypes.bool
};

export default FilterItem;
