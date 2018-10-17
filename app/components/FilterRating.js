import React from 'react';
import Proptypes from 'prop-types';
import FilterRatingItem from './FilterRatingItem';

const FilterRating = (props) => {
	const ratingArray = [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10 ];
	return (
		<div className="filter-rating">
			<h3 className="filter-rating__title">Filter by rating</h3>
			<select defaultValue="3" onChange={props.handleChangeRatings}>
				{ratingArray.map((item, index) => <FilterRatingItem value={item} key={index} />)}
			</select>
		</div>
	);
};

FilterRating.propTypes = {
	handleChangeRatings: Proptypes.func
};

export default FilterRating;
