import React from 'react';
import Proptypes from 'prop-types';
import FilterItem from './FilterItem';

const FilterList = props => {
  const { handleChangeFilter, toggleAllGenreFilters, resetAllGenreFilters, genres } = props;

  return (
    <div className="filter-genres">
      <h3 className="filter-genres__title">Filter by genre</h3>
      <button type="button" className="filter-genres__btn--toggle" onClick={toggleAllGenreFilters}>
        Toggle All
      </button>
      <button type="button" className="filter-genres__btn--reset" onClick={resetAllGenreFilters}>
        Reset All
      </button>
      <div className="filter-genres__menu">
        {genres
          ? genres.map((genre, index) => (
              <FilterItem
                key={index}
                genre={genre.name}
                id={genre.id}
                handleChangeFilter={handleChangeFilter}
                visible={genre.visible}
                checked={genre.visible}
              />
            ))
          : ''}
      </div>
    </div>
  );
};

FilterList.propTypes = {
  resetAllGenreFilters: Proptypes.func,
  toggleAllGenreFilters: Proptypes.func,
  handleChangeFilter: Proptypes.func,
};

export default FilterList;
