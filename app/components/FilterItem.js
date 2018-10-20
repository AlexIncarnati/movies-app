import React from 'react';
import Proptypes from 'prop-types';

const FilterItem = props => {
  const { genre, id, visible, handleChangeFilter } = props;

  return (
    <div className="filter-genres__item pretty p-default p-curve p-thick p-smooth">
      <input
        type="checkbox"
        className="filter-genres__checkbox"
        defaultValue={genre}
        genre={genre}
        id={id}
        checked={visible}
        onChange={handleChangeFilter}
      />
      <div className="state p-danger-o">
        <label htmlFor={id} className="filter-genres__checkbox-label">
          {genre}
        </label>
      </div>
    </div>
  );
};

FilterItem.propTypes = {
  genre: Proptypes.string,
  id: Proptypes.number,
  visible: Proptypes.bool,
  handleChangeFilter: Proptypes.func,
};

export default FilterItem;
