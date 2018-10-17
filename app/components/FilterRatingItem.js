import React from 'react';

const FilterRatingItem = (props) => {
	const value = props.value;
	return <option value={value}>{value}</option>;
};

export default FilterRatingItem;
