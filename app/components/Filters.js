import React from 'react';
import Proptypes from 'prop-types';
import FilterList from './FilterList';
import FilterRating from './FilterRating';

const Filters = (props) => {
	return (
		<div className="filters">
			<FilterList
				genres={props.genres}
				handleChangeFilter={props.handleChangeFilter}
				toggleAllGenreFilters={props.toggleAllGenreFilters}
				resetAllGenreFilters={props.resetAllGenreFilters}
			/>
			<FilterRating handleChangeRatings={props.handleChangeRatings} />
		</div>
	);
};

Filters.propTypes = {
	genres: Proptypes.array,
	handleChangeFilter: Proptypes.func,
	toggleAllGenreFilters: Proptypes.func,
	resetAllGenreFilters: Proptypes.func,
	handleChangeRatings: Proptypes.func
};

export default Filters;
