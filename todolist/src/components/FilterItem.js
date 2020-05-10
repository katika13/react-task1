import React, {Component} from 'react';

import './FilterItem.scss'

export default class FilterItem extends Component {
	constructor(props){
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'done', label: 'Готово'},
			{name: 'todo', label: 'Сделать'},
		]
	}

	render(){
		const buttons = this.buttons.map(({name, label}) => {
			const {filter, onFilterSelect} = this.props;
			const active = filter === name;
			const status = active ? "checked" : ''
			return (
				<label key={name} id={name}>
					<input
						type="radio"
						checked={status}
						name={name}
						onClick={()=> onFilterSelect(name)} />
					<span>{label}</span>
				</label>
			)
		});
		return (
	        <div className="filter-items">
	               {buttons}
	        </div>
		)
	}
}
