import React, { Component } from 'react';

import './ToDoListItem.scss'

export default class PostListItem extends Component {
	onChecked(e){
		e.preventDefault();
	}
	render() {
		const {label, onDelete, onToggleFinished, finished} = this.props;
		let status = finished ? "checked" : "";
		let className = "todo-list-item__label";

		if(finished) {
			className += " checked"
		}


		return (
			<div className={className}>
				<label>
					<input
						type="checkbox"
						onClick={onToggleFinished}
						checked={status}/>
					{label}
				</label>
					<button className="btn-trash btn-sm float-right"
						type="button"
						onClick={onDelete} >
						<i className="fa  fa-trash-o"></i>
					</button>
			</div>
		)
	}
};
