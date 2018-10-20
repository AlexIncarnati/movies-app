import React from 'react';

const FilterRatingItem = props => {
  const { value } = props;
  return <option value={value}>{value}</option>;
};

export default FilterRatingItem;
