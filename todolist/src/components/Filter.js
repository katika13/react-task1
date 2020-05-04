import React, { Component } from 'react';
import FilterItem from './FilterItem';

class Filter extends Component {
	render () {
		return (
			<div className="Filter">
	            <FilterItem />
				<FilterItem />
				<FilterItem />
	        </div>
		)
	}
}

export default Filter
