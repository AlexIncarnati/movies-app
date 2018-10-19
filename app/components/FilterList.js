import React, { Component } from 'react';
import FilterItem from './FilterItem';
import Proptypes from 'prop-types';

class FilterList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="filter-genres">
				<h3 className="filter-genres__title">Filter by genre</h3>
				<button className="filter-genres__btn--toggle" onClick={this.props.toggleAllGenreFilters}>
					Toggle All
				</button>
				<button className="filter-genres__btn--reset" onClick={this.props.resetAllGenreFilters}>
					Reset All
				</button>
				<div className="filter-genres__menu">
					{this.props.genres ? (
						this.props.genres.map((genre, index) => (
							<FilterItem
								key={index}
								genre={genre}
								handleChangeFilter={this.props.handleChangeFilter}
								visible={genre.visible}
								checked={genre.visible}
							/>
						))
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

FilterList.propTypes = {
	genre: Proptypes.object,
	handleChangeFilter: Proptypes.func,
	checked: Proptypes.bool,
	visible: Proptypes.bool
};

export default FilterList;
