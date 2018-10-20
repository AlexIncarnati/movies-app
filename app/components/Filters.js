import React from 'react';
import Proptypes from 'prop-types';
import FilterList from './FilterList';
import FilterRating from './FilterRating';

const Filters = props => {
  const { genres, handleChangeFilter, handleChangeRatings, toggleAllGenreFilters, resetAllGenreFilters } = props;

  return (
    <div className="filters">
      <FilterList
        genres={genres}
        handleChangeFilter={handleChangeFilter}
        toggleAllGenreFilters={toggleAllGenreFilters}
        resetAllGenreFilters={resetAllGenreFilters}
      />
      <FilterRating handleChangeRatings={handleChangeRatings} />
    </div>
  );
};

Filters.propTypes = {
  genres: Proptypes.array,
  handleChangeFilter: Proptypes.func.isRequired,
  toggleAllGenreFilters: Proptypes.func.isRequired,
  resetAllGenreFilters: Proptypes.func.isRequired,
  handleChangeRatings: Proptypes.func.isRequired,
};

export default Filters;
