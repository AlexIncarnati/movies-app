import React, { Component } from 'react';
import FilterItem from './FilterItem';
import Proptypes from 'prop-types';

class FilterList extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: this.props.visible };
	}
	render() {
		return (
			<div className="filter-genres">
				<h3 className="filter-genres__title">Filter by genre</h3>
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
