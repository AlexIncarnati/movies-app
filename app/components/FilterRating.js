import React from 'react';
import Proptypes from 'prop-types';

const FilterRating = (props) => {
	return (
		<select onChange={props.handleChangeRatings}>
			<option defaultValue="1">1</option>
			<option defaultValue="2">2</option>
			<option defaultValue="3">3</option>
			<option defaultValue="4">4</option>
			<option defaultValue="5">5</option>
			<option defaultValue="6">6</option>
			<option defaultValue="7">7</option>
			<option defaultValue="8">8</option>
			<option defaultValue="9">9</option>
			<option defaultValue="10">10</option>
		</select>
	);
};

FilterRating.propTypes = {
	handleChangeRatings: Proptypes.func
};

export default FilterRating;
